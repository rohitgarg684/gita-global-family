"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  RotateCcw,
  Home,
  Languages,
} from "lucide-react";
import { scenes, totalDurationMs, type Scene } from "./scenes";

type Status = "idle" | "playing" | "paused" | "ended";
type SubMode = "both" | "hi" | "en" | "off";

const TRANSITION_MS = 600;

function fmtTime(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

const DIGIT_TO_HINDI: Record<string, string> = {
  "0": "शून्य",
  "1": "एक",
  "2": "दो",
  "3": "तीन",
  "4": "चार",
  "5": "पाँच",
  "6": "छह",
  "7": "सात",
  "8": "आठ",
  "9": "नौ",
};

/**
 * Sanitize a Devanagari subtitle string for Hindi TTS:
 * - replace ASCII digits with their Hindi words (TTS often reads them in English)
 * - strip the smart quotes that some engines pronounce literally
 * - collapse repeated whitespace
 * Used only as a fallback when a scene has no explicit `hiSpeak` override.
 */
function sanitizeForTTS(text: string): string {
  return text
    .replace(/[0-9]/g, (d) => ` ${DIGIT_TO_HINDI[d] ?? d} `)
    .replace(/[“”„"]/g, "")
    .replace(/—/g, ",")
    .replace(/\s+/g, " ")
    .trim();
}

export default function VideoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [elapsedInScene, setElapsedInScene] = useState(0);
  const [muted, setMuted] = useState(false);
  const [subMode, setSubMode] = useState<SubMode>("both");
  const [hiVoiceAvailable, setHiVoiceAvailable] = useState<boolean | null>(
    null,
  );

  const rafRef = useRef<number | null>(null);
  const sceneStartRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);
  const speakingForSceneRef = useRef<number>(-1);
  const hiVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  const scene: Scene = scenes[sceneIndex];

  // ---- Detect Hindi voice availability (subscribe to voices list) ----
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const pick = () => {
      const voices = window.speechSynthesis.getVoices();
      const hi =
        voices.find((v) => v.lang?.toLowerCase().startsWith("hi")) ||
        voices.find((v) => /hindi/i.test(v.name));
      hiVoiceRef.current = hi || null;
      setHiVoiceAvailable(Boolean(hi));
    };
    pick();
    window.speechSynthesis.onvoiceschanged = pick;
    // Voices often arrive async; re-poll briefly.
    const t = window.setTimeout(pick, 600);
    return () => {
      window.clearTimeout(t);
      if (window.speechSynthesis)
        window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // ---- Speak helper ----
  const speak = useCallback(
    (text: string, durationMs: number) => {
      if (muted) return;
      if (typeof window === "undefined" || !("speechSynthesis" in window))
        return;
      try {
        window.speechSynthesis.cancel();
      } catch {}
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "hi-IN";
      if (hiVoiceRef.current) u.voice = hiVoiceRef.current;
      // Tune rate so the line roughly fits the scene window.
      // Hindi TTS reads ~3.0 chars/sec at rate 1.0.
      const targetSec = (durationMs - 400) / 1000;
      const estSec = text.length / 11; // empirical for hi-IN
      const rate = Math.max(0.75, Math.min(1.25, estSec / targetSec));
      u.rate = rate;
      u.pitch = 1.0;
      u.volume = 1.0;
      window.speechSynthesis.speak(u);
    },
    [muted],
  );

  // ---- Master tick ----
  useEffect(() => {
    if (status !== "playing") return;
    sceneStartRef.current = performance.now() - elapsedInScene;

    const tick = () => {
      const now = performance.now();
      const e = now - sceneStartRef.current;
      setElapsedInScene(e);
      if (e >= scene.durationMs) {
        if (sceneIndex >= scenes.length - 1) {
          setStatus("ended");
          setElapsedInScene(scene.durationMs);
          try {
            window.speechSynthesis.cancel();
          } catch {}
          return;
        }
        setSceneIndex((i) => i + 1);
        setElapsedInScene(0);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Speak this scene exactly once when it starts.
    if (speakingForSceneRef.current !== sceneIndex) {
      speakingForSceneRef.current = sceneIndex;
      const spoken = scene.hiSpeak ?? sanitizeForTTS(scene.hi);
      speak(spoken, scene.durationMs);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, sceneIndex]);

  // ---- Controls ----
  const start = () => {
    setSceneIndex(0);
    setElapsedInScene(0);
    speakingForSceneRef.current = -1;
    setStatus("playing");
  };

  const togglePlay = () => {
    if (status === "ended") {
      start();
      return;
    }
    if (status === "playing") {
      pausedAtRef.current = elapsedInScene;
      setStatus("paused");
      try {
        window.speechSynthesis.pause();
      } catch {}
    } else if (status === "paused") {
      setStatus("playing");
      try {
        window.speechSynthesis.resume();
      } catch {}
    } else {
      start();
    }
  };

  const next = () => {
    try {
      window.speechSynthesis.cancel();
    } catch {}
    speakingForSceneRef.current = -1;
    if (sceneIndex >= scenes.length - 1) {
      setStatus("ended");
      return;
    }
    setSceneIndex((i) => i + 1);
    setElapsedInScene(0);
  };

  const prev = () => {
    try {
      window.speechSynthesis.cancel();
    } catch {}
    speakingForSceneRef.current = -1;
    if (elapsedInScene > 1500 || sceneIndex === 0) {
      setElapsedInScene(0);
      return;
    }
    setSceneIndex((i) => Math.max(0, i - 1));
    setElapsedInScene(0);
  };

  const restart = () => {
    try {
      window.speechSynthesis.cancel();
    } catch {}
    speakingForSceneRef.current = -1;
    start();
  };

  const toggleMute = () => {
    setMuted((m) => {
      const nm = !m;
      try {
        if (nm) window.speechSynthesis.cancel();
        else if (status === "playing")
          speak(scene.hiSpeak ?? sanitizeForTTS(scene.hi), scene.durationMs);
      } catch {}
      return nm;
    });
  };

  // Stop speech on unmount
  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "m") toggleMute();
      else if (e.key.toLowerCase() === "r") restart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, sceneIndex, elapsedInScene, muted]);

  // Total elapsed across all scenes (for the master progress bar)
  const totalElapsed = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < sceneIndex; i++) sum += scenes[i].durationMs;
    return sum + elapsedInScene;
  }, [sceneIndex, elapsedInScene]);
  const totalProgress = Math.min(1, totalElapsed / totalDurationMs);

  // Subtitle fade: fade in over first 500ms, fade out last 400ms
  const subOpacity = (() => {
    const fadeIn = Math.min(1, elapsedInScene / 500);
    const fadeOut = Math.min(
      1,
      Math.max(0, (scene.durationMs - elapsedInScene) / 400),
    );
    return Math.min(fadeIn, fadeOut);
  })();

  // Chapter title only on first 1.8s of a scene that has one
  const showChapter = scene.chapter && elapsedInScene < 1800;
  const chapterOpacity = showChapter
    ? Math.min(1, elapsedInScene / 300) *
      Math.min(1, Math.max(0, (1800 - elapsedInScene) / 400))
    : 0;

  // Ken Burns transform
  const kb = scene.kenBurns ?? { fromScale: 1.0, toScale: 1.08 };
  const t = Math.min(1, elapsedInScene / scene.durationMs);
  const scale = kb.fromScale + (kb.toScale - kb.fromScale) * t;
  const tx = (kb.fromX ?? 0) + ((kb.toX ?? 0) - (kb.fromX ?? 0)) * t;
  const ty = (kb.fromY ?? 0) + ((kb.toY ?? 0) - (kb.fromY ?? 0)) * t;

  const showHi = subMode === "both" || subMode === "hi";
  const showEn = subMode === "both" || subMode === "en";

  // Lock body scroll while the immersive player is mounted.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Preload all scene images at mount so transitions feel cinematic.
  useEffect(() => {
    scenes.forEach((s) => {
      const i = new window.Image();
      i.src = s.image;
    });
  }, []);

  // Cycle background images on the idle splash so the page feels alive.
  const [splashIdx, setSplashIdx] = useState(0);
  useEffect(() => {
    if (status !== "idle") return;
    const id = window.setInterval(() => {
      setSplashIdx((i) => (i + 1) % scenes.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [status]);

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white overflow-hidden select-none">
      {/* ---- Stage ---- */}
      <div className="relative w-full h-full">
        {/* Image layers — keep prev and current for crossfade */}
        {scenes.map((s, i) => {
          const active = i === sceneIndex;
          return (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity"
              style={{
                opacity: active ? 1 : 0,
                transitionDuration: `${TRANSITION_MS}ms`,
                zIndex: active ? 1 : 0,
              }}
              aria-hidden={!active}
            >
              <div
                className="absolute inset-0 will-change-transform"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: active
                    ? `scale(${scale}) translate(${tx}%, ${ty}%)`
                    : `scale(${s.kenBurns?.fromScale ?? 1})`,
                  transition: active ? "none" : "transform 0.4s ease-out",
                }}
              />
              {/* Edge-only gradient vignettes so subtitles read while the image breathes. */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            </div>
          );
        })}

        {/* Cinematic letterbox bars (subtle, just on top/bottom) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 md:h-16 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-48 bg-gradient-to-t from-black/85 to-transparent z-10" />

        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 md:px-8 py-4">
          <Link
            href="/sanatan-seva-nidhi"
            className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Sanatan Seva Nidhi</span>
          </Link>
          <div className="text-xs md:text-sm text-white/70 tracking-wider uppercase">
            A 2-minute film
          </div>
          <button
            onClick={() => {
              const order: SubMode[] = ["both", "hi", "en", "off"];
              const next = order[(order.indexOf(subMode) + 1) % order.length];
              setSubMode(next);
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-white/85 hover:text-white border border-white/25 rounded-full px-3 py-1.5 backdrop-blur-sm transition"
            title="Toggle subtitles"
          >
            <Languages className="w-4 h-4" />
            <span className="uppercase tracking-wider">
              {subMode === "both"
                ? "हिं + EN"
                : subMode === "hi"
                  ? "हिंदी"
                  : subMode === "en"
                    ? "English"
                    : "Off"}
            </span>
          </button>
        </div>

        {/* Chapter big title */}
        {scene.chapter && (
          <div
            className="absolute inset-x-0 top-[22%] z-20 text-center pointer-events-none"
            style={{ opacity: chapterOpacity }}
          >
            <div className="text-saffron-light text-xs md:text-sm tracking-[0.35em] uppercase mb-2">
              Chapter {scene.chapter.en ? "" : ""}
            </div>
            <div className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              {scene.chapter.hi}
            </div>
            <div className="mt-2 text-lg md:text-2xl text-white/80 italic">
              {scene.chapter.en}
            </div>
          </div>
        )}

        {/* Special account-number reveal */}
        {scene.accent === "account" && (
          <div
            className="absolute inset-x-0 top-[38%] z-20 text-center pointer-events-none"
            style={{ opacity: subOpacity }}
          >
            <div className="text-saffron-light text-xs md:text-sm tracking-[0.4em] uppercase mb-3">
              Account
            </div>
            <div className="font-mono text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.15em] md:tracking-[0.2em] drop-shadow-[0_4px_25px_rgba(232,115,42,0.6)]">
              9 9 9 9 9 9 9 9 9 9 9
            </div>
          </div>
        )}

        {/* CTA */}
        {scene.accent === "cta" && (
          <div
            className="absolute inset-x-0 top-[40%] z-20 text-center pointer-events-none"
            style={{ opacity: subOpacity }}
          >
            <a
              href="https://gitaglobalfamily.org"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-block text-saffron-light text-lg md:text-3xl font-semibold tracking-wider underline-offset-8 hover:underline"
            >
              gitaglobalfamily.org
            </a>
          </div>
        )}

        {/* ---- Subtitles ---- */}
        <div
          className="absolute inset-x-0 bottom-24 md:bottom-28 z-20 px-6 md:px-16 text-center"
          style={{ opacity: subOpacity }}
        >
          {showHi && (
            <div className="font-devanagari text-2xl md:text-4xl lg:text-5xl leading-snug text-white drop-shadow-[0_3px_15px_rgba(0,0,0,0.85)] max-w-5xl mx-auto">
              {scene.hi}
            </div>
          )}
          {showEn && (
            <div className="mt-3 md:mt-4 text-base md:text-xl lg:text-2xl text-white/85 italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] max-w-4xl mx-auto">
              {scene.en}
            </div>
          )}
        </div>

        {/* ---- Bottom control bar ---- */}
        <div className="absolute inset-x-0 bottom-0 z-30 px-4 md:px-8 pb-4 md:pb-5">
          {/* Master progress: chapter ticks */}
          <div className="relative w-full h-1.5 bg-white/15 rounded-full overflow-hidden mb-3">
            <div
              className="absolute inset-y-0 left-0 bg-saffron"
              style={{ width: `${totalProgress * 100}%` }}
            />
            {scenes.slice(0, -1).map((s, i) => {
              const acc = scenes
                .slice(0, i + 1)
                .reduce((sum, x) => sum + x.durationMs, 0);
              const left = (acc / totalDurationMs) * 100;
              return (
                <div
                  key={s.id}
                  className="absolute top-0 bottom-0 w-px bg-white/40"
                  style={{ left: `${left}%` }}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-full hover:bg-white/15 transition"
                aria-label="Previous scene"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 md:p-3.5 rounded-full bg-saffron hover:bg-saffron-dark transition shadow-lg shadow-saffron/30"
                aria-label={status === "playing" ? "Pause" : "Play"}
              >
                {status === "playing" ? (
                  <Pause className="w-5 h-5 md:w-6 md:h-6" />
                ) : status === "ended" ? (
                  <RotateCcw className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
                )}
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-white/15 transition"
                aria-label="Next scene"
              >
                <SkipForward className="w-5 h-5" />
              </button>
              <button
                onClick={toggleMute}
                className="ml-1 p-2 rounded-full hover:bg-white/15 transition"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="text-xs md:text-sm text-white/70 tabular-nums">
              {fmtTime(totalElapsed)}{" "}
              <span className="text-white/40">
                / {fmtTime(totalDurationMs)}
              </span>
              <span className="ml-3 hidden md:inline text-white/40">
                Scene {sceneIndex + 1}/{scenes.length}
              </span>
            </div>
          </div>
        </div>

        {/* ---- Splash / Start overlay ---- */}
        {status === "idle" && (
          <div className="absolute inset-0 z-40 overflow-hidden">
            {/* Cycling cinematic backdrop — shows actual scene imagery */}
            {scenes.map((s, i) => (
              <div
                key={`splash-${s.id}`}
                className="absolute inset-0 transition-opacity duration-[1500ms]"
                style={{ opacity: i === splashIdx ? 1 : 0 }}
                aria-hidden
              >
                <div
                  className="absolute inset-0 splash-kenburns"
                  style={{
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            ))}

            {/* Vignette + gradient, NOT a flat dark wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 90%)",
              }}
            />

            {/* Content */}
            <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
              <div className="max-w-2xl text-center">
                <div className="text-saffron-light text-[11px] md:text-sm tracking-[0.4em] uppercase mb-4 drop-shadow">
                  Gita Global Family · Documentary
                </div>
                <h1 className="font-devanagari text-5xl md:text-7xl font-bold leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                  सनातन सेवा निधि
                </h1>
                <div className="mt-3 text-xl md:text-3xl text-white/90 italic drop-shadow">
                  The Sanatan Seva Nidhi Act
                </div>
                <p className="mt-6 text-sm md:text-lg text-white/80 leading-relaxed drop-shadow">
                  A two-minute film on one simple, transparent fund —
                  <br className="hidden md:block" />
                  to revive temples, train pujaris, and serve the helpless.
                </p>

                {hiVoiceAvailable === false && (
                  <div className="mt-6 text-xs md:text-sm text-amber-100/95 bg-amber-900/40 border border-amber-400/40 rounded-lg px-4 py-3 backdrop-blur-sm">
                    Your device has no Hindi voice installed, so the film will
                    play silently with subtitles. For audio narration, use
                    Chrome on macOS / Android, or install a Hindi system voice.
                  </div>
                )}

                <button
                  onClick={start}
                  className="mt-8 inline-flex items-center gap-3 bg-saffron hover:bg-saffron-dark transition px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg shadow-saffron/40 hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Play with sound
                </button>
                <div className="mt-4 text-[11px] md:text-xs text-white/60">
                  ~2 min · Hindi voiceover · Hindi + English subtitles
                </div>
              </div>
            </div>

            {/* Filmstrip preview at the bottom — shows users the imagery */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 md:px-8 pb-6">
              <div className="flex gap-2 overflow-x-auto no-scrollbar justify-center">
                {scenes.map((s, i) => (
                  <div
                    key={`thumb-${s.id}`}
                    className={`shrink-0 w-16 h-10 md:w-24 md:h-14 rounded-md overflow-hidden ring-1 transition ${
                      i === splashIdx
                        ? "ring-saffron scale-110"
                        : "ring-white/20 opacity-70"
                    }`}
                    style={{
                      backgroundImage: `url(${s.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </div>
            </div>

            <style jsx>{`
              .splash-kenburns {
                animation: splashKenBurns 12s ease-in-out infinite alternate;
              }
              @keyframes splashKenBurns {
                from {
                  transform: scale(1.05) translate(0, 0);
                }
                to {
                  transform: scale(1.18) translate(-1.5%, -1.5%);
                }
              }
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                scrollbar-width: none;
              }
            `}</style>
          </div>
        )}

        {/* ---- End overlay ---- */}
        {status === "ended" && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="max-w-xl text-center px-6">
              <div className="text-saffron-light text-xs md:text-sm tracking-[0.4em] uppercase mb-4">
                Thank you for watching
              </div>
              <h2 className="font-devanagari text-3xl md:text-5xl font-bold">
                सनातन सेवा निधि अधिनियम
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg">
                Read the full draft Act and join the movement.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 transition px-5 py-3 rounded-full text-sm font-semibold"
                >
                  <RotateCcw className="w-4 h-4" />
                  Watch again
                </button>
                <Link
                  href="/sanatan-seva-nidhi"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark transition px-5 py-3 rounded-full text-sm font-semibold"
                >
                  Read the full Act
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

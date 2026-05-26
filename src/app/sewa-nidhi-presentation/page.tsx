"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut as fbSignOut,
  type User,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Maximize2,
  Minimize2,
  StickyNote,
  LayoutGrid,
  X,
  LogOut,
  Home,
  Keyboard,
} from "lucide-react";
import Link from "next/link";
import { slides } from "./slides";
import { SlideView } from "./SlideView";

const ALLOWED_EMAILS = ["rohitgarg684@gmail.com", "brahmbodhi@gmail.com"];
const STORAGE_KEY = "ssn-presentation-index";

const KEYBOARD_HELP: Array<[string, string]> = [
  ["→  Space  PgDn", "Next slide"],
  ["←  PgUp", "Previous slide"],
  ["Home / End", "First / last slide"],
  ["1–9", "Jump to slide"],
  ["F", "Toggle fullscreen"],
  ["O", "Slide overview"],
  ["N", "Speaker notes"],
  ["?", "Show this help"],
  ["Esc", "Close overlay / exit fullscreen"],
];

export default function SewaNidhiPresentationPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u && ALLOWED_EMAILS.includes(u.email ?? "")) {
        setUser(u);
        setAuthError("");
      } else if (u) {
        fbSignOut(auth);
        setUser(null);
        setAuthError(
          "Access denied. This presentation is restricted to authorized accounts only.",
        );
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  // Restore last slide on sign-in (per-user via sessionStorage)
  useEffect(() => {
    if (!user || typeof window === "undefined") return;
    const raw = sessionStorage.getItem(`${STORAGE_KEY}:${user.uid}`);
    const n = raw ? parseInt(raw, 10) : NaN;
    if (Number.isFinite(n) && n >= 0 && n < slides.length) setIndex(n);
  }, [user]);

  // Persist current slide so an accidental refresh keeps position
  useEffect(() => {
    if (!user || typeof window === "undefined") return;
    sessionStorage.setItem(`${STORAGE_KEY}:${user.uid}`, String(index));
  }, [user, index]);

  // Track real fullscreen state (e.g. Esc-out)
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Lock body scroll while authenticated and presenting
  useEffect(() => {
    if (!user) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [user]);

  // Preload adjacent slide images so transitions don't pop
  useEffect(() => {
    if (typeof window === "undefined") return;
    [index + 1, index + 2, index - 1].forEach((i) => {
      const src = slides[i]?.image;
      if (!src) return;
      const im = new window.Image();
      im.src = src;
    });
  }, [index]);

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i >= slides.length - 1) return i;
      setDirection(1);
      return i + 1;
    });
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) return i;
      setDirection(-1);
      return i - 1;
    });
  }, []);

  const goTo = useCallback(
    (target: number) => {
      setDirection(target > index ? 1 : -1);
      setIndex(target);
      setShowOverview(false);
    },
    [index],
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Keyboard navigation (only when authenticated)
  useEffect(() => {
    if (!user) return;
    const onKey = (e: KeyboardEvent) => {
      // Cascading Esc: fullscreen → help → notes → overview
      if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
          return;
        }
        if (showHelp) {
          setShowHelp(false);
          return;
        }
        if (showSignOutConfirm) {
          setShowSignOutConfirm(false);
          return;
        }
        if (showNotes) {
          setShowNotes(false);
          return;
        }
        if (showOverview) {
          setShowOverview(false);
          return;
        }
        return;
      }

      // Don't navigate slides while a modal is open
      if (showOverview || showHelp || showSignOutConfirm) return;

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          goPrev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(slides.length - 1);
          break;
        case "n":
        case "N":
          setShowNotes((v) => !v);
          break;
        case "o":
        case "O":
          setShowOverview((v) => !v);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "?":
        case "/":
          setShowHelp((v) => !v);
          break;
        default:
          if (/^[0-9]$/.test(e.key)) {
            const n = parseInt(e.key, 10);
            if (n >= 1 && n <= slides.length) goTo(n - 1);
            else if (n === 0 && slides.length >= 10) goTo(9);
          }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [
    user,
    goNext,
    goPrev,
    goTo,
    toggleFullscreen,
    showOverview,
    showNotes,
    showHelp,
    showSignOutConfirm,
  ]);

  const handleSignIn = async () => {
    setAuthError("");
    setSigningIn(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!ALLOWED_EMAILS.includes(result.user.email ?? "")) {
        await fbSignOut(auth);
        setAuthError(
          "Access denied. This presentation is restricted to authorized accounts only.",
        );
      }
    } catch {
      setAuthError("Sign-in was cancelled or failed. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-saffron/30 border-t-saffron rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-text-muted text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream-dark/40 p-4">
        <div className="bg-white rounded-2xl border border-cream-dark/40 shadow-xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-saffron" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-dark-brown">
            Leadership Presentation
          </h1>
          <p className="mt-2 text-sm font-semibold text-saffron tracking-wide uppercase">
            The Sanatan Seva Nidhi Act
          </p>
          <p className="mt-5 text-text-secondary text-sm leading-relaxed">
            This presentation is restricted to authorized accounts only. Please
            sign in with your Google account to continue.
          </p>
          {authError && (
            <p className="mt-4 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2.5 border border-red-100">
              {authError}
            </p>
          )}
          <button
            onClick={handleSignIn}
            disabled={signingIn}
            className="mt-7 w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-cream-dark/50 rounded-xl text-dark-brown font-semibold hover:border-saffron/40 hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {signingIn ? "Signing in…" : "Sign in with Google"}
          </button>
          <p className="mt-5 text-xs text-text-muted leading-relaxed">
            Only authorized accounts are permitted. Unauthorized access attempts
            will be signed out automatically.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-saffron transition-colors"
          >
            <Home className="w-3 h-3" /> Back to gitaglobalfamily.org
          </Link>
        </div>
      </div>
    );
  }

  const current = slides[index];
  const progress = ((index + 1) / slides.length) * 100;
  const anyModalOpen = showOverview || showNotes || showHelp || showSignOutConfirm;
  const transitionDistance = prefersReducedMotion ? 0 : 40;
  const transitionDuration = prefersReducedMotion ? 0 : 0.45;

  // Swipe handler tolerances
  const swipeThreshold = 60;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] bg-black select-none"
      style={{
        // honor iOS notch / Android nav bar
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Slide canvas */}
      <motion.div
        className="absolute inset-0"
        // Disable swipe on desktop pointers; keep it light on touch
        drag={prefersReducedMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (anyModalOpen) return;
          if (info.offset.x < -swipeThreshold) goNext();
          else if (info.offset.x > swipeThreshold) goPrev();
        }}
        style={{ touchAction: "pan-y" }}
        aria-hidden={anyModalOpen}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * transitionDistance }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -transitionDistance }}
            transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <SlideView slide={current} isHero />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Top control bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 md:px-6 py-3 bg-gradient-to-b from-black/55 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm text-white/85 hover:text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            title="Back to site"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <span className="hidden md:inline text-xs text-white/60 font-semibold tracking-wider uppercase">
            Sanatan Seva Nidhi · Leadership Briefing
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <ControlButton
            label="Keyboard shortcuts (?)"
            onClick={() => setShowHelp(true)}
            icon={<Keyboard className="w-4 h-4" />}
          />
          <ControlButton
            label="Slide overview (O)"
            onClick={() => setShowOverview(true)}
            icon={<LayoutGrid className="w-4 h-4" />}
          />
          <ControlButton
            label="Speaker notes (N)"
            onClick={() => setShowNotes((v) => !v)}
            icon={<StickyNote className="w-4 h-4" />}
            active={showNotes}
          />
          <ControlButton
            label="Fullscreen (F)"
            onClick={toggleFullscreen}
            icon={
              isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )
            }
          />
          <button
            onClick={() => setShowSignOutConfirm(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            title="Sign out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Bottom progress + nav */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 md:px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-xl flex items-center gap-3">
            <span className="text-xs md:text-sm text-white/85 font-semibold tabular-nums shrink-0 drop-shadow">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.25)]">
              <motion.div
                className="h-full bg-saffron rounded-full"
                style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.4))" }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={index >= slides.length - 1}
            aria-label="Next slide"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-saffron hover:bg-saffron-dark disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Speaker notes drawer */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ y: "100%", opacity: prefersReducedMotion ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: prefersReducedMotion ? 0 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notes-heading"
            className="absolute bottom-16 md:bottom-20 left-3 right-3 md:left-6 md:right-6 z-40 bg-dark-brown/95 backdrop-blur-md text-white rounded-2xl border border-white/10 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <StickyNote className="w-4 h-4 text-saffron-light" />
                  <p
                    id="notes-heading"
                    className="text-xs font-semibold uppercase tracking-wider text-saffron-light"
                  >
                    Speaker Notes — Slide {index + 1} of {slides.length}
                  </p>
                </div>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-white/60 hover:text-white p-1 -m-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded"
                  aria-label="Close speaker notes"
                  autoFocus
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {current.speakerNotes}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overview grid */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="overview-heading"
            className="absolute inset-0 z-50 bg-black/92 backdrop-blur-md overflow-y-auto p-6 md:p-10"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6 md:mb-8 sticky top-0 -mx-6 md:-mx-10 px-6 md:px-10 py-3 bg-black/60 backdrop-blur-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-saffron-light">
                    Deck Overview
                  </p>
                  <h2
                    id="overview-heading"
                    className="text-xl md:text-3xl font-bold text-white mt-1"
                  >
                    {slides.length} slides · Sanatan Seva Nidhi
                  </h2>
                </div>
                <button
                  onClick={() => setShowOverview(false)}
                  className="text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                  aria-label="Close overview"
                  autoFocus
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`group text-left rounded-xl overflow-hidden border-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                      i === index
                        ? "border-saffron shadow-lg shadow-saffron/30"
                        : "border-white/10 hover:border-white/40"
                    }`}
                    aria-label={`Slide ${i + 1}: ${s.title}`}
                  >
                    <div className="aspect-video bg-cream relative overflow-hidden">
                      <div className="absolute inset-0 scale-[0.25] origin-top-left w-[400%] h-[400%] pointer-events-none">
                        <SlideView slide={s} isStatic />
                      </div>
                    </div>
                    <div className="p-3 bg-dark-brown/85">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-saffron-light tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.eyebrow && (
                          <span className="text-[10px] text-white/55 uppercase tracking-wider truncate">
                            {s.eyebrow}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white font-semibold line-clamp-2 leading-snug">
                        {s.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/55 text-center">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 mx-1">?</kbd>{" "}
                for all keyboard shortcuts · <kbd className="px-1.5 py-0.5 rounded bg-white/10 mx-1">Esc</kbd>{" "}
                to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard help modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-heading"
            className="absolute inset-0 z-[55] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowHelp(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-brown text-white rounded-2xl border border-white/10 shadow-2xl max-w-md w-full p-6 md:p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 id="help-heading" className="text-lg font-bold">
                  Keyboard shortcuts
                </h3>
                <button
                  onClick={() => setShowHelp(false)}
                  className="text-white/70 hover:text-white p-1 -m-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded"
                  aria-label="Close help"
                  autoFocus
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <dl className="space-y-2.5 text-sm">
                {KEYBOARD_HELP.map(([keys, desc]) => (
                  <div key={keys} className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-xs text-saffron-light shrink-0">
                      {keys}
                    </dt>
                    <dd className="text-white/85 text-right">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign-out confirm */}
      <AnimatePresence>
        {showSignOutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="signout-heading"
            className="absolute inset-0 z-[55] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowSignOutConfirm(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-7"
            >
              <h3 id="signout-heading" className="text-lg font-bold text-dark-brown">
                End presentation and sign out?
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Your current slide ({index + 1} of {slides.length}) will be
                remembered for this browser session.
              </p>
              <div className="mt-5 flex items-center justify-end gap-2">
                <button
                  onClick={() => setShowSignOutConfirm(false)}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-dark-brown rounded-lg hover:bg-cream cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                  autoFocus
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowSignOutConfirm(false);
                    fbSignOut(auth);
                  }}
                  className="px-4 py-2 text-sm font-semibold bg-maroon text-white rounded-lg hover:bg-maroon-light cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
                >
                  Sign out
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  icon,
  active,
}: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        active
          ? "bg-saffron text-white"
          : "bg-white/10 hover:bg-white/20 text-white/85 hover:text-white"
      }`}
    >
      {icon}
    </button>
  );
}

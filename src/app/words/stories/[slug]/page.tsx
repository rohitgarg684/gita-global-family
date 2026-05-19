"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { stories, type StoryWord } from "@/data/stories";
import { img } from "@/lib/image-url";
import { useParams } from "next/navigation";

function PowerWordTooltip({
  word,
  info,
}: {
  word: string;
  info: StoryWord;
}) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<"above" | "below">("above");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (show && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos(rect.top < 140 ? "below" : "above");
    }
  }, [show]);

  return (
    <span
      ref={ref}
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow((s) => !s)}
    >
      <span className="underline decoration-saffron/50 decoration-2 underline-offset-2 text-dark-brown font-semibold cursor-help hover:decoration-saffron hover:bg-saffron/5 rounded px-0.5 transition-colors">
        {word}
      </span>
      {show && (
        <span
          className={`absolute z-50 left-1/2 -translate-x-1/2 w-56 md:w-64 bg-white rounded-xl shadow-xl border border-cream-dark/40 p-3 text-left pointer-events-none ${
            pos === "above" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="block text-sm font-bold text-saffron mb-1">
            {info.word}
          </span>
          <span className="block text-xs text-text-primary leading-relaxed">
            {info.meaningEn}
          </span>
          <span className="block text-xs text-text-secondary leading-relaxed mt-1">
            {info.meaningHi}
          </span>
          <span
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-cream-dark/40 rotate-45 ${
              pos === "above"
                ? "top-full -mt-1.5 border-r border-b"
                : "bottom-full -mb-1.5 border-l border-t"
            }`}
          />
        </span>
      )}
    </span>
  );
}

function renderStoryText(
  text: string,
  wordMap: Map<string, StoryWord>,
) {
  const parts: (string | { word: string; display: string; info: StoryWord })[] =
    [];
  let remaining = text;

  while (remaining.length > 0) {
    const match = remaining.match(/\[([^\]]+)\]/);
    if (!match || match.index === undefined) {
      parts.push(remaining);
      break;
    }

    if (match.index > 0) {
      parts.push(remaining.slice(0, match.index));
    }

    const rawWord = match[1];
    const info = wordMap.get(rawWord.toLowerCase());

    if (info) {
      parts.push({ word: rawWord, display: rawWord, info });
    } else {
      parts.push(rawWord);
    }

    remaining = remaining.slice(match.index + match[0].length);
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <PowerWordTooltip key={i} word={part.display} info={part.info} />
        ),
      )}
    </>
  );
}

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-xl text-dark-brown font-bold">
            Story not found
          </p>
          <Link
            href="/words"
            className="mt-4 inline-block text-saffron hover:underline"
          >
            Back to Power Words
          </Link>
        </div>
      </div>
    );
  }

  const wordMap = new Map<string, StoryWord>();
  for (const pw of story.powerWords) {
    wordMap.set(pw.word.toLowerCase(), pw);
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-cream-dark/40">
        <div className="section-padding py-3">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Link
              href="/words"
              className="shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center text-text-muted hover:bg-saffron/10 hover:text-saffron transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0">
              <p className="text-sm font-bold text-dark-brown truncate">
                {story.title}
              </p>
              <p className="text-[10px] text-text-muted">
                {story.gradeLevel} · Power Words Story
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="section-padding py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden mb-8 shadow-lg"
          >
            <div className="relative aspect-[8/5] bg-gradient-to-br from-saffron/10 to-gold/10">
              <Image
                src={img(`stories/${story.coverImage}`)}
                alt={story.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-1.5 text-saffron text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Power Words Story
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              {story.title}
            </h1>
            <p className="mt-2 text-text-secondary italic">
              {story.subtitle}
            </p>
            <p className="mt-3 text-xs text-text-muted">
              {story.gradeLevel} · Hover over{" "}
              <span className="underline decoration-saffron/50 decoration-2 underline-offset-2 font-semibold">
                underlined words
              </span>{" "}
              to learn their meaning
            </p>
          </motion.div>

          <div className="space-y-6">
            {story.paragraphs.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                {para.image && (
                  <div className="relative rounded-2xl overflow-hidden mb-5 shadow-md bg-gradient-to-br from-saffron/5 to-gold/5">
                    <div className="relative aspect-[8/5]">
                      <Image
                        src={img(`stories/${para.image}`)}
                        alt={para.imageAlt || "Story illustration"}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <p className="text-base md:text-lg leading-relaxed md:leading-loose text-text-primary">
                  {renderStoryText(para.text, wordMap)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-white rounded-2xl border border-saffron/20 shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-saffron" />
              <h2 className="text-lg font-bold text-dark-brown">
                What did we learn?
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {story.moral}
            </p>
            <p className="mt-3 text-text-secondary/80 leading-relaxed text-sm">
              {story.moralHi}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-white rounded-2xl border border-cream-dark/40 shadow-sm p-6 md:p-8"
          >
            <h2 className="text-lg font-bold text-dark-brown mb-4">
              Power Words in this story
              <span className="text-sm font-normal text-text-muted ml-2">
                ({story.powerWords.length} words)
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {story.powerWords.map((pw) => (
                <span
                  key={pw.word}
                  className="group relative inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-saffron/8 border border-saffron/15 text-sm font-medium text-dark-brown cursor-help hover:bg-saffron/15 transition-colors"
                >
                  {pw.word}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-white rounded-xl shadow-xl border border-cream-dark/40 p-3 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-50">
                    <span className="block text-xs font-bold text-saffron mb-0.5">
                      {pw.word}
                    </span>
                    <span className="block text-xs text-text-primary">
                      {pw.meaningEn}
                    </span>
                    <span className="block text-xs text-text-secondary mt-0.5">
                      {pw.meaningHi}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/words"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              Explore all Power Words
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

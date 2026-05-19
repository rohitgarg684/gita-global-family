"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, ChevronDown, ChevronUp, X, Sparkles, ArrowRight } from "lucide-react";
import { vocabWords, type VocabWord } from "@/data/vocab-data";
import { stories } from "@/data/stories";
import { img } from "@/lib/image-url";

const POS_LABELS: Record<string, string> = {
  n: "noun",
  v: "verb",
  adj: "adjective",
  adv: "adverb",
  prep: "preposition",
  conj: "conjunction",
  pron: "pronoun",
  det: "determiner",
  interj: "interjection",
  excl: "exclamation",
};

function formatPos(raw: string): string {
  return raw
    .split(/[\s/]+/)
    .filter(Boolean)
    .map((p) => POS_LABELS[p.trim()] ?? p.trim())
    .filter((v, i, a) => a.indexOf(v) === i)
    .join(", ");
}

function WordCard({ word, index }: { word: VocabWord; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
      className="group"
    >
      <div
        className={`relative rounded-2xl border transition-all duration-200 ${
          expanded
            ? "bg-white border-saffron/30 shadow-lg shadow-saffron/5"
            : "bg-white border-cream-dark/50 shadow-sm hover:shadow-md hover:border-saffron/20"
        }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 md:p-6 cursor-pointer"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 md:gap-4 min-w-0">
              <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-saffron/10 text-saffron font-bold text-xs md:text-sm flex items-center justify-center mt-0.5">
                {word.id}
              </span>
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-dark-brown leading-tight">
                  {word.word}
                </h3>
                {word.pronunciation && (
                  <p className="text-sm text-text-muted mt-0.5 font-medium">
                    {word.pronunciation}
                  </p>
                )}
                <span className="inline-block mt-1.5 text-xs font-semibold text-saffron-dark/80 bg-saffron/8 px-2.5 py-0.5 rounded-full">
                  {formatPos(word.pos)}
                </span>
              </div>
            </div>
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                expanded
                  ? "bg-saffron/10 text-saffron"
                  : "bg-cream text-text-muted group-hover:bg-saffron/10 group-hover:text-saffron"
              }`}
            >
              {expanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                <div className="border-t border-cream-dark/40 pt-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {word.meaningEn && (
                      <div className="rounded-xl bg-blue-50/60 border border-blue-100/60 p-3.5">
                        <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1.5">
                          English
                        </p>
                        <p className="text-sm md:text-base text-text-primary leading-relaxed">
                          {word.meaningEn}
                        </p>
                      </div>
                    )}
                    <div className="rounded-xl bg-saffron/5 border border-saffron/10 p-3.5">
                      <p className="text-[10px] font-bold text-saffron-dark/60 uppercase tracking-widest mb-1.5">
                        हिंदी
                      </p>
                      <p className="text-sm md:text-base text-text-primary leading-relaxed">
                        {word.meaningHi}
                      </p>
                    </div>
                  </div>

                  {word.examples.length > 0 && (
                    <div className="rounded-xl bg-cream/60 border border-cream-dark/30 p-3.5">
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                        Examples
                      </p>
                      <div className="space-y-2">
                        {word.examples.map((ex, i) => (
                          <div key={i} className="text-sm leading-relaxed">
                            <p className="text-text-primary font-medium">
                              {ex.en}
                            </p>
                            <p className="text-text-secondary mt-0.5">
                              {ex.hi}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function WordsPage() {
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(50);

  const filtered = useMemo(() => {
    if (!search.trim()) return vocabWords;
    const q = search.trim().toLowerCase();
    return vocabWords.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        w.meaningHi.toLowerCase().includes(q) ||
        w.meaningEn.toLowerCase().includes(q) ||
        w.pronunciation.toLowerCase().includes(q) ||
        w.examples.some(
          (ex) =>
            ex.en.toLowerCase().includes(q) ||
            ex.hi.toLowerCase().includes(q),
        ),
    );
  }, [search]);

  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <div className="min-h-screen bg-warm-gray">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-cream-dark/40">
        <div className="section-padding py-4 md:py-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-saffron" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-dark-brown leading-tight">
                  Power Words
                </h1>
                <p className="text-xs text-text-muted">
                  The Basic 2500 · {vocabWords.length} Power Words
                </p>
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowCount(50);
                }}
                placeholder="Search words, meanings, examples..."
                className="w-full pl-10 pr-10 py-2.5 md:py-3 rounded-xl border border-cream-dark/50 bg-white text-sm md:text-base text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/40 transition-shadow"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cream flex items-center justify-center text-text-muted hover:bg-cream-dark transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {search && (
              <p className="mt-2 text-xs text-text-muted">
                {filtered.length} word{filtered.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="section-padding py-6 md:py-10">
        <div className="max-w-4xl mx-auto">
          {!search && stories.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-saffron" />
                <h2 className="text-sm font-bold text-dark-brown uppercase tracking-wider">
                  Power Words Stories
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/words/stories/${story.slug}`}
                    className="group flex gap-4 bg-white rounded-2xl border border-cream-dark/50 shadow-sm hover:shadow-md hover:border-saffron/20 transition-all p-4"
                  >
                    <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-saffron/10 to-gold/10 relative">
                      <Image
                        src={img(`stories/${story.coverImage}`)}
                        alt={story.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-dark-brown leading-snug group-hover:text-saffron transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-1">
                        {story.gradeLevel} · {story.powerWords.length} power words
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-saffron font-semibold mt-2">
                        Read story <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!search && (
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Tap any card to reveal its meaning in English and Hindi.
              Words are ranked by power — combining linguistic frequency
              with spiritual and character significance. The most essential
              words appear first.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((word, i) => (
                <WordCard key={word.id} word={word} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-base">
                No words match &ldquo;{search}&rdquo;
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-3 text-saffron text-sm font-semibold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowCount((c) => c + 50)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
              >
                Show more words
                <span className="text-white/70 text-xs">
                  ({Math.min(showCount + 50, filtered.length)} of{" "}
                  {filtered.length})
                </span>
              </button>
            </div>
          )}

          <footer className="mt-12 pt-6 border-t border-cream-dark/30 text-center">
            <p className="text-xs text-text-muted leading-relaxed">
              Source: <span className="font-medium">The Basic 2500 Words</span>{" "}
              — A Beginner&apos;s Dictionary with Spiritual Literacy
              <br />
              by BrahmBodhi Pradeep Siddharth · Bhagavad-Gita Prakashan
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

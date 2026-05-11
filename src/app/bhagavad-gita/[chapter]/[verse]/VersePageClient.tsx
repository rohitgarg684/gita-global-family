"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Languages,
  MessageSquareQuote,
  FileText,
} from "lucide-react";
import type { Verse } from "@/lib/gita-data";

interface VersePageClientProps {
  verse: Verse;
  chapterName: string;
  chapterNameHindi: string;
  totalVersesInChapter: number;
  prevVerse: { chapter: number; verse: string } | null;
  nextVerse: { chapter: number; verse: string } | null;
}

type Lang = "english" | "hindi" | "both";

export default function VersePageClient({
  verse,
  chapterName,
  chapterNameHindi,
  totalVersesInChapter,
  prevVerse,
  nextVerse,
}: VersePageClientProps) {
  const [lang, setLang] = useState<Lang>("both");

  const showHindi = lang === "hindi" || lang === "both";
  const showEnglish = lang === "english" || lang === "both";

  return (
    <>
      <section className="bg-gradient-to-br from-dark-brown via-maroon to-dark-brown py-12 md:py-16">
        <div className="section-padding">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link
              href="/bhagavad-gita/"
              className="hover:text-white/80 transition-colors"
            >
              Bhagavad Gita
            </Link>
            <span>/</span>
            <Link
              href={`/bhagavad-gita/${verse.chapter}/`}
              className="hover:text-white/80 transition-colors"
            >
              Chapter {verse.chapter}
            </Link>
            <span>/</span>
            <span className="text-white/80">Verse {verse.verse}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1.5 bg-saffron/20 text-saffron-light text-sm font-bold rounded-lg">
                {verse.chapter}:{verse.verse}
              </span>
              {verse.speaker && (
                <span className="text-sm text-white/60 font-medium">
                  {verse.speaker}
                </span>
              )}
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
              {chapterName}
            </h1>
            <p className="text-sm text-saffron-light/80">{chapterNameHindi}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Language Toggle */}
          <div className="flex items-center justify-end gap-1 mb-8 p-1 bg-cream rounded-xl w-fit ml-auto">
            {(["hindi", "english", "both"] as Lang[]).map((option) => (
              <button
                key={option}
                onClick={() => setLang(option)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${
                  lang === option
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-secondary hover:text-dark-brown"
                }`}
              >
                {option === "both" ? (
                  <span className="flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5" /> Both
                  </span>
                ) : (
                  option
                )}
              </button>
            ))}
          </div>

          {/* Sanskrit Shloka */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-cream to-cream-dark/50 rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
          >
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-maroon">
              <BookOpen className="w-4 h-4" />
              Sanskrit Shloka
            </div>
            <p className="text-lg md:text-xl text-dark-brown leading-loose font-medium whitespace-pre-line">
              {verse.sanskrit}
            </p>
          </motion.div>

          {/* Padacheeda (word-by-word) */}
          {verse.padacheeda && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
            >
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-sage">
                <FileText className="w-4 h-4" />
                Padacheeda (Word-by-Word)
              </div>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                {verse.padacheeda}
              </p>
            </motion.div>
          )}

          {/* Anvaya (Construction) */}
          {verse.anvaya && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
            >
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gold">
                <FileText className="w-4 h-4" />
                Anvaya (Construction)
              </div>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                {verse.anvaya}
              </p>
            </motion.div>
          )}

          {/* Meaning */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
          >
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-saffron">
              <MessageSquareQuote className="w-4 h-4" />
              Meaning
            </div>
            <div className="space-y-4">
              {showHindi && verse.hindiMeaning && (
                <div>
                  {lang === "both" && (
                    <p className="text-xs font-semibold text-text-muted mb-1.5 uppercase tracking-wider">
                      Hindi
                    </p>
                  )}
                  <p className="text-sm md:text-base text-text-primary leading-relaxed">
                    {verse.hindiMeaning}
                  </p>
                </div>
              )}
              {showHindi && showEnglish && verse.hindiMeaning && verse.englishMeaning && (
                <hr className="border-cream-dark/30" />
              )}
              {showEnglish && verse.englishMeaning && (
                <div>
                  {lang === "both" && (
                    <p className="text-xs font-semibold text-text-muted mb-1.5 uppercase tracking-wider">
                      English
                    </p>
                  )}
                  <p className="text-sm md:text-base text-text-primary leading-relaxed">
                    {verse.englishMeaning}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Commentary */}
          {((showHindi && verse.hindiCommentary) ||
            (showEnglish && verse.englishCommentary)) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-warm-gray rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
            >
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-maroon">
                <BookOpen className="w-4 h-4" />
                Commentary
              </div>
              <div className="space-y-4">
                {showHindi && verse.hindiCommentary && (
                  <div>
                    {lang === "both" && (
                      <p className="text-xs font-semibold text-text-muted mb-1.5 uppercase tracking-wider">
                        Hindi
                      </p>
                    )}
                    <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                      {verse.hindiCommentary}
                    </p>
                  </div>
                )}
                {showHindi && showEnglish && verse.hindiCommentary && verse.englishCommentary && (
                  <hr className="border-cream-dark/40" />
                )}
                {showEnglish && verse.englishCommentary && (
                  <div>
                    {lang === "both" && (
                      <p className="text-xs font-semibold text-text-muted mb-1.5 uppercase tracking-wider">
                        English
                      </p>
                    )}
                    <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                      {verse.englishCommentary}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Footnotes */}
          {((showHindi && verse.hindiFootnote) ||
            (showEnglish && verse.englishFootnote)) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-cream/50 rounded-2xl p-6 md:p-8 mb-6 border border-cream-dark/30"
            >
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-text-muted">
                <FileText className="w-4 h-4" />
                Footnotes
              </div>
              <div className="space-y-3">
                {showHindi && verse.hindiFootnote && (
                  <p className="text-xs text-text-muted leading-relaxed whitespace-pre-line">
                    {verse.hindiFootnote}
                  </p>
                )}
                {showEnglish && verse.englishFootnote && (
                  <p className="text-xs text-text-muted leading-relaxed whitespace-pre-line">
                    {verse.englishFootnote}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-cream-dark/30">
            {prevVerse ? (
              <Link
                href={`/bhagavad-gita/${prevVerse.chapter}/${prevVerse.verse}/`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-dark-brown text-sm font-medium rounded-full hover:bg-cream-dark transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Verse {prevVerse.verse}
              </Link>
            ) : (
              <Link
                href={`/bhagavad-gita/${verse.chapter}/`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-dark-brown text-sm font-medium rounded-full hover:bg-cream-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Chapter {verse.chapter}
              </Link>
            )}
            <span className="text-xs text-text-muted">
              {verse.verse} of {totalVersesInChapter}
            </span>
            {nextVerse ? (
              <Link
                href={`/bhagavad-gita/${nextVerse.chapter}/${nextVerse.verse}/`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-medium rounded-full hover:bg-saffron-dark transition-colors"
              >
                Verse {nextVerse.verse}
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href={`/bhagavad-gita/${verse.chapter}/`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-medium rounded-full hover:bg-saffron-dark transition-colors"
              >
                Back to Chapter
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

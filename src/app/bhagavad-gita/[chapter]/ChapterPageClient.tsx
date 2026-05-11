"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ChapterData } from "@/lib/gita-data";
import GitaVerseCard from "@/components/GitaVerseCard";

interface ChapterPageClientProps {
  data: ChapterData;
  prevChapter: number | null;
  nextChapter: number | null;
}

export default function ChapterPageClient({
  data,
  prevChapter,
  nextChapter,
}: ChapterPageClientProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-brown via-maroon to-dark-brown py-16 md:py-20">
        <div className="section-padding">
          <Link
            href="/bhagavad-gita/"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white/90 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Chapters
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-saffron/20 text-saffron-light font-bold rounded-xl text-lg">
                {data.chapter}
              </span>
              <div>
                <p className="text-sm text-white/50 font-medium">
                  Chapter {data.chapter} of 18
                </p>
                <p className="text-xs text-white/40">
                  {data.totalVerses} verses
                </p>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {data.nameEnglish}
            </h1>
            <p className="text-lg text-saffron-light font-medium mb-2">
              {data.nameHindi}
            </p>
            <p className="text-sm text-white/70 max-w-xl">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <BookOpen className="w-4 h-4" />
            <span>{data.totalVerses} Verses</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.verses.map((verse, i) => (
            <GitaVerseCard key={verse.verse} verse={verse} index={i} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-cream-dark/30">
          {prevChapter ? (
            <Link
              href={`/bhagavad-gita/${prevChapter}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-dark-brown text-sm font-medium rounded-full hover:bg-cream-dark transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Chapter {prevChapter}
            </Link>
          ) : (
            <div />
          )}
          {nextChapter && (
            <Link
              href={`/bhagavad-gita/${nextChapter}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-medium rounded-full hover:bg-saffron-dark transition-colors"
            >
              Chapter {nextChapter}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

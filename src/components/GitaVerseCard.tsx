"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Verse } from "@/lib/gita-data";

interface GitaVerseCardProps {
  verse: Verse;
  index?: number;
  compact?: boolean;
}

export default function GitaVerseCard({
  verse,
  index = 0,
  compact = false,
}: GitaVerseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        href={`/bhagavad-gita/${verse.chapter}/${verse.verse}/`}
        className="block bg-white rounded-xl border border-cream-dark/40 p-5 hover:shadow-md hover:border-saffron/30 transition-all group"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-saffron/10 text-saffron text-xs font-semibold rounded-lg">
            {verse.chapter}:{verse.verse}
          </span>
          {verse.speaker && (
            <span className="text-xs text-text-muted font-medium">
              {verse.speaker}
            </span>
          )}
        </div>

        <p className="text-sm text-dark-brown leading-relaxed font-medium line-clamp-3 mb-2">
          {verse.sanskrit}
        </p>

        {!compact && (
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
            {verse.englishMeaning}
          </p>
        )}

        <span className="inline-block mt-3 text-xs font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
          Read full verse &rarr;
        </span>
      </Link>
    </motion.div>
  );
}

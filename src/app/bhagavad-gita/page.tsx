"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { getChaptersIndex, getTotalVerses } from "@/lib/gita-data";
import SectionHeading from "@/components/SectionHeading";

const chapters = getChaptersIndex();
const totalVerses = getTotalVerses();

export default function BhagavadGitaPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark-brown via-maroon to-dark-brown py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(232,119,46,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-saffron/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-saffron-light" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Bhagavad Gita
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Explore the complete Bhagavad Gita with Sanskrit shlokas, Hindi and
              English translations, word-by-word meanings, and scholarly commentary.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <span>
                <strong className="text-saffron-light">{chapters.length}</strong>{" "}
                Chapters
              </span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>
                <strong className="text-saffron-light">{totalVerses}</strong>{" "}
                Verses
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="All 18 Chapters"
          subtitle="Select a chapter to begin reading"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.chapter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.4) }}
            >
              <Link
                href={`/bhagavad-gita/${ch.chapter}/`}
                className="group block bg-white rounded-2xl border border-cream-dark/40 p-6 hover:shadow-lg hover:border-saffron/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-saffron/10 text-saffron font-bold rounded-xl text-sm">
                    {ch.chapter}
                  </span>
                  <span className="text-xs text-text-muted">
                    {ch.totalVerses} verses
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown group-hover:text-saffron transition-colors mb-1">
                  {ch.nameEnglish}
                </h3>
                <p className="text-sm text-saffron/80 font-medium mb-2">
                  {ch.nameHindi}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {ch.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                  Read Chapter <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

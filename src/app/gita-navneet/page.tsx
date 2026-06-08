"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Download, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getBook } from "@/lib/gita-navneet";

const book = getBook();

export default function GitaNavneetIndexPage() {
  const totalChapters = book.sections.reduce(
    (n, s) => n + s.chapters.length,
    0
  );

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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {book.title}
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
              {book.subtitle}
            </p>
            <p className="text-sm text-white/60 mb-8">
              संकलनकर्ता, अनुवादक, व्याख्याकार:{" "}
              <span className="text-saffron-light font-medium">
                {book.author}
              </span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#table-of-contents"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
              >
                Browse Sections <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/60">
              <span>
                <strong className="text-saffron-light">
                  {book.sections.length}
                </strong>{" "}
                Sections (खंड)
              </span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>
                <strong className="text-saffron-light">{totalChapters}</strong>{" "}
                Chapters
              </span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>
                <strong className="text-saffron-light">51</strong> Shlokas
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {book.frontmatter.length > 0 && (
        <section className="section-padding py-12 md:py-16 bg-cream/30">
          <SectionHeading
            title="प्रस्तावना (Preface)"
            subtitle="Author note, foreword, and introduction"
          />
          <div className="grid md:grid-cols-3 gap-4">
            {book.frontmatter.map((fm, i) => (
              <motion.div
                key={fm.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={`/gita-navneet/preface/${fm.slug}/`}
                  className="group block bg-white rounded-2xl border border-cream-dark/40 p-5 hover:shadow-md hover:border-saffron/30 transition-all h-full"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-dark-brown group-hover:text-saffron transition-colors leading-snug">
                        {fm.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section id="table-of-contents" className="section-padding py-16 md:py-24">
        <SectionHeading
          title="विषय सूची (Table of Contents)"
          subtitle="Five sections covering 51 representative shlokas of the Bhagavad Gita"
        />

        <div className="space-y-12">
          {book.sections.map((section, sIdx) => (
            <motion.div
              key={section.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(sIdx * 0.05, 0.2) }}
            >
              <div className="mb-5 flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-brown">
                    {section.title}
                  </h2>
                  <p className="text-sm text-text-muted mt-1">
                    {section.english} ·{" "}
                    <span className="text-saffron font-medium">
                      {section.chapters.length} chapters
                    </span>
                  </p>
                </div>
                <Link
                  href={`/gita-navneet/${section.slug}/`}
                  className="text-sm font-semibold text-saffron hover:text-saffron-dark inline-flex items-center gap-1"
                >
                  View section <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.chapters.map((ch) => (
                  <Link
                    key={ch.slug}
                    href={`/gita-navneet/${section.slug}/${ch.slug}/`}
                    className="group block bg-white rounded-xl border border-cream-dark/40 p-4 hover:shadow-md hover:border-saffron/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 bg-saffron/10 text-saffron font-bold rounded-lg text-sm">
                        {ch.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors leading-snug">
                          {ch.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

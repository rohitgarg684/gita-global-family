"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Globe } from "lucide-react";
import { img, doc } from "@/lib/image-url";
import { en, hi, type ActContent } from "./content";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeInUp}
      className="text-2xl md:text-3xl font-bold text-dark-brown mb-8"
    >
      {children}
    </motion.h2>
  );
}

function SubSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl md:text-2xl font-semibold text-dark-brown mt-10 mb-4">
      {children}
    </h3>
  );
}

export default function SanatanSevaNidhiPage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const c: ActContent = lang === "en" ? en : hi;

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Sanatan Seva Nidhi Act"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            {c.heroSubtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {c.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {c.heroDescription}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-white/65 text-sm max-w-2xl mx-auto"
          >
            {c.heroNote}
          </motion.p>
        </div>
      </section>

      {/* Language Toggle + Download */}
      <section className="section-padding py-10 md:py-14 bg-cream">
        <div className="max-w-4xl mx-auto">
          {/* Language Switch */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <Globe className="w-5 h-5 text-text-muted" />
            <div className="inline-flex rounded-full bg-white border border-cream-dark/40 p-1 shadow-sm">
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-saffron text-white shadow"
                    : "text-text-secondary hover:text-dark-brown"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  lang === "hi"
                    ? "bg-saffron text-white shadow"
                    : "text-text-secondary hover:text-dark-brown"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Download heading */}
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-dark-brown">
              {c.downloadTitle}
            </h2>
            <p className="mt-2 text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
              {c.downloadSubtitle}
            </p>
          </div>

          {/* Download buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {/* Summary PDFs */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider text-center">
                {lang === "en" ? "Summary" : "सार-संक्षेप"}
              </h3>
              <a
                href={doc("sewa-nidhi-act-summary-english.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadSummaryEnglishLabel}
              </a>
              <a
                href={doc("sewa-nidhi-act-summary-hindi.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-dark-brown text-white font-semibold rounded-full hover:bg-dark-brown/90 transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadSummaryHindiLabel}
              </a>
            </div>

            {/* Complete Act PDFs */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider text-center">
                {lang === "en" ? "Complete Act" : "पूर्ण अधिनियम"}
              </h3>
              <a
                href={doc("sewa-nidhi-act-full-english.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadFullEnglishLabel}
              </a>
              <a
                href={doc("sewa-nidhi-act-full-hindi.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-dark-brown text-white font-semibold rounded-full hover:bg-dark-brown/90 transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadFullHindiLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Document Content */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Concept Paper */}
          <SectionTitle>{c.conceptPaperTitle}</SectionTitle>
          <SubSectionTitle>{c.conceptPaperSubtitle}</SubSectionTitle>
          <Prose>
            {c.conceptPaperIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>

          {/* Five Reasons */}
          <h3 className="text-lg md:text-xl font-semibold text-dark-brown mt-10 mb-6">
            {c.fiveReasonsTitle}
          </h3>

          {c.challenges.map((ch, i) => (
            <div key={i} className="mb-10">
              <h4 className="text-lg font-semibold text-saffron mb-3">
                {ch.title}
              </h4>
              <Prose>
                {ch.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Prose>
            </div>
          ))}

          {/* Solutions */}
          <div className="border-t border-cream-dark/40 pt-12 mt-12">
            <SectionTitle>{c.solutionsTitle}</SectionTitle>
            <Prose>
              {c.solutionsIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>

          {/* Special Measure */}
          <div className="mt-12">
            <SubSectionTitle>{c.specialMeasureTitle}</SubSectionTitle>
            <h4 className="text-lg font-semibold text-saffron mb-4">
              {c.specialMeasureSubtitle}
            </h4>
            <Prose>
              {c.specialMeasureIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>

            {c.measures.map((m, i) => (
              <div key={i} className="mt-8">
                <h4 className="text-lg font-semibold text-dark-brown mb-3">
                  {m.title}
                </h4>
                <Prose>
                  {m.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </Prose>
              </div>
            ))}
          </div>

          {/* Miscellaneous */}
          <div className="border-t border-cream-dark/40 pt-12 mt-12">
            <SectionTitle>{c.miscTitle}</SectionTitle>
            <Prose>
              {c.miscParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>

          {/* Conclusion */}
          <div className="border-t border-cream-dark/40 pt-12 mt-12">
            <SectionTitle>{c.conclusionTitle}</SectionTitle>
            <Prose>
              {c.conclusionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>

          {/* Possible Objection */}
          <div className="mt-12">
            <SubSectionTitle>{c.objectionTitle}</SubSectionTitle>
            <Prose>
              {c.objectionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>{c.executiveSummaryTitle}</SectionTitle>

          {c.executiveSummarySections.map((sec, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-dark-brown mb-4">
                {sec.title}
              </h3>
              {sec.paragraphs.length > 0 && (
                <Prose>
                  {sec.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </Prose>
              )}
              {sec.bullets && (
                <ul className="mt-3 space-y-3">
                  {sec.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-text-secondary leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-saffron shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Essence */}
          <div className="border-t border-cream-dark/40 pt-10 mt-6">
            <h3 className="text-xl font-semibold text-dark-brown mb-4">
              {c.essenceTitle}
            </h3>
            <Prose>
              {c.essenceParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Sanatan Seva Nidhi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {lang === "en"
                ? "A Historic Initiative for Sanatan Dharma"
                : "सनातन धर्म के लिए एक ऐतिहासिक पहल"}
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              {c.essenceParagraphs[0]}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <a
                href={doc("sewa-nidhi-act-summary-english.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadSummaryEnglishLabel}
              </a>
              <a
                href={doc("sewa-nidhi-act-summary-hindi.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30 text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadSummaryHindiLabel}
              </a>
              <a
                href={doc("sewa-nidhi-act-full-english.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadFullEnglishLabel}
              </a>
              <a
                href={doc("sewa-nidhi-act-full-hindi.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30 text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadFullHindiLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

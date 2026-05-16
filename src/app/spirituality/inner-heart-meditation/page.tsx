"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Download, Headphones, Clock, ArrowLeft } from "lucide-react";
import { img, doc, audio } from "@/lib/image-url";
import { en, hi, type MeditationContent } from "./content";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const AUDIO_URL = audio("inner-heart-meditation-english.wav");
const HINDI_PDF_URL = doc("inner-heart-meditation-hindi.pdf");

export default function InnerHeartMeditationPage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const c: MeditationContent = lang === "en" ? en : hi;

  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Inner Heart Meditation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        <div className="relative section-padding text-center">
          <Link
            href="/spirituality"
            className="inline-flex items-center gap-2 text-saffron-light/90 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "All Meditations" : "सभी ध्यान"}
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            {c.heroEyebrow}
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 text-saffron-light/90 text-base md:text-lg italic"
          >
            {c.heroSubtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {c.heroDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/85 text-sm"
          >
            <Clock className="w-4 h-4 text-saffron-light" />
            {c.duration}
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-10 md:py-12 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
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
        </div>
      </section>

      <section className="section-padding pb-12 md:pb-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl border border-cream-dark/40 shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-saffron/10 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-saffron" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-dark-brown">
                  {c.audioLabel}
                </h2>
                <p className="text-sm text-text-secondary">
                  {c.audioCaption}
                </p>
              </div>
            </div>

            <audio
              controls
              preload="metadata"
              className="w-full mt-2"
              src={AUDIO_URL}
            >
              {lang === "en"
                ? "Your browser does not support the audio element."
                : "आपका ब्राउज़र ऑडियो प्लेबैक का समर्थन नहीं करता।"}
            </audio>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={AUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadAudioLabel}
              </a>
              <a
                href={HINDI_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-dark-brown text-white text-sm font-semibold rounded-full hover:bg-dark-brown/90 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadHindiPdfLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-bold text-dark-brown mb-5"
          >
            {c.purposeTitle}
          </motion.h2>
          <p className="text-text-secondary text-base md:text-lg mb-4">
            {c.purposeIntro}
          </p>
          <ul className="space-y-3 mb-12">
            {c.purposePoints.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary leading-relaxed text-base md:text-lg"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-saffron shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-cream-dark/40 pt-12">
            <motion.h2
              {...fadeInUp}
              className="text-2xl md:text-3xl font-bold text-dark-brown mb-5"
            >
              {c.sourceTitle}
            </motion.h2>
            <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed">
              {c.sourceParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <motion.div
              {...fadeInUp}
              className="mt-8 bg-cream rounded-2xl border border-cream-dark/40 p-6 md:p-8"
            >
              <div className="space-y-1 text-saffron-dark font-semibold text-base md:text-lg italic">
                {c.shlokaSanskrit.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed">
                {c.shlokaTranslation}
              </p>
              <p className="mt-3 text-text-muted text-xs md:text-sm">
                {lang === "en"
                  ? "— Bhagavad Gita 18.61–62"
                  : "— भगवद्गीता 18.61–62"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-3xl font-bold text-dark-brown mb-3"
          >
            {c.beginTitle}
          </motion.h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
            {c.beginIntro}
          </p>

          <div className="space-y-10">
            {c.steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="relative pl-12 md:pl-14"
              >
                <span className="absolute left-0 top-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-saffron text-white font-bold flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-dark-brown mb-3">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <div className="space-y-3 text-text-secondary text-base md:text-lg leading-relaxed">
                  {step.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-14 text-center border-t border-cream-dark/40 pt-10"
          >
            <p className="text-2xl md:text-3xl font-semibold text-saffron-dark mb-3">
              {c.closing}
            </p>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
              {c.closingNote}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Inner Heart Meditation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {lang === "en"
                ? "Make this practice a part of your daily life"
                : "इस अभ्यास को अपने दैनिक जीवन का अंग बनाएँ"}
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              {lang === "en"
                ? "Even a few minutes each day, returning to the divine presence in your heart, can transform the way you live, work, and relate."
                : "प्रतिदिन कुछ मिनट हृदय में स्थित ईश्वरीय उपस्थिति में लौटना — यह आपके जीने, कार्य करने और संबंधों के ढंग को रूपांतरित कर सकता है।"}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={AUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadAudioLabel}
              </a>
              <a
                href={HINDI_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30 text-sm"
              >
                <Download className="w-4 h-4" />
                {c.downloadHindiPdfLabel}
              </a>
              <Link
                href="/spirituality"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-dark-brown font-semibold rounded-full hover:bg-cream transition-colors shadow-md text-sm"
              >
                {lang === "en" ? "More Meditations" : "अन्य ध्यान"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

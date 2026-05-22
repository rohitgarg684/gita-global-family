"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Languages,
  BookOpen,
  List,
  X,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import type { EssaySection } from "@/lib/islam-essay";

type Lang = "en" | "hi";

interface Props {
  sections: EssaySection[];
  meta: {
    titleHi: string;
    titleEn: string;
    subtitleHi: string;
    subtitleEn: string;
    sourceHi: string;
    sourceEn: string;
  };
}

export default function EssayClient({ sections, meta }: Props) {
  const [lang, setLang] = useState<Lang>("en");
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("islam-essay-lang") as Lang | null)
        : null;
    if (saved === "en" || saved === "hi") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("islam-essay-lang", lang);
    }
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setTocOpen(false);
  };

  const title = lang === "en" ? meta.titleEn : meta.titleHi;
  const subtitle = lang === "en" ? meta.subtitleEn : meta.subtitleHi;
  const source = lang === "en" ? meta.sourceEn : meta.sourceHi;

  const readingHints = useMemo(
    () =>
      lang === "en"
        ? {
            tocLabel: "Sections",
            tocClose: "Close",
            backLabel: "All Essays",
            top: "Back to top",
            sectionLabel: "Section",
            of: "of",
            nextLabel: "Next section",
            prevLabel: "Previous section",
            langToggle: "हिंदी में पढ़ें",
            preface:
              "Read at your own pace. Use the section list to jump to any topic, and toggle the language whenever you like.",
            sourceLabel: "From",
          }
        : {
            tocLabel: "विषय-सूची",
            tocClose: "बंद करें",
            backLabel: "सभी निबंध",
            top: "ऊपर जाएँ",
            sectionLabel: "खंड",
            of: "/",
            nextLabel: "अगला खंड",
            prevLabel: "पिछला खंड",
            langToggle: "Read in English",
            preface:
              "अपनी गति से पढ़ें। किसी भी विषय पर सीधे जाने के लिए विषय-सूची का उपयोग करें, और कभी भी भाषा बदलें।",
            sourceLabel: "स्रोत",
          },
    [lang]
  );

  return (
    <div className="bg-cream/30 min-h-screen">
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur border-b border-cream-dark/40">
        <div className="section-padding py-3 flex flex-wrap items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/allegations-against-hinduism"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-saffron transition-colors text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{readingHints.backLabel}</span>
            </Link>
            <span className="text-text-muted hidden md:inline">·</span>
            <span className="hidden md:inline text-sm text-text-secondary truncate max-w-xs">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTocOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-text-secondary hover:text-saffron hover:bg-cream/70 transition-colors"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">{readingHints.tocLabel}</span>
            </button>

            <div
              role="tablist"
              aria-label="Language"
              className="inline-flex items-center bg-cream rounded-full p-1 border border-cream-dark/40"
            >
              <button
                role="tab"
                aria-selected={lang === "en"}
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full transition-colors ${
                  lang === "en"
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-secondary hover:text-saffron"
                }`}
              >
                English
              </button>
              <button
                role="tab"
                aria-selected={lang === "hi"}
                onClick={() => setLang("hi")}
                className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full transition-colors ${
                  lang === "hi"
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-secondary hover:text-saffron"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding pt-12 md:pt-20 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-saffron font-semibold text-xs uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4" />
            {lang === "en"
              ? "Allegations Against Hinduism · Essay 1"
              : "हिंदू धर्म पर आरोप · निबंध 1"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`mt-3 font-bold text-dark-brown leading-tight ${
              lang === "hi"
                ? "text-3xl md:text-5xl"
                : "text-3xl md:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-sm text-text-muted"
          >
            {readingHints.sourceLabel}{" "}
            <em className="text-dark-brown not-italic font-semibold">
              {source}
            </em>
            <span className="mx-2 text-text-muted/60">·</span>
            {sections.length} {readingHints.sectionLabel.toLowerCase()}
            {lang === "en" ? "s" : ""}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-sm text-text-muted max-w-2xl mx-auto"
          >
            {readingHints.preface}
          </motion.p>
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 max-w-6xl mx-auto">
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
                <List className="w-3.5 h-3.5" />
                {readingHints.tocLabel}
              </p>
              <nav className="space-y-1 text-sm max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeId === s.id
                        ? "bg-saffron/10 text-saffron font-semibold"
                        : "text-text-secondary hover:bg-cream hover:text-dark-brown"
                    }`}
                  >
                    <span className="inline-block w-6 text-xs font-mono text-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {lang === "en" ? s.title_en : s.title_hi}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-12">
            {sections.map((s, i) => {
              const next = sections[i + 1];
              const prev = sections[i - 1];
              return (
                <SectionBlock
                  key={s.id}
                  index={i + 1}
                  total={sections.length}
                  section={s}
                  lang={lang}
                  onPrev={prev ? () => scrollTo(prev.id) : undefined}
                  onNext={next ? () => scrollTo(next.id) : undefined}
                  prevLabel={readingHints.prevLabel}
                  nextLabel={readingHints.nextLabel}
                  sectionLabel={readingHints.sectionLabel}
                  ofLabel={readingHints.of}
                />
              );
            })}
          </article>
        </div>
      </section>

      <AnimatePresence>
        {tocOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-brown/50 backdrop-blur-sm"
            onClick={() => setTocOpen(false)}
          >
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark/40">
                <p className="font-semibold text-dark-brown flex items-center gap-2">
                  <List className="w-4 h-4 text-saffron" />
                  {readingHints.tocLabel}
                </p>
                <button
                  onClick={() => setTocOpen(false)}
                  className="p-1.5 rounded-full hover:bg-cream text-text-secondary"
                  aria-label={readingHints.tocClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex items-start gap-3 w-full text-left px-3 py-3 rounded-lg transition-colors ${
                      activeId === s.id
                        ? "bg-saffron/10 text-saffron"
                        : "text-text-secondary hover:bg-cream"
                    }`}
                  >
                    <span className="text-xs font-mono text-text-muted shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-snug">
                      {lang === "en" ? s.title_en : s.title_hi}
                    </span>
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-saffron text-white shadow-xl hover:bg-saffron-dark transition-colors flex items-center justify-center"
            aria-label={readingHints.top}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SectionBlockProps {
  index: number;
  total: number;
  section: EssaySection;
  lang: Lang;
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel: string;
  nextLabel: string;
  sectionLabel: string;
  ofLabel: string;
}

function SectionBlock({
  index,
  total,
  section,
  lang,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  sectionLabel,
  ofLabel,
}: SectionBlockProps) {
  const body = lang === "en" ? section.body_en : section.body_hi;
  const title = lang === "en" ? section.title_en : section.title_hi;
  const paragraphs = body.split(/\n\s*\n/).filter((p) => p.trim().length > 0);

  return (
    <motion.section
      id={`section-${section.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-32 bg-white rounded-2xl border border-cream-dark/40 shadow-sm p-6 md:p-10"
    >
      <header className="mb-6 pb-5 border-b border-cream-dark/40">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-saffron">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-saffron text-white text-sm font-bold">
            {index}
          </span>
          <span className="text-text-muted">
            {sectionLabel} {index} {ofLabel} {total}
          </span>
        </div>
        <h2
          className={`mt-4 font-bold text-dark-brown leading-tight ${
            lang === "hi"
              ? "text-2xl md:text-3xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h2>
      </header>

      <div
        className={`prose-essay ${
          lang === "hi" ? "text-lg leading-[1.9]" : "text-base md:text-lg leading-[1.8]"
        } text-text-primary`}
      >
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-5 last:mb-0 whitespace-pre-line">
            {p}
          </p>
        ))}
      </div>

      <footer className="mt-8 pt-6 border-t border-cream-dark/40 flex items-center justify-between gap-3">
        {onPrev ? (
          <button
            onClick={onPrev}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-saffron transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {prevLabel}
          </button>
        ) : (
          <span />
        )}
        {onNext ? (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-saffron-dark transition-colors"
          >
            {nextLabel}
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
            <Languages className="w-4 h-4" />
            {lang === "en" ? "End of essay" : "निबंध समाप्त"}
          </span>
        )}
      </footer>
    </motion.section>
  );
}

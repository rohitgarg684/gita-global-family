"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, MessageCircleQuestion } from "lucide-react";
import { img } from "@/lib/image-url";
import { qaItems } from "@/data/qa-brahmbodhi";
import { bhagavadDharmaQA } from "@/data/qa-bhagavad-dharma";
import { brahmBodhiCoInQA } from "@/data/qa-brahmbodhi-co-in";
import QAGrid from "@/components/QAGrid";

export default function QAWithBrahmBodhiPage() {
  const [query, setQuery] = useState("");

  const allItems = useMemo(
    () => [...qaItems, ...bhagavadDharmaQA, ...brahmBodhiCoInQA],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((item) => {
      if (item.question.toLowerCase().includes(q)) return true;
      if (item.preview.toLowerCase().includes(q)) return true;
      return item.answer.some((b) => {
        if (b.type === "p" || b.type === "h" || b.type === "quote") {
          return b.text.toLowerCase().includes(q);
        }
        if (b.type === "ol" || b.type === "ul") {
          return b.items.some((i) => i.toLowerCase().includes(q));
        }
        return false;
      });
    });
  }, [query]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={img("brahmabodhi-hero.png")}
          alt="Q&A with BrahmBodhi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/65" />
        <div className="relative section-padding text-center">
          <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            <MessageCircleQuestion className="w-4 h-4" />
            Conversations of Wisdom
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Q&amp;A with BrahmBodhi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg leading-relaxed"
          >
            Real questions asked by seekers — answered with timeless insights
            drawn from the Bhagavad Gita and the lived experience of Sriyut
            BrahmBodhi.
          </motion.p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="section-padding pt-10 md:pt-14">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, topics or verses..."
              aria-label="Search Q&A"
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-cream-dark/50 text-dark-brown placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-all shadow-sm"
            />
          </div>
          <p className="mt-3 text-center text-sm text-text-muted">
            {filtered.length} {filtered.length === 1 ? "question" : "questions"}
            {query ? ` matching "${query}"` : ""}
          </p>
        </div>
      </section>

      {/* Q&A list */}
      <section className="section-padding py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <QAGrid items={filtered} />
        </div>
      </section>

      {/* Ask your own question CTA */}
      <section className="section-padding pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-saffron/10 via-cream to-gold/10 border border-saffron/20 rounded-2xl p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown">
            Have a question of your own?
          </h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Share what is on your mind — your question may guide many others on
            the path. Selected questions will be answered by BrahmBodhi here.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md"
          >
            Ask a Question
          </a>
        </motion.div>
      </section>
    </>
  );
}

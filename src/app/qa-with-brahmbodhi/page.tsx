"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MessageCircleQuestion, ArrowRight, Video } from "lucide-react";
import { img } from "@/lib/image-url";
import { qaItems } from "@/data/qa-brahmbodhi";
import { bhagavadDharmaQA } from "@/data/qa-bhagavad-dharma";

export default function QAWithBrahmBodhiPage() {
  const [query, setQuery] = useState("");

  const allItems = useMemo(() => [...qaItems, ...bhagavadDharmaQA], []);

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
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">
                No questions match your search. Try a different keyword.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => {
                const hasVideo = item.answer.some((b) => b.type === "video");
                const coverSrc = item.coverImage
                  ? img(item.coverImage)
                  : item.image?.en
                    ? img(item.image.en)
                    : hasVideo
                      ? `https://i.ytimg.com/vi/${(item.answer.find((b) => b.type === "video") as { type: "video"; videoId: string })?.videoId}/hqdefault.jpg`
                      : null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.3) }}
                  >
                    <Link
                      href={`/qa-with-brahmbodhi/${item.id}`}
                      className="group block bg-white rounded-2xl border border-cream-dark/40 shadow-sm hover:shadow-lg hover:border-saffron/20 transition-all overflow-hidden h-full"
                    >
                      {coverSrc && (
                        <div className="relative h-48 bg-cream overflow-hidden">
                          <Image
                            src={coverSrc}
                            alt={item.question}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                          />
                          {hasVideo && (
                            <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-600 text-white text-xs font-semibold shadow-md">
                              <Video className="w-3 h-3" /> Video
                            </span>
                          )}
                        </div>
                      )}
                      <div className="p-5">
                        {item.tag && (
                          <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-maroon/10 text-maroon text-[10px] font-bold uppercase tracking-wider">
                            {item.tag}
                          </span>
                        )}
                        <h3 className="text-base md:text-lg font-semibold text-dark-brown leading-snug group-hover:text-saffron transition-colors line-clamp-3">
                          {item.question}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                          {item.preview}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-saffron font-semibold">
                          Read answer <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
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

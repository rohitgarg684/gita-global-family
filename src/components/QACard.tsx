"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Share2, Quote } from "lucide-react";
import type { QAItem, QABlock } from "@/data/qa-brahmbodhi";

interface QACardProps {
  item: QAItem;
  index: number;
}

function renderBlock(block: QABlock, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={key}
          className="text-text-secondary leading-relaxed text-base md:text-[17px]"
        >
          {block.text}
        </p>
      );
    case "h":
      return (
        <h4
          key={key}
          className="text-lg md:text-xl font-semibold text-dark-brown mt-2"
        >
          {block.text}
        </h4>
      );
    case "quote":
      return (
        <figure
          key={key}
          className="relative pl-5 md:pl-6 border-l-4 border-saffron bg-cream/50 rounded-r-xl py-4 pr-4 my-2"
        >
          <Quote className="absolute -top-2 -left-3 w-5 h-5 text-saffron bg-white rounded-full p-0.5 hidden md:block" />
          <blockquote className="text-dark-brown italic leading-relaxed text-base md:text-[17px]">
            &ldquo;{block.text}&rdquo;
          </blockquote>
          {block.cite && (
            <figcaption className="mt-2 text-sm font-semibold text-saffron-dark not-italic">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );
    case "ol":
      return (
        <ol
          key={key}
          className="list-decimal pl-6 space-y-2 text-text-secondary leading-relaxed text-base md:text-[17px] marker:text-saffron marker:font-semibold"
        >
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul
          key={key}
          className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed text-base md:text-[17px] marker:text-saffron"
        >
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
  }
}

export default function QACard({ item, index }: QACardProps) {
  const [open, setOpen] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}#${item.id}`
        : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Q&A with BrahmBodhi: ${item.question}`,
          text: item.preview,
          url,
        });
      } catch {
        // user cancelled
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      className="group bg-white rounded-2xl border border-cream-dark/40 shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      {/* Question header */}
      <header className="flex items-start gap-4 p-5 md:p-7">
        <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-saffron/10 text-saffron flex items-center justify-center font-bold text-base md:text-lg">
          Q
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-dark-brown leading-snug">
            {item.question}
          </h3>
        </div>
        <button
          onClick={handleShare}
          aria-label="Share this question"
          className="shrink-0 p-2 rounded-full text-text-muted hover:text-saffron hover:bg-cream transition-colors"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </header>

      {/* Preview / Answer body */}
      <div className="px-5 md:px-7 pb-5 md:pb-7">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-base md:text-lg">
            A
          </div>
          <div className="flex-1 min-w-0">
            {!open && (
              <p className="text-text-secondary leading-relaxed text-base md:text-[17px]">
                {item.preview}
              </p>
            )}

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="full"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4">
                    {item.answer.map((b, i) => renderBlock(b, i))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-saffron-dark transition-colors"
              aria-expanded={open}
            >
              {open ? "Show less" : "Read more"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

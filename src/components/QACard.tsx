"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Share2, Quote, Play, Video } from "lucide-react";
import type { QAItem, QABlock } from "@/data/qa-brahmbodhi";

interface QACardProps {
  item: QAItem;
  index: number;
}

function YouTubeEmbed({
  videoId,
  title,
  caption,
}: {
  videoId: string;
  title: string;
  caption?: string;
}) {
  const [active, setActive] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const watchUrl = `https://youtu.be/${videoId}`;

  return (
    <figure className="my-2">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-md">
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 group-hover:bg-red-700 shadow-2xl transition-colors">
                <Play
                  className="w-7 h-7 md:w-9 md:h-9 text-white ml-1"
                  fill="currentColor"
                />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <p className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-2">
                {title}
              </p>
            </div>
          </button>
        )}
      </div>
      <figcaption className="mt-2 flex items-center justify-between gap-3 text-sm text-text-muted">
        <span>{caption ?? title}</span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-saffron hover:text-saffron-dark font-semibold whitespace-nowrap"
        >
          Open on YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
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
    case "quote": {
      const isMultiline = block.text.includes("\n");
      return (
        <figure
          key={key}
          className="relative pl-5 md:pl-6 border-l-4 border-saffron bg-cream/50 rounded-r-xl py-4 pr-4 my-2"
        >
          <Quote className="absolute -top-2 -left-3 w-5 h-5 text-saffron bg-white rounded-full p-0.5 hidden md:block" />
          <blockquote
            className={`text-dark-brown leading-relaxed text-base md:text-[17px] ${
              isMultiline
                ? "whitespace-pre-line text-center font-medium"
                : "italic"
            }`}
          >
            {isMultiline ? block.text : <>&ldquo;{block.text}&rdquo;</>}
          </blockquote>
          {block.cite && (
            <figcaption
              className={`mt-2 text-sm font-semibold text-saffron-dark not-italic ${
                isMultiline ? "text-center" : ""
              }`}
            >
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );
    }
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
    case "video":
      return (
        <YouTubeEmbed
          key={key}
          videoId={block.videoId}
          title={block.title}
          caption={block.caption}
        />
      );
  }
}

export default function QACard({ item, index }: QACardProps) {
  const [open, setOpen] = useState(false);
  const hasVideo = item.answer.some((b) => b.type === "video");

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
          {hasVideo && (
            <span className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
              <Video className="w-3.5 h-3.5" />
              Includes video
            </span>
          )}
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

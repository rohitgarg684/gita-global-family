"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";
import { img } from "@/lib/image-url";

// Loose shape that matches both qaItems and bhagavadDharmaQA datasets.
type AnswerBlock =
  | { type: "p" | "h" | "quote"; text: string }
  | { type: "ol" | "ul"; items: string[] }
  | { type: "video"; videoId: string }
  | { type: string; [key: string]: unknown };

export interface QAItem {
  id: string;
  question: string;
  preview: string;
  tag?: string;
  coverImage?: string;
  image?: { en?: string; hi?: string };
  answer: AnswerBlock[];
}

interface QAGridProps {
  items: QAItem[];
  /** Optional max items to display (useful for previews). */
  limit?: number;
}

/**
 * Reusable grid of Q&A cards. Used on the dedicated /qa-with-brahmbodhi page
 * (full list with search) and as a preview block on the BrahmBodhi page.
 */
export default function QAGrid({ items, limit }: QAGridProps) {
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;

  if (visible.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary">
          No questions match your search. Try a different keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visible.map((item, i) => {
        const hasVideo = item.answer.some(
          (b): b is { type: "video"; videoId: string } => b.type === "video",
        );
        const videoBlock = item.answer.find(
          (b): b is { type: "video"; videoId: string } => b.type === "video",
        );
        const coverSrc = item.coverImage
          ? img(item.coverImage)
          : item.image?.en
            ? img(item.image.en)
            : videoBlock
              ? `https://i.ytimg.com/vi/${videoBlock.videoId}/hqdefault.jpg`
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
  );
}

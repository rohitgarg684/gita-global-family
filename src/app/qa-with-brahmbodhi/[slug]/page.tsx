"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Globe,
  MessageCircleQuestion,
  MessageCircle,
  Share2,
  Quote,
  Play,
  Video,
} from "lucide-react";
import { qaItems, type QAItem, type QABlock, type QALang } from "@/data/qa-brahmbodhi";
import { img } from "@/lib/image-url";

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
    <figure className="my-4">
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
                <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="currentColor" />
              </span>
            </div>
          </button>
        )}
      </div>
      <figcaption className="mt-2 flex items-center justify-between gap-3 text-sm text-text-muted">
        <span>{caption ?? title}</span>
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="text-saffron hover:text-saffron-dark font-semibold whitespace-nowrap">
          Open on YouTube
        </a>
      </figcaption>
    </figure>
  );
}

function renderBlock(block: QABlock, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="text-text-secondary leading-relaxed text-base md:text-lg">
          {block.text}
        </p>
      );
    case "h":
      return (
        <h3 key={key} className="text-xl md:text-2xl font-semibold text-dark-brown mt-6 mb-2 border-t border-cream-dark/30 pt-6">
          {block.text}
        </h3>
      );
    case "quote": {
      const isMultiline = block.text.includes("\n");
      return (
        <figure key={key} className="relative pl-5 md:pl-6 border-l-4 border-saffron bg-cream/50 rounded-r-xl py-4 pr-4 my-4">
          <Quote className="absolute -top-2 -left-3 w-5 h-5 text-saffron bg-white rounded-full p-0.5 hidden md:block" />
          <blockquote className={`text-dark-brown leading-relaxed text-base md:text-lg ${isMultiline ? "whitespace-pre-line text-center font-medium" : "italic"}`}>
            {isMultiline ? block.text : <>&ldquo;{block.text}&rdquo;</>}
          </blockquote>
          {block.cite && (
            <figcaption className={`mt-2 text-sm font-semibold text-saffron-dark not-italic ${isMultiline ? "text-center" : ""}`}>
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );
    }
    case "ol":
      return (
        <ol key={key} className="list-decimal pl-6 space-y-2 text-text-secondary leading-relaxed text-base md:text-lg marker:text-saffron marker:font-semibold">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      );
    case "ul":
      return (
        <ul key={key} className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed text-base md:text-lg marker:text-saffron">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    case "video":
      return <YouTubeEmbed key={key} videoId={block.videoId} title={block.title} caption={block.caption} />;
  }
}

export default function QADetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = qaItems.find((q) => q.id === slug);
  const hasBilingual = !!item?.hi;
  const [lang, setLang] = useState<QALang>("en");

  if (!item) {
    return (
      <section className="section-padding py-28 text-center">
        <h1 className="text-3xl font-bold text-dark-brown">Question Not Found</h1>
        <Link href="/qa-with-brahmbodhi" className="inline-flex items-center gap-2 mt-6 text-saffron hover:text-saffron-dark font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Q&A
        </Link>
      </section>
    );
  }

  const t = lang === "hi" && item.hi ? item.hi : item;
  const imageFile = item.image
    ? lang === "hi" && item.image.hi ? item.image.hi : item.image.en
    : item.coverImage;
  const imageAlt = item.image?.alt
    ? (lang === "hi" && item.image.alt.hi ? item.image.alt.hi : item.image.alt.en)
    : t.question;

  return (
    <>
      <section className="section-padding pt-28 pb-10 md:pt-36 md:pb-14 bg-cream">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <Link href="/qa-with-brahmbodhi" className="inline-flex items-center gap-2 text-sm text-saffron hover:text-saffron-dark font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Q&A
          </Link>

          {hasBilingual && (
            <div className="inline-flex items-center gap-1 p-1 bg-white rounded-xl border border-cream-dark/40 shadow-sm">
              <Globe className="w-4 h-4 text-text-muted ml-2" />
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${lang === "en" ? "bg-saffron text-white shadow-sm" : "text-text-secondary hover:text-dark-brown"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${lang === "hi" ? "bg-saffron text-white shadow-sm" : "text-text-secondary hover:text-dark-brown"}`}
              >
                हिंदी
              </button>
            </div>
          )}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="inline-flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircleQuestion className="w-4 h-4" />
            Q&A with BrahmBodhi
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight max-w-4xl">
            {t.question}
          </h1>
        </motion.div>
      </section>

      {imageFile && (
        <div className="section-padding pb-0">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-cream">
            <Image
              src={img(imageFile)}
              alt={imageAlt || t.question}
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      <section className="section-padding py-10 md:py-14">
        <article className="max-w-4xl space-y-5">
          <div className="flex items-start gap-3 mb-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-lg">
              A
            </div>
            <p className="text-sm font-bold text-saffron uppercase tracking-wider mt-2.5">Answer</p>
          </div>

          {t.answer.map((block, i) => renderBlock(block, i))}
        </article>
      </section>

      <section className="section-padding pb-16 md:pb-24">
        <div className="max-w-4xl">
          <Link
            href="/qa-with-brahmbodhi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "hi" ? "सभी प्रश्न देखें" : "Browse all questions"}
          </Link>
        </div>
      </section>
    </>
  );
}

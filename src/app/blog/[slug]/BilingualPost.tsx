"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Globe, MessageCircleQuestion, MessageCircle } from "lucide-react";
import type { BilingualBlogPost } from "./page";

function renderContent(paragraphs: string[]) {
  return paragraphs.map((p, i) => {
    if (p.startsWith("@@question@@")) {
      const text = p.replace("@@question@@", "");
      return (
        <div
          key={i}
          className="bg-cream rounded-2xl border border-cream-dark/40 p-5 md:p-7"
        >
          <div className="flex items-center gap-2 mb-3 text-sm font-bold text-saffron uppercase tracking-wider">
            <MessageCircleQuestion className="w-4 h-4" />
            Question
          </div>
          <p className="text-text-primary leading-relaxed text-base md:text-lg italic">
            {text}
          </p>
        </div>
      );
    }

    if (p.startsWith("@@answer@@")) {
      const text = p.replace("@@answer@@", "");
      return (
        <div key={i} className="flex items-start gap-3 mt-8">
          <div className="shrink-0 w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center mt-0.5">
            <MessageCircle className="w-4 h-4 text-saffron" />
          </div>
          <div>
            <p className="text-sm font-bold text-saffron uppercase tracking-wider mb-2">
              Answer
            </p>
            <p className="text-text-secondary leading-relaxed">{text}</p>
          </div>
        </div>
      );
    }

    if (p.startsWith("@@section@@")) {
      const text = p.replace("@@section@@", "");
      return (
        <h3
          key={i}
          className="text-lg md:text-xl font-bold text-dark-brown mt-10 mb-2 border-t border-cream-dark/30 pt-8"
        >
          {text}
        </h3>
      );
    }

    if (p.startsWith("@@shloka@@")) {
      const text = p.replace("@@shloka@@", "");
      return (
        <div
          key={i}
          className="bg-gradient-to-br from-cream to-cream-dark/30 rounded-2xl p-5 md:p-6 border border-cream-dark/30 my-4"
        >
          <p className="text-base md:text-lg text-maroon font-semibold italic leading-loose whitespace-pre-line">
            {text}
          </p>
        </div>
      );
    }

    if (p.startsWith("@@meaning@@")) {
      const text = p.replace("@@meaning@@", "");
      return (
        <div
          key={i}
          className="bg-saffron/5 rounded-xl p-4 border-l-4 border-saffron/40 my-2"
        >
          <p className="text-sm md:text-base text-text-primary leading-relaxed">
            {text}
          </p>
        </div>
      );
    }

    if (p.startsWith("@@list@@")) {
      const items = p.replace("@@list@@", "").split("\n").filter(Boolean);
      return (
        <ul key={i} className="space-y-2 my-4 pl-1">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-text-secondary leading-relaxed"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-saffron shrink-0" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="text-text-secondary leading-relaxed whitespace-pre-line">
        {p}
      </p>
    );
  });
}

export default function BilingualPost({ post }: { post: BilingualBlogPost }) {
  const [lang, setLang] = useState<"en" | "hi">("en");

  const title = lang === "en" ? post.titleEn : post.titleHi;
  const content = lang === "en" ? post.contentEn : post.contentHi;
  const image = lang === "en" ? post.imageEn : post.imageHi;

  return (
    <>
      <section className="section-padding pt-28 pb-16 md:pt-36 md:pb-20 bg-cream">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-saffron hover:text-saffron-dark font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-xl border border-cream-dark/40 shadow-sm">
            <Globe className="w-4 h-4 text-text-muted ml-2" />
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                lang === "en"
                  ? "bg-saffron text-white shadow-sm"
                  : "text-text-secondary hover:text-dark-brown"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                lang === "hi"
                  ? "bg-saffron text-white shadow-sm"
                  : "text-text-secondary hover:text-dark-brown"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight max-w-4xl">
          {title}
        </h1>

        {post.date && (
          <div className="flex items-center gap-2 mt-5 text-text-muted text-sm">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
        )}
      </section>

      {image && (
        <div className="section-padding pb-0">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-cream">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      <section className="section-padding py-12 md:py-16">
        <article className="max-w-4xl space-y-5">
          {renderContent(content)}
        </article>
      </section>
    </>
  );
}

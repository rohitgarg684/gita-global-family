"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, Globe } from "lucide-react";

export interface BlogSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogTranslation {
  title: string;
  intro?: string;
  content: string[];
  sections?: BlogSection[];
}

export interface BlogPost extends BlogTranslation {
  date?: string;
  image?: string;
  videoId?: string;
  videoUrl?: string;
  hi?: BlogTranslation;
}

type Lang = "en" | "hi";

interface Labels {
  back: string;
  watchOnYouTube: string;
}

const LABELS: Record<Lang, Labels> = {
  en: { back: "Back to Blog", watchOnYouTube: "Watch on YouTube" },
  hi: { back: "ब्लॉग पर वापस जाएँ", watchOnYouTube: "यूट्यूब पर देखें" },
};

export default function BlogPostView({ post }: { post: BlogPost }) {
  const hasBilingual = !!post.hi;
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "hi" && post.hi ? post.hi : post;
  const labels = LABELS[lang];

  return (
    <>
      <section className="section-padding pt-28 pb-16 md:pt-36 md:pb-20 bg-cream">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-saffron hover:text-saffron-dark font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {labels.back}
          </Link>

          {hasBilingual && (
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
          )}
        </div>

        <motion.h1
          key={`title-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight max-w-4xl"
        >
          {t.title}
        </motion.h1>

        {post.date && (
          <div className="flex items-center gap-2 mt-5 text-text-muted text-sm">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
        )}
      </section>

      {post.videoId ? (
        <div className="section-padding pb-0">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${post.videoId}?rel=0&modestbranding=1`}
              title={t.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {post.videoUrl && (
            <div className="max-w-4xl mt-3">
              <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-saffron hover:text-saffron-dark transition-colors"
              >
                {labels.watchOnYouTube}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      ) : (
        post.image && (
          <div className="section-padding pb-0">
            <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={t.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )
      )}

      <motion.section
        key={`body-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="section-padding py-12 md:py-16"
      >
        <article className="prose prose-lg max-w-4xl text-text-secondary leading-relaxed space-y-6">
          {t.intro && (
            <p className="text-lg md:text-xl text-dark-brown/90 font-medium leading-relaxed border-l-4 border-saffron pl-5">
              {t.intro}
            </p>
          )}

          {t.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          {t.sections?.map((section, i) => {
            const sourceSection = post.sections?.[i];
            const image = section.image ?? sourceSection?.image;
            const imageAlt =
              section.imageAlt ?? sourceSection?.imageAlt ?? section.heading;
            return (
              <div key={i} className="pt-2">
                <h2 className="text-xl md:text-2xl font-bold text-dark-brown mt-8 mb-4 leading-snug">
                  {section.heading}
                </h2>
                {image && (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 shadow-md">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            );
          })}
        </article>
      </motion.section>
    </>
  );
}

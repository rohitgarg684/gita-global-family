"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Headphones,
  Clock,
  Languages,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { img, audio } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

interface Meditation {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  languages: string[];
  available: boolean;
  href?: string;
  cover: string;
  audioUrl?: string;
}

const meditations: Meditation[] = [
  {
    slug: "inner-heart-meditation",
    title: "Inner Heart Meditation",
    subtitle: "Antar-Hriday Dhyan",
    description:
      "A guided meditation rooted in the Bhagavad Gita that helps you connect with the divine presence within your heart, cultivating deep serenity and bliss.",
    benefits: [
      "Cultivate deep serenity intertwined with divine bliss",
      "Purify the mind from distractions and negative emotions",
      "Connect with the divine light within your own heart",
      "Suitable for all faiths — saguna, nirguna, and Abrahamic traditions",
    ],
    duration: "10–15 min",
    languages: ["English", "हिंदी"],
    available: true,
    href: "/spirituality/inner-heart-meditation",
    cover: img("banner.jpg"),
    audioUrl: audio("inner-heart-meditation-english.wav"),
  },
];

const upcomingMeditations: Pick<
  Meditation,
  "title" | "subtitle" | "description"
>[] = [
  {
    title: "More Life-Changing Meditations",
    subtitle: "Coming Soon",
    description:
      "Several other meditations grounded in the wisdom of the Bhagavad Gita and the Upanishads are currently being developed. Stay connected for the next release.",
  },
];

export default function SpiritualityPage() {
  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Spirituality"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Practice · Inner Wisdom
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Spirituality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Guided meditations and life-changing spiritual practices anchored in
            the timeless wisdom of the Bhagavad Gita. Each meditation is
            available in English and Hindi.
          </motion.p>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-saffron font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Available Meditations
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-dark-brown">
              Begin your practice
            </h2>
            <p className="mt-3 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Start with our first guided meditation. Press play below — or open
              the full page to follow the script in English or Hindi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {meditations.map((m) => (
              <motion.div
                key={m.slug}
                {...fadeInUp}
                className="group bg-white rounded-2xl border border-cream-dark/40 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="grid md:grid-cols-[1fr_2fr]">
                  <div className="relative h-56 md:h-auto md:min-h-[320px]">
                    <Image
                      src={m.cover}
                      alt={m.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/40 via-saffron-dark/30 to-dark-brown/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Headphones className="w-7 h-7 text-saffron" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-dark-brown">
                      {m.title}
                    </h3>
                    <p className="text-saffron font-semibold italic mt-1">
                      {m.subtitle}
                    </p>
                    <p className="mt-4 text-text-secondary leading-relaxed text-sm md:text-base">
                      {m.description}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {m.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream text-text-secondary">
                        <Clock className="w-3.5 h-3.5 text-saffron" />
                        {m.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream text-text-secondary">
                        <Languages className="w-3.5 h-3.5 text-saffron" />
                        {m.languages.join(" · ")}
                      </span>
                    </div>

                    {m.audioUrl && (
                      <div className="mt-5 rounded-xl bg-cream/70 border border-cream-dark/40 p-4">
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2.5">
                          Listen now
                        </p>
                        <audio
                          controls
                          controlsList="nodownload"
                          preload="none"
                          className="w-full"
                          src={m.audioUrl}
                        >
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}

                    <div className="mt-6">
                      {m.available && m.href ? (
                        <Link
                          href={m.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
                        >
                          Read the Script
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-text-muted text-sm font-semibold rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-saffron font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              In Development
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-dark-brown">
              {upcomingMeditations[0].title}
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              {upcomingMeditations[0].description}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
            >
              Stay Updated
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

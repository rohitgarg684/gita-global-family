"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Video,
  Feather,
  Lightbulb,
  Heart,
  Mic,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const teachings = [
  {
    icon: BookOpen,
    title: "Bhagavad Gita Discourses",
    description:
      "In-depth verse-by-verse commentary on the Bhagavad Gita, making its profound wisdom accessible for modern seekers across all walks of life.",
  },
  {
    icon: Lightbulb,
    title: "Practical Spirituality",
    description:
      "Guidance on integrating spiritual principles into daily living — from mindful action to selfless service — rooted in the concept of Nishkama Karma.",
  },
  {
    icon: Heart,
    title: "Devotion & Inner Peace",
    description:
      "Teachings on Bhakti Yoga and the path of devotion, helping seekers cultivate a deep, personal connection with the Divine.",
  },
  {
    icon: Mic,
    title: "Live Satsangs & Sessions",
    description:
      "Regular live sessions and Q&A on YouTube covering spiritual queries, life challenges, and the application of Gita wisdom in everyday situations.",
  },
];

const publications = [
  "Bhagavad Gita — Verse-by-verse commentary with practical insights",
  "Spiritual Awakening — A guide to inner transformation through Bhagavad Dharma",
  "Path of Selfless Action — Understanding Nishkama Karma in modern life",
  "Wisdom for Youth — Gita teachings adapted for young minds and students",
];

export default function BrahmBodhiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/brahmabodhi.jpeg"
          alt="Sriyut BrahmBodhi"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Spiritual Leader & Author
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Sriyut BrahmBodhi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Guiding humanity toward self-realization through the eternal
            teachings of the Bhagavad Gita.
          </motion.p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Biography
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              A Life Dedicated to Spiritual Awakening
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Sriyut BrahmBodhi is the founder and spiritual guide of Gita
              Global Family. A devoted practitioner of Bhagavad Dharma, he has
              spent decades immersed in the study, practice, and dissemination
              of the Bhagavad Gita&apos;s timeless wisdom.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Driven by deep compassion and a vision for global transformation,
              Sriyut BrahmBodhi established Gita Global Family to bridge the gap
              between ancient spiritual knowledge and the needs of modern
              society. His teachings emphasize selfless action, devotion, and the
              practical application of Gita principles in everyday life.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As a prolific author, he has published over 30 books that
              translate the Gita&apos;s profound philosophy into language
              accessible to readers of all backgrounds. His work spans multiple
              languages, reaching seekers across India and around the world.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/brahmabodhi.jpeg"
              alt="Sriyut BrahmBodhi"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark-brown/80 to-transparent p-6">
              <p className="text-white font-semibold text-lg">
                Sriyut BrahmBodhi
              </p>
              <p className="text-white/70 text-sm">
                Founder, Gita Global Family
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teachings */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="His Teachings & Contributions"
          subtitle="Sriyut BrahmBodhi's teachings illuminate the path of spiritual growth, selfless service, and inner peace for seekers worldwide."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-8 hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-5">
                <t.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {t.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YouTube Channels */}
      <section className="section-padding py-16 md:py-24 bg-maroon">
        <SectionHeading
          title="Watch on YouTube"
          subtitle="Subscribe to BrahmBodhi's official channels for regular teachings, discourses, and live satsangs."
          light
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.a
            href="https://www.youtube.com/@BrahmBodhi_HindiOfficial"
            target="_blank"
            rel="noopener noreferrer"
            {...fadeInUp}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/15 transition-colors"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Hindi Channel
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              BrahmBodhi Hindi Official — हिन्दी में भगवद गीता की शिक्षाएं
            </p>
            <span className="inline-flex items-center gap-2 text-saffron-light font-semibold text-sm group-hover:gap-3 transition-all">
              Subscribe Now <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@BrahmBodhi_EnglishOfficial"
            target="_blank"
            rel="noopener noreferrer"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/15 transition-colors"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              English Channel
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              BrahmBodhi English Official — Bhagavad Gita teachings in English
            </p>
            <span className="inline-flex items-center gap-2 text-saffron-light font-semibold text-sm group-hover:gap-3 transition-all">
              Subscribe Now <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>
      </section>

      {/* Published Works */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Published Works
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Over 30 Books Published
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Sriyut BrahmBodhi has authored over 30 books through Gita Global
              Publication, making the Bhagavad Gita&apos;s wisdom accessible in
              multiple languages. His publications cover spiritual philosophy,
              practical guidance, youth education, and commentary on sacred
              texts.
            </p>
            <ul className="mt-6 space-y-3">
              {publications.map((pub) => (
                <li key={pub} className="flex items-start gap-3">
                  <Feather className="w-5 h-5 text-saffron mt-0.5 shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {pub}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/gita-publications"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Explore Publications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/vision.jpg"
              alt="Published Works"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Join the journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Walk the Path of Wisdom
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Join Sriyut BrahmBodhi and the Gita Global Family on a
              transformative journey guided by the eternal teachings of the
              Bhagavad Gita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                Join Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                <Video className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

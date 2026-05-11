"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Globe, Heart, Users, ArrowRight, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const categories = [
  {
    icon: BookOpen,
    title: "Bhagavad Gita Commentaries",
    description:
      "In-depth commentaries and translations making the Gita accessible to readers across languages and backgrounds.",
  },
  {
    icon: Globe,
    title: "Multilingual Editions",
    description:
      "Publications in Hindi, English, and other languages to reach seekers worldwide.",
  },
  {
    icon: Heart,
    title: "Spiritual Growth Guides",
    description:
      "Practical guides for daily spiritual practice, meditation, and self-realization.",
  },
  {
    icon: Users,
    title: "Community & Outreach",
    description:
      "Books on community service, poverty alleviation, and building a spiritually grounded society.",
  },
];

export default function GitaPublicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src="/images/publications.png"
          alt="Gita Publications"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/80 to-dark-brown/50" />
        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Gita Publications
            </h1>
            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              Spreading the timeless wisdom of the Bhagavad Gita to every corner
              of the world through the written word.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Sharing Timeless Wisdom Worldwide"
            subtitle="Gita Global Publication is a dedicated unit of the Gita Global Family, committed to sharing the Bhagavad Gita's eternal teachings with the world."
          />
          <motion.p
            {...fadeInUp}
            className="text-text-secondary leading-relaxed text-base md:text-lg"
          >
            Through thoughtfully crafted publications, we aim to make the
            profound wisdom of the Gita accessible to seekers of all ages,
            backgrounds, and languages. Our books serve as beacons of light,
            guiding readers toward spiritual growth, inner peace, and purposeful
            living.
          </motion.p>
        </div>
      </section>

      {/* Book Categories */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="30+ Published Books & Growing"
          subtitle="Our diverse catalog spans multiple categories, each designed to illuminate a different facet of Gita's wisdom."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-8 hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-5">
                <cat.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {cat.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/vision.jpg"
          alt="Our Mission"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-maroon/80" />
        <div className="relative section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Our Mission" light />
            <motion.div {...fadeInUp} className="space-y-4">
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Through our publications, we strive to:
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto">
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-gold mt-1 text-lg">&#9679;</span>
                  <span>
                    Promote peace, unity, and brotherhood across communities and
                    nations.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-gold mt-1 text-lg">&#9679;</span>
                  <span>
                    Combat spiritual and material poverty through the
                    transformative power of knowledge.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-gold mt-1 text-lg">&#9679;</span>
                  <span>
                    Make the Gita&apos;s teachings accessible to all,
                    regardless of language, location, or background.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-gold mt-1 text-lg">&#9679;</span>
                  <span>
                    Inspire individuals to live with purpose, compassion, and
                    spiritual awareness.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <motion.div
          {...fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-saffron" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown mb-4">
            Get Our Publications
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Interested in our books or want to distribute them in your
            community? Reach out to us and we&apos;ll be happy to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}

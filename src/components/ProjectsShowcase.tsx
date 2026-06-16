"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  flagshipInitiative,
  projectCards,
  type FlagshipInitiative,
  type ProjectCard,
} from "@/data/projects";

interface ProjectsShowcaseProps {
  /** Override the section heading. */
  title?: string;
  /** Override the section subtitle. */
  subtitle?: string;
  /** Override the flagship initiative block (pass `null` to hide it). */
  flagship?: FlagshipInitiative | null;
  /** Override the project cards list. */
  cards?: ProjectCard[];
  /** Whether to render the bottom "See All Projects / Join Hands" CTAs. */
  showBottomCtas?: boolean;
  /** Extra Tailwind classes for the outer <section>. */
  className?: string;
}

/**
 * "Our Projects" section: an optional flagship initiative card, a grid of
 * six project mini-cards, and bottom CTAs. Reused on the home page and the
 * BrahmBodhi page.
 */
export default function ProjectsShowcase({
  title = "Our Projects",
  subtitle = "The Temple-Centred Village Transformation Initiative — six interconnected projects that turn every village temple into the living heart of community life.",
  flagship = flagshipInitiative,
  cards = projectCards,
  showBottomCtas = true,
  className = "section-padding py-16 md:py-24",
}: ProjectsShowcaseProps) {
  return (
    <section className={className}>
      <SectionHeading title={title} subtitle={subtitle} />

      {flagship && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-cream-dark/30 mb-12"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={flagship.image}
                alt={flagship.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-cream via-white to-saffron/5 flex flex-col justify-center">
              <span className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-saffron/10 border border-saffron/25 text-saffron-dark text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {flagship.badge}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-dark-brown leading-tight">
                {flagship.title}
              </h3>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {flagship.description}
              </p>
              {flagship.stats.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {flagship.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-3 bg-white rounded-xl border border-cream-dark/40"
                    >
                      <p className="text-2xl font-bold text-saffron">
                        {s.value}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={flagship.primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/20"
                >
                  {flagship.primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {flagship.secondaryCta && (
                  <Link
                    href={flagship.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron/40 text-saffron-dark font-semibold rounded-full hover:bg-saffron/10 transition-colors"
                  >
                    {flagship.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {cards.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Link
              href={p.href}
              className="group block h-full bg-cream rounded-2xl overflow-hidden border border-cream-dark/30 hover:border-saffron/40 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-md">
                  <p.icon className="w-4.5 h-4.5 text-saffron" />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base md:text-lg font-semibold text-dark-brown group-hover:text-saffron-dark transition-colors leading-snug">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {p.text}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-saffron">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {showBottomCtas && (
        <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            See All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
          >
            Join Hands
          </Link>
        </div>
      )}
    </section>
  );
}

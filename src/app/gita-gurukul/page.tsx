"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Globe,
  Monitor,
  Users,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const DONATE_LINK = "https://rzp.io/rzp/TsaLFcd";

const values = [
  {
    icon: Heart,
    title: "No Discrimination",
    description:
      "No caste or birth-based discrimination \u2014 open to all children, regardless of background.",
  },
  {
    icon: BookOpen,
    title: "Rooted in Bhagavad Gita",
    description:
      "Rooted in Bhagavad Gita\u2019s teachings \u2014 promoting equality, discipline, and compassion.",
  },
  {
    icon: Globe,
    title: "Global & Inclusive",
    description:
      "Serving tribal, marginalized, and international communities.",
  },
];

const howWeOperate = [
  {
    icon: GraduationCap,
    title: "Minimal Costs",
    description: "Using existing temples as learning centers.",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    description:
      "High-quality video lessons reduce teacher dependency.",
  },
  {
    icon: Users,
    title: "Volunteer-Driven",
    description: "Experts teach remotely, keeping costs low.",
  },
];

const curriculumExtras = [
  "Critical Thinking",
  "Financial & Spiritual Literacy",
  "Poverty Alleviation Strategies",
  "Aesthetic Sense & Humor",
  "Study Skills & Moral Values",
];

export default function GitaGurukulPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src={img("gurukul.png")}
          alt="Gita Global Gurukul"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div className="relative section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Our Gurukul Story
          </motion.h1>
        </div>
      </section>

      {/* Global Vision */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.p
            {...fadeInUp}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            A global vision is being realized through various initiatives,
            including a <strong className="text-dark-brown">Gita Temple</strong>{" "}
            for spiritual development, an{" "}
            <strong className="text-dark-brown">Ashram</strong> retreat, the{" "}
            <strong className="text-dark-brown">
              Gita Global Gurukul School
            </strong>{" "}
            headquarters, a{" "}
            <strong className="text-dark-brown">
              Poverty Alleviation Centre
            </strong>{" "}
            to support those in need, and an{" "}
            <strong className="text-dark-brown">
              Art and Culture Centre
            </strong>{" "}
            to revive local traditions within a 10-km radius. These
            interconnected efforts aim to foster spiritual growth, education,
            poverty relief, and cultural revival, collectively working toward a
            transformative impact.
          </motion.p>
        </div>
      </section>

      {/* Himachal Branch */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Gita Global Gurukul
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Himachal, India
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              A branch of Gita Global Gurukul is currently operating in
              Satiwala, Sirmaur District, Himachal Pradesh. The gurukul serves
              children from Himachal Pradesh, Bihar, Jharkhand, and Uttar
              Pradesh, with girls comprising one-third of the student body. Our
              students represent diverse castes and communities, including tribal
              groups and marginalized populations.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The campus enjoys a picturesque location along the
              Chandigarh-Dehradun National Highway, nestled in the Himalayan
              foothills amid lush forests. The sacred Markandeya River flows
              nearby, originating near the ancient ashram of Rishi Markandeya,
              adding spiritual significance to our learning environment.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={img("gurukul.png")}
              alt="Gita Global Gurukul Himachal"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Vrindavan HQ */}
      <section className="section-padding py-16 md:py-24 bg-warm-gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src={img("vision.jpg")}
              alt="Vrindavan HQ"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="order-1 lg:order-2">
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Gita Global Gurukul HQ
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Vrindavan, UP, India
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-dark-brown">
              Future Headquarters Development
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The Gita Global Gurukul Headquarters and main campus are being
              established near the sacred city of Vrindavan, Mathura (Uttar
              Pradesh). This expansive project will occupy over one hectare of
              acquired land, where initial infrastructure is already taking
              shape.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              All necessary regulatory approvals are presently underway as we
              prepare to create this flagship center of holistic learning.
            </p>
            <a
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Support Gita Gurukul Education
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brief Note */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="A Brief Note on Gita Global Gurukul" />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Purpose */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-4">
              Our Purpose
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Gita Global Gurukul, an initiative of{" "}
              <strong className="text-dark-brown">Gita Global Family</strong>,
              is dedicated to the{" "}
              <strong className="text-dark-brown">
                complete development of children
              </strong>
              &mdash;spiritually, intellectually, and morally. Inspired by the
              teachings of the{" "}
              <strong className="text-dark-brown">Bhagavad Gita</strong> and the
              life of <strong className="text-dark-brown">Lord Ram</strong>, we
              follow the ancient Indian philosophy of{" "}
              <strong className="text-dark-brown">
                Artha (wealth), Dharma (duty), Kama (desire), and Moksha
                (liberation)
              </strong>{" "}
              to cultivate well-rounded individuals. Our vision extends beyond
              India, aiming to empower children{" "}
              <strong className="text-dark-brown">worldwide</strong> with
              timeless wisdom and modern skills.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-4">
              Our Approach
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              To make <strong className="text-dark-brown">holistic education accessible</strong>, we have designed two models:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-cream-dark/30">
                <h4 className="font-semibold text-dark-brown mb-2">
                  1. Residential Gurukuls
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  For immersive learning in a traditional gurukul setting.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-cream-dark/30">
                <h4 className="font-semibold text-dark-brown mb-2">
                  2. Single-Teacher (Ekal) Gurukuls
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  Affordable village-based schools requiring minimal setup:
                </p>
                <ul className="text-sm text-text-secondary space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5">&bull;</span>
                    A medium-sized TV for digital lessons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5">&bull;</span>
                    An inverter for uninterrupted power
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5">&bull;</span>
                    A speaker system for up to 100 students
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5">&bull;</span>
                    A water dispenser for hygiene
                  </li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-saffron">
                  Initial setup cost: Just ₹50,000 per Gurukul.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-6">
              Our Values
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 text-center border border-cream-dark/30"
                >
                  <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-saffron" />
                  </div>
                  <h4 className="font-semibold text-dark-brown mb-2">
                    {v.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How We Operate */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-6">
              How We Operate
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {howWeOperate.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white rounded-2xl p-5 border border-cream-dark/30"
                >
                  <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Unique Curriculum */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-4">
              Our Unique Curriculum
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Beyond conventional subjects (Math, Science, English), we teach:
            </p>
            <div className="flex flex-wrap gap-3">
              {curriculumExtras.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-saffron/10 text-saffron font-medium text-sm rounded-full border border-saffron/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Progress */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold text-dark-brown mb-4">
              Our Progress
            </h3>
            <ul className="space-y-3 text-text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-saffron mt-1 font-bold">&bull;</span>
                <span>
                  <strong className="text-dark-brown">
                    Operational Gurukul in Himachal Pradesh
                  </strong>{" "}
                  &mdash; Serving children from Bihar, Jharkhand, UP, and tribal
                  communities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-saffron mt-1 font-bold">&bull;</span>
                <span>
                  <strong className="text-dark-brown">
                    Upcoming HQ in Vrindavan
                  </strong>{" "}
                  &mdash; Land acquired for a large Gurukul campus.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Support Education"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-maroon/85" />
        <div className="relative section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                How You Can Help
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Your donation supports:
              </p>
              <ul className="mt-4 space-y-2 text-left max-w-lg mx-auto">
                {[
                  "Setting up new Ekal Gurukuls (₹50,000 each)",
                  "Expanding residential Gurukuls",
                  "Developing digital learning tools",
                  "Sponsoring a child\u2019s education",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <span className="text-gold mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-saffron-light text-sm italic">
                All donations are tax-exempt under 80G.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href={DONATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
                >
                  Sponsor a Gurukul
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-white/80 text-sm">
                <a
                  href="mailto:namaste@gitaglobalfamily.org"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  namaste@gitaglobalfamily.org
                </a>
                <a
                  href="tel:+918865052915"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 886-505-2915
                </a>
              </div>

              <p className="mt-8 text-white/70 italic text-sm max-w-md mx-auto">
                &ldquo;The future of Dharma lies in the hands of our children.
                Support their journey today.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="section-padding py-16 md:py-20 text-center">
        <SectionHeading
          title="Gallery"
          subtitle="Capture the essence of mindfulness in every breath and pose."
        />
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
        >
          All Gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

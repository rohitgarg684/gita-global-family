"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  HeartHandshake,
  Award,
  BookHeart,
  Monitor,
  Calendar,
  Video,
  Users,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const features = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Encouraging students to question, analyze, and develop independent thought through inquiry-based learning inspired by the Gurukul tradition.",
  },
  {
    icon: HeartHandshake,
    title: "Life Skills",
    description:
      "Building emotional intelligence, communication, teamwork, and resilience to prepare children for real-world challenges beyond academics.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Delivering quality education in core subjects with modern teaching methodologies, personalized attention, and an emphasis on conceptual clarity.",
  },
  {
    icon: BookHeart,
    title: "Value-Based Education",
    description:
      "Integrating the ethical and moral teachings of the Bhagavad Gita into the curriculum to nurture character, compassion, and integrity.",
  },
];

const howItWorks = [
  {
    icon: Monitor,
    title: "Online Zoom Classes",
    description:
      "Live, interactive sessions conducted via Zoom, bringing the Gurukul experience directly to students' homes — no barriers, no boundaries.",
  },
  {
    icon: Calendar,
    title: "Six Days a Week",
    description:
      "Consistent classes from Monday to Saturday ensure students maintain a disciplined learning rhythm with dedicated topics each day.",
  },
  {
    icon: Video,
    title: "Available on YouTube",
    description:
      "All sessions are recorded and made available on the Gita Global Gurukul YouTube channel so students can revisit lessons anytime.",
  },
  {
    icon: Users,
    title: "Open to All",
    description:
      "Completely free for underprivileged children. Schools and community organizations are welcome to enroll their students.",
  },
];

const stats = [
  { value: "6", label: "Days / Week" },
  { value: "100%", label: "Free Education" },
  { value: "1000+", label: "Students Reached" },
  { value: "Global", label: "Access" },
];

export default function GitaGurukulPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/gurukul.png"
          alt="Gita Global Gurukul"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div className="relative section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-saffron/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-saffron/30"
          >
            <GraduationCap className="w-8 h-8 text-saffron-light" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Gita Global Gurukul
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A holistic education system blending ancient Indian Gurukul
            principles with modern learning, offering free personalized
            education to underprivileged children.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-saffron section-padding py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-white/80 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Gurukul */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              About the Gurukul
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Where Ancient Wisdom Meets Modern Education
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Gita Global Gurukul is a pioneering education initiative by Gita
              Global Family that reimagines the ancient Indian Gurukul system for
              the modern world. Rooted in the belief that every child deserves
              access to quality education, the Gurukul offers free, personalized
              learning to underprivileged children across India and beyond.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Unlike conventional schooling, the Gurukul model goes beyond
              textbooks. It blends academic instruction with life skills,
              critical thinking, and the ethical values drawn from the Bhagavad
              Gita. Students don&apos;t just learn subjects — they develop
              character, compassion, and a lifelong love for learning.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Led by the vision of Sriyut BrahmBodhi, the Gurukul operates
              through live online Zoom classes six days a week, making
              high-quality education accessible to anyone with an internet
              connection. Sessions are also available on YouTube for students to
              revisit and for new learners to discover.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/gurukul.png"
              alt="Gita Global Gurukul"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Key Features"
          subtitle="Our curriculum is designed to develop the whole child — intellectually, emotionally, and spiritually."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="How It Works"
          subtitle="A simple, accessible model that removes every barrier between a child and quality education."
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 bg-white rounded-2xl p-6 border border-cream-dark/30"
            >
              <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6 text-saffron" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-dark-brown mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/gurukul.png"
          alt="Subscribe to Gita Global Gurukul"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/80 to-maroon/70" />
        <div className="relative section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-600/30">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Subscribe to Gita Global Gurukul
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed max-w-xl mx-auto">
                Watch our classes on YouTube, subscribe to stay updated, and
                share with schools and communities who can benefit from free,
                value-based education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
                >
                  <Video className="w-5 h-5" />
                  Subscribe Now
                </a>
                <Link
                  href="/join-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Enroll Your School
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding py-16 md:py-24 bg-warm-gray text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <GraduationCap className="w-10 h-10 text-saffron mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
            Every Child Deserves a Chance
          </h2>
          <p className="mt-5 text-text-secondary leading-relaxed">
            Help us reach more children by spreading the word, volunteering, or
            supporting the Gurukul initiative. Together, we can transform lives
            through the power of education and ancient wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
            >
              Support the Gurukul
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

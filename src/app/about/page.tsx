"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  HandHeart,
  Users,
  Heart,
  BookOpen,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const values = [
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    description:
      "Nurturing inner transformation through the timeless teachings of the Bhagavad Gita, guiding individuals toward self-realization and divine connection.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Providing free, value-based holistic education that blends ancient Gurukul wisdom with modern learning to empower underprivileged children.",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    description:
      "Alleviating both spiritual and material poverty through compassionate action, skill training, and direct support for underserved communities.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Welcoming people of all faiths and backgrounds into a global family united by the universal wisdom of the Gita and the spirit of Vasudhaiva Kutumbakam.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="About Gita Global Family"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            About Gita Global Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A spiritual family dedicated to uplifting humanity through the
            eternal wisdom of the Bhagavad Gita.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Rooted in Ancient Wisdom, Growing for the World
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Gita Global Family was founded with a singular vision — to bring
              the transformative teachings of the Bhagavad Gita to every corner
              of the world. Born from the deep spiritual practice and compassion
              of Sriyut BrahmBodhi, the organization began as a small community
              of seekers and has grown into a global movement.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What started as intimate study circles around the sacred verses of
              the Gita evolved into a comprehensive ecosystem of spiritual
              education, community service, and poverty alleviation. Today, Gita
              Global Family serves thousands across continents, united by the
              principle of <em>Vasudhaiva Kutumbakam</em> — the whole world is
              one family.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/vision.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            {...fadeInUp}
            className="bg-warm-gray rounded-2xl p-8 md:p-10 border border-cream-dark/30"
          >
            <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-saffron" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-4">
              Our Mission
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Gita Global Family is dedicated to helping communities worldwide,
              regardless of faith, with spiritual growth, economic empowerment,
              poverty alleviation, and providing free, high-quality education for
              children. We offer online Zoom classes six days a week, available
              on the Gita Global Gurukul YouTube channel, where children and
              schools can subscribe and benefit from these teachings.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-warm-gray rounded-2xl p-8 md:p-10 border border-cream-dark/30"
          >
            <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-saffron" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-4">
              Our Vision
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Gita Global Family envisions a world where spiritual wisdom and
              meaningful education empower underprivileged communities. Through
              efforts like educational camps for slum children and poverty
              alleviation research, we strive to alleviate both spiritual and
              material poverty, fostering hope and transformation globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/brahmabodhi.jpeg"
          alt="Sriyut BrahmBodhi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative section-padding">
          <div className="max-w-2xl">
            <motion.div {...fadeInUp}>
              <span className="text-saffron-light font-semibold text-sm uppercase tracking-wider">
                Our Leader
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-white leading-tight">
                Sriyut BrahmBodhi
              </h2>
              <p className="mt-5 text-white/85 leading-relaxed">
                Sriyut BrahmBodhi is the spiritual leader and visionary behind
                Gita Global Family. A devoted practitioner of Bhagavad Dharma, a
                prolific author, and a compassionate guide, he has dedicated his
                life to making the profound wisdom of the Bhagavad Gita
                accessible to all — transcending boundaries of language,
                culture, and geography.
              </p>
              <p className="mt-4 text-white/75 leading-relaxed">
                Through his insightful teachings, published works, and tireless
                service, Sriyut BrahmBodhi has inspired thousands to embark on a
                path of spiritual growth, selfless action, and inner peace.
              </p>
              <Link
                href="/brahmabodhi"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                Learn More About BrahmBodhi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide every initiative we undertake and every life we touch."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 bg-maroon text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <BookOpen className="w-10 h-10 text-saffron-light mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Join the Gita Global Family
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Be part of a growing community dedicated to spiritual growth,
            education, and uplifting humanity. Together, we can create a world
            rooted in wisdom and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Join Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

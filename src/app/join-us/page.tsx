"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Sparkles,
  Users,
  Globe,
  HandHeart,
  BookOpen,
  GraduationCap,
  Building,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const DONATE_LINK = "https://rzp.io/rzp/TsaLFcd";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const whyJoin = [
  {
    icon: Sparkles,
    title: "Empowers Individuals",
    description:
      "Gain access to transformative teachings and practices.",
  },
  {
    icon: Users,
    title: "Builds Community",
    description:
      "Connect with like-minded individuals from around the world.",
  },
  {
    icon: HandHeart,
    title: "Serves Humanity",
    description:
      "Participate in initiatives that promote peace, sustainability, and compassion.",
  },
  {
    icon: Globe,
    title: "Creates a Better World",
    description:
      "Contribute to a global family dedicated to universal welfare.",
  },
];

const contributions = [
  {
    icon: Building,
    title: "Gita Dham",
    description:
      "A Gita Dham is the worship place for followers of Bhagavad Dharma, much like a church for Christians, a synagogue for Jews, or a mosque for Muslims. The Gita Dham is at its heart, where the Bhagavad Gita is enshrined as the main deity. However, a Gita Dham is more than just a temple\u2014it\u2019s a holistic center for spiritual, material, and cultural growth.",
    cta: "Donate for Gita Dham",
  },
  {
    icon: Heart,
    title: "Poverty Alleviation Centre",
    description:
      "It is our mission to alleviate both spiritual and material poverty. In the Gita Dham complex, the Poverty Alleviation Centre (PAC) works to uplift communities by addressing material poverty. Farmers are trained in modern agricultural techniques and crop substitution to improve their yields, while those with limited land are equipped with vocational skills, such as plumbing and electrical work, to create sustainable livelihoods. The PAC serves everyone without discrimination, regardless of faith, race, or caste.",
    cta: "Donate for Poverty Alleviation",
  },
  {
    icon: BookOpen,
    title: "Gita Publications",
    description:
      'The Gita Global Family aims to spread the teachings of the Bhagavad Gita globally, fostering peace, unity, and spiritual growth while addressing material poverty. Through Geeta Global Publication, the trust has over 30 books in progress, including the recently published "Bhagavad Gita with an Essay on God\u2019s Ideas on Life Management." Plans include translating the Gita and related books into all languages.',
    extraPoints: [
      "Distribute free copies of the Gita to those who cannot afford it.",
      "Print books in multiple languages to reach a wider audience.",
    ],
    cta: "Donate for Gita Publications",
    secondaryCta: { label: "Purchase from Gita Publications", href: "/gita-publications" },
  },
  {
    icon: GraduationCap,
    title: "Gurukul & Ashram",
    description:
      "The Gita Global Family is creating a holistic space for growth and learning. Alongside the Gita Temple and a serene Ashram for spiritual retreats, the centerpiece of this development is the Gita Global Gurukul School. The Gurukul will provide children with more than just traditional education\u2014it will equip them with essential life skills, fostering their intellectual, emotional, and spiritual development.",
    cta: "Donate for Gurukul",
  },
];

const trusteeInfo = [
  {
    title: "Founder Trustees",
    description: "These are the trustees named in the original Trust Deed.",
  },
  {
    title: "Regular Trustees",
    description:
      "Trustees with a continuous tenure of four years or more, excluding Founder Trustees.",
  },
  {
    title: "Global Trustees",
    description:
      "Open to citizens of countries other than India, living in their home country. Global Trustees typically serve a continuous tenure of two years. After completing at least two tenures (totaling four years, which may or may not be consecutive), they may be appointed as Regular Trustees.",
  },
  {
    title: "Board of Trustees",
    description:
      "The collective group of all trustees who guide the organization\u2019s mission and vision.",
  },
];

const faqs = [
  {
    q: "Do I have to give up my faith or religion to join Gita Global Family?",
    a: "No. The Gita Global Family welcomes people of all faiths and backgrounds. The Bhagavad Gita\u2019s teachings are universal and complement any spiritual or religious path.",
  },
  {
    q: "How can I join GGF as a volunteer?",
    a: "You can reach out to us via the Contact page or email namaste@gitaglobalfamily.org. We\u2019ll connect you with the right team based on your skills and interests.",
  },
  {
    q: "Where can I learn more about the organization\u2019s goals and structure?",
    a: "Visit the About page for details on our mission, vision, and organizational structure, or explore the BrahmBodhi page to learn about our founder.",
  },
  {
    q: "Can I organize a fundraising event at home?",
    a: "Absolutely! We encourage community-led fundraising. Contact us and we\u2019ll provide guidance, materials, and support to make your event successful.",
  },
  {
    q: "What\u2019s the minimum age to volunteer?",
    a: "There is no strict minimum age. Young volunteers are welcome and can participate in activities appropriate for their age, with parental consent.",
  },
  {
    q: "Is the organization transparent?",
    a: "Yes. GGF is a registered trust and maintains full transparency in its financial reporting. All donations are tax-exempt under 80G.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-cream-dark/30 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-dark-brown text-sm md:text-base pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Join the Family"
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto"
          >
            Become Part of the{" "}
            <span className="text-saffron-light">GITA Global Family</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Together, we grow, learn, and make a difference.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading title="Why Join Us" />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The GITA Global Family is a worldwide community united by the
          teachings of the Bhagavad Gita and a shared commitment to spiritual
          growth, selfless service, and universal well-being. When you join us,
          you become part of a movement that:
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoin.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="text-center mt-10">
          <p className="text-text-secondary leading-relaxed max-w-xl mx-auto mb-6">
            You can become an active member of our trust from any location
            worldwide.
          </p>
        </motion.div>
      </section>

      {/* Other Ways to Contribute */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Other Ways to Contribute to the Gita Global Family"
          subtitle="Here are the simple ways to join the Gita Global Family and be part of a global movement for peace, happiness, and spiritual growth."
        />
        <div className="space-y-8 max-w-4xl mx-auto">
          {contributions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-cream-dark/30 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-saffron" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-dark-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                  {item.extraPoints && (
                    <div className="mt-4">
                      <p className="text-text-secondary text-sm font-medium mb-2">
                        Donations for Gita Publications are used to:
                      </p>
                      <ul className="space-y-1.5">
                        {item.extraPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="text-saffron mt-0.5">&bull;</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                        You can sponsor any number of books. If you&apos;d like
                        to support a specific cause, please contact us directly.
                        Additionally, you may choose to distribute the books
                        yourself&mdash;we can print and ship your sponsored
                        quantity to you.
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a
                      href={DONATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors"
                    >
                      {item.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {item.secondaryCta && (
                      <Link
                        href={item.secondaryCta.href}
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron text-sm font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
                      >
                        {item.secondaryCta.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trustee Structure */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading title="Be a Part of the GGF Trustee Structure?" />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          The Gita Global Family (GGF) offers opportunities to contribute as a
          trustee at different levels. Here&apos;s how you can be part of this
          leadership structure:
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trusteeInfo.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-6 border border-cream-dark/30"
            >
              <h3 className="text-base font-bold text-dark-brown mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect & Volunteer */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/vision.jpg"
          alt="Connect and Volunteer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-maroon/85" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Connect, Contribute, and Grow Together
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              At Gita Global Family, we believe that spiritual journeys become
              richer when walked together. Whether you&apos;re looking to stay
              inspired, engage in uplifting conversations, or contribute your
              time and talents&mdash;there&apos;s a space for you here.
            </p>
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Connect & Volunteer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Donations */}
      <section
        id="donations"
        className="section-padding py-16 md:py-24 bg-dark-brown text-center"
      >
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <Heart className="w-10 h-10 text-saffron-light mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Support Our Mission
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Your donations directly fund free education for underprivileged
            children, community service programs, and the global outreach of
            Bhagavad Gita&apos;s teachings. Every contribution, no matter how
            small, creates a lasting impact.
          </p>
          <a
            href={DONATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </a>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
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

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
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

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
    title: "Gita Dham",
    image: img("joinus-gitadham.jpeg"),
    description: [
      "A Gita Dham is the worship place for followers of Bhagavad Dharma, much like a church for Christians, a synagogue for Jews, or a mosque for Muslims. The Gita Dham is at its heart, where the Bhagavad Gita is enshrined as the main deity.",
      "However, a Gita Dham is more than just a temple\u2014it\u2019s a holistic center for spiritual, material, and cultural growth.",
    ],
    cta: "Donate for Gita Dham",
  },
  {
    title: "Poverty Alleviation Centre",
    image: img("joinus-poverty.jpeg"),
    description: [
      "It is our mission to alleviate both spiritual and material poverty. In the Gita Dham complex, the Poverty Alleviation Centre (PAC) works to uplift communities by addressing material poverty.",
      "Farmers are trained in modern agricultural techniques and crop substitution to improve their yields, while those with limited land are equipped with vocational skills, such as plumbing and electrical work, to create sustainable livelihoods.",
      "The PAC serves everyone without discrimination, regardless of faith, race, or caste, ensuring holistic development for all. Together, we strive to create a future where both spiritual and material needs are met, fostering equality and growth.",
    ],
    cta: "Donate for Poverty Alleviation",
  },
  {
    title: "Gita Publications",
    image: img("joinus-publications.jpeg"),
    description: [
      'The Gita Global Family aims to spread the teachings of the Bhagavad Gita globally, fostering peace, unity, and spiritual growth while addressing material poverty. Through Geeta Global Publication, the trust has over 30 books in progress, including the recently published "Bhagavad Gita with an Essay on God\u2019s Ideas on Life Management." This 400-page book translates all 700 verses, provides chapter introductions, and outlines ten paths to liberation (Nirvana).',
      "Plans include translating the Gita and related books into all languages, making its wisdom accessible to everyone.",
    ],
    extraHeading: "Donations for Gita Publications are used to:",
    extraPoints: [
      "Distribute free copies of the Gita to those who cannot afford it.",
      "Print books in multiple languages to reach a wider audience.",
    ],
    extraNote:
      "You can sponsor any number of books. If you\u2019d like to support a specific cause, please contact us directly. Additionally, you may choose to distribute the books yourself\u2014we can print and ship your sponsored quantity to you.",
    cta: "Donate for Gita Publications",
    secondaryCta: {
      label: "Purchase from Gita Publications",
      href: "/gita-publications",
    },
  },
  {
    title: "Gurukul & Ashram",
    image: img("joinus-gurukul.jpg"),
    description: [
      "The Gita Global Family is creating a holistic space for growth and learning. Alongside the Gita Temple and a serene Ashram for spiritual retreats, the centerpiece of this development is the Gita Global Gurukul School.",
      "The Gurukul will provide children with more than just traditional education\u2014it will equip them with essential life skills, fostering their intellectual, emotional, and spiritual development. Rooted in the timeless wisdom of the Bhagavad Gita, the school aims to nurture well-rounded individuals who can thrive in all aspects of life.",
      "This initiative reflects our commitment to empowering future generations with knowledge, values, and practical skills, ensuring they grow into confident, compassionate, and capable individuals.",
    ],
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

const galleryImages = [
  { src: img("joinus-gallery-1.jpg"), alt: "Community gathering" },
  { src: img("joinus-gallery-2.jpg"), alt: "Spiritual event" },
  { src: img("joinus-gurukul.jpg"), alt: "Gurukul learning" },
  { src: img("joinus-gitadham.jpeg"), alt: "Gita Dham" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-cream-dark/40 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/40 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-dark-brown text-sm md:text-base pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-saffron shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image
          src={img("joinus-hero.jpeg")}
          alt="Join the Gita Global Family"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/80 via-dark-brown/60 to-dark-brown/80" />
        <div className="relative section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-5"
          >
            <a
              href="#donations"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron/90 text-white text-sm font-semibold rounded-full hover:bg-saffron transition-colors backdrop-blur-sm"
            >
              <Heart className="w-4 h-4" />
              Support Us
            </a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
          >
            Become Part of the{" "}
            <span className="text-saffron-light">GITA Global Family</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Together, we grow, learn, and make a difference.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding py-20 md:py-28">
        <SectionHeading title="Why Join Us" />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-14 text-base md:text-lg leading-relaxed"
        >
          The GITA Global Family is a worldwide community united by the
          teachings of the Bhagavad Gita and a shared commitment to spiritual
          growth, selfless service, and universal well-being. When you join us,
          you become part of a movement that:
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyJoin.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 text-center border border-cream-dark/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-saffron/15 to-saffron/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-saffron" />
              </div>
              <h3 className="text-lg font-bold text-dark-brown mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cream to-cream-dark/60 rounded-2xl border border-cream-dark/30">
            <Users className="w-5 h-5 text-saffron" />
            <p className="text-text-secondary font-medium">
              You can become an active member of our trust from any location
              worldwide.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Other Ways to Contribute */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-padding">
          <SectionHeading
            title="Other Ways to Contribute to the Gita Global Family"
            subtitle="Here are the simple ways to join the Gita Global Family and be part of a global movement for peace, happiness, and spiritual growth."
          />
        </div>

        <div className="space-y-0">
          {contributions.map((item, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.section
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`py-12 md:py-16 ${i > 0 ? "border-t border-cream-dark/30" : ""}`}
              >
                <div className="section-padding">
                  <div
                    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-14 items-center max-w-6xl mx-auto`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-5/12 shrink-0">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-7/12">
                      <h3 className="text-2xl md:text-3xl font-bold text-dark-brown mb-5">
                        {item.title}
                      </h3>
                      <div className="space-y-3">
                        {item.description.map((para, pi) => (
                          <p
                            key={pi}
                            className="text-text-secondary leading-relaxed"
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {item.extraHeading && (
                        <div className="mt-5">
                          <p className="text-text-secondary font-semibold mb-2">
                            {item.extraHeading}
                          </p>
                          <ul className="space-y-2 ml-1">
                            {item.extraPoints?.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-3 text-text-secondary"
                              >
                                <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                          {item.extraNote && (
                            <p className="text-sm text-text-muted mt-3 leading-relaxed italic">
                              {item.extraNote}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3 mt-7">
                        <a
                          href={DONATE_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md hover:shadow-lg"
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
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      {/* Trustee Structure */}
      <section className="section-padding py-20 md:py-28">
        <SectionHeading title="Be a Part of the GGF Trustee Structure?" />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
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
              className="bg-gradient-to-br from-white to-cream/60 rounded-2xl p-7 border border-cream-dark/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-saffron/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-saffron font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark-brown mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect & Volunteer */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={img("joinus-gallery-2.jpg")}
          alt="Connect and Volunteer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-dark-brown/90" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <HandHeart className="w-4 h-4 text-saffron-light" />
              <span className="text-white/90 text-sm font-medium">
                Join Our Network
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Connect, Contribute, and Grow Together
            </h2>
            <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
              At Gita Global Family, we believe that spiritual journeys become
              richer when walked together. Whether you&apos;re looking to stay
              inspired, engage in uplifting conversations, or contribute your
              time and talents&mdash;there&apos;s a space for you here.
            </p>
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Connect & Volunteer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-20 md:py-28 bg-warm-gray">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding py-20 md:py-28">
        <SectionHeading
          title="Gallery"
          subtitle="Capture the essence of mindfulness in every breath and pose."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl shadow-md group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md"
          >
            All Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Donations CTA */}
      <section
        id="donations"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-brown via-maroon to-dark-brown" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(232,119,46,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,119,46,0.2) 0%, transparent 50%)",
          }} />
        </div>
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-saffron-light" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Support Our Mission
            </h2>
            <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
              Your donations directly fund free education for underprivileged
              children, community service programs, and the global outreach of
              Bhagavad Gita&apos;s teachings. Every contribution, no matter how
              small, creates a lasting impact.
            </p>
            <a
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-saffron text-white text-lg font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

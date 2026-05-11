"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Scale, Users, Landmark } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img, doc } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const objectives = [
  {
    icon: BookOpen,
    title: "Scriptures in Every Home",
    description:
      "Free distribution of the Bhagavad Gita and Ramkatha texts to over 200 million Sanatani households across Bharat.",
  },
  {
    icon: Users,
    title: "Training of Priests & Acharyas",
    description:
      "Creation of a national cadre of one million trained Purohits and Adhyātmāchāryas to guide communities across 6 lakh+ villages.",
  },
  {
    icon: Landmark,
    title: "Temple Revitalisation",
    description:
      "Transforming neglected temples into vibrant centres of spiritual, cultural, and economic development with trained priests.",
  },
  {
    icon: Scale,
    title: "Autonomous & Transparent Fund",
    description:
      "Governed by a Sant Parishad of 11 members, audited annually by the CAG, with administrative costs capped at 10%.",
  },
];

const keyFeatures = [
  "Voluntary contributions by every Hindu — monthly or one-time — via UPI or bank transfer",
  "90% of funds for predetermined objectives; 10% reserved for emergency relief",
  "Rehabilitation support for Hindu refugees from Bangladesh, Pakistan, Afghanistan & Kashmir",
  "Chain of Sanatan schools integrating modern and Dharmic education (Article 28(3) compliant)",
  "Digital platforms for Dharma education",
  "International branches for the Indian diaspora",
  "Annual reports presented before Parliament with full public transparency",
];

export default function SanatanSevaNidhiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Sanatan Seva Nidhi Act"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            A Historic Legislative Initiative
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            The Sanatan Seva Nidhi Act
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            For the Protection and Empowerment of Sanatan Dharma — Conceived
            and drafted by Bhagavad-Dharma Pīthādhiśa Sriyut Brahm Bodhi,
            President of Gita Global Family Trust.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-white/65 text-sm max-w-2xl mx-auto"
          >
            The full draft of the Act was sent to the Prime Minister&apos;s
            Office and NITI Aayog on 17 October 2025.
          </motion.p>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding py-14 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Download the Act"
            subtitle="The concept paper and gist of the Draft Sanatan Seva Nidhi Act is available in both English and Hindi."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              {...fadeInUp}
              href={doc("sewa-nidhi-act-english.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-cream-dark/40 hover:shadow-xl hover:border-saffron/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
                <FileText className="w-8 h-8 text-saffron" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-dark-brown text-lg">
                  English Version
                </h3>
                <p className="text-sm text-text-muted mt-1">PDF • 12 pages</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </span>
            </motion.a>

            <motion.a
              {...fadeInUp}
              href={doc("sewa-nidhi-act-hindi.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-cream-dark/40 hover:shadow-xl hover:border-saffron/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
                <FileText className="w-8 h-8 text-saffron" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-dark-brown text-lg">
                  हिंदी संस्करण
                </h3>
                <p className="text-sm text-text-muted mt-1">PDF • 10 pages</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Background" />
          <motion.div
            {...fadeInUp}
            className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg"
          >
            <p>
              Bharat&apos;s ancient Sanatan civilisation — nourished by the
              Bhagavad Gita, the Vedas, the Upanishads, the Ramayana, and other
              heritage scriptures — has for millennia provided moral, cultural,
              and spiritual guidance to society.
            </p>
            <p>
              At present, other religious communities possess their own statutory
              frameworks (such as the Waqf Act, 1995 for Muslims and the Sikh
              Gurdwaras Act, 1925 for Sikhs), whereas Sanatan Dharma lacks a
              unified legal mechanism of similar nature.
            </p>
            <p>
              To fill this long-standing void, the{" "}
              <strong className="text-dark-brown">
                Sanatan Seva Nidhi Act
              </strong>{" "}
              is hereby proposed — establishing a transparent, autonomous fund
              for the protection, preservation and empowerment of Sanatan
              Dharma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Key Objectives" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-cream-dark/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mb-4">
                <obj.icon className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-2">
                {obj.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Key Features of the Act" />
          <motion.ul {...fadeInUp} className="space-y-4">
            {keyFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary leading-relaxed"
              >
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-saffron shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Five Challenges */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Five Challenges & Their Solutions" />
          <motion.div {...fadeInUp} className="space-y-6">
            {[
              {
                challenge: "Absence of Well-Trained Religious Preceptors",
                solution:
                  "Large-scale training of Adhyatma-Acharyas and Purohits starting from 6th grade, with mandatory curriculum covering the Gita, Vedas, Upanishads, and comparative religion.",
              },
              {
                challenge: "Absence of Scriptures in Hindu Homes",
                solution:
                  "Free distribution of the Bhagavad Gita and regional Ramkatha texts to every Hindu household — over 200 million families.",
              },
              {
                challenge: "Neglected Temples",
                solution:
                  "Appointing trained priests and Acharyas to revitalise temples as centres of spiritual, cultural, and economic renewal.",
              },
              {
                challenge: "Lack of Unity",
                solution:
                  "Shared scriptures (Gita and Ramayana) in every home create shared vision, forming the foundation of religious unity.",
              },
              {
                challenge: "Absence of an Organised System of Giving",
                solution:
                  "A statutory, transparent fund (Sanatan Seva Nidhi) where even a street vendor can contribute via UPI with full confidence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-cream-dark/30"
              >
                <h3 className="font-semibold text-dark-brown mb-2">
                  {i + 1}. {item.challenge}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong className="text-saffron">Solution:</strong>{" "}
                  {item.solution}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Governance & Accountability" />
          <motion.div
            {...fadeInUp}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              "Annual audit by the Comptroller and Auditor General (CAG)",
              "Governing Council of 11 eminent saints and scholars on 2-year rotation",
              "All accounts in public sector banks",
              "Annual reports presented before Parliament",
              "Council members serve without salary",
              "Donors receive 80G and CSR benefits",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-saffron shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Essence / CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Sanatan Seva Nidhi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              A Historic Initiative for Sanatan Dharma
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Through this fund, scriptures such as the Gita and Ramayana will
              reach every Hindu household free of cost, and one million trained
              priests and Adhyatma-Acharyas can be prepared to guide
              India&apos;s six hundred thousand villages spiritually, socially,
              and economically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={doc("sewa-nidhi-act-english.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download English PDF
              </a>
              <a
                href={doc("sewa-nidhi-act-hindi.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30"
              >
                <Download className="w-4 h-4" />
                हिंदी PDF डाउनलोड करें
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

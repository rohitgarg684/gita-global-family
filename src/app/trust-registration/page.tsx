"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ScrollText,
  Download,
  FileText,
  Sparkles,
  Target,
  Compass,
  Users,
  Landmark,
  Gavel,
  MapPin,
  Calendar,
  Hash,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  CheckCircle2,
  Eye,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img, doc } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const PDF_URL = doc("ggf-trust-deed.pdf");

const pageImages = Array.from({ length: 15 }, (_, i) => ({
  src: img(`trust-deed-page-${String(i + 1).padStart(2, "0")}.png`),
  label: `Page ${i + 1}`,
}));

const certificateFacts = [
  {
    icon: Hash,
    label: "Certificate No.",
    value: "IN-UP31860372751718U",
  },
  {
    icon: Calendar,
    label: "Issued Date",
    value: "01 July 2022",
  },
  {
    icon: Landmark,
    label: "Issuing Authority",
    value: "Government of Uttar Pradesh",
  },
  {
    icon: FileText,
    label: "Document Type",
    value: "Article 64 (A) Trust — Declaration of Trust",
  },
  {
    icon: MapPin,
    label: "Registered Office",
    value:
      "103-104, Krishna 3C, Omaxe Eternity, Bhakti Vedanta Path, Vrindavan-281121, Mathura, Uttar Pradesh, India",
  },
  {
    icon: MapPin,
    label: "Permanent Office",
    value:
      "C-10, Ganga Vatika-1, Muni Ki Reti, Rishikesh, Tehri Garhwal, Uttarakhand, India",
  },
  {
    icon: Users,
    label: "Settler / Author",
    value:
      "BrahmBodhi (Sri Pradeep Karan Siddharth), son of late Sri Nirmal Kumar",
  },
  {
    icon: ScrollText,
    label: "Registration",
    value:
      "Book No. 4, Vol. 206, Pages 137–160, Sr. No. 248 — Sub Registrar IInd, Mathura",
  },
];

const founderTrustees = [
  {
    name: "Sri Pradeep Karan Siddharth (BrahmBodhi)",
    role: "Settler / Author / President-for-life",
    location: "Vrindavan, Mathura, Uttar Pradesh",
  },
  {
    name: "Mr. Basavaraja Patil",
    role: "Founder Trustee",
    location: "Veerapur, Turvihal, Raichur, Karnataka",
  },
  {
    name: "Mr. Kamlesh Krishnamurti",
    role: "Founder Trustee",
    location: "Vrindavan, Mathura, Uttar Pradesh",
  },
  {
    name: "Mr. Priyadarshi Siddharth",
    role: "Founder Trustee",
    location: "Bengaluru, Karnataka",
  },
];

const corePrinciples = [
  "Spiritual unity of humankind — the same God dwells in all souls.",
  "Trees, birds, and animals carry souls that are portions of God; they too deserve love and respect.",
  "All humans are essentially good as miniature manifestations of God.",
  "Wisdom from every nation, faith and community can help us rise out of spiritual and material poverty.",
  "Every community’s quest for truth and justice elevates human existence.",
  "Human problems can be solved with planning, cooperation, love and non-violence.",
  "Peace is a precondition for happiness — conflict and violence destroy both.",
  "Human life is precious and deserves protection and care.",
  "Inter-faith and inter-community dialogue helps us learn and resolve mutual issues.",
  "Compassion extends to the Earth itself — the climate crisis is a failure of stewardship.",
];

const coreObjectives = [
  "Create a global family rooted in peace, compassion, togetherness and friendship — forming GGF Chapters across countries.",
  "Spread spirituality through Integrative Yoga — Bhakti, Karma, Jnana, Paropkar and Dhyana yogas of the Bhagavad Gita.",
  "Print, publish and disseminate the Bhagavad Gita and allied literature through books, magazines, newspapers, films, audio and video.",
  "Establish Gita Global Gurukuls, Schools and Universities for character formation grounded in the Bhagavad Gita.",
  "Establish Gita Dhams — holy temples for all-faith prayer, programs and Total Development Centres.",
  "Run hospitals, holistic health centres, food kitchens, shelters for forsaken children, women and elders, and care for abandoned animals.",
  "Provide relief to victims of floods, fires, droughts, famines, epidemics, cyclones, earthquakes and accidents.",
  "Establish spiritual seekers’ colonies and retreats to facilitate deeper sadhana.",
];

const otherObjectives = [
  "Scholarships and fellowships for students, scholars, researchers and idea-disseminators.",
  "Meetings, seminars, rallies, awareness programs and competitions to advance the Trust’s objectives.",
  "Awards and medals for outstanding contributions to humanity, peace, rural development, women’s empowerment, spiritual awakening, education, arts and culture.",
  "Raising resources globally — in cash and kind — to fulfil the Trust’s mission.",
  "Lawful fundraising, international travel, networking and infrastructure building.",
];

const trustUnits = [
  {
    icon: Landmark,
    title: "GGF Global Council",
    desc: "World-level body with at least one member per country. Monitors National Chapters and advises the Trust on policy.",
  },
  {
    icon: Users,
    title: "National & Provincial Chapters",
    desc: "Country and state level bodies — ideally 20+ members per chapter — running activities locally under the Trust’s vision.",
  },
  {
    icon: Compass,
    title: "Gita Global Network",
    desc: "Country chapters that identify, invite and integrate seekers worldwide into the Gita Global Family.",
  },
  {
    icon: Sparkles,
    title: "Gita Global Gurukuls",
    desc: "Free rural schools combining Gita-based character education with skill training and vocational learning for self-employment.",
  },
  {
    icon: Target,
    title: "Schools, Colleges & Universities",
    desc: "Institutions that add the missing value-education and spiritual orientation to mainstream academics.",
  },
  {
    icon: ScrollText,
    title: "Gita Global Publication",
    desc: "Publishes the Bhagavad Gita and works authored or interpreted by BrahmBodhi, along with approved journals and materials.",
  },
  {
    icon: Landmark,
    title: "Gita Dhams",
    desc: "Holy places for prayer, worship and human service, with connected Total Development Centres for upliftment.",
  },
];

const governanceHighlights = [
  {
    title: "Charitable & Compliant",
    desc: "Run in accordance with the Charitable Trusts Acts of India and the laws of all countries of operation.",
  },
  {
    title: "Audited Finances",
    desc: "Follows standard financial protocol with practices benchmarked to leading institutions and reviewed by reputed Chartered Accountants.",
  },
  {
    title: "Transparent Voting",
    desc: "Founder Trustees carry two votes each; other Trustees carry one. President does not vote unless to break a tie.",
  },
  {
    title: "Inclusive Meetings",
    desc: "Trustees meet via audio/video conferencing regularly with at least one physical annual meeting — Global Trustees especially welcomed.",
  },
  {
    title: "Volunteer Ethos",
    desc: "Trustees serve voluntarily and may only claim genuinely necessary expenses; no personal gain from Trust work.",
  },
  {
    title: "Irrevocable Trust",
    desc: "Core objectives, mission and vision are protected — amendable only by a 3/4ths majority resolution of the Board.",
  },
];

const corpusFundFacts = [
  { label: "Corpus Fund", value: "Rs. 51,000" },
  { label: "Stamp Duty Paid", value: "Rs. 1,110" },
  { label: "Stamp Type", value: "India Non-Judicial e-Stamp" },
  { label: "Registered On", value: "01 July 2022, Mathura" },
];

export default function TrustRegistrationPage() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setViewerIndex(i), []);
  const close = useCallback(() => setViewerIndex(null), []);
  const next = useCallback(
    () =>
      setViewerIndex((i) =>
        i === null ? null : (i + 1) % pageImages.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setViewerIndex((i) =>
        i === null
          ? null
          : (i - 1 + pageImages.length) % pageImages.length
      ),
    []
  );

  useEffect(() => {
    if (viewerIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerIndex, close, next, prev]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Trust Registration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/80 via-maroon/70 to-dark-brown/80" />
        <div className="relative section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/20 border border-saffron/40 text-saffron-light text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Registered Public Charitable Trust
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Registration Certificate &amp; Trust Deed
            </h1>
            <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed">
              The legal foundation of Gita Global Family — a Public Charitable
              Trust registered under the Indian Trusts Act, 1882, on the 1st of
              July, 2022 at Mathura, Uttar Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Full PDF
              </a>
              <a
                href="#certificate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="bg-saffron/10 border-b border-saffron/20">
        <div className="section-padding py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {corpusFundFacts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-saffron-dark">
                {f.label}
              </p>
              <p className="mt-1 text-base md:text-lg font-bold text-dark-brown">
                {f.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificate Showcase */}
      <section id="certificate" className="section-padding py-16 md:py-24">
        <SectionHeading
          title="The Stamp Certificate"
          subtitle="The official India Non-Judicial e-Stamp issued by the Government of Uttar Pradesh that records the formal declaration of the Trust."
        />
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div
            {...fadeInUp}
            className="lg:col-span-2 group cursor-pointer"
            onClick={() => open(0)}
          >
            <div className="relative aspect-[210/297] rounded-2xl overflow-hidden shadow-2xl border-4 border-saffron/30 bg-white">
              <Image
                src={pageImages[0].src}
                alt="GGF Trust Registration Certificate"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full text-sm font-semibold text-dark-brown">
                  <ZoomIn className="w-4 h-4" />
                  Click to expand
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-text-muted text-center">
              Click the certificate to view fullscreen
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-3 space-y-4">
            {certificateFacts.map((f) => (
              <div
                key={f.label}
                className="flex gap-4 p-4 rounded-xl bg-cream border border-cream-dark/30 hover:border-saffron/40 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-saffron/15 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-saffron" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {f.label}
                  </p>
                  <p className="mt-0.5 text-sm md:text-base text-dark-brown font-medium break-words">
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Trustees */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="The Founder Trustees"
          subtitle="The settler and the founding trustees who signed the Trust Deed and pledged to carry forward its mission."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founderTrustees.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-cream-dark/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-maroon/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="text-base font-bold text-dark-brown leading-tight">
                {t.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-saffron">
                {t.role}
              </p>
              <p className="mt-2 text-sm text-text-secondary flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{t.location}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-saffron/10 to-saffron/5 border border-saffron/30"
          >
            <div className="w-14 h-14 bg-saffron/20 rounded-2xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-saffron" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-4">
              The Vision
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Spiritual and material poverty afflict different parts of the
              world in various measures. The GGF Trust seeks to address both —
              guided by the Bhagavad-Gita, the universally admired{" "}
              <em>Holy Book of Humanity</em> — to build a global family imbued
              with Gita values: prosperous without being covetous, working for
              peace, non-violence, love, compassion and the dignity of every
              being and the Earth itself.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-maroon/10 to-maroon/5 border border-maroon/30"
          >
            <div className="w-14 h-14 bg-maroon/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-maroon" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark-brown mb-4">
              The Mission
            </h3>
            <p className="text-text-secondary leading-relaxed">
              To augment humankind&apos;s general happiness by eliminating
              spiritual and material poverty in light of the ideas espoused by
              the Bhagavad-Gita — and by creating a global family that brings
              peace, moderate prosperity for all, love, compassion,
              togetherness and non-violent behaviour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Our Core Principles"
          subtitle="Ten guiding beliefs from the Trust Deed that anchor every initiative of the Gita Global Family."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {corePrinciples.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
              className="flex gap-3 p-5 bg-white rounded-xl border border-cream-dark/30"
            >
              <CheckCircle2 className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Objectives of the GGF Trust"
          subtitle="Core and supporting objectives codified in the Trust Deed."
        />
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-bold text-dark-brown mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-saffron" />
              Core Objectives
            </h3>
            <ul className="space-y-3">
              {coreObjectives.map((o, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-lg bg-warm-gray border border-cream-dark/20"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-saffron text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-lg font-bold text-dark-brown mb-5 flex items-center gap-2">
              <HandHeartIcon />
              Other Objectives
            </h3>
            <ul className="space-y-3">
              {otherObjectives.map((o, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-lg bg-warm-gray border border-cream-dark/20"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Units / Structure */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Structure & Organs of the Trust"
          subtitle="The Trust Deed envisions multiple semi-autonomous units that together carry the Gita to the world."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustUnits.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-cream-dark/30 hover:shadow-lg hover:border-saffron/40 transition-all"
            >
              <div className="w-12 h-12 bg-saffron/10 rounded-2xl flex items-center justify-center mb-4">
                <u.icon className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-base font-bold text-dark-brown mb-2">
                {u.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {u.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Governance Highlights */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Governance &amp; Compliance"
          subtitle="How the Trust runs — transparent, audited, and faithful to its founding ideals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {governanceHighlights.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cream to-white border border-saffron/20"
            >
              <div className="w-10 h-10 bg-maroon/10 rounded-xl flex items-center justify-center mb-3">
                <Gavel className="w-5 h-5 text-maroon" />
              </div>
              <h3 className="text-base font-bold text-dark-brown mb-2">
                {g.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {g.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Document Browser */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Browse the Full Document"
          subtitle="All 15 pages of the Registration Certificate, Trust Deed and registration receipts. Click any page to open it fullscreen."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {pageImages.map((p, i) => (
            <motion.button
              key={p.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              onClick={() => open(i)}
              className="group relative aspect-[210/297] rounded-xl overflow-hidden bg-white border-2 border-cream-dark/30 hover:border-saffron transition-all shadow-sm hover:shadow-xl"
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold flex items-center justify-between">
                  {p.label}
                  <ZoomIn className="w-3.5 h-3.5" />
                </p>
              </div>
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-dark-brown">
                {p.label}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download the Complete PDF
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 bg-maroon text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <ShieldCheck className="w-10 h-10 text-saffron-light mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            A Trust Rooted in Dharma
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Every donation, every program and every Gurukul class is anchored
            in the principles of this Trust Deed. Join the family and help us
            carry the Gita to every corner of the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Join the Family
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {viewerIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={viewerIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl h-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={pageImages[viewerIndex].src}
                alt={pageImages[viewerIndex].label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </motion.div>

            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
              {pageImages[viewerIndex].label} of {pageImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HandHeartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-maroon"
    >
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
    </svg>
  );
}

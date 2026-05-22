"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Landmark,
  BookOpenText,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Briefcase,
  Users,
  Target,
  CheckCircle2,
  MessageCircle,
  Mail,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

type Project = {
  id: string;
  step: string;
  title: string;
  tagline: string;
  image: string;
  icon: typeof Landmark;
  summary: string;
  highlights: string[];
  outcomes: string[];
};

const projects: Project[] = [
  {
    id: "temple-empowerment",
    step: "Project 1",
    title: "Temple Empowerment",
    tagline: "Restoring the temple as the living heart of the village",
    image: img("project-temple-empowerment.png"),
    icon: Landmark,
    summary:
      "For centuries, the village temple was far more than a place of worship — it was a school, a courthouse, a community kitchen, and a moral compass. This project revives that role. We work with local priests, trustees, and villagers to develop the temple into a self‑sustaining hub of guidance, learning, and social coordination. Well‑trained priests are equipped not only to perform rituals, but to lead study circles, mediate disputes, counsel families, and uphold ethical leadership. As footfall and respect grow, the temple becomes financially sustainable and culturally central — capable of carrying every other project forward on its own.",
    highlights: [
      "Train priests in scripture, ethics, counselling, and community leadership",
      "Set up daily satsang, kirtan, and Gita study circles at the temple",
      "Establish the temple as a meeting place for village decisions and dispute resolution",
      "Develop sustainable temple income through devotee participation and community offerings",
    ],
    outcomes: [
      "Higher daily footfall and active community engagement",
      "Temple becomes financially self‑reliant",
      "Priests emerge as trusted spiritual and ethical guides",
    ],
  },
  {
    id: "spiritual-literacy",
    step: "Project 2",
    title: "Religious & Spiritual Literacy in 1,000 Homes",
    tagline: "A Gita in every household, clarity of Dharma in every heart",
    image: img("project-spiritual-literacy.png"),
    icon: BookOpenText,
    summary:
      "Faith without understanding is fragile. This project places carefully curated scriptures and study booklets in 1,000 households so that every family — from grandparents to grandchildren — can read, reflect, and discuss together. Each home receives a complete starter library: the Bhagavad Gita, a curated edition of the Ramcharitmanas, a student booklet of 51 selected verses of the Gita, a booklet on Moksha Vidya, a booklet on Dharma (right and wrong), and a religious‑spiritual literacy booklet that doubles as a self‑assessment guide. Together these become the daily curriculum of family life — turning passive belief into informed, knowledge‑based faith.",
    highlights: [
      "Free curated library distributed to every participating household",
      "Bhagavad Gita and curated Ramcharitmanas as core texts",
      "Student booklet of 51 essential Gita verses for memorisation",
      "Booklets on Moksha Vidya and Dharma — clarity on right and wrong",
      "Religious–spiritual literacy booklet for learning and self‑assessment",
    ],
    outcomes: [
      "Families gain shared spiritual vocabulary across generations",
      "Children grow up rooted in tradition, not borrowed ideas",
      "Faith becomes informed, articulate, and confident",
    ],
  },
  {
    id: "active-engagement",
    step: "Project 3",
    title: "Dharma Outreach Educators",
    tagline: "On‑the‑ground guides who walk with every family",
    image: img("project-holistic-wellbeing.png"),
    icon: HeartHandshake,
    summary:
      "Books alone rarely change lives — relationships do. We train and deploy Dharma Outreach Educators: humble, scripture‑literate, locally rooted extension workers who visit households regularly, build trust, and turn reading into living practice. They sit with families, answer doubts, organise neighbourhood satsangs, conduct group recitations, and run quiz competitions that make learning joyful. They become the bridge between the temple and the home, ensuring no family is left behind — especially the ones who would never walk in on their own.",
    highlights: [
      "One trained educator dedicated to a cluster of households",
      "Regular home visits — listening, reading, discussing, encouraging",
      "Neighbourhood group meetings, recitation circles, and satsangs",
      "Quiz competitions and Q&A sessions that make scripture interactive",
      "Continuous reporting loop with the temple and project leadership",
    ],
    outcomes: [
      "Every household engaged personally, not just informed",
      "Trust built across caste, gender, and economic lines",
      "Reading converted into reflection, and reflection into conduct",
    ],
  },
  {
    id: "youth-leadership",
    step: "Project 4",
    title: "Youth Leadership & Spiritual Ambassadors",
    tagline: "Tomorrow's Acharyas, identified and nurtured today",
    image: img("project-youth-leaders.png"),
    icon: Users,
    summary:
      "Every village holds within it a few young minds with extraordinary spiritual aptitude — children who, with the right guidance, will lead the next generation. Through periodic quiz competitions, evaluations, and observation, we identify these children, adolescents, and youth, and enrol them in an advanced development track. They receive deeper scriptural training, communication and public‑speaking skills, and structured leadership opportunities. They begin assisting the Dharma Outreach Educators, then lead study circles themselves, and eventually carry the message of Sanatan Dharma to neighbouring villages — multiplying the movement organically.",
    highlights: [
      "Talent identification through transparent quizzes and assessments",
      "Cash rewards, certificates, and public recognition for top performers",
      "Advanced spiritual training, oratory, and leadership coaching",
      "Hands‑on outreach experience under senior mentors",
      "Selection into the next phase of intensive economic empowerment",
    ],
    outcomes: [
      "A cadre of young, articulate ambassadors of Dharma",
      "Sustainable peer‑to‑peer multiplication of spiritual literacy",
      "Village pride in its own home‑grown leaders",
    ],
  },
  {
    id: "social-resilience",
    step: "Project 5",
    title: "Social Resilience & Conversion Immunity",
    tagline: "Rooted in tradition, fearless in conviction",
    image: img("project-social-resilience.png"),
    icon: ShieldCheck,
    summary:
      "Many of our villages today face quiet, organised attempts to uproot people from their tradition — through inducements, intimidation, or simple exploitation of ignorance. This project does not respond with hostility; it responds with knowledge. We help villagers understand the common methods, narratives, and psychological tactics used in such attempts, and equip them with intellectual and emotional strength to remain rooted in their own heritage with calm confidence. When a family knows what the Gita teaches about suffering, karma, and the Self — no false promise can shake them.",
    highlights: [
      "Awareness sessions on common conversion tactics and propaganda",
      "Clear, respectful answers to misconceptions about Sanatan Dharma",
      "Emotional resilience training for families under pressure",
      "Reinforced sense of cultural pride and shared identity",
      "Support network through temple, educators, and youth leaders",
    ],
    outcomes: [
      "A village that cannot be divided through ignorance or fear",
      "Confident, well‑informed faith that withstands pressure",
      "Inter‑family solidarity in protecting tradition",
    ],
  },
  {
    id: "livelihood-empowerment",
    step: "Project 6",
    title: "Livelihood & Economic Empowerment",
    tagline: "Spiritual growth, anchored in dignified self‑reliance",
    image: img("project-livelihood-empowerment.png"),
    icon: Briefcase,
    summary:
      "Spiritual transformation cannot rest on an empty stomach. Selected youth — identified through their performance and leadership in earlier phases — are guided towards real, dignified livelihoods. They are linked with Krishi Vigyan Kendras and agricultural universities, oriented towards skilled trades like electrical work and plumbing, and exposed to micro‑enterprise, entrepreneurship training, and suitable opportunities in the government and private sectors. In Year 1, this is a structured exposure to possibilities. In Year 2, top performers are selected into an intensive, hands‑on economic empowerment programme — so that the same youth who carry the Gita to neighbouring villages can also stand on their own feet with pride.",
    highlights: [
      "Year 1: structured exposure to careers, trades, and entrepreneurship",
      "Year 2: intensive empowerment programme for top performers",
      "Partnerships with Krishi Vigyan Kendras and agricultural universities",
      "Skill training in electrical work, plumbing, and other practical trades",
      "Micro‑enterprise mentoring and government/private sector linkages",
    ],
    outcomes: [
      "Economically self‑reliant young leaders",
      "Reduced migration and broken families",
      "A virtuous cycle — Dharma fuels livelihood, livelihood sustains Dharma",
    ],
  },
];

const coreObjectives = [
  {
    icon: Landmark,
    title: "Temple Empowerment",
    text: "Develop the temple as a self‑sustaining centre of spiritual guidance, ethical direction, and community leadership.",
  },
  {
    icon: BookOpenText,
    title: "Religious & Spiritual Literacy",
    text: "Build informed, knowledge‑based faith in 1,000 households — clarity on Dharma and the purpose of life.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    text: "Identify and nurture children, adolescents, and youth who can become local ambassadors of Dharma.",
  },
  {
    icon: ShieldCheck,
    title: "Social Resilience",
    text: "Make the village aware of conversion attempts and build intellectual & emotional strength to stay rooted in tradition.",
  },
  {
    icon: Sparkles,
    title: "Holistic Well‑being",
    text: "Help villagers lead happier, more meaningful, economically stable, and spiritually enriched lives.",
  },
];

const expectedOutcomes = [
  "The temple becomes central to village life again",
  "Most households achieve basic religious and spiritual literacy",
  "A trained cadre of youth leaders emerges from within the village",
  "The village develops calm, confident resilience against conversion pressures",
  "Economic awareness and self‑reliance steadily improve",
  "Overall happiness, clarity, and social cohesion increase",
  "Temple footfall rises — improving economic sustainability of the temple itself",
  "Well‑trained priests carry the programme forward independently",
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src={img("project-hero-temple-village.png")}
          alt="Temple-Centred Village Transformation Initiative"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Our Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto"
          >
            Temple‑Centred Village Transformation Initiative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A flagship initiative of Gita Global Family to transform every
            participating village into a spiritually aware, ethically grounded,
            economically capable, and socially united community — with the
            temple as its living heart.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              Explore the 6 Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/70 text-white font-semibold rounded-full hover:bg-white hover:text-dark-brown transition-colors"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="The Vision"
            subtitle="The temple should not remain only a place of worship — it should become a centre of guidance, learning, character‑building, and social strength."
          />
          <motion.figure
            {...fadeInUp}
            className="mt-4 pl-5 border-l-4 border-saffron bg-white rounded-r-xl py-5 pr-5 text-left max-w-3xl mx-auto shadow-sm"
          >
            <blockquote className="text-dark-brown font-medium text-base md:text-lg leading-relaxed whitespace-pre-line">
              {"यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥"}
            </blockquote>
            <figcaption className="mt-3 text-sm text-text-secondary italic">
              &ldquo;Whatever a great person does, others follow. Whatever
              standard they set, the world pursues.&rdquo;
              <span className="block mt-1 not-italic font-semibold text-saffron-dark">
                — Bhagavad Gita 3.21
              </span>
            </figcaption>
          </motion.figure>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-text-secondary leading-relaxed text-base md:text-lg"
          >
            Through this initiative, the community is expected to become
            spiritually aware, ethically grounded, economically capable,
            socially united, and protected from disruptive influences — all
            sustained by the temple at its centre.
          </motion.p>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="section-padding py-16 md:py-24 bg-white">
        <SectionHeading
          title="Core Objectives"
          subtitle="Five interlocking goals that together build a transformed village."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coreObjectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-cream rounded-2xl p-7 border border-cream-dark/30 hover:shadow-lg hover:border-saffron/40 transition-all"
            >
              <div className="w-12 h-12 bg-saffron/15 rounded-xl flex items-center justify-center mb-4">
                <obj.icon className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-2">
                {obj.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {obj.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Six Projects */}
      <section id="projects" className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="The Six Projects"
          subtitle="A simple, repeatable cycle — knowledge, engagement, assessment, incentive, leadership, and expansion."
        />
        <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={p.id}
                id={p.id}
                {...fadeInUp}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-cream-dark/30">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-brown leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-saffron-dark font-semibold text-base md:text-lg italic">
                      {p.tagline}
                    </p>
                    <p className="mt-5 text-text-secondary leading-relaxed text-base md:text-lg">
                      {p.summary}
                    </p>

                    <div className="mt-6">
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-dark-brown mb-3">
                        <Target className="w-4 h-4 text-saffron" />
                        What we do
                      </h4>
                      <ul className="space-y-2">
                        {p.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed"
                          >
                            <span
                              aria-hidden
                              className="mt-2 md:mt-2.5 w-1.5 h-1.5 rounded-full bg-saffron shrink-0"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 p-4 md:p-5 bg-white rounded-xl border border-saffron/20">
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-saffron-dark mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                        Expected impact
                      </h4>
                      <ul className="space-y-1.5">
                        {p.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-start gap-2 text-sm text-dark-brown"
                          >
                            <CheckCircle2 className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Key Roles */}
      <section className="section-padding py-16 md:py-24 bg-white">
        <SectionHeading
          title="Key Roles in the Movement"
          subtitle="Four pillars working in unison — none can succeed alone."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            {
              icon: Landmark,
              title: "The Temple",
              text: "The spiritual and social nucleus of the village.",
            },
            {
              icon: HeartHandshake,
              title: "Extension Worker",
              text: "The field‑level executor and relationship builder.",
            },
            {
              icon: Users,
              title: "Youth Leaders",
              text: "The future carriers of the movement.",
            },
            {
              icon: Sparkles,
              title: "The Community",
              text: "Active participants and beneficiaries.",
            },
          ].map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-cream rounded-2xl p-6 text-center border border-cream-dark/30 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-saffron/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="text-base font-semibold text-dark-brown mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="relative section-padding py-16 md:py-24 overflow-hidden bg-dark-brown">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-saffron/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeading
            title="Expected Outcomes"
            subtitle="By the end of the project — a measurable, visible transformation of village life."
            light
          />
          <div className="grid md:grid-cols-2 gap-4">
            {expectedOutcomes.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-saffron-light shrink-0 mt-0.5" />
                <p className="text-white/90 leading-relaxed">{o}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strength */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="The Core Strength of the Model" />
          <motion.p
            {...fadeInUp}
            className="text-text-secondary leading-relaxed text-base md:text-lg"
          >
            The strength of this initiative lies in combining{" "}
            <strong className="text-dark-brown">scriptural knowledge</strong>,{" "}
            <strong className="text-dark-brown">personal engagement</strong>,{" "}
            <strong className="text-dark-brown">
              motivation through competitions and rewards
            </strong>
            , and{" "}
            <strong className="text-dark-brown">
              practical economic upliftment
            </strong>
            . It does not operate only at the level of preaching — it aims at
            the holistic transformation of life itself.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-saffron/10 via-cream to-gold/10 rounded-3xl p-8 md:p-12 border border-saffron/20 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight"
          >
            Implement this initiative in your village
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-text-secondary leading-relaxed text-base md:text-lg max-w-2xl mx-auto"
          >
            We work hand‑in‑hand with temple trustees, village councils,
            donors, and volunteers who wish to bring the Temple‑Centred Village
            Transformation Initiative to their own community. Write to us or
            message us on WhatsApp for the detailed implementation guide.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918865052915"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp +91 88650 52915
            </a>
            <a
              href="mailto:namaste@gitaglobalfamily.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              namaste@gitaglobalfamily.org
            </a>
            <Link
              href="/join-us#donations"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron-dark font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
            >
              Support a Village
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-text-muted">
            Gita Global Family · Gopal 1‑F, 104, Omaxe Eternity, Vrindavan,
            Mathura, Uttar Pradesh, India — 281121
          </p>
        </div>
      </section>
    </>
  );
}

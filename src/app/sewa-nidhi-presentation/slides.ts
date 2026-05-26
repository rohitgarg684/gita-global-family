/**
 * Slide data for the Sanatan Seva Nidhi leadership presentation.
 *
 * Narrative structure (SCQA — Situation, Complication, Question, Answer):
 *   Slides 1-3   : Situation + the asymmetry (the hook)
 *   Slides 4-9   : Complication — the five structural weaknesses, with hard numbers
 *   Slide  10    : Question — what would a credible solution look like?
 *   Slides 11-16 : Answer — the Sanatan Seva Nidhi Act: structure, governance,
 *                  constitutional soundness, scale, objections, the specific ask.
 *
 * Every statistic is sourced from `src/app/sanatan-seva-nidhi/content.ts`.
 */

export type SlideLayout =
  | "cover"
  | "image-left"
  | "image-right"
  | "image-full"
  | "stat"
  | "grid"
  | "quote"
  | "closing";

export interface Stat {
  value: string;
  label: string;
  caption?: string;
}

export interface Slide {
  id: string;
  layout: SlideLayout;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  bullets?: string[];
  stats?: Stat[];
  image?: string;
  imageAlt?: string;
  footnote?: string;
  speakerNotes: string;
  accent?: "saffron" | "maroon" | "gold" | "dark";
}

const IMG = "/images/sewa-nidhi";

export const slides: Slide[] = [
  {
    id: "cover",
    layout: "cover",
    eyebrow: "A Legislative Proposal for the Government of India",
    title: "The Sanatan Seva Nidhi Act",
    subtitle:
      "For the Protection, Renaissance, and Empowerment of Sanatan Dharma",
    body: [
      "Conceived and drafted by Bhagavad-Dharma Pīṭhādhīśa Sriyut Brahm Bodhi",
      "President, Gita Global Family Trust",
    ],
    footnote:
      "Full draft submitted to the Prime Minister's Office and NITI Aayog · 17 October 2025",
    image: `${IMG}/ssn-01-cover.png`,
    imageAlt: "Lit diya at dawn over the Ganga with temple silhouettes",
    accent: "saffron",
    speakerNotes:
      "Open with gravity, not haste. This is not a request for a grant — it is a proposal for a statute. Pause on the date: the draft is already with PMO and NITI Aayog. We are here to walk leadership through why this Act matters and what it does.",
  },
  {
    id: "crossroads",
    layout: "image-right",
    eyebrow: "Situation",
    title: "A 5,000-year civilization is at a decisive crossroads.",
    body: [
      "Sanatan Dharma — nourished by the Bhagavad Gita, the Vedas, the Upanishads, and the Ramayana — has guided Bharat for millennia.",
      "Today, that civilizational anchor faces a structural test it has never faced before: not military, not philosophical — institutional.",
    ],
    image: `${IMG}/ssn-02-crossroads.png`,
    imageAlt: "Ancient temple at dusk contrasted with a modern Indian city",
    accent: "dark",
    speakerNotes:
      "Frame the conversation. The challenge is not theological. It is institutional. Every other major faith in India has a statutory framework. Sanatan Dharma does not. That gap, not faith, is what we are here to close.",
  },
  {
    id: "asymmetry",
    layout: "grid",
    eyebrow: "The Institutional Asymmetry",
    title: "Other faiths in India have statutes. Sanatan Dharma has none.",
    subtitle:
      "Every major religious community in Bharat operates within a dedicated legal framework — except the majority faith.",
    bullets: [
      "Waqf Act, 1995 — Muslim charitable endowments",
      "Sikh Gurdwaras Act, 1925 — Sikh religious institutions",
      "Anand Marriage Act, Indian Christian Marriage Act, Parsi Acts — community-specific civil laws",
      "Sanatan Dharma — no unified statutory mechanism",
    ],
    footnote:
      "Source: Executive Summary §1, Sanatan Seva Nidhi Act draft.",
    accent: "maroon",
    speakerNotes:
      "Lead with this. Senior officials respond to institutional gaps far more than to emotional appeals. The Waqf Act has 100 years of legislative pedigree; the Sikh Gurdwaras Act predates Independence. The proposal here is to fill an obvious, long-standing void — nothing more, nothing less.",
  },
  {
    id: "scale-other",
    layout: "stat",
    eyebrow: "The Institutional Baseline",
    title: "Organised religious training is a measurable institutional category in India.",
    subtitle:
      "Documented capacity of structured religious-education systems run by other faith communities.",
    stats: [
      {
        value: "24,000–38,000",
        label: "Recognised madrasas in India",
        caption: "~16,000 in Uttar Pradesh alone",
      },
      {
        value: "17,544",
        label: "Successful UP Alim graduates in 2025",
        caption: "Out of 21,302 examinees (UP State Board)",
      },
      {
        value: "~12,500",
        label: "Annual West Bengal Alim examinees",
        caption: "West Bengal Board of Madrasah Education",
      },
      {
        value: "35,000+",
        label: "Hafiz and Alim produced annually",
        caption: "Across recognised institutions in India",
      },
    ],
    footnote:
      "Primary sources: UP State Board of Madrasa Education (2025); West Bengal Board of Madrasah Education. Higher unofficial estimates exist in academic literature (e.g. ~5 lakh madrasas including unregistered, Arjumand Ara, OUP 2006) but are not relied upon here.",
    accent: "dark",
    speakerNotes:
      "Establish the institutional category, not a grievance. Read the verified, primary-sourced numbers. Note the parallel state-board examination systems in UP and West Bengal — this is exactly the kind of organised, certified, scaled religious-education infrastructure that Sanatan Dharma does not yet have on a national footing.",
  },
  {
    id: "scale-hindu",
    layout: "image-left",
    eyebrow: "The Scale Gap — Part 2 of 2",
    title: "And what we have today on the Sanatan side.",
    body: [
      "It is rare to find a Hindu priest who has memorised an entire scripture. Most have not read the primary scriptures.",
      "There is no systematic training system. No official data. No standardized curriculum. No funded cadre.",
    ],
    stats: [
      {
        value: "~20,00,000",
        label: "Temples across India",
        caption: "Most lack a properly trained priest",
      },
      {
        value: "6,00,000+",
        label: "Villages without a trained Acharya",
        caption: "Spiritual leadership vacuum at the grassroots",
      },
      {
        value: "Fragmented",
        label: "National training cadre for Adhyatma-Acharyas",
        caption:
          "Pockets exist (TTD, Sanskrit Sansthans, sampradayas) — none unified, certified, or portable",
      },
    ],
    image: `${IMG}/ssn-05-empty-temple.png`,
    imageAlt: "Empty, sunlit interior of a neglected Hindu temple",
    accent: "maroon",
    speakerNotes:
      "The contrast is institutional, not adversarial. Excellent training programmes exist in pockets — Tirumala Tirupati Devasthanams, the Rashtriya Sanskrit Sansthans, individual sampradayas — but they are neither unified nor portable. The Act creates a national, certified, standardised cadre with shared minimum competencies.",
  },
  {
    id: "five-pillars",
    layout: "image-right",
    eyebrow: "Complication",
    title: "Five structural weaknesses — diagnosed.",
    subtitle:
      "Each is independently solvable. Together they have eroded the institutional strength of Sanatan Dharma over decades.",
    bullets: [
      "1. Absence of well-trained religious preceptors (Adhyatma-Acharyas)",
      "2. Absence of scriptures in 23 crore Hindu homes",
      "3. Neglected temples — most rural temples have no functioning priest",
      "4. Lack of unity — fragmentation across sects and traditions",
      "5. Absence of an organised, transparent system of giving (Daan)",
    ],
    image: `${IMG}/ssn-06-five-pillars.png`,
    imageAlt: "Five ancient stone pillars at sunrise — some cracked, some standing",
    accent: "saffron",
    speakerNotes:
      "Set this up as a clinical diagnosis, not a lament. Each weakness is concrete and measurable. The next three slides will deepen the most consequential ones; we will not relitigate every point.",
  },
  {
    id: "no-scripture",
    layout: "image-left",
    eyebrow: "Weakness #2",
    title: "23 crore Hindu households — no national programme has ever ensured a scripture in each.",
    body: [
      "Religious literacy at scale begins in the home. Where a primary scripture is physically present, intergenerational transmission of values is far more likely.",
      "No central or state programme has ever undertaken to place a copy of the Bhagavad Gita or a regional Ramkatha in every Hindu household in Bharat. This Act treats that as a solvable logistics challenge.",
    ],
    stats: [
      {
        value: "23 crore",
        label: "Hindu households",
        caption: "Census 2011 + projection — the addressable base",
      },
      {
        value: "2",
        label: "Books per household",
        caption: "Bhagavad Gita + region-appropriate Ramkatha",
      },
    ],
    image: `${IMG}/ssn-07-scriptures-home.png`,
    imageAlt: "Bhagavad Gita and Ramayana open on a saffron cloth at a home altar",
    accent: "gold",
    speakerNotes:
      "Frame this as a logistics and literacy challenge, not a deficiency narrative. The addressable base is precise (Census 2011 + growth). The deliverable is precise (two books, region-appropriate). The Act funds the printing, translation, and distribution.",
  },
  {
    id: "neglected-temples",
    layout: "image-full",
    eyebrow: "Weakness #3",
    title: "Most rural temples have no priest, no preceptor, no purpose.",
    body: [
      "In numerous villages of North India, temples have become centres of idleness or intoxication. Land donated to temples has been encroached upon.",
      "With trained Adhyatma-Acharyas in place, the same temples could become centres of spiritual, cultural, and economic renewal — guiding youth on employment, exams, and vocational pathways.",
    ],
    image: `${IMG}/ssn-08-village-temple.png`,
    imageAlt: "Neglected village temple at dusk in rural India",
    accent: "dark",
    speakerNotes:
      "Frame the temple not just as a place of worship but as latent civic infrastructure. The cost of revitalising existing temples is a fraction of building anything new. This Act unlocks an asset base of 20 lakh sites already in community ownership.",
  },
  {
    id: "no-daan-system",
    layout: "quote",
    eyebrow: "Weakness #5",
    title:
      '"Hindu society lacks a structured, trusted mechanism for collecting donations dedicated solely to Hindu welfare."',
    body: [
      "Hindu scriptures prescribe giving as a continuous duty. But in practice, there is no zakat-equivalent — no transparent, accountable, statutory channel.",
      "This discourages contribution from those who would give generously if the destination were credible.",
    ],
    footnote: "— Concept Paper, Section (v)",
    accent: "maroon",
    speakerNotes:
      "This single sentence is the bridge to the solution. The Act is, at its core, a credible giving mechanism. Everything else — scriptures in homes, training cadres, refugee rehab — flows from solving this trust problem.",
  },
  {
    id: "question",
    layout: "quote",
    title: "So what would a credible answer look like?",
    body: [
      "Statutory — so it is permanent, transparent, and beyond political reversal.",
      "Autonomous — so the government collects nothing and disburses nothing.",
      "Audited — by the Comptroller and Auditor General of India.",
      "Voluntary — every rupee given by choice, every donor protected by 80G and CSR.",
      "Constitutional — fully compliant with Article 28(3) and secular state principles.",
    ],
    accent: "saffron",
    speakerNotes:
      "This is the pivot slide. Up to now we have established the gap. From here on, we are pitching a specific instrument — and every design choice in that instrument is calibrated to answer an anticipated objection.",
  },
  {
    id: "solution",
    layout: "grid",
    eyebrow: "Answer",
    title: "The Sanatan Seva Nidhi — four programmatic pillars.",
    subtitle:
      "Voluntary contributions from 23 crore Hindu households into a statutorily-protected fund, deployed across four mission areas.",
    bullets: [
      "(a) Scriptures in every Hindu home — free Bhagavad Gita + region-appropriate Ramkatha (Tulsidas / Valmiki / Krittivasi / Kamba)",
      "(b) Large-scale training of priests & Adhyatma-Acharyas — curriculum from Class 6 to Acharya level; entire Gita memorised; major portions of Vedas, Upanishads, Ramkatha; foundational comparative religion",
      "(c) Rehabilitation of Hindu refugees — displaced from Bangladesh, Pakistan, Afghanistan, Kashmir",
      "(d) Chain of Sanatan schools — modern + dharmic education, strictly within Article 28(3) and with parental consent",
    ],
    accent: "saffron",
    speakerNotes:
      "Present this as a portfolio. Each pillar can be measured, audited, and scaled independently. (a) and (b) are the priority during the first seven years — 70% of funds are statutorily ring-fenced for them.",
  },
  {
    id: "governance",
    layout: "grid",
    eyebrow: "Governance Architecture",
    title: "Designed to be incorruptible by design — not by goodwill.",
    subtitle:
      "Multi-tier governance, capped administrative cost, mandatory public-sector banking, full CAG audit.",
    bullets: [
      "11-member Central Governing Council (Sant Parishad) — eminent saints, scholars, and domain experts; 2-year rotating terms",
      "State-level Councils — 11 members each, mirroring the central structure",
      "Independent Secretariat for administrative and technical support",
      "Time-bound Task Forces for specific objectives",
      "All accounts in public-sector banks; annual CAG audit; reports tabled in Parliament",
      "Administrative expenses capped at 10%; council members serve without salary (honorarium + travel only)",
      "70% of funds in the first seven years ring-fenced for scripture distribution + Acharya training",
    ],
    footnote: "Source: Executive Summary §3 and §6.",
    accent: "dark",
    speakerNotes:
      "Linger on the cost cap and the CAG audit — these are the answers to the two anticipated objections (\"will it become a slush fund?\" and \"who watches the watchers?\"). The 10% cap is stricter than most listed charitable trusts in India.",
  },
  {
    id: "constitutional",
    layout: "image-right",
    eyebrow: "Constitutional Soundness",
    title: "Fully within the four corners of the Indian Constitution.",
    bullets: [
      "All contributions are purely voluntary — no compulsion of any citizen",
      "Religious instruction in Sanatan Schools fully complies with Article 28(3) — with prior parental consent",
      "The Act does not interfere with the rights of any other religious community",
      "Donors receive Section 80G and CSR benefits — the same treatment as any registered Indian charity",
      "Curriculum explicitly prohibits content adverse to women or Scheduled Castes",
    ],
    image: `${IMG}/ssn-06-five-pillars.png`,
    imageAlt: "Stone pillars at sunrise — symbol of constitutional foundations",
    footnote: "Source: Executive Summary §5; Concept Paper, Conclusion.",
    accent: "gold",
    speakerNotes:
      "This is the slide that pre-empts every legal objection. Each bullet maps directly to a clause in the draft. The constitutional design is the strongest feature of the proposal — it is what makes the Act passable, not just desirable.",
  },
  {
    id: "scale",
    layout: "stat",
    eyebrow: "Scale of Intended Impact",
    title: "What success looks like, measured.",
    stats: [
      {
        value: "23 crore",
        label: "Hindu households reached",
        caption: "Gita + Ramayana, free, in every home",
      },
      {
        value: "10 lakh",
        label: "Trained Purohits & Adhyatma-Acharyas",
        caption: "A national cadre — by curriculum, not by accident",
      },
      {
        value: "6 lakh",
        label: "Villages with spiritual & civic anchoring",
        caption: "Temple-led economic guidance for rural youth",
      },
      {
        value: "70%",
        label: "Of funds statutorily ring-fenced",
        caption: "For scriptures + training, first 7 years",
      },
    ],
    image: `${IMG}/ssn-13-india-lit.png`,
    imageAlt: "Aerial view of India lit up with thousands of golden points",
    accent: "saffron",
    speakerNotes:
      "Present these as outcomes, not inputs. The 10 lakh trained cadre, by itself, would be the largest organised religious training programme in the history of India.",
  },
  {
    id: "fiscal",
    layout: "stat",
    eyebrow: "Fiscal Footprint",
    title: "Zero net cost to the Consolidated Fund of India.",
    subtitle:
      "The Sanatan Seva Nidhi is, by design, fully donor-funded. The Government of India is asked only to enable the statute — not to finance it.",
    stats: [
      {
        value: "₹0",
        label: "Direct fiscal outlay",
        caption: "No allocation from the Consolidated Fund of India",
      },
      {
        value: "80G + CSR",
        label: "Sole fiscal touchpoint",
        caption: "Identical to existing registered charitable trusts",
      },
      {
        value: "10%",
        label: "Cap on administrative expenses",
        caption: "Stricter than most large Indian charitable trusts",
      },
      {
        value: "100%",
        label: "Funded by voluntary contributions",
        caption: "From street vendor (UPI) to industrial donor (CSR)",
      },
    ],
    footnote:
      "The Act creates a statutory channel. It does not create a budget line. CAG audit and public reporting bind every paisa to its declared purpose.",
    accent: "saffron",
    speakerNotes:
      "This is the slide that retires most fiscal objections. The government is being asked to provide a legal instrument, not a budget. The only fiscal touchpoint is the same Section 80G / CSR treatment already available to every registered Indian charity — there is no novel tax expenditure being requested.",
  },
  {
    id: "objection",
    layout: "quote",
    eyebrow: "Anticipated Objection",
    title:
      '"Why an Act for Sanatan Dharma alone?"',
    body: [
      "Because Sanatan Dharma is the only major faith in India without one.",
      "The Waqf Act and the Sikh Gurdwaras Act exist. Other communities remain free to submit draft legislation outlining similar funding mechanisms for their respective purposes.",
      "This Act causes no harm to any other religion and generates no hatred toward any community. It closes a gap; it opens no new ones.",
    ],
    footnote:
      "Source: Concept Paper, \"A Possible Objection\".",
    accent: "maroon",
    speakerNotes:
      "This is the slide that wins or loses the room. Deliver the answer calmly, factually, and short. The legislative precedent is overwhelming on our side. We are asking for parity, not preference.",
  },
  {
    id: "account",
    layout: "quote",
    eyebrow: "The Mechanism Made Tangible",
    title: "Account number: eleven nines. 99999999999.",
    body: [
      "Simple enough that a street vendor can UPI a rupee.",
      "Memorable enough that a wealthy industrialist can transfer a crore.",
      "Auditable enough that the CAG signs off every paisa.",
    ],
    accent: "gold",
    speakerNotes:
      "Pause on this slide. It is the entire ethos of the Act compressed into eleven digits: dignified participation across every economic stratum, with institutional integrity behind it.",
  },
  {
    id: "ask",
    layout: "closing",
    eyebrow: "The Ask — Three Concrete Steps",
    title: "Table the Sanatan Seva Nidhi Act, 20XX.",
    body: [
      "1. Refer the draft Act to the Ministry of Culture (nodal) and the Ministry of Law & Justice for inter-ministerial review — within 90 days.",
      "2. Constitute a Parliamentary Standing Committee examination ahead of the next Budget Session.",
      "3. Authorise a three-state pilot of the scripture-distribution and Acharya-training pillars in FY 2026–27 — funded entirely through voluntary contributions and CSR, with nil call on the Consolidated Fund.",
    ],
    image: `${IMG}/ssn-16-the-ask.png`,
    imageAlt:
      "A saint handing a bound legislative document toward Sansad Bhavan at golden hour",
    footnote:
      "Full draft already with PMO & NITI Aayog (17 Oct 2025) · Bhagavad-Dharma Pīṭhādhīśa Sriyut Brahm Bodhi · President, Gita Global Family Trust · namaste@gitaglobalfamily.org",
    accent: "saffron",
    speakerNotes:
      "Close with three specific verbs — refer, constitute, authorise — each with a timeline and a nodal ministry. The draft already exists. The constitutional groundwork is already laid. The fiscal envelope is already donor-funded. What remains is the procedural decision to move it.",
  },
];

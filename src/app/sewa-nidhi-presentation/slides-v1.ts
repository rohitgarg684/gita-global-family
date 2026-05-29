/**
 * Slide data for the Sanatan Seva Nidhi documentary presentation (v1).
 *
 * This version is adapted from the 10-minute documentary script
 * "Why Sanatan Seva Nidhi Law? — A Civilizational Response" (28 May 2026).
 *
 * Narrative arc (mirrors the documentary's eight scenes):
 *   Scene 1 — The Civilization (the long arc + the silent crisis)
 *   Scene 2 — The Fall of the Temple Ecosystem
 *   Scene 3 — The Priest (the invisible custodian)
 *   Scene 4 — The Knowledge Gap (scripture in homes)
 *   Scene 5 — The Abandoned (widows, refugees, disaster victims)
 *   Scene 6 — The Solution (system engineering, not emotion)
 *   Scene 7 — The Proposal (an Act of Parliament)
 *   Scene 8 — The Vision (six objectives) + The Assurance + Closing
 */

import type { Slide } from "./slides";

const IMG = "/images/sewa-nidhi/v1";

export const slidesV1: Slide[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // OPENING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-cover",
    layout: "cover",
    eyebrow: "A Documentary Presentation · 10 Minutes",
    title: "Why Sanatan Seva Nidhi Law?",
    subtitle: "A Civilizational Response",
    body: [
      "From the Gita Global Family Trust",
      "Adapted from the documentary script · 28 May 2026",
    ],
    footnote:
      "Draft Act submitted to the Prime Minister's Office · 26 October 2025",
    image: `${IMG}/v1-01-cover.png`,
    imageAlt:
      "A single oil lamp burning at dusk before an ancient temple silhouette, with Sanskrit manuscript pages catching golden light",
    accent: "dark",
    speakerNotes:
      "Open slowly. Hold three breaths. This is a documentary, not a pitch. The viewer is being asked to think with us about a civilizational question — not to sign anything. Let the lamp speak.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 1 — THE CIVILIZATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-civilization",
    layout: "image-full",
    eyebrow: "Scene 1 · The Civilization",
    title: "For thousands of years, Hindu civilization spread across a vast region.",
    body: [
      "From the lands of ancient Iran and Afghanistan,",
      "through the Indian subcontinent,",
      "and into Southeast Asia — Myanmar, Thailand, Cambodia, Indonesia.",
    ],
    image: `${IMG}/v1-02-civilization-map.png`,
    imageAlt:
      "Ancient illuminated parchment map showing the historical geographical reach of Hindu civilization",
    accent: "dark",
    speakerNotes:
      "Geographical sweep is the first frame. We are not talking about a religion — we are talking about a civilization that for millennia organized knowledge, art, governance, and inner life across an enormous continental space.",
  },
  {
    id: "v1-living-tradition",
    layout: "image-right",
    eyebrow: "Scene 1 · continued",
    title: "It sustained one of humanity's oldest living knowledge traditions.",
    bullets: [
      "A civilization of philosophy",
      "of pluralism",
      "of spiritual inquiry",
      "and of inner awakening",
    ],
    image: `${IMG}/v1-03-knowledge-tradition.png`,
    imageAlt: "Monks walking among the ruins of ancient Nalanda at golden hour",
    accent: "gold",
    speakerNotes:
      "Pluralism and inner inquiry — these are the two distinguishing marks. Nalanda is shorthand here for what an organized civilizational knowledge system actually looked like in practice.",
  },
  {
    id: "v1-silent-crisis",
    layout: "image-left",
    eyebrow: "Scene 1 · The Shift",
    title: "Today, that civilization faces a serious — and largely silent — crisis.",
    body: [
      "The decline is geographical, numerical, and qualitative.",
      "Most worrying of all is the erosion of civilizational knowledge within Hindu society itself.",
    ],
    image: `${IMG}/v1-04-silent-crisis.png`,
    imageAlt:
      "Split image: dust-covered Sanskrit manuscripts on one side, indifferent urban youth on phones near a roadside shrine on the other",
    accent: "maroon",
    speakerNotes:
      "The shift here must be felt, not argued. Music drops, lighting cools. The crisis is not external aggression — it is the quiet evaporation of inherited knowledge from within.",
  },
  {
    id: "v1-knowledge-gap-self",
    layout: "quote",
    eyebrow: "Scene 1 · The Question",
    title:
      "Why has one of the world's oldest civilizations become institutionally weak in preserving and transmitting its own knowledge systems?",
    body: [
      "The answer lies not in lack of faith,",
      "but in the absence of an organized ecosystem.",
    ],
    accent: "saffron",
    speakerNotes:
      "This is the thesis of the entire documentary, compressed into two sentences. Pause after 'lack of faith.' Let the second line land separately.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 2 — THE FALL OF THE TEMPLE ECOSYSTEM
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-temple-fall",
    layout: "stat",
    eyebrow: "Scene 2 · The Fall of the Temple Ecosystem",
    title: "Six lakh villages. Twenty lakh temples. Most without a functioning ecosystem.",
    subtitle:
      "India's temple network is one of the largest pieces of latent civic infrastructure on earth — and most of it lies dormant.",
    stats: [
      {
        value: "~6 lakh",
        label: "Villages in India",
        caption: "Bharat's grassroots civic unit",
      },
      {
        value: "~20 lakh",
        label: "Temples nationwide",
        caption: "One estimate; most stand neglected",
      },
      {
        value: "Most",
        label: "Rural temples without trained priests",
        caption: "No maintenance, no education, no social role",
      },
    ],
    image: `${IMG}/v1-05-fallen-temple.png`,
    imageAlt: "Aerial view of a neglected village temple at dusk, idle youth on its steps",
    accent: "dark",
    speakerNotes:
      "Read the numbers slowly. The point is not outrage — it is the sheer scale of dormant infrastructure that could be reactivated with the right ecosystem.",
  },
  {
    id: "v1-temples-once",
    layout: "image-left",
    eyebrow: "Scene 2 · What temples once were",
    title: "In ancient Bharat, the temple was the village itself.",
    bullets: [
      "A centre of worship",
      "A centre of ethical education",
      "A centre of spiritual guidance",
      "A centre of charity",
      "A centre of culture",
      "A centre of community life",
    ],
    image: `${IMG}/v1-06-temples-once.png`,
    imageAlt:
      "Historical recreation: bustling ancient temple courtyard with children studying, villagers gathering, food distribution",
    accent: "gold",
    speakerNotes:
      "The temple was not a religious building. It was the civic operating system of the village. This is the role that the proposed Act seeks to make possible again — not to romanticize the past, but to recover its function.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 3 — THE PRIEST
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-priest",
    layout: "image-right",
    eyebrow: "Scene 3 · The Priest",
    title: "Look at the condition of the ordinary Hindu priest.",
    body: [
      "In most cases he receives no assured monthly income, no pension, no housing support, no insurance, and almost no institutional backing — whereas the clergy of most world religions do.",
      "Yet society still expects him to preserve scriptures, teach dharma, guide communities, and inspire future generations.",
    ],
    image: `${IMG}/v1-07-the-priest.png`,
    imageAlt: "An elderly village priest counts a few rupee notes at dawn beside his old bicycle",
    accent: "maroon",
    speakerNotes:
      "Slow this slide down. The viewer must sit with the image. The implicit question — 'how do we ask custodianship of a civilization from a man we have not even given a livelihood?' — should be allowed to surface on its own.",
  },
  {
    id: "v1-no-training",
    layout: "quote",
    eyebrow: "Scene 3 · The Vacuum",
    title:
      "There exists no large-scale national ecosystem to train lakhs of qualified Hindu priests and dharmacharyas.",
    body: [
      "Not for India's six lakh villages.",
      "Not for its twenty lakh temples.",
      "Not for the next generation.",
    ],
    accent: "dark",
    speakerNotes:
      "State the institutional fact plainly. There are excellent pockets — but no national, certified, scaled training ecosystem. That gap is what the Act fills.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 4 — THE KNOWLEDGE GAP
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-other-homes",
    layout: "image-full",
    eyebrow: "Scene 4 · The Knowledge Gap",
    title: "In most religious homes, the sacred text is present.",
    body: [
      "In Muslim homes — the Quran.",
      "In Christian homes — the Bible.",
      "In Sikh homes — the Guru Granth Sahib.",
    ],
    image: `${IMG}/v1-08-other-faiths-homes.png`,
    imageAlt:
      "Triptych of Muslim, Christian and Sikh families reading their sacred texts with reverence at home",
    accent: "dark",
    speakerNotes:
      "Respectful, factual contrast. We are not criticising any community; we are observing what works. Strong scriptural literacy at home is what other faiths have institutionalized — and what Hindu society has not.",
  },
  {
    id: "v1-empty-shelves",
    layout: "image-left",
    eyebrow: "Scene 4 · continued",
    title: "But in most Hindu homes — not even a Gita or a Ramayana.",
    body: [
      "How can scriptural literacy survive if scriptures themselves do not reach homes?",
      "If Hindus do not understand their own faith, they cannot develop pride or confidence in it. And without that grounding, they become vulnerable.",
      "This is one of the main reasons many Hindus today are being converted to other faiths.",
    ],
    image: `${IMG}/v1-09-empty-shelves.png`,
    imageAlt:
      "Modern Hindu living room: empty bookshelves, a TV unwatched, family absorbed in phones, a dusty deity image in the corner",
    accent: "maroon",
    speakerNotes:
      "The conversion line is sensitive — deliver it factually, not polemically. The thesis is logistics, not blame: if a scripture is not present in the home, intergenerational transmission breaks.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 5 — THE ABANDONED
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-widows",
    layout: "image-right",
    eyebrow: "Scene 5 · The Abandoned",
    title: "Then there are those Hindu society has quietly forgotten.",
    body: [
      "Abandoned widows in pilgrimage towns.",
      "Refugee families fleeing religious persecution from neighbouring countries.",
      "Disaster-affected families with nowhere to turn.",
    ],
    image: `${IMG}/v1-10-abandoned-widows.png`,
    imageAlt: "An elderly Hindu widow in white sari sits alone on a Vrindavan ghat at golden hour",
    accent: "maroon",
    speakerNotes:
      "Music softens here, deliberately. Treat the subjects with dignity, not pity. The point is not their suffering — it is the absence of an organized communal response.",
  },
  {
    id: "v1-refugees",
    layout: "image-full",
    eyebrow: "Scene 5 · continued",
    title: "An ecosystem could give them land, cottages, dignity.",
    body: [
      "If community funds existed at scale, we could purchase land, build residential colonies and cottages, and enable abandoned widows, refugees and disaster victims to live with dignity and security.",
      "The need is not compassion — Hindus have always been compassionate.",
      "The need is structure.",
    ],
    image: `${IMG}/v1-11-refugee-family.png`,
    imageAlt: "A Hindu refugee family arriving at a temporary settlement at dusk, holding a small framed image of their deity",
    accent: "dark",
    speakerNotes:
      "Land tenure, housing, settlement — these are concrete, replicable interventions. The Vrindavan/Mathura widow model and the Sindh/Bangladesh refugee response can both be standardized into a national programme.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 6 — THE SOLUTION
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-system-engineering",
    layout: "quote",
    eyebrow: "Scene 6 · The Solution",
    title: "All of these challenges can be addressed — not by emotion, but by system engineering.",
    body: [
      "By creating a formal ecosystem.",
      "And a central fund capable of sustaining that ecosystem.",
    ],
    accent: "saffron",
    speakerNotes:
      "The single most important phrase in this documentary is 'system engineering.' Indian Hindu society has had no shortage of emotion or faith. What it has lacked is institutional design. That is what this proposal is.",
  },
  {
    id: "v1-prosperous-disconnect",
    layout: "image-left",
    eyebrow: "Scene 6 · The Paradox",
    title: "Hindus are well-educated, accomplished, and globally successful.",
    body: [
      "Yet when it comes to organized community service, there is very little institutional funding.",
      "Many communities that may be economically weaker on average — Muslims, Christians, Jews — often possess much stronger systems of organized charitable giving.",
      "Why? Because they evolved structured institutional mechanisms for collecting regular community contributions.",
    ],
    image: `${IMG}/v1-12-prosperous-disconnect.png`,
    imageAlt:
      "Successful Hindu professional in business attire against a modern skyline, with a struggling village priest faintly visible in the background",
    accent: "maroon",
    speakerNotes:
      "This slide is about institutional design, not affluence. Wealth alone has never produced civilizational continuity — structure does. Other communities have structure; Hindu society does not, yet.",
  },
  {
    id: "v1-fragmented-giving",
    layout: "image-right",
    eyebrow: "Scene 6 · The Reality",
    title: "Even a willing Hindu often does not know where to donate.",
    body: [
      "For what purpose. Through which transparent mechanism.",
      "According to Pew Research, Hindus are among the least charitable communities in the world — not because Hindus do not love their faith, but because Hindu society never evolved a strong, unified culture of formal institutional giving.",
    ],
    stats: [
      {
        value: "< 1%",
        label: "Donate to a guru, temple or goshala",
      },
      {
        value: "~99%",
        label: "Do not give regularly",
      },
    ],
    image: `${IMG}/v1-13-fragmented-giving.png`,
    imageAlt:
      "A man stands confused before a wall of competing donation flyers and a row of small temple donation boxes",
    accent: "gold",
    speakerNotes:
      "Cite Pew calmly — it is widely accepted data. The willing donor exists in vast numbers; the trustworthy channel does not. That is a fixable problem.",
  },
  {
    id: "v1-alone-vs-network",
    layout: "quote",
    eyebrow: "Scene 6 · Crisis Response",
    title: "When others face crisis, networks activate. When many Hindus do, they stand alone.",
    body: [
      "Not because society lacks compassion.",
      "But because no sufficiently organized ecosystem exists to deliver a collective institutional response.",
    ],
    accent: "dark",
    speakerNotes:
      "Frame this without grievance. The fact pattern is structural: organized communities mobilize legal, financial and social capital in hours. Hindu individuals in crisis routinely do not have that.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 7 — THE PROPOSAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-deliberation",
    layout: "image-full",
    eyebrow: "Scene 7 · The Proposal",
    title: "A proposal mooted by the Gita Global Family.",
    body: [
      "To address fragmented, unorganized support systems —",
      "and to create a fund-backed ecosystem capable of meeting the challenges we have just seen.",
    ],
    image: `${IMG}/v1-15-deliberation.png`,
    imageAlt:
      "Saints, scholars and professionals deliberate around a conference table with draft Act documents, Parliament silhouette in the background",
    accent: "dark",
    speakerNotes:
      "The proposal is the result of structured deliberation — saints, lawyers, retired civil servants — not a single individual's wish. The draft has already been submitted to the PMO.",
  },
  {
    id: "v1-act",
    layout: "image-left",
    eyebrow: "Scene 7 · The Act",
    title: "An Act of Parliament. An autonomous, fully transparent Fund.",
    bullets: [
      "Established through legislation — permanent and beyond political reversal",
      "Easy-to-memorize account number: eleven 9s — 99999999999",
      "Government neither finances nor controls it",
      "100% voluntary public contributions",
      "Annual CAG audit. Full public accountability.",
    ],
    image: `${IMG}/v1-16-proposal-act.png`,
    imageAlt:
      "An open draft Act on a wooden table beside a brass lota and lit oil lamp, with Parliament glowing in the window beyond",
    accent: "saffron",
    speakerNotes:
      "Three guarantees in one slide: (1) statutory permanence, (2) zero state control, (3) CAG-grade transparency. The eleven nines are mnemonic, not gimmick — they exist so a street vendor can UPI a rupee.",
  },
  {
    id: "v1-council",
    layout: "image-right",
    eyebrow: "Scene 7 · Governance",
    title: "Governed by eleven religious leaders and scholars at each level.",
    bullets: [
      "Eleven-member Governing Councils at the Central and State levels",
      "Drawn from all major Hindu sects",
      "Supported by professional secretariats",
      "Headed by retired devoted civil servants",
      "No salary — honorarium and travel only",
    ],
    image: `${IMG}/v1-14-organized-flow.png`,
    imageAlt:
      "Conceptual flow diagram: golden streams from households flowing into a central OM and outward to schools, temples, hospitals and books",
    accent: "gold",
    speakerNotes:
      "Eleven is chosen because it is too small to be captured and too large to be unanimous. The structure mirrors successful religious trusts (Tirumala, SGPC) while remaining strictly outside government control.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SCENE 8 — THE VISION
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-six-objectives",
    layout: "grid",
    eyebrow: "Scene 8 · The Vision",
    title: "Six objectives. One ecosystem.",
    subtitle:
      "Each is independently measurable. Together they restore a functioning civilizational ecosystem.",
    bullets: [
      "Revival of rural temples as centres of spiritual, ethical, educational and community life",
      "A nationwide priest and dharmacharya training system — online and offline, with a uniform curriculum (Schedule H of the Act)",
      "Trained, certified priests in affiliated rural temples — with monthly honorariums and gradual social-security support",
      "Free distribution of the Bhagavad Gita and Ramayana to over 23 crore Hindu households",
      "Village-level Dharma Outreach Educators — initially in conversion-prone areas — running study circles, youth programmes and scripture-awareness activities",
      "Organized humanitarian assistance for abandoned widows, refugees, and disaster victims",
    ],
    accent: "saffron",
    speakerNotes:
      "Six objectives, in the order the documentary presents them. Each maps to a chapter of the draft Act. Each can be piloted independently. Each is fundable by voluntary contributions.",
  },
  {
    id: "v1-training",
    layout: "image-left",
    eyebrow: "Scene 8 · Objective Two — in detail",
    title: "A national training system — uniform, certified, accountable.",
    bullets: [
      "Anushthan and ritual practice",
      "Scriptural knowledge — Gita, Vedas, Upanishads, Ramkatha",
      "Dharma ethics",
      "Sanskrit",
      "Spiritual philosophy",
      "Community guidance, livelihood and career counselling for village youth",
      "Examinations and graded certifications — quality at scale",
    ],
    image: `${IMG}/v1-17-six-objectives.png`,
    imageAlt:
      "Young priests learning with laptops and palm-leaf manuscripts side by side, with a restored temple and study circles visible beyond",
    accent: "gold",
    speakerNotes:
      "This is where the proposed cadre takes shape. Trained priests are not just ritualists — they are community guides who also help young people with exams, livelihood, and career direction.",
  },
  {
    id: "v1-distribution",
    layout: "image-right",
    eyebrow: "Scene 8 · Objective Four — in detail",
    title: "A Bhagavad Gita and a Ramayana — in every Hindu home.",
    body: [
      "Free distribution to more than twenty-three crore Hindu households.",
      "And later, other respected dharmic texts — in regional languages, region-appropriate Ramkathas.",
    ],
    stats: [
      {
        value: "23 crore+",
        label: "Hindu households reached",
      },
      {
        value: "2 books",
        label: "Per home — Gita + regional Ramayana",
      },
    ],
    image: `${IMG}/v1-18-gita-distribution.png`,
    imageAlt:
      "A young volunteer hands a beautifully bound Bhagavad Gita to a rural Hindu family at their doorstep at golden hour",
    accent: "saffron",
    speakerNotes:
      "Logistics, not theology. Print runs, regional translation, last-mile delivery — solvable problems with a funded ecosystem. India has done bigger distributions (Aadhaar, vaccines). It can do this.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE ASSURANCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-assurance",
    layout: "image-left",
    eyebrow: "The Assurance",
    title: "This proposal does not seek privilege over any other religion.",
    bullets: [
      "It does not seek taxpayer funding",
      "It does not seek state control over religion",
      "It does not seek conflict with any community",
      "Its purpose is peaceful civilizational strengthening",
      "Through lawful, transparent, democratic and accountable means",
    ],
    image: `${IMG}/v1-20-assurance.png`,
    imageAlt:
      "Indian Parliament at sunrise with diverse citizens walking peacefully past, a leather-bound Constitution and a lamp on a foreground table",
    accent: "gold",
    speakerNotes:
      "These four 'does not' statements are the constitutional armour of the proposal. Repeat them in any conversation with policy-makers. They pre-empt every standard objection.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FINAL SCENE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "v1-final-question",
    layout: "quote",
    eyebrow: "Final Scene",
    title:
      "Every civilization that survives creates institutions to preserve its knowledge, its values, and its continuity.",
    body: [
      "The question before us is simple:",
      "Can Hindu civilization create such an ecosystem for its own future?",
    ],
    accent: "saffron",
    speakerNotes:
      "Hold this slide. Do not rush. This is the slide on which the entire documentary rests.",
  },
  {
    id: "v1-closing",
    layout: "closing",
    eyebrow: "The Ball Is in Their Court",
    title: "The Sanatan Seva Nidhi Act seeks to answer that question.",
    body: [
      "Whether this vision is implemented now rests in the hands of the Central Government and the Members of Parliament of India.",
      "The meticulously drafted law was submitted to the Prime Minister's Office on 26 October 2025.",
      "To download the draft Act, visit www.gitaglobalfamily.org",
    ],
    image: `${IMG}/v1-19-sunrise-bharat.png`,
    imageAlt:
      "Sunrise over a restored rural temple — children read the Gita on its steps, a young priest teaches villagers under a banyan tree",
    footnote:
      "Documentary: Why Sanatan Seva Nidhi Law? — A Civilizational Response · Gita Global Family Trust · namaste@gitaglobalfamily.org",
    accent: "saffron",
    speakerNotes:
      "Close the way the documentary closes — with sunrise, not argument. The film ends, the conversation begins. The next ten minutes belong to the viewer.",
  },
];

export type Scene = {
  id: number;
  durationMs: number;
  image: string;
  imageAlt: string;
  /** Ken Burns: start scale/translate -> end */
  kenBurns?: {
    fromScale: number;
    toScale: number;
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
  };
  /** Hindi subtitle (also fed to TTS). */
  hi: string;
  /** English subtitle. */
  en: string;
  /** Big on-screen title shown briefly (optional). */
  chapter?: { hi: string; en: string };
  /** Special accent (eg. account number reveal). */
  accent?: "account" | "cta";
};

/**
 * ~120 second condensed film script for the proposed
 * "Sanatan Seva Nidhi Act". Bilingual subtitles, scene-by-scene visuals.
 * Each image is a bespoke generation matching the meaning of the narration.
 */
export const scenes: Scene[] = [
  // ---------- ACT 1 : THE PROBLEM (≈ 31s) ----------
  {
    id: 1,
    durationMs: 7000,
    image: "/images/film/scene-01-silent-crisis.jpg",
    imageAlt: "Ancient weathered Hindu temple at dusk with a single diya",
    kenBurns: { fromScale: 1.0, toScale: 1.12 },
    chapter: { hi: "आज की स्थिति", en: "The Reality Today" },
    hi: "आज हिन्दू समाज एक मौन संकट से गुज़र रहा है।",
    en: "Today, Hindu society is passing through a silent crisis.",
  },
  {
    id: 2,
    durationMs: 8000,
    image: "/images/film/scene-02-vrindavan-widow.jpg",
    imageAlt: "Elderly widow on the ghats of Vrindavan",
    kenBurns: { fromScale: 1.1, toScale: 1.0, fromX: 1, toX: -1 },
    hi: "वृन्दावन में परित्यक्ता विधवाएँ भीख माँगकर जीवन काट रही हैं।",
    en: "Abandoned widows in Vrindavan survive on alms.",
  },
  {
    id: 3,
    durationMs: 8000,
    image: "/images/film/scene-03-displaced-family.jpg",
    imageAlt: "A displaced Hindu family walking a dusty road",
    kenBurns: { fromScale: 1.0, toScale: 1.1 },
    hi: "पड़ोसी देशों से आए हिन्दू शरणार्थी आज भी दर-दर भटक रहे हैं।",
    en: "Hindu refugees from neighbouring lands still wander, helpless.",
  },
  {
    id: 4,
    durationMs: 8000,
    image: "/images/film/scene-04-village-pujari.jpg",
    imageAlt: "Village temple priest performing aarti",
    kenBurns: { fromScale: 1.05, toScale: 1.18 },
    hi: "लाखों ग्रामीण मंदिरों के पुजारी बिना प्रशिक्षण, बिना वेतन सेवा कर रहे हैं।",
    en: "Lakhs of village temple priests serve without training or salary.",
  },

  // ---------- ACT 2 : THE COMPARISON (≈ 17s) ----------
  {
    id: 5,
    durationMs: 9000,
    image: "/images/film/scene-05-three-faiths.jpg",
    imageAlt: "Church, Hindu temple, and mosque side by side",
    kenBurns: { fromScale: 1.0, toScale: 1.08 },
    chapter: { hi: "एक तुलना", en: "A Comparison" },
    hi: "चर्च, मस्जिद — सबके पास संगठित कोष है। ज़कात, टाइथिंग — सब व्यवस्थित।",
    en: "Churches and mosques have organised funds. Zakat, tithing — all systematic.",
  },
  {
    id: 6,
    durationMs: 8000,
    image: "/images/film/scene-06-empty-bowl.jpg",
    imageAlt: "An almost-empty cracked donation bowl in a temple",
    kenBurns: { fromScale: 1.1, toScale: 1.0 },
    hi: "पर हिन्दुओं के पास ऐसा कोई सामूहिक, पारदर्शी कोष नहीं है।",
    en: "But Hindus have no such collective, transparent fund.",
  },

  // ---------- ACT 3 : THE SOLUTION (≈ 22s) ----------
  {
    id: 7,
    durationMs: 8000,
    image: "/images/film/scene-07-parliament-dawn.jpg",
    imageAlt: "Indian Parliament at golden dawn",
    kenBurns: { fromScale: 1.0, toScale: 1.1 },
    chapter: { hi: "समाधान", en: "The Solution" },
    hi: "एक संसदीय कानून — और एक स्वायत्त, पारदर्शी “सनातन सेवा निधि”।",
    en: "One Act of Parliament — and an autonomous, transparent “Sanatan Seva Nidhi.”",
  },
  {
    id: 8,
    durationMs: 7000,
    image: "/images/film/scene-08-upi-donation.jpg",
    imageAlt: "Smartphone with UPI donation app and lotus motif",
    kenBurns: { fromScale: 1.05, toScale: 1.15 },
    hi: "एक सरल, यादगार खाता संख्या — जिसमें कोई भी, कभी भी दान दे सके।",
    en: "One simple, memorable account number — open to every donor, anytime.",
  },
  {
    id: 9,
    durationMs: 7000,
    image: "/images/film/scene-09-eleven-nines.jpg",
    imageAlt: "Glowing golden digits — eleven nines",
    kenBurns: { fromScale: 1.0, toScale: 1.05 },
    accent: "account",
    hi: "जैसे — नौ का अंक, ग्यारह बार: 9 9 9 9 9 9 9 9 9 9 9",
    en: "Like — the digit nine, eleven times: 9 9 9 9 9 9 9 9 9 9 9",
  },

  // ---------- ACT 4 : FIVE GOALS (≈ 33s) ----------
  {
    id: 10,
    durationMs: 7000,
    image: "/images/film/scene-10-village-temple-aerial.jpg",
    imageAlt: "Aerial view of an Indian village with a glowing central temple",
    kenBurns: { fromScale: 1.0, toScale: 1.12 },
    chapter: { hi: "पाँच लक्ष्य", en: "Five Goals" },
    hi: "एक — छह लाख गाँवों के मंदिरों को संबद्ध कर, प्रशिक्षित पुजारी की नियुक्ति।",
    en: "One — affiliate temples in six lakh villages, place trained pujaris in each.",
  },
  {
    id: 11,
    durationMs: 6500,
    image: "/images/film/scene-11-gurukul-training.jpg",
    imageAlt: "Young pujaris studying Sanskrit in a gurukul",
    kenBurns: { fromScale: 1.1, toScale: 1.0 },
    hi: "दो — पुजारियों के लिए राष्ट्रव्यापी प्रशिक्षण और प्रमाणीकरण।",
    en: "Two — nationwide training and certification for our priests.",
  },
  {
    id: 12,
    durationMs: 6500,
    image: "/images/film/scene-12-family-gita.jpg",
    imageAlt: "Hindu family reading the Bhagavad Gita by lamplight",
    kenBurns: { fromScale: 1.0, toScale: 1.1 },
    hi: "तीन — हर हिन्दू परिवार में भगवद्गीता और रामायण का निःशुल्क वितरण।",
    en: "Three — a free Gita and Ramayan for every Hindu household.",
  },
  {
    id: 13,
    durationMs: 6500,
    image: "/images/film/scene-13-shelter-colony.jpg",
    imageAlt: "Rehabilitation colony with widows and children at dawn",
    kenBurns: { fromScale: 1.05, toScale: 1.15 },
    hi: "चार — परित्यक्ता विधवाओं और हिन्दू शरणार्थियों का पुनर्वास।",
    en: "Four — rehabilitation of abandoned widows and Hindu refugees.",
  },
  {
    id: 14,
    durationMs: 6500,
    image: "/images/film/scene-14-sanatan-school.jpg",
    imageAlt: "Modern Sanatan school courtyard with children",
    kenBurns: { fromScale: 1.0, toScale: 1.1 },
    hi: "पाँच — देश भर में उच्च स्तरीय सनातन विद्यालयों की शृंखला।",
    en: "Five — a nationwide chain of high-quality Sanatan schools.",
  },

  // ---------- ACT 5 : CALL TO ACTION (≈ 15s) ----------
  {
    id: 15,
    durationMs: 7000,
    image: "/images/film/scene-15-envelope-tricolor.jpg",
    imageAlt: "Sealed envelope beside the Indian Tricolor",
    kenBurns: { fromScale: 1.0, toScale: 1.08 },
    chapter: { hi: "अब आपकी बारी", en: "Now It's Your Turn" },
    hi: "गीता ग्लोबल फैमिली ने इस अधिनियम का प्रारूप प्रधानमंत्री कार्यालय को भेज दिया है।",
    en: "Gita Global Family has submitted the draft Act to the Prime Minister's Office.",
  },
  {
    id: 16,
    durationMs: 8000,
    image: "/images/film/scene-16-hands-unity.jpg",
    imageAlt: "Many hands joined around the Bhagavad Gita and a diya",
    kenBurns: { fromScale: 1.05, toScale: 1.18 },
    accent: "cta",
    hi: "इस आंदोलन से जुड़िए — gitaglobalfamily.org",
    en: "Join the movement — gitaglobalfamily.org",
  },
];

export const totalDurationMs = scenes.reduce((s, x) => s + x.durationMs, 0);

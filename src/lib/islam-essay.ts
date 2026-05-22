import sections from "@/data/islam-essay.json";

export interface EssaySection {
  id: string;
  title_hi: string;
  title_en: string;
  body_hi: string;
  body_en: string;
}

export function getIslamEssaySections(): EssaySection[] {
  return sections as EssaySection[];
}

export function getEssayMetadata() {
  return {
    titleHi: "इस्लाम पर निबंध",
    titleEn: "An Essay on Islam",
    subtitleHi: "इस्लाम धर्म की समीक्षा — सिद्धांत और व्यवहार",
    subtitleEn:
      "A Review of Islam — Doctrine and Practice from a Sanatan Perspective",
    sourceHi: "भगवद्धर्म प्रकाश",
    sourceEn: "Bhagavad Dharma Prakash",
  } as const;
}

export interface EssaySection {
  id: string;
  title_hi: string;
  title_en: string;
  body_hi: string;
  body_en: string;
}

export interface EssayMeta {
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  sourceHi: string;
  sourceEn: string;
}

export function getEssayMetadata(): EssayMeta {
  return {
    titleHi: "इस्लाम पर निबंध",
    titleEn: "An Essay on Islam",
    subtitleHi: "इस्लाम धर्म की समीक्षा — सिद्धांत और व्यवहार",
    subtitleEn:
      "A Review of Islam — Doctrine and Practice from a Sanatan Perspective",
    sourceHi: "भगवद्धर्म प्रकाश",
    sourceEn: "Bhagavad Dharma Prakash",
  };
}

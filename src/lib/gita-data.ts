import chaptersIndex from "@/data/gita/chapters-index.json";

export interface Verse {
  chapter: number;
  verse: string;
  speaker: string;
  sanskrit: string;
  padacheeda: string;
  anvaya: string;
  hindiMeaning: string;
  englishMeaning: string;
  hindiCommentary: string;
  englishCommentary: string;
  hindiFootnote: string;
  englishFootnote: string;
}

export interface ChapterData {
  chapter: number;
  nameHindi: string;
  nameEnglish: string;
  subtitle: string;
  totalVerses: number;
  verses: Verse[];
}

export interface ChapterSummary {
  chapter: number;
  nameHindi: string;
  nameEnglish: string;
  subtitle: string;
  totalVerses: number;
}

export function getChaptersIndex(): ChapterSummary[] {
  return chaptersIndex;
}

export async function getChapterData(
  chapterNum: number
): Promise<ChapterData | null> {
  try {
    const padded = String(chapterNum).padStart(2, "0");
    const data = await import(`@/data/gita/chapter-${padded}.json`);
    return data.default as ChapterData;
  } catch {
    return null;
  }
}

export async function getVerse(
  chapterNum: number,
  verseNum: string
): Promise<Verse | null> {
  const chapter = await getChapterData(chapterNum);
  if (!chapter) return null;
  return chapter.verses.find((v) => v.verse === verseNum) || null;
}

export function getTotalVerses(): number {
  return chaptersIndex.reduce(
    (sum: number, ch: ChapterSummary) => sum + ch.totalVerses,
    0
  );
}

import { notFound } from "next/navigation";
import { getChapterData, getChaptersIndex } from "@/lib/gita-data";
import VersePageClient from "./VersePageClient";

export async function generateStaticParams() {
  const chapters = getChaptersIndex();
  const params: { chapter: string; verse: string }[] = [];

  for (const ch of chapters) {
    const data = await getChapterData(ch.chapter);
    if (data) {
      for (const v of data.verses) {
        params.push({
          chapter: String(ch.chapter),
          verse: v.verse,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ chapter: string; verse: string }>;
}) {
  const { chapter, verse } = await props.params;
  const chapterNum = parseInt(chapter, 10);
  const data = await getChapterData(chapterNum);
  if (!data) return { title: "Verse Not Found" };

  const v = data.verses.find((item) => item.verse === verse);
  if (!v) return { title: "Verse Not Found" };

  return {
    title: `Verse ${chapter}:${verse} - ${data.nameEnglish} - Bhagavad Gita`,
    description: v.englishMeaning.substring(0, 160),
  };
}

export default async function VersePage(props: {
  params: Promise<{ chapter: string; verse: string }>;
}) {
  const { chapter, verse } = await props.params;
  const chapterNum = parseInt(chapter, 10);
  const data = await getChapterData(chapterNum);

  if (!data) notFound();

  const verseData = data.verses.find((v) => v.verse === verse);
  if (!verseData) notFound();

  const verseIndex = data.verses.findIndex((v) => v.verse === verse);
  const prevVerse = verseIndex > 0 ? data.verses[verseIndex - 1] : null;
  const nextVerse =
    verseIndex < data.verses.length - 1 ? data.verses[verseIndex + 1] : null;

  return (
    <VersePageClient
      verse={verseData}
      chapterName={data.nameEnglish}
      chapterNameHindi={data.nameHindi}
      totalVersesInChapter={data.totalVerses}
      prevVerse={prevVerse ? { chapter: chapterNum, verse: prevVerse.verse } : null}
      nextVerse={nextVerse ? { chapter: chapterNum, verse: nextVerse.verse } : null}
    />
  );
}

import { notFound } from "next/navigation";
import { getChapterData, getChaptersIndex } from "@/lib/gita-data";
import ChapterPageClient from "./ChapterPageClient";

export async function generateStaticParams() {
  const chapters = getChaptersIndex();
  return chapters.map((ch) => ({
    chapter: String(ch.chapter),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await props.params;
  const chapterNum = parseInt(chapter, 10);
  const data = await getChapterData(chapterNum);
  if (!data) return { title: "Chapter Not Found" };

  return {
    title: `Chapter ${data.chapter}: ${data.nameEnglish} - Bhagavad Gita`,
    description: `${data.subtitle}. Read all ${data.totalVerses} verses with Sanskrit, Hindi and English translations and commentary.`,
  };
}

export default async function ChapterPage(props: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await props.params;
  const chapterNum = parseInt(chapter, 10);
  const data = await getChapterData(chapterNum);

  if (!data) notFound();

  const chapters = getChaptersIndex();
  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null;
  const nextChapter = chapterNum < chapters.length ? chapterNum + 1 : null;

  return (
    <ChapterPageClient
      data={data}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}

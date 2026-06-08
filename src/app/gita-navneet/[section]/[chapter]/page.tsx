import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, Download } from "lucide-react";
import {
  getBook,
  getChapter,
  getNeighbors,
} from "@/lib/gita-navneet";
import NavneetContent from "@/components/NavneetContent";

export function generateStaticParams() {
  const book = getBook();
  const params: { section: string; chapter: string }[] = [];
  for (const section of book.sections) {
    for (const chapter of section.chapters) {
      params.push({ section: section.slug, chapter: chapter.slug });
    }
  }
  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ section: string; chapter: string }>;
}) {
  const { section, chapter } = await props.params;
  const found = getChapter(section, chapter);
  if (!found) return { title: "Chapter not found" };
  return {
    title: `${found.chapter.title} — Gita Navneet`,
    description: `Read "${found.chapter.title}" from ${found.section.title} (Gita Navneet by Brahmbodhi).`,
  };
}

export default async function ChapterDetailPage(props: {
  params: Promise<{ section: string; chapter: string }>;
}) {
  const { section, chapter } = await props.params;
  const found = getChapter(section, chapter);
  if (!found) notFound();

  const book = getBook();
  const { prev, next } = getNeighbors(section, chapter);

  return (
    <>
      <section className="bg-gradient-to-br from-dark-brown to-maroon py-10 md:py-14">
        <div className="section-padding">
          <nav className="flex items-center gap-1 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/gita-navneet/" className="hover:text-saffron-light">
              Gita Navneet
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={`/gita-navneet/${found.section.slug}/`}
              className="hover:text-saffron-light"
            >
              {found.section.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">Chapter {found.chapter.num}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-saffron/20 text-saffron-light font-bold rounded-xl">
              {found.chapter.num}
            </span>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-3xl font-bold text-white leading-snug">
                {found.chapter.title}
              </h1>
              <p className="text-sm text-white/60 mt-2">
                {found.section.english} · Pages {found.chapter.pages[0]}–
                {found.chapter.pages[1]} of the printed edition
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-10 md:py-14">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-cream-dark/40 p-6 md:p-10 shadow-sm">
          <NavneetContent
            pageTexts={found.chapter.pageTexts}
            pages={found.chapter.pages}
          />

          <div className="mt-10 pt-6 border-t border-cream-dark/50 flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-text-muted">
              Source:{" "}
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron hover:text-saffron-dark inline-flex items-center gap-1"
              >
                {book.title} PDF <Download className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-xs text-text-muted">© {book.author}</p>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              href={`/gita-navneet/${prev.sectionSlug}/${prev.chapterSlug}/`}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Previous</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2">
                  {prev.chapterTitle}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/gita-navneet/"
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Back</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors">
                  Gita Navneet Index
                </p>
              </div>
            </Link>
          )}

          {next ? (
            <Link
              href={`/gita-navneet/${next.sectionSlug}/${next.chapterSlug}/`}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Next</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2">
                  {next.chapterTitle}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/gita-navneet/"
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Done</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors">
                  Back to Index
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

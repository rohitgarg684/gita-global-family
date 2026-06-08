import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import {
  getBook,
  getFrontmatter,
  getFrontmatterNeighbors,
} from "@/lib/gita-navneet";
import NavneetContent from "@/components/NavneetContent";

export function generateStaticParams() {
  return getBook().frontmatter.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const fm = getFrontmatter(slug);
  if (!fm) return { title: "Page not found" };
  return {
    title: `${fm.title} — Gita Navneet`,
  };
}

export default async function PrefacePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const fm = getFrontmatter(slug);
  if (!fm) notFound();

  const { prev, next, nextChapter } = getFrontmatterNeighbors(slug);

  return (
    <>
      <section className="bg-gradient-to-br from-dark-brown to-maroon py-10 md:py-14">
        <div className="section-padding">
          <nav className="flex items-center gap-1 text-sm text-white/60 mb-3 flex-wrap">
            <Link href="/gita-navneet/" className="hover:text-saffron-light">
              Gita Navneet
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">प्रस्तावना</span>
          </nav>
          <h1 className="text-xl md:text-3xl font-bold text-white leading-snug">
            {fm.title}
          </h1>
        </div>
      </section>

      <section className="section-padding py-10 md:py-14">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-cream-dark/40 p-6 md:p-10 shadow-sm">
          <NavneetContent pageTexts={fm.pageTexts} pages={fm.pages} />
        </article>

        <div className="max-w-3xl mx-auto mt-8 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              href={`/gita-navneet/preface/${prev.slug}/`}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Previous</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2">
                  {prev.title}
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
              href={`/gita-navneet/preface/${next.slug}/`}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">Next</p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2">
                  {next.title}
                </p>
              </div>
            </Link>
          ) : nextChapter ? (
            <Link
              href={`/gita-navneet/${nextChapter.sectionSlug}/${nextChapter.chapterSlug}/`}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-dark/40 hover:border-saffron/40 hover:shadow-sm transition-all sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="w-4 h-4 text-saffron mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-text-muted">
                  Begin reading — {nextChapter.sectionTitle}
                </p>
                <p className="text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2">
                  {nextChapter.chapterTitle}
                </p>
              </div>
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
}

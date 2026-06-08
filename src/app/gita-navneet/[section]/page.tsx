import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { getBook, getSection } from "@/lib/gita-navneet";

export function generateStaticParams() {
  return getBook().sections.map((s) => ({ section: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ section: string }>;
}) {
  const { section: sectionSlug } = await props.params;
  const section = getSection(sectionSlug);
  if (!section) return { title: "Section not found" };
  return {
    title: `${section.title} — Gita Navneet`,
    description: `${section.english}: ${section.chapters.length} chapters from Gita Navneet`,
  };
}

export default async function SectionPage(props: {
  params: Promise<{ section: string }>;
}) {
  const { section: sectionSlug } = await props.params;
  const section = getSection(sectionSlug);
  if (!section) notFound();

  const book = getBook();
  const sectionIdx = book.sections.findIndex((s) => s.slug === sectionSlug);
  const prevSection = sectionIdx > 0 ? book.sections[sectionIdx - 1] : null;
  const nextSection =
    sectionIdx < book.sections.length - 1
      ? book.sections[sectionIdx + 1]
      : null;

  return (
    <>
      <section className="bg-gradient-to-br from-dark-brown to-maroon py-12 md:py-16">
        <div className="section-padding">
          <nav className="flex items-center gap-1 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/gita-navneet/" className="hover:text-saffron-light">
              Gita Navneet
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">{section.title}</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {section.title}
          </h1>
          <p className="text-base text-white/70 mt-2">
            {section.english} · {section.chapters.length} chapters
          </p>
        </div>
      </section>

      <section className="section-padding py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/gita-navneet/${section.slug}/${ch.slug}/`}
              className="group block bg-white rounded-xl border border-cream-dark/40 p-5 hover:shadow-md hover:border-saffron/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 bg-saffron/10 text-saffron font-bold rounded-lg text-sm">
                  {ch.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-dark-brown group-hover:text-saffron transition-colors leading-snug">
                    {ch.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 pt-6 border-t border-cream-dark/50">
          {prevSection ? (
            <Link
              href={`/gita-navneet/${prevSection.slug}/`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-saffron transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {prevSection.title}
            </Link>
          ) : (
            <Link
              href="/gita-navneet/"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-saffron transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Index
            </Link>
          )}
          {nextSection && (
            <Link
              href={`/gita-navneet/${nextSection.slug}/`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-saffron hover:text-saffron-dark transition-colors"
            >
              {nextSection.title} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

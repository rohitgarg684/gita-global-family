import bookData from "@/data/gita-navneet/book.json";

export interface NavneetChapter {
  slug: string;
  num: number;
  title: string;
  pages: [number, number];
  pageTexts: string[];
}

export interface NavneetSection {
  slug: string;
  title: string;
  english: string;
  chapters: NavneetChapter[];
}

export interface NavneetFrontmatter {
  slug: string;
  title: string;
  pages: [number, number];
  pageTexts: string[];
}

export interface NavneetBook {
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  edition: string;
  isbn: string;
  pdfUrl: string;
  frontmatter: NavneetFrontmatter[];
  sections: NavneetSection[];
}

export function getBook(): NavneetBook {
  return bookData as NavneetBook;
}

export function getSection(sectionSlug: string): NavneetSection | null {
  const book = getBook();
  return book.sections.find((s) => s.slug === sectionSlug) ?? null;
}

export function getChapter(
  sectionSlug: string,
  chapterSlug: string
): { section: NavneetSection; chapter: NavneetChapter } | null {
  const section = getSection(sectionSlug);
  if (!section) return null;
  const chapter = section.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return null;
  return { section, chapter };
}

export function getFrontmatter(slug: string): NavneetFrontmatter | null {
  const book = getBook();
  return book.frontmatter.find((f) => f.slug === slug) ?? null;
}

export interface ChapterNavRef {
  sectionSlug: string;
  sectionTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  num: number;
}

export function getFlatChapters(): ChapterNavRef[] {
  const book = getBook();
  const flat: ChapterNavRef[] = [];
  for (const section of book.sections) {
    for (const chapter of section.chapters) {
      flat.push({
        sectionSlug: section.slug,
        sectionTitle: section.title,
        chapterSlug: chapter.slug,
        chapterTitle: chapter.title,
        num: chapter.num,
      });
    }
  }
  return flat;
}

export function getNeighbors(
  sectionSlug: string,
  chapterSlug: string
): { prev: ChapterNavRef | null; next: ChapterNavRef | null } {
  const flat = getFlatChapters();
  const idx = flat.findIndex(
    (c) => c.sectionSlug === sectionSlug && c.chapterSlug === chapterSlug
  );
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

const FRONTMATTER_ORDER = ["lekhak", "do-shabd", "school-college"];

export function getFrontmatterNeighbors(slug: string): {
  prev: NavneetFrontmatter | null;
  next: NavneetFrontmatter | null;
  nextChapter: ChapterNavRef | null;
} {
  const book = getBook();
  const idx = FRONTMATTER_ORDER.indexOf(slug);
  if (idx === -1) return { prev: null, next: null, nextChapter: null };

  const prev =
    idx > 0
      ? book.frontmatter.find((f) => f.slug === FRONTMATTER_ORDER[idx - 1]) ??
        null
      : null;
  const next =
    idx < FRONTMATTER_ORDER.length - 1
      ? book.frontmatter.find((f) => f.slug === FRONTMATTER_ORDER[idx + 1]) ??
        null
      : null;

  // After the last frontmatter, link to the very first chapter
  const flat = getFlatChapters();
  const nextChapter =
    idx === FRONTMATTER_ORDER.length - 1 && flat.length > 0 ? flat[0] : null;

  return { prev, next, nextChapter };
}

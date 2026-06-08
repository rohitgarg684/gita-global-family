"use client";

import { motion } from "framer-motion";

interface NavneetContentProps {
  pageTexts: string[];
  pages: [number, number];
}

const RUNNING_FOOTER = /^गीता नवनीत\s*:?\s*51\s*प्रतिनिधि\s*श्लोक\s*$/;

function cleanPageText(raw: string, pageNum: number): string[] {
  const rawLines = raw.split(/\r?\n/);
  const lines: string[] = [];
  for (const line of rawLines) {
    const t = line.trim();
    if (!t) {
      lines.push("");
      continue;
    }
    if (t === String(pageNum)) continue;
    if (RUNNING_FOOTER.test(t)) continue;
    lines.push(t);
  }

  // Group into paragraphs (consecutive non-empty lines)
  const paragraphs: string[] = [];
  let buf: string[] = [];
  const flush = () => {
    if (buf.length) {
      paragraphs.push(buf.join(" ").replace(/\s+/g, " ").trim());
      buf = [];
    }
  };
  for (const line of lines) {
    if (!line) {
      flush();
    } else {
      buf.push(line);
    }
  }
  flush();
  return paragraphs.filter((p) => p.length > 0);
}

const SHLOKA_END = /॥\s*\d+\s*[:.]\s*\d+\s*॥/;

const HEADING_PATTERNS = [
  /^पदच्छेद$/,
  /^अन्वय\s*(और|एवं)\s*शब्दार्थ$/,
  /^श्लोक\s*का\s*भावार्थ$/,
  /^भावार्थ$/,
  /^टिप्पणी$/,
  /^[^\n]{0,80}\s*पर\s*टिप्पणी$/,
  /^उत्तर[—–-]?$/,
  /^भूमिका$/,
  /^आरोप\s*\d+\s*:?/,
  /^[क-ज]\.\s/,
  /^\d+\.\s+[^।]{0,80}$/,
];

function isShloka(p: string): boolean {
  return SHLOKA_END.test(p);
}

function isHeading(p: string): boolean {
  if (p.length > 120) return false;
  return HEADING_PATTERNS.some((re) => re.test(p));
}

function isFootnote(p: string): boolean {
  return /^\d+\s+[A-Za-z“"']/.test(p);
}

export default function NavneetContent({
  pageTexts,
  pages,
}: NavneetContentProps) {
  const [startPage] = pages;
  const blocks = pageTexts.flatMap((text, i) =>
    cleanPageText(text, startPage + i)
  );

  // Deduplicate accidental consecutive identical paragraphs (some headings
  // appear twice in the source PDF due to visual styling)
  const deduped: string[] = [];
  for (const p of blocks) {
    if (deduped.length && deduped[deduped.length - 1] === p) continue;
    deduped.push(p);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-none"
    >
      <div className="space-y-5 text-[17px] md:text-[18px] leading-[1.9] text-dark-brown/90">
        {deduped.map((p, idx) => {
          if (isShloka(p)) {
            return (
              <div
                key={idx}
                className="my-7 px-5 md:px-7 py-5 bg-saffron/5 border-l-4 border-saffron rounded-r-lg"
              >
                <p className="font-medium text-dark-brown text-center text-lg leading-loose whitespace-pre-line">
                  {p}
                </p>
              </div>
            );
          }
          if (isHeading(p)) {
            return (
              <h3
                key={idx}
                className="text-xl md:text-2xl font-semibold text-dark-brown mt-10 mb-2 border-b border-cream-dark/60 pb-1"
              >
                {p}
              </h3>
            );
          }
          if (isFootnote(p)) {
            return (
              <p
                key={idx}
                className="text-sm text-text-muted border-l-2 border-cream-dark pl-3 italic"
              >
                {p}
              </p>
            );
          }
          return (
            <p key={idx} className="text-text-secondary">
              {p}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}

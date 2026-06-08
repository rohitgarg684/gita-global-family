"use client";

import { motion } from "framer-motion";

interface NavneetContentProps {
  pageTexts: string[];
  pages: [number, number];
}

const HEADER_FOOTER_PATTERNS: RegExp[] = [
  /^गीीताा नवनीता\s*:?\s*51 प्रतितातिनधि� श्लोोक$/,
  /^\(?[कखगघङ]\)?\s*[^\n]{0,80}खंड$/,
  /^[कखगघङ]\)\s/,
  /^[०-९0-9]+$/,
];

function cleanPageText(raw: string, pageNum: number): string[] {
  // Split into lines, strip header/footer noise, drop bare page numbers
  const rawLines = raw.split(/\r?\n/);
  const lines: string[] = [];
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) {
      lines.push("");
      continue;
    }
    // Drop pure page numbers matching this page
    if (line === String(pageNum)) continue;
    // Drop the running footer "गीीताा नवनीता : 51 प्रतितातिनधि� श्लोोक"
    if (HEADER_FOOTER_PATTERNS.some((re) => re.test(line))) continue;
    lines.push(line);
  }

  // Re-join consecutive non-empty lines into single paragraphs
  const paragraphs: string[] = [];
  let buf: string[] = [];
  for (const line of lines) {
    if (!line) {
      if (buf.length) {
        paragraphs.push(buf.join(" "));
        buf = [];
      }
    } else {
      buf.push(line);
    }
  }
  if (buf.length) paragraphs.push(buf.join(" "));
  return paragraphs.filter((p) => p.length > 0);
}

function isShloka(p: string): boolean {
  return /॥\s*\d+\s*:\s*\d+\s*॥/.test(p);
}

function isHeading(p: string): boolean {
  // Likely a heading if short and ends without punctuation, or matches known labels
  if (p.length < 80 && /^(पादच्छेद|अन्व�? और शुब्दाा��|श्लोोकी कीा भा�ा��|भा�ा��|द्रिटप्पणी|टिप्पणी|श्लोोक[^\s]*\s*पर\s*द्रिटप्पणी)/.test(p)) {
    return true;
  }
  return false;
}

function normalizeHeading(p: string): string {
  // Best-effort cleanups so the rendered headings read more naturally
  return p
    .replace(/पादच्छेद/, "पदच्छेद")
    .replace(/अन्व�? और शुब्दाा��/, "अन्वय और शब्दार्थ")
    .replace(/श्लोोकी कीा भा�ा��/, "श्लोक का भावार्थ")
    .replace(/^भा�ा��$/, "भावार्थ")
    .replace(/द्रिटप्पणी/g, "टिप्पणी");
}

export default function NavneetContent({
  pageTexts,
  pages,
}: NavneetContentProps) {
  const [startPage] = pages;
  const blocks = pageTexts.flatMap((text, i) =>
    cleanPageText(text, startPage + i)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="prose prose-lg max-w-none"
    >
      <div className="space-y-5 text-[17px] leading-[1.85] text-dark-brown/90">
        {blocks.map((p, idx) => {
          if (isShloka(p)) {
            return (
              <div
                key={idx}
                className="my-6 px-5 py-4 bg-saffron/5 border-l-4 border-saffron rounded-r-lg"
              >
                <p className="font-medium text-dark-brown whitespace-pre-line text-center text-lg leading-relaxed">
                  {p}
                </p>
              </div>
            );
          }
          if (isHeading(p)) {
            return (
              <h3
                key={idx}
                className="text-xl font-semibold text-dark-brown mt-8 mb-2 border-b border-cream-dark/50 pb-1"
              >
                {normalizeHeading(p)}
              </h3>
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

#!/usr/bin/env python3
"""Extract clean Hindi Q&A text from the source PDF.

Pipeline:
  1. Open PDF with PyMuPDF and extract raw text.
  2. Drop characters known to be PDF-encoding artifacts (U+FFFD replacement
     char, C1 controls, soft hyphen, stray Latin-1 mojibake glyphs that map to
     no Devanagari character).
  3. Apply matra-doubling + halant-doubling fixes via the existing
     scripts/fix-hindi-corruption.py allowlist.
  4. Un-wrap PDF soft line breaks (single \\n inside a paragraph) into spaces,
     preserving blank-line paragraph breaks.
  5. Split into Q&A blocks on "प्रश्न :" / "उत्तर :" markers.

Outputs a JSON file at scripts/pdf-hindi-extracted.json with shape:

  [
    {
      "n": 1,
      "question": "...",         # Hindi text after "प्रश्न :" up to "उत्तर :"
      "answer_paragraphs": [...] # Hindi paragraphs after "उत्तर :"
    },
    ...
  ]

This file is consumed by scripts/apply-pdf-hindi-to-data.py which patches
src/data/qa-bhagavad-dharma.ts.
"""

from __future__ import annotations

import json
import re
import sys
import unicodedata
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = ROOT / "23 May Bhagavad Dharma Prashnottari.pdf"
OUT_PATH = ROOT / "scripts" / "pdf-hindi-extracted.json"

# Import the existing cleanup script's helpers
sys.path.insert(0, str(ROOT / "scripts"))
from importlib.machinery import SourceFileLoader

_fix = SourceFileLoader(
    "fix_hindi_corruption", str(ROOT / "scripts" / "fix-hindi-corruption.py")
).load_module()


# Characters to strip outright -- known PDF-encoding artifacts that carry no
# semantic meaning. We deliberately KEEP all Devanagari, ASCII, common
# punctuation, emojis, ₹, arrows, bullets etc.
STRIP_CODEPOINTS: set[int] = set()

# Replacement char (the InDesign Devanagari "spacer" artifact -- we proved this
# in earlier analysis: deleting it yields valid Hindi).
STRIP_CODEPOINTS.add(0xFFFD)

# C1 control chars (U+0080..U+009F) -- garbage from font encoding.
for c in range(0x0080, 0x00A0):
    STRIP_CODEPOINTS.add(c)
# Other C0 control chars (except common whitespace).
for c in range(0x00, 0x20):
    if c not in (0x09, 0x0A, 0x0D):  # tab, LF, CR
        STRIP_CODEPOINTS.add(c)

# Soft hyphen (PDF hyphenation hint, never wanted in source text)
STRIP_CODEPOINTS.add(0x00AD)

# Specific Latin-1 mojibake characters that appeared adjacent to Devanagari
# in this PDF and have no meaning here. These were identified manually by
# diff'ing the cleaned PDF text vs. the known-good English translations.
STRIP_CODEPOINTS.update(ord(c) for c in "áÔ«¹¸íèÃÉð")
# Superscript 1 (often appears after दृष्टि as glyph footnote artifact)
# Already in via ¹ above.


_BRACKET_IN_DEV_RE = re.compile(r"([\u0900-\u097F])[\{\}]([\u0900-\u097F])")


def strip_artifacts(text: str) -> str:
    text = "".join(ch for ch in text if ord(ch) not in STRIP_CODEPOINTS)
    # The InDesign export sometimes encoded the right-side of the श्चि conjunct
    # ligature as U+007B/U+007D ({ or }). Strip those only when surrounded by
    # Devanagari letters, so we don't damage JSON or normal text.
    prev = None
    while prev != text:
        prev = text
        text = _BRACKET_IN_DEV_RE.sub(r"\1\2", text)
    return text


def unwrap_paragraphs(text: str) -> str:
    """Collapse PDF soft line breaks while preserving paragraph breaks.

    - 2+ consecutive newlines -> paragraph break (\\n\\n).
    - Single newline -> space (PDF line wrap).
    - Multiple spaces -> single space.
    """
    # Normalize all line-separator variants (\r\n, \r, \u2028, \u2029) to \n first
    text = re.sub(r"\r\n?|[\u2028\u2029]", "\n", text)
    text = re.sub(r"\n{2,}", "\n\n", text)
    text = re.sub(r"(?<!\n)\n(?!\n)", " ", text)
    text = re.sub(r"[ \t]+", " ", text)
    paras = [p.strip() for p in text.split("\n\n")]
    return "\n\n".join(p for p in paras if p)


# ---------------------------------------------------------------------------
# Split into Q&A entries.
# ---------------------------------------------------------------------------

QUESTION_MARKER = re.compile(r"प्रश्न\s*[:：]\s*", re.MULTILINE)
ANSWER_MARKER = re.compile(r"उत्तर\s*[:：]\s*", re.MULTILINE)


def split_qa(text: str) -> list[dict]:
    """Return list of {question, answer_paragraphs}."""
    starts = [m.start() for m in QUESTION_MARKER.finditer(text)]
    if not starts:
        return []
    starts.append(len(text))

    out = []
    for i in range(len(starts) - 1):
        block = text[starts[i] : starts[i + 1]]
        # Strip the leading "प्रश्न :" marker
        block = QUESTION_MARKER.sub("", block, count=1)
        # Find the "उत्तर :" inside this block
        am = ANSWER_MARKER.search(block)
        if not am:
            # No explicit answer marker -- treat whole block as question
            q = block.strip()
            ans_paras: list[str] = []
        else:
            q = block[: am.start()].strip()
            ans_text = block[am.end() :].strip()
            # Paragraphs of the answer (preserve \n\n splits)
            ans_paras = [p.strip() for p in ans_text.split("\n\n") if p.strip()]

        # Question itself can also span multiple paragraphs; flatten newlines
        # within the question into spaces (questions are short, this is safe)
        q = re.sub(r"\s+", " ", q)

        out.append(
            {
                "n": i + 1,
                "question": q,
                "answer_paragraphs": ans_paras,
            }
        )
    return out


def main() -> int:
    if not PDF_PATH.exists():
        print(f"Error: PDF not found at {PDF_PATH}", file=sys.stderr)
        return 1

    doc = fitz.open(str(PDF_PATH))
    print(f"Opened PDF: {PDF_PATH.name}  pages={len(doc)}")

    # Step 1: raw text from all pages
    raw = "\n".join(page.get_text() for page in doc)
    print(f"Raw chars: {len(raw):,}  FFFD: {raw.count(chr(0xFFFD)):,}")

    # Step 2: strip artifacts
    cleaned = strip_artifacts(raw)
    print(f"After artifact strip: {len(cleaned):,} chars")

    # Step 3: fix matra-doubling + halant-doubling
    cleaned, n_a = _fix.apply_always_illegal(cleaned)
    cleaned, n_b = _fix.apply_allowlist(cleaned)
    print(f"Matra fixes: {n_a:,}  Allowlist fixes: {n_b:,}")

    # Step 4: unwrap paragraphs
    cleaned = unwrap_paragraphs(cleaned)
    print(f"After unwrap: {len(cleaned):,} chars")

    # Step 5: split into Q&A
    qas = split_qa(cleaned)
    print(f"Extracted Q&A entries: {len(qas)}")

    # Sanity report
    short_q = [q for q in qas if len(q["question"]) < 10]
    no_ans = [q for q in qas if not q["answer_paragraphs"]]
    print(f"  short questions (<10 chars): {len(short_q)}")
    print(f"  questions without answer: {len(no_ans)}")

    OUT_PATH.write_text(
        json.dumps(qas, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nWrote {OUT_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

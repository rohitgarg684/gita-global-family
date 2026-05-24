#!/usr/bin/env python3
"""Replace the Hindi `hi:` block in qa-bhagavad-dharma.ts with clean text
re-extracted from the source PDF (see scripts/extract-pdf-hindi.py).

We match PDF Q&A entries to data file entries by ORDER. We verified the order
matches 1:1 (73 PDF entries vs 73 bd-* data entries) before running this.

Each replaced entry preserves:
  - id, coverImage, tag, question (English), preview (English), answer (English)
  - The structure of the hi block (question/preview/answer fields)

We OVERWRITE:
  - hi.question  -> PDF-extracted Hindi question text
  - hi.preview   -> first ~200 chars of first answer paragraph
  - hi.answer    -> [{ type: "p", text: "..." }, ...] with one item per PDF paragraph

Quote escaping: TS strings here use double quotes. Inside the Hindi text we
must escape literal " characters. There are essentially none in the source.

Usage:
  python3 scripts/apply-pdf-hindi-to-data.py [--dry-run]
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "src/data/qa-bhagavad-dharma.ts"
PDF_JSON = ROOT / "scripts/pdf-hindi-extracted.json"


_WS_RE = re.compile(r"[\r\n\t\v\f\u2028\u2029]+")


def ts_escape(s: str) -> str:
    """Escape a string for inclusion in a TS double-quoted literal.

    All line/paragraph separators are converted to a single space so the
    resulting literal stays on a single line.
    """
    s = _WS_RE.sub(" ", s)
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    # Collapse runs of spaces and trim
    s = re.sub(r"  +", " ", s).strip()
    return s


def build_hi_block(question: str, paragraphs: list[str], indent: str = "    ") -> str:
    """Render a `hi: { ... },` TS block."""
    q = ts_escape(question)

    # Preview: first 200 chars of first paragraph (or empty if no paragraphs)
    preview_src = paragraphs[0] if paragraphs else ""
    # Trim to 200 chars and cut at the nearest word boundary
    if len(preview_src) > 200:
        cut = preview_src[:200].rsplit(" ", 1)[0]
        preview = cut + "..."
    else:
        preview = preview_src
    preview = ts_escape(preview)

    lines = [
        f"{indent}hi: {{",
        f'{indent}  question: "{q}",',
        f'{indent}  preview: "{preview}",',
        f"{indent}  answer: [",
    ]
    for p in paragraphs:
        text = ts_escape(p)
        lines.append(f'{indent}    {{ type: "p", text: "{text}" }},')
    lines.append(f"{indent}  ],")
    lines.append(f"{indent}}},")
    return "\n".join(lines)


# Regex to find each top-level entry's id and the bounds of its hi: { ... }, block.
# We'll iterate over `id: "bd-..."` matches in order, and for each, replace the
# following hi: { ... }, block.
ID_RE = re.compile(r'^    id: "(bd-[a-z0-9-]+)",\s*$', re.MULTILINE)
HI_BLOCK_RE = re.compile(r"^    hi: \{\n.*?^    \},\s*$", re.MULTILINE | re.DOTALL)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    text = DATA_FILE.read_text(encoding="utf-8")
    pdf_qas = json.loads(PDF_JSON.read_text(encoding="utf-8"))

    # Drop empty PDF entries
    pdf_qas = [q for q in pdf_qas if q["question"] and q["answer_paragraphs"]]

    # Find all bd-* id matches in order
    id_matches = list(ID_RE.finditer(text))
    print(f"Data file entries: {len(id_matches)}")
    print(f"PDF entries (non-empty): {len(pdf_qas)}")

    if len(id_matches) != len(pdf_qas):
        print(
            f"WARNING: mismatch in counts -- aborting to avoid bad alignment.",
            file=sys.stderr,
        )
        return 2

    # For each id match (in REVERSE order so offsets don't shift), find the
    # following hi: { ... }, block and replace it.
    new_text = text
    # Work from last to first so prior edits don't shift positions
    for pdf_idx, m in reversed(list(enumerate(id_matches))):
        qa = pdf_qas[pdf_idx]
        bd_id = m.group(1)

        # Find the next hi: { ... }, block AFTER this id
        # Scope: from m.end() up to the next id match (or EOF)
        scope_start = m.end()
        # find next id match
        if pdf_idx + 1 < len(id_matches):
            scope_end = id_matches[pdf_idx + 1].start()
        else:
            scope_end = len(new_text)

        # Search for hi: { within scope. The block ends at the next ^    },
        scope = new_text[scope_start:scope_end]
        hi_match = HI_BLOCK_RE.search(scope)
        if not hi_match:
            print(
                f"WARNING: no hi: block found for {bd_id} -- skipping",
                file=sys.stderr,
            )
            continue

        new_hi = build_hi_block(qa["question"], qa["answer_paragraphs"])

        new_text = (
            new_text[: scope_start + hi_match.start()]
            + new_hi
            + new_text[scope_start + hi_match.end() :]
        )

    if args.dry_run:
        # Show first 80 lines of diff-style output around first replacement
        print("\n(dry-run) Sample of new hi block for first entry:")
        first = pdf_qas[0]
        print(build_hi_block(first["question"], first["answer_paragraphs"]))
        print("\n(dry-run) Total bytes change:")
        print(f"  before: {len(text):,}  after: {len(new_text):,}  delta: {len(new_text)-len(text):+,}")
    else:
        DATA_FILE.write_text(new_text, encoding="utf-8")
        print(f"\nWrote {DATA_FILE.relative_to(ROOT)}")
        print(f"  before: {len(text):,} bytes  after: {len(new_text):,} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())

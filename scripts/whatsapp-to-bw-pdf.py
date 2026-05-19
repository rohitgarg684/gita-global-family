"""Convert WhatsApp photos in a folder to a printer-friendly black & white PDF.

- Detects the worksheet (white paper) in each photo and crops to it
- Forces non-paper background to pure white (huge ink savings)
- Converts the worksheet to grayscale with auto-contrast so colored row
  banners become light gray and text stays crisp
- Light sharpening
- Outputs a single multi-page PDF sized to US Letter, one image per page
- Pages are sorted by detected worksheet page-number (bottom corner) when
  possible, falling back to filename order
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image, ImageOps, ImageFilter


LETTER_PX = (2550, 3300)  # 8.5 x 11 inch at 300 dpi
MARGIN_PX = 75            # ~0.25 inch margin


def _paper_mask(gray: Image.Image) -> Image.Image:
    """Return a binary mask (mode 'L', 0/255) marking the bright paper region.

    Operates on the *original* photo (before any contrast tweaks) so that
    the wooden desk (~dark) vs the paper (~bright) separation is reliable.
    """
    # Strong blur to wash out fine detail (numbers, banners) so we are
    # mostly detecting "bright big region" = the paper.
    blurred = gray.filter(ImageFilter.GaussianBlur(radius=20))
    # Threshold: paper photographed under normal light is well above 130;
    # the wooden desk is below 110. 130 is a safe middle ground.
    mask = blurred.point(lambda v: 255 if v >= 130 else 0)
    # Smooth the edges so we don't get jagged borders, then re-binarize.
    mask = mask.filter(ImageFilter.GaussianBlur(radius=8))
    return mask.point(lambda v: 255 if v >= 128 else 0)


def _crop_and_mask(gray: Image.Image) -> tuple[Image.Image, Image.Image]:
    """Compute the paper mask, crop the image to it, and return the cropped
    grayscale image plus the cropped mask.
    """
    mask = _paper_mask(gray)
    bbox = mask.getbbox()
    if not bbox:
        return gray, Image.new("L", gray.size, color=255)

    pad = 10
    x0, y0, x1, y1 = bbox
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(gray.width, x1 + pad)
    y1 = min(gray.height, y1 + pad)

    return gray.crop((x0, y0, x1, y1)), mask.crop((x0, y0, x1, y1))


def process_image(src: Path) -> Image.Image:
    """Load one photo and return a printer-friendly B&W page-sized image."""
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)
    gray = img.convert("L")

    gray, mask = _crop_and_mask(gray)

    # Mild auto-contrast on the worksheet: light gray banners, dark text,
    # white paper.
    enhanced = ImageOps.autocontrast(gray, cutoff=(1, 3), ignore=None)
    enhanced = enhanced.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=2))

    # Slightly grow the mask so we don't clip page edges / spiral binding,
    # then heavily smooth its edge so the transition to white is invisible.
    mask = mask.filter(ImageFilter.MaxFilter(11))
    mask = mask.filter(ImageFilter.GaussianBlur(radius=4))

    # Paint everything outside the paper region pure white.
    white = Image.new("L", enhanced.size, color=255)
    gray = Image.composite(enhanced, white, mask)

    page = Image.new("L", LETTER_PX, color=255)
    max_w = LETTER_PX[0] - 2 * MARGIN_PX
    max_h = LETTER_PX[1] - 2 * MARGIN_PX

    scale = min(max_w / gray.width, max_h / gray.height)
    new_size = (max(1, int(gray.width * scale)), max(1, int(gray.height * scale)))
    gray = gray.resize(new_size, Image.LANCZOS)

    off_x = (LETTER_PX[0] - new_size[0]) // 2
    off_y = (LETTER_PX[1] - new_size[1]) // 2
    page.paste(gray, (off_x, off_y))
    return page


def _explicit_order(name: str) -> tuple[int, str]:
    """Sort key that puts the no-suffix file first, then (1), (2), ... by
    the integer in parentheses. Falls back to filename order.
    """
    m = re.search(r"\((\d+)\)", name)
    return (int(m.group(1)) if m else 0, name.lower())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, help="Folder containing the photos")
    parser.add_argument("--output", required=True, help="Output PDF path")
    parser.add_argument(
        "--order",
        nargs="+",
        help="Optional explicit ordering: list of filenames in the order they should appear.",
    )
    args = parser.parse_args()

    src_dir = Path(args.source)
    exts = {".jpg", ".jpeg", ".png", ".heic", ".webp"}
    all_files = [p for p in src_dir.iterdir() if p.is_file() and p.suffix.lower() in exts]

    if args.order:
        by_name = {p.name: p for p in all_files}
        files = [by_name[name] for name in args.order if name in by_name]
        missing = [n for n in args.order if n not in by_name]
        if missing:
            raise SystemExit(f"Files not found in source: {missing}")
    else:
        files = sorted(all_files, key=lambda p: _explicit_order(p.name))

    if not files:
        raise SystemExit(f"No images found in {src_dir}")

    print(f"Processing {len(files)} image(s)...")
    pages = []
    for i, f in enumerate(files, 1):
        print(f"  [{i}/{len(files)}] {f.name}")
        pages.append(process_image(f))

    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    pages[0].save(
        out,
        save_all=True,
        append_images=pages[1:],
        format="PDF",
        resolution=300.0,
    )
    print(f"\nWrote {out} ({out.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()

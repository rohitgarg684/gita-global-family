"""Render a public URL to a single PDF using Playwright/Chromium.

Handles lazy-loaded images by scrolling through the page first, and uses
print-media CSS by default. Designed for content pages like the
gitaglobalfamily.org stories.

Usage:
    python3 scripts/url-to-pdf.py \
        --url https://gitaglobalfamily.org/words/stories/the-boy-who-kept-his-word/ \
        --output output/the-boy-who-kept-his-word.pdf
"""

from __future__ import annotations

import argparse
import mimetypes
import urllib.request
from pathlib import Path

from playwright.sync_api import Route, sync_playwright


# Hosts that the headless Chromium can't reach directly on this machine
# (a local proxy / agent blocks them with ERR_ACCESS_DENIED). We refetch
# them via urllib (which is allowed) and serve the bytes back to the
# browser.
PROXY_HOSTS = ("storage.googleapis.com", "fonts.gstatic.com", "fonts.googleapis.com")


def _proxy_handler(route: Route) -> None:
    request = route.request
    url = request.url
    if not any(h in url for h in PROXY_HOSTS):
        route.continue_()
        return
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": (
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/131.0.0.0 Safari/537.36"
                ),
                "Accept": "*/*",
            },
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read()
            content_type = resp.headers.get(
                "Content-Type",
                mimetypes.guess_type(url)[0] or "application/octet-stream",
            )
        route.fulfill(status=200, body=body, content_type=content_type)
    except Exception as e:
        print(f"proxy failed for {url}: {e}")
        route.abort()


FORCE_EAGER_SCRIPT = """
() => {
    for (const img of document.images) {
        img.loading = 'eager';
        img.decoding = 'sync';
        if (img.dataset && img.dataset.src && !img.src) {
            img.src = img.dataset.src;
        }
    }
}
"""

SCROLL_SCRIPT = """
async () => {
    await new Promise((resolve) => {
        let total = 0;
        const step = 300;
        const timer = setInterval(() => {
            window.scrollBy(0, step);
            total += step;
            if (total >= document.body.scrollHeight + 600) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                resolve();
            }
        }, 150);
    });
}
"""

WAIT_IMAGES_SCRIPT = """
async () => {
    const imgs = Array.from(document.images);
    await Promise.all(imgs.map(async (img) => {
        if (img.complete && img.naturalWidth > 0) return;
        try {
            await img.decode();
        } catch (e) {
            // ignore decode failures; we'll fall back to the natural state
        }
    }));
}
"""

REVEAL_MOTION_SCRIPT = """
() => {
    // Framer Motion elements may still be at opacity:0 when we print.
    // Force-show anything that has an inline opacity/transform animation
    // baked in by the initial render.
    for (const el of document.querySelectorAll('*')) {
        const s = el.style;
        if (s && (s.opacity === '0' || s.transform)) {
            s.opacity = '1';
            s.transform = 'none';
        }
    }
}
"""


def render(url: str, output: Path, media: str, format_: str) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={"width": 1280, "height": 1800},
            device_scale_factor=2,
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/131.0.0.0 Safari/537.36"
            ),
            locale="en-US",
        )
        page = context.new_page()
        page.route("**/*", _proxy_handler)
        page.goto(url, wait_until="domcontentloaded", timeout=60_000)
        try:
            page.wait_for_load_state("networkidle", timeout=30_000)
        except Exception:
            pass

        page.evaluate(FORCE_EAGER_SCRIPT)
        page.evaluate(SCROLL_SCRIPT)
        page.evaluate(FORCE_EAGER_SCRIPT)

        try:
            page.wait_for_load_state("networkidle", timeout=30_000)
        except Exception:
            pass

        page.evaluate(WAIT_IMAGES_SCRIPT)
        page.evaluate(REVEAL_MOTION_SCRIPT)
        page.wait_for_timeout(500)

        page.emulate_media(media=media)

        page.pdf(
            path=str(output),
            format=format_,
            print_background=True,
            margin={"top": "12mm", "bottom": "12mm", "left": "12mm", "right": "12mm"},
            prefer_css_page_size=True,
        )
        browser.close()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument(
        "--media",
        choices=("screen", "print"),
        default="screen",
        help="CSS media emulation. 'screen' keeps the full visual styling.",
    )
    parser.add_argument("--format", default="A4", help="Paper format, e.g. A4, Letter")
    args = parser.parse_args()

    render(args.url, Path(args.output), args.media, args.format)
    out = Path(args.output)
    print(f"Wrote {out} ({out.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()

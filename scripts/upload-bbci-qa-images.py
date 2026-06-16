#!/usr/bin/env python3
"""
One-off uploader for the 5 brahmbodhi.co.in Q&A cover images.

Uploads each generated image to:
  gs://gita-gloval-family.firebasestorage.app/assets/images/<filename>

The source images live under the chat-tool assets folder.
"""

import mimetypes
import sys
from pathlib import Path

from google.cloud import storage

ROOT = Path(__file__).resolve().parent.parent
BUCKET = "gita-gloval-family.firebasestorage.app"
PREFIX = "assets/images"
KEY_FILE = ROOT / "service-account-key.json"

SOURCE_DIR = Path(
    "/Users/rohitgarg/.cursor/projects/"
    "Users-rohitgarg-Documents-GitHub-gita-global-family/assets"
)

FILES = [
    "qa-bbci-garlic-onion-laddu-gopal.png",
    "qa-bbci-restless-mind-and-future-worries.png",
    "qa-bbci-destiny-kundali-and-the-gita.png",
    "qa-bbci-meaning-of-ekadashi-and-fasting.png",
    "qa-bbci-virtues-vices-love-compassion-humility.png",
]


def main() -> int:
    client = storage.Client.from_service_account_json(str(KEY_FILE))
    bucket = client.bucket(BUCKET)

    missing = [f for f in FILES if not (SOURCE_DIR / f).exists()]
    if missing:
        print("Missing source files:", missing)
        return 1

    for name in FILES:
        local = SOURCE_DIR / name
        blob_path = f"{PREFIX}/{name}"
        blob = bucket.blob(blob_path)
        ctype, _ = mimetypes.guess_type(str(local))
        blob.upload_from_filename(str(local), content_type=ctype or "image/png")
        try:
            blob.make_public()
        except Exception as e:  # noqa: BLE001
            print(f"  WARN: make_public failed for {name}: {e}")
        if not bucket.blob(blob_path).exists():
            print(f"  ERROR: verification failed for {blob_path}")
            return 2
        print(f"  UPLOADED gs://{BUCKET}/{blob_path}")

    return 0


if __name__ == "__main__":
    sys.exit(main())

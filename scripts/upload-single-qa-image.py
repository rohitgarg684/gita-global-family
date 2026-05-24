#!/usr/bin/env python3
"""
Upload a single Q&A cover image to GCS and patch the
src/data/qa-bhagavad-dharma.ts file with the coverImage field for that id.

Usage:
  python3 scripts/upload-single-qa-image.py <local-image-path> <qa-id>

Example:
  python3 scripts/upload-single-qa-image.py /tmp/foo.png bd-does-the-soul-take-birth-and-die

The image will be uploaded to:
  gs://<bucket>/assets/images/qa-<qa-id>.png

And the data file will be updated so the matching entry has:
  coverImage: "qa-<qa-id>.png",
inserted immediately after the `id:` line.
"""

import mimetypes
import re
import sys
from pathlib import Path

from google.cloud import storage

ROOT = Path(__file__).resolve().parent.parent
BUCKET = "gita-gloval-family.firebasestorage.app"
PREFIX = "assets/images"
DATA_FILE = ROOT / "src/data/qa-bhagavad-dharma.ts"
KEY_FILE = ROOT / "service-account-key.json"


def upload_to_gcs(local_path: Path, qa_id: str) -> str:
    """Upload local image to GCS. Returns the blob filename (not full path)."""
    ext = local_path.suffix.lower() or ".png"
    blob_filename = f"qa-{qa_id}{ext}"
    blob_path = f"{PREFIX}/{blob_filename}"

    client = storage.Client.from_service_account_json(str(KEY_FILE))
    bucket = client.bucket(BUCKET)
    blob = bucket.blob(blob_path)

    content_type, _ = mimetypes.guess_type(str(local_path))
    if not content_type:
        content_type = "image/png"

    blob.upload_from_filename(str(local_path), content_type=content_type)
    try:
        blob.make_public()
    except Exception as e:  # noqa: BLE001
        print(f"  WARN: make_public failed: {e}")

    if not bucket.blob(blob_path).exists():
        raise RuntimeError(f"Upload verification failed for {blob_path}")

    print(f"  UPLOADED gs://{BUCKET}/{blob_path}")
    return blob_filename


def patch_data_file(qa_id: str, blob_filename: str) -> bool:
    """Insert `coverImage: "<blob_filename>",` after the id line for qa_id.

    Idempotent: if the entry already has a coverImage line, replace it.
    Returns True if a change was made.
    """
    text = DATA_FILE.read_text()
    id_line = f'    id: "{qa_id}",'
    if id_line not in text:
        raise RuntimeError(f"id {qa_id} not found in {DATA_FILE}")

    cover_line = f'    coverImage: "{blob_filename}",'

    # If the very next non-empty line is already a coverImage, replace it.
    pattern = re.compile(
        re.escape(id_line) + r"\n(    coverImage: \"[^\"]+\",\n)?",
    )

    def repl(m):
        return f"{id_line}\n{cover_line}\n"

    new_text, n = pattern.subn(repl, text, count=1)
    if n == 0:
        raise RuntimeError(f"Failed to patch entry for {qa_id}")
    if new_text == text:
        print(f"  NO CHANGE (already set) for {qa_id}")
        return False
    DATA_FILE.write_text(new_text)
    print(f"  PATCHED {qa_id} -> coverImage: {blob_filename}")
    return True


def main():
    if len(sys.argv) != 3:
        print("usage: upload-single-qa-image.py <local-image-path> <qa-id>")
        sys.exit(1)
    local = Path(sys.argv[1])
    qa_id = sys.argv[2]
    if not local.exists():
        print(f"Error: {local} does not exist")
        sys.exit(1)

    blob_filename = upload_to_gcs(local, qa_id)
    patch_data_file(qa_id, blob_filename)


if __name__ == "__main__":
    main()

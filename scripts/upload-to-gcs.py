#!/usr/bin/env python3
"""
Upload local assets to Google Cloud Storage with organized folder structure.

Usage:
  python scripts/upload-to-gcs.py [--bucket BUCKET_NAME] [--prefix PREFIX]

The bucket name defaults to the value in .env.local (GCS_BUCKET) or can be
passed via --bucket. The prefix defaults to "assets".
"""

import argparse
import mimetypes
import os
import sys
from pathlib import Path

from google.cloud import storage

CATEGORY_MAP = {
    ".png": "images",
    ".jpg": "images",
    ".jpeg": "images",
    ".webp": "images",
    ".gif": "images",
    ".svg": "icons",
    ".ico": "icons",
    ".mp3": "audio",
    ".wav": "audio",
    ".ogg": "audio",
    ".m4a": "audio",
    ".pdf": "documents",
    ".doc": "documents",
    ".docx": "documents",
    ".xls": "documents",
    ".xlsx": "documents",
    ".txt": "documents",
}


def categorize(filename: str) -> str:
    ext = Path(filename).suffix.lower()
    return CATEGORY_MAP.get(ext, "other")


def upload_directory(bucket_name: str, source_dir: str, prefix: str, credentials_path: str | None):
    if credentials_path:
        client = storage.Client.from_service_account_json(credentials_path)
    else:
        client = storage.Client()

    bucket = client.bucket(bucket_name)
    source = Path(source_dir)

    if not source.exists():
        print(f"Error: source directory '{source_dir}' does not exist")
        sys.exit(1)

    uploaded = 0
    skipped = 0

    for filepath in sorted(source.rglob("*")):
        if filepath.is_dir():
            continue

        category = categorize(filepath.name)
        blob_path = f"{prefix}/{category}/{filepath.name}"
        blob = bucket.blob(blob_path)

        content_type, _ = mimetypes.guess_type(str(filepath))
        if not content_type:
            content_type = "application/octet-stream"

        if blob.exists():
            print(f"  SKIP  {blob_path} (already exists)")
            skipped += 1
            continue

        print(f"  UPLOAD {blob_path} ({filepath.stat().st_size / 1024:.0f} KB)")
        blob.upload_from_filename(str(filepath), content_type=content_type)
        blob.make_public()
        uploaded += 1

    print(f"\nDone: {uploaded} uploaded, {skipped} skipped")
    print(f"Public URL pattern: https://storage.googleapis.com/{bucket_name}/{prefix}/<category>/<filename>")


def main():
    parser = argparse.ArgumentParser(description="Upload assets to GCS bucket")
    parser.add_argument("--bucket", default=None, help="GCS bucket name (without gs:// prefix)")
    parser.add_argument("--prefix", default="assets", help="Top-level folder prefix in the bucket")
    parser.add_argument("--source", default="public", help="Local directory to upload")
    parser.add_argument("--credentials", default=None, help="Path to service account JSON key")
    args = parser.parse_args()

    bucket_name = args.bucket
    if not bucket_name:
        env_file = Path(__file__).parent.parent / ".env.local"
        if env_file.exists():
            for line in env_file.read_text().splitlines():
                if line.startswith("GCS_BUCKET="):
                    bucket_name = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break

    if not bucket_name:
        print("Error: No bucket specified. Use --bucket or set GCS_BUCKET in .env.local")
        sys.exit(1)

    bucket_name = bucket_name.replace("gs://", "")

    credentials = args.credentials
    if not credentials:
        default_key = Path(__file__).parent.parent / "service-account-key.json"
        if default_key.exists():
            credentials = str(default_key)

    print(f"Bucket:  {bucket_name}")
    print(f"Prefix:  {args.prefix}")
    print(f"Source:  {args.source}")
    print(f"Creds:   {credentials or 'default (ADC)'}")
    print()

    upload_directory(bucket_name, args.source, args.prefix, credentials)


if __name__ == "__main__":
    main()

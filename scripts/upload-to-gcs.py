#!/usr/bin/env python3
"""
Upload local assets to Google Cloud Storage with organized folder structure.

Usage:
  python scripts/upload-to-gcs.py [--bucket BUCKET_NAME] [--prefix PREFIX]

The bucket name defaults to the value in .env.local (GCS_BUCKET) or can be
passed via --bucket. The prefix defaults to "assets".

By default, local files are deleted after a successful upload (and any
now-empty parent directories beneath the source root are cleaned up).
Use --keep-local to preserve them.
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


# Files that should never be deleted locally even after a successful upload.
PROTECTED_NAMES = {
    "manifest.json",
    "favicon.ico",
    "robots.txt",
    "sitemap.xml",
}


def _prune_empty_parents(path: Path, stop_at: Path) -> None:
    """Remove now-empty parent directories up to (but not including) stop_at."""
    stop_at = stop_at.resolve()
    parent = path.parent.resolve()
    while parent != stop_at and stop_at in parent.parents:
        try:
            next(parent.iterdir())
            return  # not empty, stop
        except StopIteration:
            pass
        except FileNotFoundError:
            return
        try:
            parent.rmdir()
        except OSError:
            return
        parent = parent.parent.resolve()


def upload_directory(
    bucket_name: str,
    source_dir: str,
    prefix: str,
    credentials_path: str | None,
    delete_local: bool = True,
):
    if credentials_path:
        client = storage.Client.from_service_account_json(credentials_path)
    else:
        client = storage.Client()

    bucket = client.bucket(bucket_name)
    source = Path(source_dir).resolve()

    if not source.exists():
        print(f"Error: source directory '{source_dir}' does not exist")
        sys.exit(1)

    uploaded = 0
    skipped = 0
    deleted = 0
    kept_protected = 0

    for filepath in sorted(source.rglob("*")):
        if filepath.is_dir():
            continue

        category = categorize(filepath.name)
        blob_path = f"{prefix}/{category}/{filepath.name}"
        blob = bucket.blob(blob_path)

        content_type, _ = mimetypes.guess_type(str(filepath))
        if not content_type:
            content_type = "application/octet-stream"

        already_remote = blob.exists()
        if already_remote:
            print(f"  SKIP   {blob_path} (already exists)")
            skipped += 1
        else:
            print(f"  UPLOAD {blob_path} ({filepath.stat().st_size / 1024:.0f} KB)")
            blob.upload_from_filename(str(filepath), content_type=content_type)
            try:
                blob.make_public()
            except Exception as e:  # noqa: BLE001
                print(f"         WARN: make_public failed: {e}")
            uploaded += 1

        if not delete_local:
            continue

        if filepath.name in PROTECTED_NAMES:
            kept_protected += 1
            continue

        # Re-confirm the object actually landed before we delete the local copy.
        try:
            if not bucket.blob(blob_path).exists():
                print(f"         SKIP DELETE (remote missing): {filepath}")
                continue
        except Exception as e:  # noqa: BLE001
            print(f"         SKIP DELETE (verify failed: {e}): {filepath}")
            continue

        try:
            filepath.unlink()
            deleted += 1
            print(f"  DELETE {filepath.relative_to(source)}")
            _prune_empty_parents(filepath, source)
        except OSError as e:
            print(f"         WARN: could not delete {filepath}: {e}")

    summary = f"\nDone: {uploaded} uploaded, {skipped} skipped"
    if delete_local:
        summary += f", {deleted} local files deleted, {kept_protected} protected"
    print(summary)
    print(f"Public URL pattern: https://storage.googleapis.com/{bucket_name}/{prefix}/<category>/<filename>")


def main():
    parser = argparse.ArgumentParser(description="Upload assets to GCS bucket")
    parser.add_argument("--bucket", default=None, help="GCS bucket name (without gs:// prefix)")
    parser.add_argument("--prefix", default="assets", help="Top-level folder prefix in the bucket")
    parser.add_argument("--source", default="public", help="Local directory to upload")
    parser.add_argument("--credentials", default=None, help="Path to service account JSON key")
    parser.add_argument(
        "--keep-local",
        action="store_true",
        help="Do not delete local files after successful upload (default: delete)",
    )
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

    delete_local = not args.keep_local

    print(f"Bucket:        {bucket_name}")
    print(f"Prefix:        {args.prefix}")
    print(f"Source:        {args.source}")
    print(f"Creds:         {credentials or 'default (ADC)'}")
    print(f"Delete local:  {delete_local}")
    print()

    upload_directory(
        bucket_name, args.source, args.prefix, credentials, delete_local=delete_local
    )


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Make existing GCS objects publicly readable.

Usage:
  python scripts/make-public.py [--bucket BUCKET] [--prefix assets/] [--credentials PATH]

If --prefix is given, only blobs whose name starts with that prefix are processed.
Otherwise every blob in the bucket is processed.
"""

import argparse
import sys
from pathlib import Path

from google.cloud import storage
from google.api_core.exceptions import GoogleAPIError


def main():
    parser = argparse.ArgumentParser(description="Make GCS objects publicly readable")
    parser.add_argument("--bucket", default=None, help="GCS bucket name")
    parser.add_argument("--prefix", default="assets/", help="Only process blobs with this prefix")
    parser.add_argument("--credentials", default=None, help="Path to service account JSON")
    parser.add_argument("--dry-run", action="store_true", help="List blobs without modifying ACLs")
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
        print("Error: pass --bucket or set GCS_BUCKET in .env.local")
        sys.exit(1)
    bucket_name = bucket_name.replace("gs://", "")

    credentials = args.credentials
    if not credentials:
        default_key = Path(__file__).parent.parent / "service-account-key.json"
        if default_key.exists():
            credentials = str(default_key)

    client = (
        storage.Client.from_service_account_json(credentials)
        if credentials
        else storage.Client()
    )
    bucket = client.bucket(bucket_name)

    print(f"Bucket: {bucket_name}")
    print(f"Prefix: {args.prefix}")
    print(f"Mode:   {'DRY RUN' if args.dry_run else 'APPLY'}\n")

    made_public = 0
    already = 0
    failed = 0
    for blob in client.list_blobs(bucket_name, prefix=args.prefix):
        if args.dry_run:
            print(f"  WOULD {blob.name}")
            continue
        try:
            blob.reload()
            acl_entries = list(blob.acl)
            is_public = any(
                e.get("entity") == "allUsers" and e.get("role") == "READER"
                for e in acl_entries
            )
            if is_public:
                already += 1
                continue
            blob.make_public()
            made_public += 1
            print(f"  PUBLIC {blob.name}")
        except GoogleAPIError as e:
            failed += 1
            print(f"  FAIL   {blob.name}: {e}")

    print(
        f"\nDone: {made_public} made public, {already} already public, {failed} failed"
    )


if __name__ == "__main__":
    main()

const GCS_BASE =
  "https://storage.googleapis.com/gita-gloval-family.firebasestorage.app/assets";

export function img(filename: string): string {
  return `${GCS_BASE}/images/${filename}`;
}

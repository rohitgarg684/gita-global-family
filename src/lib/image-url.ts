const GCS_BASE =
  "https://storage.googleapis.com/gita-gloval-family.firebasestorage.app/assets";

export function img(filename: string): string {
  return `${GCS_BASE}/images/${filename}`;
}

export function doc(filename: string): string {
  return `${GCS_BASE}/documents/${filename}`;
}

export function audio(filename: string): string {
  return `${GCS_BASE}/audio/${filename}`;
}

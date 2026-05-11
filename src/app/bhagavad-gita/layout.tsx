import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhagavad Gita",
  description:
    "Read the complete Bhagavad Gita with Sanskrit shlokas, Hindi and English translations, word-by-word meanings, and scholarly commentary by Gita Global Family.",
};

export default function BhagavadGitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

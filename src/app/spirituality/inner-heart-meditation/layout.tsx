import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inner Heart Meditation (Antar-Hriday Dhyan) — Gita Global Family",
  description:
    "A guided 10–15 minute Inner Heart Meditation rooted in the Bhagavad Gita. Listen to the audio and follow along in English or Hindi.",
};

export default function InnerHeartMeditationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

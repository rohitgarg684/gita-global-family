import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirituality — Gita Global Family",
  description:
    "Guided meditations and life-changing spiritual practices rooted in the Bhagavad Gita. Begin with the Inner Heart Meditation in English or Hindi.",
};

export default function SpiritualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Words — The Basic 2500 | Gita Global Family",
  description:
    "Learn essential English vocabulary with Hindi meanings, pronunciations, and examples. Curated from The Basic 2500 Words dictionary by BrahmBodhi Pradeep Siddharth.",
};

export default function WordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanatan Seva Nidhi Act — Gita Global Family",
  description:
    "The Draft Sanatan Seva Nidhi Act for the protection and empowerment of Sanatan Dharma. Conceived and drafted by Sriyut Brahm Bodhi, President of Gita Global Family Trust.",
};

export default function SanatanSevaNidhiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

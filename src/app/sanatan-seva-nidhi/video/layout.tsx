import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanatan Seva Nidhi — 2-Minute Film",
  description:
    "A 2-minute film on the proposed Sanatan Seva Nidhi Act — a unified, transparent fund to support temples, pujaris, refugees, widows, and Sanatan education.",
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

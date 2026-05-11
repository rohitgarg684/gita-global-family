import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Gita Global Family",
  description:
    "Explore events by Gita Global Family — discourses, workshops, interfaith dialogues, and community service across London (UK) and India.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Temple-Centred Village Transformation Initiative | Gita Global Family",
  description:
    "Explore the six projects of the Temple-Centred Village Transformation Initiative — temple empowerment, spiritual literacy in 1,000 homes, Dharma outreach educators, youth leadership, social resilience, and livelihood empowerment.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

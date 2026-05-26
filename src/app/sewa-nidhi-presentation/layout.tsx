import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Presentation · Sanatan Seva Nidhi",
  description:
    "Restricted leadership briefing on the Sanatan Seva Nidhi Act, 20XX. Authorized access only.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

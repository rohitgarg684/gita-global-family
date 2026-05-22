import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allegations Against Hinduism",
  description:
    "A dispassionate examination of common allegations made against Sanatan Dharma (Hinduism) by other world religions, alongside considered responses grounded in Hindu philosophical traditions.",
};

export default function AllegationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

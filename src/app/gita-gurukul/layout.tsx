import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gita Gurukul",
};

export default function GitaGurukulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

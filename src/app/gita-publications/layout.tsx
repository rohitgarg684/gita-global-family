import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gita Publications",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrahmBodhi",
};

export default function BrahmBodhiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

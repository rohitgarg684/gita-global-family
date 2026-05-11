import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Family",
};

export default function JoinUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { getIslamEssaySections, getEssayMetadata } from "@/lib/islam-essay";
import EssayClient from "./EssayClient";

export const metadata: Metadata = {
  title: "An Essay on Islam · इस्लाम पर निबंध",
  description:
    "A bilingual, section-by-section examination of Islam — its doctrines, scriptures, and practices — from the standpoint of Sanatan Dharma. Available in English and हिंदी.",
};

export default function IslamEssayPage() {
  const sections = getIslamEssaySections();
  const meta = getEssayMetadata();
  return <EssayClient sections={sections} meta={meta} />;
}

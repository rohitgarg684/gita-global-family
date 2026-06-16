"use client";

import SectionHeading from "@/components/SectionHeading";
import VideoCarousel from "@/components/VideoCarousel";

interface WatchAndLearnProps {
  /** Override the default section title */
  title?: string;
  /** Override the default subtitle */
  subtitle?: string;
  /** Extra Tailwind classes for the outer <section> */
  className?: string;
}

/**
 * "Watch & Learn" section: a SectionHeading, the VideoCarousel of BrahmBodhi
 * teachings, and Subscribe (English/Hindi) CTAs. Reused on the home page and
 * the BrahmBodhi page.
 */
export default function WatchAndLearn({
  title = "Watch & Learn",
  subtitle = "Explore our collection of teachings, spiritual insights, and wisdom from BrahmBodhi.",
  className = "section-padding py-16 md:py-24",
}: WatchAndLearnProps) {
  return (
    <section className={className}>
      <SectionHeading title={title} subtitle={subtitle} />
      <VideoCarousel />
      <div className="text-center mt-6">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.youtube.com/@BrahmBodhi_EnglishOfficial?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe (English)
          </a>
          <a
            href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe (Hindi)
          </a>
        </div>
      </div>
    </section>
  );
}

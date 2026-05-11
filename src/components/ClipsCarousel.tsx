"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

interface Clip {
  id: string;
  title: string;
  source: "ig" | "yt";
}

interface ClipCategory {
  title: string;
  clips: Clip[];
}

const categories: ClipCategory[] = [
  {
    title: "Why Sanatan Dharma Is Under Threat",
    clips: [
      { id: "i5Ggq_Uj6cw", title: "The Shrinking Horizon of Hinduism", source: "yt" },
      { id: "z2_uAJViC9I", title: "Why 99% of Hindu Homes Have No Gita or Ramayan", source: "yt" },
      { id: "JMQooCcbADI", title: "Training a New Priestly Class for Hindu Revival", source: "yt" },
      { id: "irGtZjk2LLQ", title: "Reviving Rural Hindu Temples", source: "yt" },
      { id: "X0sKCdcWRaI", title: "A National Fund for Hindu Revival", source: "yt" },
      { id: "eZOPUVN4Yt0", title: "A Fund to Support Persecuted Hindus", source: "yt" },
      { id: "JeD6X0mhH1o", title: "Why Hinduism Confuses the World", source: "yt" },
      { id: "8kTIOXE9Q4o", title: "Not All Streams of Hinduism Are All-Inclusive", source: "yt" },
      { id: "u1oNzKZKfOI", title: "Hinduism Also Waits For..", source: "yt" },
      { id: "FR2jyvisMn8", title: "When Lack of Dharma Made India a Slave", source: "yt" },
    ],
  },
  {
    title: "The Secularism Trap: Reclaiming Hindu Identity",
    clips: [
      { id: "SpoZGJilxM4", title: "Reverse Secularism in India: Hidden Truths", source: "yt" },
      { id: "8oU1lahqORs", title: "UK Secularism Exposed: Religion & Education", source: "yt" },
      { id: "E-ZBS62i0Yk", title: "Secularism Explained: India, Turkey & Beyond", source: "yt" },
      { id: "DOxUl2qiaBm", title: "What Does Secularism Really Mean?", source: "ig" },
      { id: "B6vyqFy2aYk", title: "Hinduism & Conversion: Why Entry Doors Are Closed", source: "yt" },
      { id: "wX_51QmUJKA", title: "Why Government Should Not Control Sanatan Seva Nidhi", source: "yt" },
      { id: "Cf9UAVNuW0M", title: "How Gita Granted Equal Spiritual Justice", source: "yt" },
      { id: "4nj9_y220JY", title: "Does Constitution Prohibit Gita in Schools?", source: "yt" },
      { id: "OdvrnIGJwtw", title: "No Caste, Only Varna — Based on Qualities", source: "yt" },
      { id: "Whh62Nnmn3s", title: "Is the Vedic Branch of Hinduism All-Inclusive?", source: "yt" },
    ],
  },
  {
    title: "Need of the Hour: Rise for Dharma",
    clips: [
      { id: "WMfUJN01zy4", title: "Why We Need Hindu Missionary Schools", source: "yt" },
      { id: "DOsMkMmkW7_", title: "Why India Needs Religious Education", source: "ig" },
      { id: "DOV0EpXESWY", title: "Leadership Lessons from Gita & Ramayana", source: "ig" },
      { id: "DOK7EB4DNlQ", title: "Conversion to Hinduism Made Simple", source: "ig" },
      { id: "ZSeZ-01f9vQ", title: "The Ashram Way: Sacrifice Now, Rule Later", source: "yt" },
      { id: "99ie4rjoEm4", title: "Bhagavad Gita's Message of Equality", source: "yt" },
      { id: "X_LR2LnIln0", title: "Why Emulate Krishna's Teachings & Rama's Character", source: "yt" },
      { id: "DQWn54PDD36", title: "Beauty of Chhath Puja in London!", source: "ig" },
      { id: "aNseMpTtViQ", title: "Different Sects of Hinduism & Bhagavad Dharma", source: "yt" },
      { id: "klP4gT1PTkk", title: "The Hidden Formula of Success in the Gita", source: "yt" },
    ],
  },
  {
    title: "Rediscovering Our Roots",
    clips: [
      { id: "DNx34kk2l5I", title: "God's Names Are Powerful — But Conditions Apply", source: "ig" },
      { id: "DNvLKAdWm9k", title: "Chanting God's Name at Death: Truths & Myths", source: "ig" },
      { id: "VdlEcYIEZJY", title: "This One Gita Verse Can Liberate You", source: "yt" },
      { id: "eKREI5Nrg7Q", title: "You'll Never Be Happy Until You Realize This", source: "yt" },
      { id: "i76Bmdb3OM8", title: "Live in the World Like Lotus on Water", source: "yt" },
      { id: "weEaeyCvEc8", title: "Did Krishna Really Promise to Do Everything?", source: "yt" },
      { id: "LjznaNyQrEs", title: "Are We Truly Masters of Our Actions?", source: "yt" },
      { id: "ene9IdOC82o", title: "When Life Strikes Hard, the Gita Holds You", source: "yt" },
      { id: "DOi7AgcANBo", title: "Paying Back the Debt to Our Ancestors", source: "ig" },
      { id: "bBAQtYhPxgE", title: "Beauty of Chhath Puja in London", source: "yt" },
    ],
  },
];

function ClipRow({ category }: { category: ClipCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeClip, setActiveClip] = useState<Clip | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const getEmbedUrl = (clip: Clip) => {
    if (clip.source === "ig") {
      return `https://www.youtube.com/embed/${clip.id}?autoplay=1&rel=0`;
    }
    return `https://www.youtube.com/embed/${clip.id}?autoplay=1&rel=0`;
  };

  return (
    <>
      <div className="mb-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-4 px-1">
          {category.title}
        </h3>

        <div className="relative group/row">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-r from-dark-brown via-dark-brown/80 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {category.clips.map((clip) => (
              <button
                key={clip.id}
                onClick={() => setActiveClip(clip)}
                className="group/card shrink-0 w-[150px] md:w-[180px] lg:w-[200px] cursor-pointer text-left focus:outline-none"
              >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-md group-hover/card:shadow-xl group-hover/card:shadow-saffron/20 transition-all duration-300 group-hover/card:scale-[1.04] ring-1 ring-white/10 group-hover/card:ring-saffron/50">
                  <img
                    src={`https://img.youtube.com/vi/${clip.id}/0.jpg`}
                    alt={clip.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-saffron/90 rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 scale-75 group-hover/card:scale-100 transition-all duration-300 shadow-lg backdrop-blur-sm">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  {clip.source === "ig" && (
                    <div className="absolute top-2 right-2">
                      <svg className="w-5 h-5 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs text-white font-medium line-clamp-2 leading-snug drop-shadow-lg">
                      {clip.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-l from-dark-brown via-dark-brown/80 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {activeClip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveClip(null)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveClip(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="text-sm">Close</span>
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={getEmbedUrl(activeClip)}
                  title={activeClip.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 text-white/90 text-sm font-medium text-center">
                {activeClip.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ClipsCarousel() {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <ClipRow key={category.title} category={category} />
      ))}
    </div>
  );
}

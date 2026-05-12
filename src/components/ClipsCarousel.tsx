"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

interface Clip {
  id: string;
  title: string;
}

interface ClipCategory {
  title: string;
  clips: Clip[];
}

const categories: ClipCategory[] = [
  {
    title: "Why Sanatan Dharma Is Under Threat",
    clips: [
      { id: "i5Ggq_Uj6cw", title: "The Shrinking Horizon of Hinduism" },
      { id: "z2_uAJViC9I", title: "Why 99% of Hindu Homes Have No Gita or Ramayan" },
      { id: "JMQooCcbADI", title: "Training a New Priestly Class for Hindu Revival" },
      { id: "irGtZjk2LLQ", title: "Reviving Rural Hindu Temples" },
      { id: "X0sKCdcWRaI", title: "A National Fund for Hindu Revival" },
      { id: "eZOPUVN4Yt0", title: "A Fund to Support Persecuted Hindus" },
      { id: "JeD6X0mhH1o", title: "Why Hinduism Confuses the World" },
      { id: "8kTIOXE9Q4o", title: "Not All Streams of Hinduism Are All-Inclusive" },
      { id: "u1oNzKZKfOI", title: "Hinduism Also Waits For.." },
      { id: "FR2jyvisMn8", title: "When Lack of Dharma Made India a Slave" },
    ],
  },
  {
    title: "The Secularism Trap: Reclaiming Hindu Identity",
    clips: [
      { id: "SpoZGJilxM4", title: "Reverse Secularism in India: Hidden Truths" },
      { id: "8oU1lahqORs", title: "UK Secularism Exposed: Religion & Education" },
      { id: "E-ZBS62i0Yk", title: "Secularism Explained: India, Turkey & Beyond" },
      { id: "iWoFYqQcwnU", title: "What Does Secularism Really Mean?" },
      { id: "B6vyqFy2aYk", title: "Hinduism & Conversion: Why Entry Doors Are Closed" },
      { id: "wX_51QmUJKA", title: "Why Government Should Not Control Sanatan Seva Nidhi" },
      { id: "Cf9UAVNuW0M", title: "How Gita Granted Equal Spiritual Justice" },
      { id: "4nj9_y220JY", title: "Does Constitution Prohibit Gita in Schools?" },
      { id: "OdvrnIGJwtw", title: "No Caste, Only Varna — Based on Qualities" },
      { id: "Whh62Nnmn3s", title: "Is the Vedic Branch of Hinduism All-Inclusive?" },
    ],
  },
  {
    title: "Need of the Hour: Rise for Dharma",
    clips: [
      { id: "WMfUJN01zy4", title: "Why We Need Hindu Missionary Schools" },
      { id: "EwnN8nFHLlg", title: "Why India Needs Religious Education" },
      { id: "ZSeZ-01f9vQ", title: "The Ashram Way: Sacrifice Now, Rule Later" },
      { id: "99ie4rjoEm4", title: "Bhagavad Gita's Message of Equality" },
      { id: "X_LR2LnIln0", title: "Why Emulate Krishna's Teachings & Rama's Character" },
      { id: "bBAQtYhPxgE", title: "Beauty of Chhath Puja in London!" },
      { id: "aNseMpTtViQ", title: "Different Sects of Hinduism & Bhagavad Dharma" },
      { id: "klP4gT1PTkk", title: "The Hidden Formula of Success in the Gita" },
      { id: "Ma-rKl3uhas", title: "Conversion to Hinduism Made Simple" },
      { id: "-CRDm1xPbKM", title: "Four Criteria for Determining Character of a Religion" },
    ],
  },
  {
    title: "Rediscovering Our Roots",
    clips: [
      { id: "MwMm46yBN48", title: "God's Names Are Powerful — But Conditions Apply" },
      { id: "5iFXVAQ039c", title: "Chanting God's Name at Death: Truths & Myths" },
      { id: "VdlEcYIEZJY", title: "This One Gita Verse Can Liberate You" },
      { id: "eKREI5Nrg7Q", title: "You'll Never Be Happy Until You Realize This" },
      { id: "i76Bmdb3OM8", title: "Live in the World Like Lotus on Water" },
      { id: "weEaeyCvEc8", title: "Did Krishna Really Promise to Do Everything?" },
      { id: "LjznaNyQrEs", title: "Are We Truly Masters of Our Actions?" },
      { id: "ene9IdOC82o", title: "When Life Strikes Hard, the Gita Holds You" },
      { id: "4v22X1hnZq8", title: "What is Shraddha?" },
      { id: "EPpn8u9inAc", title: "The Gita's Advice on How to Worship" },
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
                  src={`https://www.youtube.com/embed/${activeClip.id}?autoplay=1&rel=0`}
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

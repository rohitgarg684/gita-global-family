"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
}

interface VideoCategory {
  title: string;
  videos: Video[];
}

const categories: VideoCategory[] = [
  {
    title: "Bhagavad Gita Wisdom",
    videos: [
      { id: "5PM71sAvvmg", title: "What is Gita Global Family?" },
      { id: "HB2gWl-VDMA", title: "The Hidden Harmony Behind Gita's Contradictions" },
      { id: "ps7Q93fQ7V8", title: "Understanding Karma Yoga: Action, Inaction, and Sinful Action" },
      { id: "ChwHd7r67jM", title: "Karma Yoga: Work is Worship" },
      { id: "__zON-cj7eQ", title: "How the Gita Came to be Spoken by Sri Krishna?" },
      { id: "rQ_V3sqEvEI", title: "What is Knowledge according to God?" },
      { id: "J1rPKORi6co", title: "One may not find any benefit from reading the Bhagavad-Gita" },
      { id: "q78Cmbml3eQ", title: "Naishkarmya Siddhi: Achieving Transcendental Perfection in Karma" },
      { id: "Upz14yg1qxA", title: "गीता के 5 श्लोक: बदलें अपनी कर्म-संस्कृति" },
      { id: "Bbt035K-T6U", title: "गीता के विरोधाभासों का छिपा रहस्य" },
      { id: "FTwXfU4zwLo", title: "भगवद्गीता पर आधारित आस्था भगवद् धर्म के पाँच स्तंभ" },
      { id: "TSXH8ubw8Gg", title: "The Five Pillars of Bhagavad Dharma" },
    ],
  },
  {
    title: "Spiritual Growth & Philosophy",
    videos: [
      { id: "DguQgP_86Ws", title: "Your Journey to Perfect Happiness Begins Here" },
      { id: "u0kwTD3GyuM", title: "Unlock Spiritual Mysteries: The Path to Inner Peace" },
      { id: "LtcZcQ5Oi8Y", title: "Who Am I? The Concept of Soul, Part 1" },
      { id: "ype7pp9tbUg", title: "Who Am I? The Concept of Soul, Part 3" },
      { id: "2HwZFhGhjSI", title: "The Sunrise of Gyana - the Spiritual Knowledge" },
      { id: "phrxTPNM4ls", title: "Are you on the right spiritual path?" },
      { id: "JAxIbJM4bI0", title: "Is man a puppet in the hands of fate or God?" },
      { id: "LKYIzbgLgqI", title: "Exploring Destinations After Death" },
      { id: "XK-dMLHxw94", title: "The Sorrow of the Goddess of Death" },
      { id: "Zo8Op-QY-m8", title: "कैसे पाएँ दिव्य और स्थायी आनंद?" },
      { id: "xdKwgAClE_Y", title: "संपूर्ण मनुष्य बनने का रहस्य — गुरु का संदेश" },
      { id: "oo9aZMbqAcc", title: "No Conditions in Devotion — Only Surrender is Needed!" },
    ],
  },
  {
    title: "Hindu Dharma & Traditions",
    videos: [
      { id: "WsbUMbqWzvk", title: "What is Gita Dham?" },
      { id: "HDrDV2YK3js", title: "Why Reinventing Temples Matters?" },
      { id: "7LaSC_q--F8", title: "Janmashtami Special | When God Walked as Krishna" },
      { id: "6NOuOoLOvf0", title: "Kumbh Special: Shankaracharya vs Arya Samaj" },
      { id: "yqK0dBKjPUM", title: "Can Ganga Really Wash Away The Sins?" },
      { id: "29OngR0N0vg", title: "The Story of How Ganga Came to Earth" },
      { id: "OfQ7jZemKzc", title: "The Enigmatic, Pristine Varna System" },
      { id: "uGxT2cfPlco", title: "Place of Women in Hinduism" },
      { id: "VOmeTnmMpn8", title: "Hinduism and Spiritual Democracy" },
      { id: "GXPrCkF4O5U", title: "Does Bhagavad Gita Support the Caste System?" },
      { id: "cjbWenhUhaY", title: "होली क्यों मनाई जाती है? प्रह्लाद और होलिका की सच्ची कहानी" },
      { id: "SJN012yD5OI", title: "भगवद् गीता ने बनाया हिंदू धर्म में धर्मांतरण सरल" },
    ],
  },
  {
    title: "Education & Life Values",
    videos: [
      { id: "RITXR1yKyEc", title: "Emotional Intelligence vs Emotional Literacy" },
      { id: "gVhsVLp_YQs", title: "Emotion vs Reason" },
      { id: "IaP64sXlwfE", title: "Why Controlling Temptations is Important for Students" },
      { id: "2K2uX-n_Stk", title: "Emotions Drive Everybody's Life" },
      { id: "c5Nkdx1Cy4Q", title: "Oppenheimer's Moral Dilemma" },
      { id: "zl9CdzTBwIs", title: "Oppenheimer & The Bhagavad Gita" },
      { id: "raHRQJkMu9E", title: "God loves those who practice human values" },
      { id: "4nj9_y220JY", title: "Does Constitution prohibit Gita-teaching in Schools?" },
      { id: "nfPEPlRPhl8", title: "Ignite Their Thinking" },
      { id: "TgN5ZF5T7Ro", title: "विद्यालयों में जीवन मूल्यों की शिक्षा कैसे दी जाए?" },
      { id: "gpD1UGeG_j4", title: "भारत में धार्मिक शिक्षा क्यों ज़रूरी है?" },
      { id: "w6ez_5C-uHk", title: "Exam में 95%+ Marks लाने का असली Formula" },
    ],
  },
];

function VideoRow({ category }: { category: VideoCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

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
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="mb-10">
        <h3 className="text-lg md:text-xl font-bold text-dark-brown mb-4 px-1">
          {category.title}
        </h3>

        <div className="relative group/row">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-r from-white via-white/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-dark-brown" />
            </button>
          )}

          {/* Video thumbnails */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {category.videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group/card shrink-0 w-[260px] md:w-[300px] lg:w-[320px] cursor-pointer text-left focus:outline-none"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-[1.03]">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-saffron/90 rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 scale-75 group-hover/card:scale-100 transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <p className="mt-2.5 text-sm font-medium text-dark-brown line-clamp-2 leading-snug group-hover/card:text-saffron transition-colors">
                  {video.title}
                </p>
              </button>
            ))}
          </div>

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-l from-white via-white/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-dark-brown" />
            </button>
          )}
        </div>
      </div>

      {/* Video lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="text-sm">Close</span>
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 text-white/90 text-base font-medium text-center">
                {activeVideo.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function VideoCarousel() {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <VideoRow key={category.title} category={category} />
      ))}
    </div>
  );
}

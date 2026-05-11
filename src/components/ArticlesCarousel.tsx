"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  title: string;
  slug: string;
  image: string;
}

interface ArticleCategory {
  title: string;
  articles: Article[];
}

function ArticleRow({ category }: { category: ArticleCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    <div className="mb-10">
      <h3 className="text-lg md:text-xl font-bold text-dark-brown mb-4 px-1">
        {category.title}
      </h3>

      <div className="relative group/row">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-r from-cream via-cream/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-dark-brown" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {category.articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group/card shrink-0 w-[260px] md:w-[300px] lg:w-[320px] text-left"
            >
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-md group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-[1.03]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-white font-semibold line-clamp-2 leading-snug drop-shadow-lg">
                    {article.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-10 w-10 md:w-12 flex items-center justify-center bg-gradient-to-l from-cream via-cream/90 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-dark-brown" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function ArticlesCarousel({
  categories,
}: {
  categories: ArticleCategory[];
}) {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <ArticleRow key={category.title} category={category} />
      ))}
    </div>
  );
}

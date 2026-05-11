"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg",
  "/images/hero-3.jpeg",
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/brahmabodhi.jpeg",
  "/images/banner.jpg",
];

const CARD_GAP = 20;

function getCardWidth() {
  if (typeof window === "undefined") return 460;
  if (window.innerWidth >= 1024) return 460;
  if (window.innerWidth >= 768) return 384;
  return 288;
}

export default function HeroCarousel() {
  const stripRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const animationRef = useRef<number>(0);

  const animate = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    if (!pausedRef.current) {
      positionRef.current -= 0.5;
      const totalWidth = strip.scrollWidth / 2;
      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }
      strip.style.transform = `translateX(${positionRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  const handlePause = () => {
    pausedRef.current = true;
  };

  const handleResume = () => {
    pausedRef.current = false;
  };

  const slide = (direction: "left" | "right") => {
    const strip = stripRef.current;
    if (!strip) return;

    const cardWidth = getCardWidth() + CARD_GAP;
    const totalWidth = strip.scrollWidth / 2;

    if (direction === "right") {
      positionRef.current -= cardWidth;
    } else {
      positionRef.current += cardWidth;
    }

    if (Math.abs(positionRef.current) >= totalWidth) {
      positionRef.current = 0;
    }
    if (positionRef.current > 0) {
      positionRef.current = -(totalWidth - cardWidth);
    }

    strip.style.transition = "transform 0.4s ease";
    strip.style.transform = `translateX(${positionRef.current}px)`;

    setTimeout(() => {
      if (strip) strip.style.transition = "";
    }, 420);
  };

  return (
    <section className="relative overflow-hidden bg-dark-brown">
      {/* Text overlay */}
      <div className="relative z-10 section-padding pt-16 pb-8 md:pt-24 md:pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
        >
          <span className="text-saffron-light">Bhagavad Gita</span>&apos;s
          wisdom: Transforming the world
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto"
        >
          Striving to eliminate material and spiritual poverty worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/join-us"
            className="inline-block mt-6 px-8 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            Join the Cause
          </Link>
        </motion.div>
      </div>

      {/* Scrolling image strip */}
      <div
        className="relative overflow-hidden pb-10 md:pb-14 px-4 group"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        {/* Navigation arrows */}
        <button
          onClick={() => slide("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-dark-brown flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => slide("right")}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-dark-brown flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div ref={stripRef} className="flex gap-5 w-max will-change-transform">
          {[...heroImages, ...heroImages].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-72 h-52 md:w-96 md:h-64 lg:w-[440px] lg:h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-lg"
            >
              <Image
                src={src}
                alt={`Community ${(i % heroImages.length) + 1}`}
                fill
                className="object-cover"
                priority={i < 7}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

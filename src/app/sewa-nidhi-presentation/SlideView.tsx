"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Slide } from "./slides";

const accentClasses: Record<NonNullable<Slide["accent"]>, {
  eyebrow: string;
  title: string;
  bg: string;
  pill: string;
}> = {
  saffron: {
    eyebrow: "text-saffron",
    title: "text-dark-brown",
    bg: "from-cream via-white to-cream-dark/40",
    pill: "bg-saffron text-white",
  },
  maroon: {
    eyebrow: "text-maroon-light",
    title: "text-maroon",
    bg: "from-maroon/5 via-white to-maroon/10",
    pill: "bg-maroon text-white",
  },
  gold: {
    eyebrow: "text-gold",
    title: "text-dark-brown",
    bg: "from-gold/10 via-white to-cream",
    pill: "bg-gold text-dark-brown",
  },
  dark: {
    eyebrow: "text-saffron-light",
    title: "text-white",
    bg: "from-dark-brown via-dark-brown to-maroon",
    pill: "bg-saffron text-white",
  },
};

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
});

export function SlideView({
  slide,
  isStatic = false,
  isHero = false,
}: {
  slide: Slide;
  /** When true, suppresses entry animations and lazy-loads images (thumbnails). */
  isStatic?: boolean;
  /** When true (only the currently visible slide), marks images as priority. */
  isHero?: boolean;
}) {
  const accent = accentClasses[slide.accent ?? "saffron"];
  const isDark = slide.accent === "dark";
  const bodyText = isDark ? "text-white/85" : "text-text-secondary";
  const subtitleText = isDark ? "text-white/70" : "text-text-secondary";

  const ctx = { slide, accent, bodyText, subtitleText, isStatic, isHero };

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${accent.bg} overflow-hidden`}
    >
      {slide.layout === "cover" && <CoverSlide {...ctx} />}
      {slide.layout === "image-right" && <SplitSlide {...ctx} imageOnRight />}
      {slide.layout === "image-left" && (
        <SplitSlide {...ctx} imageOnRight={false} />
      )}
      {slide.layout === "image-full" && <FullImageSlide {...ctx} />}
      {slide.layout === "stat" && <StatSlide {...ctx} />}
      {slide.layout === "grid" && <GridSlide {...ctx} />}
      {slide.layout === "quote" && <QuoteSlide {...ctx} />}
      {slide.layout === "closing" && <ClosingSlide {...ctx} />}
    </div>
  );
}

interface SlideContext {
  slide: Slide;
  accent: (typeof accentClasses)[keyof typeof accentClasses];
  bodyText: string;
  subtitleText: string;
  isStatic: boolean;
  isHero: boolean;
}

function Eyebrow({
  text,
  className,
  isStatic,
}: {
  text?: string;
  className?: string;
  isStatic?: boolean;
}) {
  if (!text) return null;
  return (
    <motion.p
      {...fade}
      initial={isStatic ? false : undefined}
      className={`text-xs md:text-sm font-semibold uppercase tracking-[0.18em] ${className ?? ""}`}
    >
      {text}
    </motion.p>
  );
}

function CoverSlide({ slide, isStatic, isHero }: SlideContext) {
  const init = isStatic ? false : undefined;
  return (
    <div className="absolute inset-0">
      {slide.image && (
        <Image
          src={slide.image}
          alt={slide.imageAlt ?? ""}
          fill
          priority={isHero}
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 max-w-6xl">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className="text-saffron-light mb-4" />
        <motion.h1
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
        >
          {slide.title}
        </motion.h1>
        {slide.subtitle && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.2 }}
            className="mt-5 md:mt-7 text-lg md:text-2xl text-white/85 max-w-3xl leading-snug"
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.body && (
          <motion.div
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.3 }}
            className="mt-6 md:mt-8 space-y-1 text-white/80 text-sm md:text-base"
          >
            {slide.body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>
        )}
        {slide.footnote && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.4 }}
            className="mt-8 md:mt-12 text-xs md:text-sm text-white/70 max-w-2xl border-l-2 border-saffron pl-4"
          >
            {slide.footnote}
          </motion.p>
        )}
      </div>
    </div>
  );
}

function SplitSlide({
  slide,
  accent,
  bodyText,
  subtitleText,
  imageOnRight,
  isStatic,
  isHero,
}: SlideContext & { imageOnRight: boolean }) {
  const init = isStatic ? false : undefined;
  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
      <div
        className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20 ${
          imageOnRight ? "" : "order-2 lg:order-2"
        }`}
      >
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className={`${accent.eyebrow} mb-4`} />
        <motion.h2
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${accent.title}`}
        >
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.18 }}
            className={`mt-4 md:mt-6 text-base md:text-lg ${subtitleText} max-w-xl`}
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.body && (
          <div className={`mt-6 md:mt-8 space-y-4 ${bodyText} text-base md:text-lg leading-relaxed max-w-xl`}>
            {slide.body.map((p, i) => (
              <motion.p key={i} {...stagger(i)} initial={init}>
                {p}
              </motion.p>
            ))}
          </div>
        )}
        {slide.bullets && (
          <ul className={`mt-6 space-y-3 ${bodyText} text-sm md:text-base leading-relaxed max-w-xl`}>
            {slide.bullets.map((b, i) => (
              <motion.li key={i} {...stagger(i)} initial={init} className="flex gap-3">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${
                    slide.accent === "dark" ? "bg-saffron-light" : "bg-saffron"
                  }`}
                />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        )}
        {slide.stats && (
          <StatRow
            stats={slide.stats}
            isDark={slide.accent === "dark"}
            isStatic={isStatic}
          />
        )}
        {slide.footnote && (
          <p className={`mt-8 text-xs md:text-sm ${slide.accent === "dark" ? "text-white/55" : "text-text-muted"} max-w-xl`}>
            {slide.footnote}
          </p>
        )}
      </div>
      <div
        className={`relative min-h-[40vh] lg:min-h-0 ${
          imageOnRight ? "order-2 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        {slide.image && (
          <>
            <Image
              src={slide.image}
              alt={slide.imageAlt ?? ""}
              fill
              priority={isHero}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-${imageOnRight ? "l" : "r"} ${
                slide.accent === "dark"
                  ? "from-transparent via-transparent to-dark-brown/95"
                  : "from-transparent via-transparent to-cream/80"
              }`}
            />
          </>
        )}
      </div>
    </div>
  );
}

function FullImageSlide({ slide, isStatic, isHero }: SlideContext) {
  const init = isStatic ? false : undefined;
  return (
    <div className="absolute inset-0">
      {slide.image && (
        <Image
          src={slide.image}
          alt={slide.imageAlt ?? ""}
          fill
          priority={isHero}
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 max-w-5xl">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className="text-saffron-light mb-4" />
        <motion.h2
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight"
        >
          {slide.title}
        </motion.h2>
        {slide.body && (
          <div className="mt-6 space-y-4 text-white/85 text-base md:text-lg max-w-3xl leading-relaxed">
            {slide.body.map((p, i) => (
              <motion.p key={i} {...stagger(i)} initial={init}>
                {p}
              </motion.p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatRow({
  stats,
  isDark,
  isStatic,
}: {
  stats: NonNullable<Slide["stats"]>;
  isDark: boolean;
  isStatic: boolean;
}) {
  const init = isStatic ? false : undefined;
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
      {stats.map((s, i) => (
        <motion.div key={i} {...stagger(i)} initial={init}>
          <div className={`text-2xl md:text-3xl font-bold ${isDark ? "text-saffron-light" : "text-saffron"}`}>
            {s.value}
          </div>
          <div className={`mt-1 text-xs md:text-sm ${isDark ? "text-white/75" : "text-text-secondary"}`}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatSlide({ slide, accent, subtitleText, isStatic }: SlideContext) {
  const init = isStatic ? false : undefined;
  const isDark = slide.accent === "dark";
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-20">
      <div className="max-w-6xl mx-auto w-full">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className={`${accent.eyebrow} mb-4`} />
        <motion.h2
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${accent.title} max-w-4xl`}
        >
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.18 }}
            className={`mt-4 md:mt-6 text-base md:text-lg ${subtitleText} max-w-3xl`}
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.stats && (
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {slide.stats.map((s, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                initial={init}
                className={`rounded-2xl p-6 md:p-7 border ${
                  isDark
                    ? "bg-white/5 border-white/10 backdrop-blur-sm"
                    : "bg-white/70 border-cream-dark/40 backdrop-blur-sm shadow-sm"
                }`}
              >
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-none ${
                  isDark ? "text-saffron-light" : "text-saffron"
                }`}>
                  {s.value}
                </div>
                <div className={`mt-3 text-sm md:text-base font-semibold ${
                  isDark ? "text-white" : "text-dark-brown"
                }`}>
                  {s.label}
                </div>
                {s.caption && (
                  <div className={`mt-2 text-xs md:text-sm ${
                    isDark ? "text-white/65" : "text-text-muted"
                  } leading-snug`}>
                    {s.caption}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
        {slide.footnote && (
          <p className={`mt-10 text-xs md:text-sm ${isDark ? "text-white/55" : "text-text-muted"} max-w-3xl`}>
            {slide.footnote}
          </p>
        )}
      </div>
    </div>
  );
}

function GridSlide({ slide, accent, subtitleText, isStatic }: SlideContext) {
  const init = isStatic ? false : undefined;
  const isDark = slide.accent === "dark";
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-20">
      <div className="max-w-6xl mx-auto w-full">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className={`${accent.eyebrow} mb-4`} />
        <motion.h2
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${accent.title} max-w-4xl`}
        >
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.18 }}
            className={`mt-4 md:mt-6 text-base md:text-lg ${subtitleText} max-w-4xl`}
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.bullets && (
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {slide.bullets.map((b, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                initial={init}
                className={`rounded-xl p-5 md:p-6 border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white/70 border-cream-dark/40 shadow-sm"
                }`}
              >
                <div className="flex gap-4">
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${accent.pill}`}>
                    {i + 1}
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed ${
                    isDark ? "text-white/85" : "text-text-secondary"
                  }`}>
                    {b}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {slide.footnote && (
          <p className={`mt-8 text-xs md:text-sm ${isDark ? "text-white/55" : "text-text-muted"}`}>
            {slide.footnote}
          </p>
        )}
      </div>
    </div>
  );
}

function QuoteSlide({ slide, accent, bodyText, isStatic }: SlideContext) {
  const init = isStatic ? false : undefined;
  const isDark = slide.accent === "dark";
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <div className="max-w-5xl mx-auto w-full">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className={`${accent.eyebrow} mb-6`} />
        <motion.div
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.05 }}
          className={`font-bold leading-[1.18] tracking-tight ${
            slide.accent === "maroon" ? "text-maroon" : accent.title
          }`}
          style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)" }}
        >
          {slide.title}
        </motion.div>
        {slide.body && (
          <div className={`mt-8 md:mt-10 space-y-4 text-base md:text-xl ${bodyText} leading-relaxed`}>
            {slide.body.map((p, i) => (
              <motion.p key={i} {...stagger(i)} initial={init}>
                {p}
              </motion.p>
            ))}
          </div>
        )}
        {slide.footnote && (
          <p className={`mt-10 text-sm ${isDark ? "text-white/55" : "text-text-muted"} italic`}>
            {slide.footnote}
          </p>
        )}
      </div>
    </div>
  );
}

function ClosingSlide({ slide, accent, bodyText, isStatic, isHero }: SlideContext) {
  const init = isStatic ? false : undefined;
  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-3 flex flex-col justify-center p-8 md:p-12 lg:p-20">
        <Eyebrow text={slide.eyebrow} isStatic={isStatic} className={`${accent.eyebrow} mb-4`} />
        <motion.h2
          {...fade}
          initial={init}
          transition={{ ...fade.transition, delay: 0.1 }}
          className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight ${accent.title}`}
        >
          {slide.title}
        </motion.h2>
        {slide.body && (
          <div className={`mt-6 md:mt-8 space-y-4 ${bodyText} text-base md:text-lg leading-relaxed max-w-2xl`}>
            {slide.body.map((p, i) => (
              <motion.p key={i} {...stagger(i)} initial={init}>
                {p}
              </motion.p>
            ))}
          </div>
        )}
        {slide.footnote && (
          <motion.p
            {...fade}
            initial={init}
            transition={{ ...fade.transition, delay: 0.4 }}
            className="mt-8 text-sm text-text-secondary border-l-2 border-saffron pl-4 max-w-2xl"
          >
            {slide.footnote}
          </motion.p>
        )}
      </div>
      <div className="lg:col-span-2 relative min-h-[40vh] lg:min-h-0">
        {slide.image && (
          <>
            <Image
              src={slide.image}
              alt={slide.imageAlt ?? ""}
              fill
              priority={isHero}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/40 lg:to-cream/80" />
          </>
        )}
      </div>
    </div>
  );
}

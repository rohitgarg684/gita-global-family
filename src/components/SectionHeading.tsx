"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-dark-brown"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

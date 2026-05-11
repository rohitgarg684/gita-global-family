"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date?: string;
  slug: string;
  image?: string;
  index?: number;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  image,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-cream-dark/40 overflow-hidden hover:shadow-lg transition-shadow"
    >
      {image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {date && (
          <time className="text-xs text-text-muted font-medium">{date}</time>
        )}
        <h3 className="mt-2 text-lg font-semibold text-dark-brown group-hover:text-saffron transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block mt-4 text-sm font-semibold text-saffron hover:text-saffron-dark transition-colors"
        >
          View More &rarr;
        </Link>
      </div>
    </motion.article>
  );
}

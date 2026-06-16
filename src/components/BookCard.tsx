"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Book } from "@/data/books";
import { RAZORPAY_STORE } from "@/data/books";

interface BookCardProps {
  book: Book;
  index?: number;
}

export default function BookCard({ book, index = 0 }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-cream-dark/30 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      {book.image && (
        <div className="relative w-full aspect-[4/3] bg-cream">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain p-4"
          />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="min-w-0 mb-4">
          <h3 className="text-lg font-semibold text-dark-brown leading-snug">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-sm text-saffron font-medium mt-1">
              {book.subtitle}
            </p>
          )}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {book.description}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-cream-dark/20">
          <span className="text-xl font-bold text-dark-brown">{book.price}</span>
          <a
            href={RAZORPAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

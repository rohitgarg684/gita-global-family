"use client";

import { ShoppingCart, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BookCard from "@/components/BookCard";
import {
  RAZORPAY_STORE,
  hindiBooks,
  englishBooks,
  type Book,
} from "@/data/books";

interface BooksShowcaseProps {
  /** Override the heading shown above the books. */
  title?: string;
  /** Override the subtitle. */
  subtitle?: string;
  /** Show all books, or a curated subset. Defaults to all. */
  hindi?: Book[];
  english?: Book[];
  /** Whether to render the "Visit Our Store" CTA at the bottom. */
  showStoreCta?: boolean;
  /** Extra Tailwind classes for the outer wrapper. */
  className?: string;
}

/**
 * Reusable "Books" section: Hindi + English publications, with optional
 * "Visit Our Store" CTA. Used on the publications page and on the
 * BrahmBodhi page.
 */
export default function BooksShowcase({
  title = "Books by BrahmBodhi",
  subtitle = "Bhagavad Gita commentaries and student editions, in Hindi and English.",
  hindi = hindiBooks,
  english = englishBooks,
  showStoreCta = true,
  className = "section-padding py-16 md:py-24",
}: BooksShowcaseProps) {
  return (
    <section className={className}>
      <SectionHeading title={title} subtitle={subtitle} />

      {hindi.length > 0 && (
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-dark-brown text-center mb-8">
            हिंदी प्रकाशन &mdash; Hindi Publications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hindi.map((book, i) => (
              <BookCard key={book.title} book={book} index={i} />
            ))}
          </div>
        </div>
      )}

      {english.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-dark-brown text-center mb-8">
            English Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {english.map((book, i) => (
              <BookCard key={book.title} book={book} index={i} />
            ))}
          </div>
        </div>
      )}

      {showStoreCta && (
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={RAZORPAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md"
          >
            <ShoppingCart className="w-5 h-5" />
            Visit Our Store
          </a>
          <a
            href="/gita-publications"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-brown font-semibold rounded-full hover:bg-cream transition-colors border border-cream-dark/40"
          >
            See All Publications
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
}

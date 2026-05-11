"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const RAZORPAY_STORE =
  "https://pages.razorpay.com/stores/st_QvF1VOCPbywKFo";

const hindiBooks = [
  {
    title: "Mokshavidyadayini Parampavan Bhagavad Gita",
    subtitle: "Sabhi Dukhom Se Pare, Anand Ki Oor",
    description:
      "अध्याय परिचयों, आत्म मूल्यांकन उपकरणों आदि के साथ भगवद्गीता की गहन व्याख्या। परिवर्धित संस्करण। 8.5×5.5 इंच, 800 पृष्ठ।",
    price: "₹499",
    image: img("book-mokshavidyadayini.jpeg"),
  },
  {
    title: "Sampoorn Kraanti Kee Bhoomika",
    subtitle: "",
    description:
      "गीता के इस संस्करण में सरल हिंदी अर्थ, टिप्पणियाँ व ईश्वर-प्राप्ति के 10 मार्गों पर विशेष निबंध हैं।",
    price: "₹350",
    image: img("book-sampoorn-kraanti.jpeg"),
  },
  {
    title: "Hari Ko Kaun Dulaaro",
    subtitle: "",
    description:
      "जीवन श्रेष्ठ और मोक्ष उसी का होगा जो ईश्वर का प्रिय है। यह पुस्तक उन गुणों की विवेचना करती है जो ईश्वर को प्रिय हैं।",
    price: "₹200",
    image: img("book-hari-ko-kaun.jpeg"),
  },
  {
    title: "Hamaaree Geeta Aur Eeshvar Praapti Ke Das Maarg",
    subtitle: "",
    description:
      "गीता के इस संस्करण में सरल हिंदी अर्थ, पाद-टिप्पणियाँ और ईश्वर-प्राप्ति के दस मार्गों पर विशेष निबंध समाहित हैं।",
    price: "₹125",
    image: img("book-hamaaree-geeta.jpeg"),
  },
  {
    title: "Geeta Navaneet Shlok Vidyaarthiyon Ke Liye",
    subtitle: "51 श्लोक स्टूडेंट्स के लिए",
    description:
      "गीता के प्रमुख उपदेशों को युवाओं के लिए सार रूप में प्रस्तुत करता है। ये श्लोक ध्यान, अनुशासन और नैतिक जीवन की प्रेरणा देते हैं।",
    price: "₹60",
    image: img("book-geeta-navaneet.jpeg"),
  },
];

const englishBooks = [
  {
    title: "Bhagavad Gita With God's Ideas on Life Management",
    subtitle: "",
    description:
      "This edition of the Bhagavad Gita includes an insightful essay on God's ideas in life management, spanning 495 pages in a compact 8×5-inch format.",
    price: "₹399",
    image: img("book-gods-ideas.jpeg"),
  },
  {
    title: "The Cream Of The Bhagavad Gita",
    subtitle: "51 Verses for Students",
    description:
      "Distills key Gita teachings for youth. These verses inspire focus, discipline, and ethical living.",
    price: "₹100",
    image: img("book-cream-of-gita.jpeg"),
  },
];

function BookCard({
  book,
  index,
}: {
  book: (typeof hindiBooks)[0];
  index: number;
}) {
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
          <span className="text-xl font-bold text-dark-brown">
            {book.price}
          </span>
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

export default function GitaPublicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src={img("publications.png")}
          alt="Gita Publications"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/85 to-dark-brown/50" />
        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Gita Global Publications
            </h1>
            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              Spreading the timeless wisdom of the Bhagavad Gita through
              thoughtfully crafted books in Hindi and English.
            </p>
            <a
              href={RAZORPAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Visit Our Store
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Books That Transform Lives"
            subtitle="Gita Global Publication is a dedicated unit of the Gita Global Family, committed to sharing the Bhagavad Gita's eternal teachings with the world."
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-text-secondary leading-relaxed text-base md:text-lg"
          >
            Through our publications, we aim to make the profound wisdom of the
            Gita accessible to seekers of all ages, backgrounds, and languages.
            From comprehensive commentaries to concise student editions, each
            book serves as a beacon of light for spiritual growth and purposeful
            living.
          </motion.p>
        </div>
      </section>

      {/* Hindi Books */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="हिंदी प्रकाशन — Hindi Publications"
          subtitle="Bhagavad Gita commentaries and guides in Hindi"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hindiBooks.map((book, i) => (
            <BookCard key={book.title} book={book} index={i} />
          ))}
        </div>
      </section>

      {/* English Books */}
      <section className="section-padding py-16 md:py-24 bg-warm-gray">
        <SectionHeading
          title="English Publications"
          subtitle="Bhagavad Gita editions and guides in English"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {englishBooks.map((book, i) => (
            <BookCard key={book.title} book={book} index={i} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("vision.jpg")}
          alt="Our Mission"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-maroon/80" />
        <div className="relative section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Our Mission" light />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <ul className="space-y-3 text-left max-w-xl mx-auto">
                {[
                  "Promote peace, unity, and brotherhood across communities and nations.",
                  "Combat spiritual and material poverty through the transformative power of knowledge.",
                  "Make the Gita's teachings accessible to all, regardless of language, location, or background.",
                  "Inspire individuals to live with purpose, compassion, and spiritual awareness.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <span className="text-gold mt-1 text-lg">&#9679;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-8 h-8 text-saffron" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown mb-4">
            Order Your Copy Today
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            All our publications are available for purchase through our Razorpay
            store. You can also reach out to distribute them in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RAZORPAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Browse All Books
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-brown font-semibold rounded-full hover:bg-cream transition-colors border border-cream-dark/30"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Community gathering", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Spiritual session", span: "" },
  { src: "/images/banner.jpg", alt: "Events and celebrations", span: "" },
  { src: "/images/vision.jpg", alt: "Our vision in action", span: "md:col-span-2" },
  { src: "/images/gurukul.png", alt: "Gita Global Gurukul", span: "" },
  { src: "/images/brahmabodhi.jpeg", alt: "Sriyut BrahmBodhi", span: "" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src="/images/gallery-1.jpg"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/70 to-dark-brown/50" />
        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Gallery
            </h1>
            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              Capture the essence of our community, events, and spiritual
              journey through these moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Our Moments"
          subtitle="A glimpse into the activities, events, and spirit of the Gita Global Family."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Coming Section */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown mb-4">
            More Moments Coming Soon
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We are constantly capturing the beautiful moments of our community
            activities, spiritual sessions, and outreach programs. Stay
            connected to see more updates.
          </p>
        </motion.div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const karmaYogaPhotos = [
  {
    title: "Siddharth, IPS — Now BrahmBodhi",
    subtitle: "Worked As Additional Director General of Police",
    image: img("karma-yoga-siddharth-ips.jpeg"),
  },
  {
    title: "With Dalai Lama, 2010",
    subtitle:
      "HH Dalai Lama launching Sri Siddharth\u2019s Poetry Collection",
    image: img("karma-yoga-dalai-lama.jpeg"),
  },
  {
    title: "With Shyam Benegal, A Movie Director",
    subtitle: "During a children\u2019s camp at New Delhi, 2007",
    image: img("karma-yoga-shyam-benegal.jpeg"),
  },
  {
    title: "With Sundarlal Bahuguna, Environmentalist",
    subtitle: "At a children\u2019s camp in Rishikesh, Uttarakhand",
    image: img("karma-yoga-sundarlal-bahuguna.jpeg"),
  },
  {
    title: "With Sri Sri Ravi Shankar, Spiritual Leader",
    subtitle:
      "Ravi Shankar launching Sri Siddharth\u2019s book at New Delhi",
    image: img("karma-yoga-ravi-shankar.jpeg"),
  },
  {
    title: "With Swami Agnivesh and Mr Kanodia",
    subtitle: "At World Confluence in Kolkata in 2011",
    image: img("karma-yoga-agnivesh-kanodia.jpeg"),
  },
];

const newspaperArticles = [
  img("newspaper-1.jpeg"),
  img("newspaper-2.jpeg"),
  img("newspaper-3.jpeg"),
  img("newspaper-4.jpeg"),
  img("newspaper-5.jpeg"),
  img("newspaper-6.jpeg"),
];

export default function BrahmBodhiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src={img("brahmabodhi-hero.png")}
          alt="Sriyut BrahmBodhi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Hari Sharanam!
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Sriyut BrahmBodhi
          </motion.h1>
        </div>
      </section>

      {/* Main Bio — two-column layout */}
      <section className="section-padding py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            {...fadeInUp}
            className="w-full md:w-[360px] shrink-0"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img("brahmabodhi-portrait.jpeg")}
                alt="Sriyut BrahmBodhi"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="mt-6 text-xl md:text-2xl font-light text-dark-brown tracking-wide">
              <span className="italic">SRIYUT</span>{" "}
              <strong className="font-bold">BRAHMBODHI</strong>
            </h2>
          </motion.div>

          {/* Bio text */}
          <motion.div
            {...fadeInUp}
            className="flex-1 space-y-6 text-text-secondary leading-relaxed text-base md:text-lg"
          >
            <p className="text-saffron font-semibold">Hari Sharanam!</p>
            <p>
              BrahmBodhi stands as a beacon in the spiritual realm, a venerated
              leader, accomplished author, profound thinker, and dedicated
              educationist. Holding the esteemed position of Founder and
              President of the Gita Global Family, he also champions the
              principles and philosophies as the Head of Bhagavad Dharma, a
              spiritual path deeply rooted in the teachings of the revered
              Bhagavad Gita.
            </p>
            <p>
              Under his visionary leadership, the{" "}
              <strong className="text-dark-brown">Gita Global Family</strong>{" "}
              has burgeoned into an organization with far-reaching wings,
              including the educational pioneer{" "}
              <strong className="text-dark-brown">
                Gita Global Gurukul
              </strong>{" "}
              Schools, the enlightening channel of{" "}
              <strong className="text-dark-brown">
                Gita Global Publications
              </strong>
              , and the yet to be unveiled{" "}
              <strong className="text-dark-brown">Gita Dham</strong>&mdash;a
              sanctuary conceived to be an amalgamation of a Gita temple, a hub
              dedicated to poverty alleviation, and a vibrant center promoting
              art and culture.
            </p>
            <p>
              BrahmBodhi is committed to unlocking the boundless potential within
              individuals and communities, propelling them towards a life rich in
              purpose and fulfillment. A staunch advocate for education and
              personal growth, he has embarked on a journey of empowerment,
              seeding knowledge and fostering development for years.
            </p>
            <p>
              We invite you to delve deeper into the multifaceted world of
              BrahmBodhi through this portal, designed to be a gateway to his
              diverse projects and his presence on various social media
              platforms. Herein, you will find an enriching assembly of his
              oeuvre, encompassing insightful articles, transformative videos,
              and enlightening books&mdash;all curated to guide you towards a
              life of heightened fulfillment and purpose.
            </p>

            {/* YouTube Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.youtube.com/@BrahmBodhi_EnglishOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md"
              >
                <Video className="w-5 h-5" />
                Explore on YouTube
              </a>
              <a
                href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md"
              >
                <Video className="w-5 h-5" />
                ब्रह्मबोधि Channel
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Karma Yoga Section */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="BrahmBodhi's Karma Yoga"
          subtitle="Before fully dedicating himself to spirituality and authorship, BrahmBodhi actively practiced Karma Yoga as outlined in the Bhagavad Gita. He collaborated with esteemed individuals across various disciplines."
        />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A selection of photographs featuring BrahmBodhi with these notable
          figures is showcased here, with additional images of his multiple
          endeavors available on the subsequent pages.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {karmaYogaPhotos.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-warm-gray rounded-2xl p-6 border border-cream-dark/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-full aspect-[4/3] bg-cream rounded-xl mb-5 overflow-hidden relative">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-semibold text-dark-brown leading-snug">
                {photo.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                {photo.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newspaper Articles */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Newspaper Articles" />
        <motion.p
          {...fadeInUp}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          These articles were published in various national English newspapers
          when he served as a civil servant, prior to adopting his spiritual
          name, BrahmBodhi. After his full transition into spirituality, he
          ceased sending articles.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newspaperArticles.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={src}
                alt={`Newspaper article ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("banner.jpg")}
          alt="Join the journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Walk the Path of Wisdom
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Join Sriyut BrahmBodhi and the Gita Global Family on a
              transformative journey guided by the eternal teachings of the
              Bhagavad Gita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                Join Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                <Video className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

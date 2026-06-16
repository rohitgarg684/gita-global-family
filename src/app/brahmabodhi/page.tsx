"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Video,
  MessageCircleQuestion,
  BookOpen,
  X,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import SectionHeading from "@/components/SectionHeading";
import WatchAndLearn from "@/components/WatchAndLearn";
import BooksShowcase from "@/components/BooksShowcase";
import QAGrid from "@/components/QAGrid";
import { qaItems } from "@/data/qa-brahmbodhi";
import { bhagavadDharmaQA } from "@/data/qa-bhagavad-dharma";
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
  {
    title: "Revolution Without Ideas",
    publication: "The Times of India",
    section: "Editorial Page",
    image: img("newspaper-1.jpeg"),
  },
  {
    title: "Not Vigilant Enough",
    publication: "Hindustan Times",
    section: "Editorial Page",
    image: img("newspaper-2.jpeg"),
  },
  {
    title: "To Whom Does Argus Report?",
    publication: "The Telegraph",
    section: "Editorial Page",
    image: img("newspaper-3.jpeg"),
  },
  {
    title: "Civil Servants Not Slaves",
    publication: "The Indian Express",
    section: "Editorial Page",
    image: img("newspaper-4.jpeg"),
  },
  {
    title: "The Right to Inform",
    publication: "The Indian Express",
    section: "Editorial Page",
    image: img("newspaper-5.jpeg"),
  },
  {
    title: "Time People Brought Pressure on Govt",
    publication: "The Hindu",
    section: "Editorial Page",
    image: img("newspaper-6.jpeg"),
  },
];

type NewspaperArticle = (typeof newspaperArticles)[number];

export default function BrahmBodhiPage() {
  const [activeArticle, setActiveArticle] = useState<NewspaperArticle | null>(
    null,
  );

  const closeArticle = useCallback(() => setActiveArticle(null), []);

  useEffect(() => {
    if (!activeArticle) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeArticle();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeArticle, closeArticle]);

  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-cream to-white border-b border-cream-dark/30">
        <div className="section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron font-semibold text-sm uppercase tracking-wider"
          >
            Hari Sharanam!
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-dark-brown leading-tight"
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
            <div className="rounded-2xl overflow-hidden shadow-lg bg-cream">
              {/* Use intrinsic dimensions so the full portrait is shown
                  without cropping; the image scales responsively to the
                  column width. */}
              <Image
                src={img("brahmabodhi-portrait-full.png")}
                alt="Sriyut BrahmBodhi"
                width={697}
                height={1024}
                className="w-full h-auto block"
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Defining Moment — YouTube Short */}
      <section className="section-padding py-16 md:py-24 bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              A Defining Moment
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              The Experience That Changed the Direction of a Successful Life
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              An experience that turned the course of a successful and
              distinguished life — one that millions dream of, marked by
              success, prestige, and recognition.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What led Sriyut BrahmBodhi to walk away from such a path? Was it
              merely a personal decision, or was there a deeper, unseen
              calling behind it?
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This short film shares a true story that invites reflection on
              life, destiny, and the role of the Divine.
            </p>
            <a
              href="https://youtube.com/shorts/gB6NoHS-OnA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md"
            >
              <Video className="w-5 h-5" />
              Watch on YouTube
            </a>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-1 lg:order-2 mx-auto w-full max-w-[360px]"
          >
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-cream-dark/40 bg-black">
              <iframe
                src="https://www.youtube.com/embed/gB6NoHS-OnA"
                title="A Defining Moment — Sriyut BrahmBodhi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Q&A with BrahmBodhi — preview using shared QAGrid */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 text-saffron font-semibold text-sm uppercase tracking-wider">
              <MessageCircleQuestion className="w-4 h-4" />
              Conversations of Wisdom
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Q&amp;A with BrahmBodhi
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Real questions asked by seekers — answered with timeless insights
              drawn from the Bhagavad Gita and the lived experience of Sriyut
              BrahmBodhi.
            </p>
          </motion.div>

          <QAGrid items={[...qaItems, ...bhagavadDharmaQA]} limit={6} />

          <div className="mt-10 md:mt-12 text-center">
            <Link
              href="/qa-with-brahmbodhi"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md"
            >
              See All Questions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newspaperArticles.map((article, i) => (
            <motion.button
              key={article.image}
              type="button"
              onClick={() => setActiveArticle(article)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col text-left bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-cream-dark/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
              aria-label={`Read article: ${article.title}`}
            >
              <div className="relative aspect-[4/3] bg-warm-gray overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.title} — ${article.publication}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-bold text-dark-brown leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1.5">
                  <span className="font-medium text-saffron">
                    {article.publication}
                  </span>
                  <span className="text-text-secondary/60"> · </span>
                  {article.section}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-saffron font-semibold text-sm group-hover:gap-2.5 transition-all">
                  <BookOpen className="w-4 h-4" />
                  Click here to read
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Newspaper Article Lightbox */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
            onClick={closeArticle}
            role="dialog"
            aria-modal="true"
            aria-label={activeArticle.title}
          >
            <div className="flex items-start justify-between gap-4 px-4 md:px-8 py-4 text-white">
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-xl font-bold truncate">
                  {activeArticle.title}
                </h3>
                <p className="text-xs md:text-sm text-white/70 mt-0.5 truncate">
                  {activeArticle.publication} · {activeArticle.section}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeArticle.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-saffron hover:bg-saffron-dark text-white rounded-full transition-colors font-semibold"
                  aria-label="Open full image in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Full image</span>
                  <span className="sm:hidden">Read</span>
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeArticle();
                  }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div
              className="flex-1 min-h-0 overflow-auto px-4 md:px-8 pb-8 flex flex-col items-center"
              onClick={closeArticle}
            >
              <div
                className="bg-white/5 rounded-xl overflow-hidden inline-block max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Plain <img> so the full-resolution scan is shown
                    without cropping. `max-h-full` keeps the entire article
                    visible inside the viewport; users can click "Full image"
                    to open the raw scan in a new tab for deeper zoom. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeArticle.image}
                  alt={`${activeArticle.title} — ${activeArticle.publication}`}
                  className="block max-w-full h-auto md:max-h-[80vh] md:w-auto md:object-contain mx-auto"
                />
              </div>
              <p className="text-center text-white/60 text-xs mt-4">
                Tip: Click <span className="text-white/90 font-semibold">Full image</span> to open the original scan in a new tab for easier reading and zoom.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Watch & Learn — shared with home page */}
      <WatchAndLearn className="section-padding py-16 md:py-24 bg-white" />

      {/* Books by BrahmBodhi — shared with publications page */}
      <BooksShowcase
        title="Books by BrahmBodhi"
        subtitle="Bhagavad Gita commentaries and student editions, in Hindi and English."
        className="section-padding py-16 md:py-24 bg-cream"
      />

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

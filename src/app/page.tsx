"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  HandHeart,
  ArrowRight,
  Globe,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import DonationButton from "@/components/DonationButton";
import { img } from "@/lib/image-url";

const navTabs = [
  {
    icon: GraduationCap,
    label: "Gita Global Gurukul",
    href: "/gita-gurukul",
    image: img("gurukul.png"),
  },
  {
    icon: BookOpen,
    label: "Gita Publications",
    href: "/gita-publications",
    image: img("publications.png"),
  },
  {
    icon: Globe,
    label: "Network",
    href: "/networking",
    image: img("connect-icon.png"),
  },
];

const blogPosts = [
  {
    title: "विषय : आध्यात्मिक प्रगति के लिए मन के विकारों को कैसे दूर करें?",
    excerpt:
      "अंतःकरण को शुद्ध किए बिना ऊँची आध्यात्मिक उपलब्धि और ईश्वर दर्शन असंभव",
    date: "Jul 31, 2025",
    slug: "व-षय-आध-य-त-म-क-प-रगत-क-ल-ए-मन-क-व-क-र-क-क-स-द-र-कर",
    image: img("blog-thumb-1.jpg"),
  },
  {
    title:
      "प्रश्न : क़्या बिना गुरू किये ईश्वर का नाम जपनें से अध्यात्मिक उपलब्धि प्राप्त नहीं हो सकती?",
    excerpt:
      "ईश्वर का नाम जप प्रगति की दिशा में ले जा सकता है, लेकिन मार्गदर्शन भक्ति को गहराता है और सच्ची सिद्धि सुनिश्चित करता है।",
    date: "Jul 31, 2025",
    slug: "प-रश-न-क-य-ब-न-ग-र-क-य-ईश-वर-क-न-म-जपन-स-अध-य-त-म-क-उपलब-ध-प-र-प-त-नह-ह-सकत",
    image: img("blog-thumb-2.jpeg"),
  },
  {
    title:
      "Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
    excerpt:
      "Chanting God's name can lead to progress, but guidance deepens devotion and ensures true attainment.",
    date: "Jul 31, 2025",
    slug: "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru",
    image: img("blog-thumb-3.jpeg"),
  },
];

const waysWeHelp = [
  {
    icon: BookOpen,
    title: "Spiritual Development",
    description:
      "A Gita Dham is a center for spiritual, material, and cultural growth, embodying Bhagavad Dharma's principle of worship through purposeful action.",
  },
  {
    icon: GraduationCap,
    title: "Holistic Education",
    description:
      "Gita Global Gurukul is a holistic education system blending ancient Indian Gurukul principles with modern learning, offering free, personalized education to underprivileged children.",
  },
  {
    icon: HandHeart,
    title: "Poverty Alleviation",
    description:
      "At Gita Dham, we address spiritual and material poverty by fostering growth through the Gita temple and providing skill training at the Poverty Alleviation Centre.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Nav Tabs - Gurukul / Publications / Network */}
      <section className="section-padding py-10 md:py-14 bg-white">
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {navTabs.map((tab, i) => (
            <motion.div
              key={tab.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={tab.href}
                className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-cream hover:bg-saffron/10 border border-cream-dark/30 hover:border-saffron/30 transition-all text-center"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-saffron/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src={tab.image}
                    alt={tab.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-dark-brown group-hover:text-saffron transition-colors leading-tight">
                  {tab.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* A Better World Together */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              A Better World, Together
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Explore the teachings of the Bhagavad Gita, guided by Sriyut
              BrahmBodhi. Join us for insightful sessions, spiritual growth, and
              practical wisdom to uplift lives and foster a global family.
              Subscribe and be part of our journey!
            </p>
            <a
              href="https://www.youtube.com/@BrahmBodhi_HindiOfficial?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Explore on YouTube
            </a>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.youtube.com/embed/5PM71sAvvmg"
              title="BrahmBodhi Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Browse Our Articles */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading title="Browse Our Articles" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("vision.jpg")}
          alt="Our Vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeading title="Our Vision" light centered={false} />
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Led by Sriyut BrahmBodhi, a spiritual leader and author, Gita
                Global Family envisions a world where spiritual wisdom and
                meaningful education empower underprivileged communities. Through
                efforts like educational camps for slum children and poverty
                alleviation research, we strive to alleviate both spiritual and
                material poverty, fostering hope and transformation globally.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-dark-brown font-semibold rounded-full hover:bg-cream transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={img("brahmabodhi.jpeg")}
                alt="Sriyut BrahmBodhi"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding py-16 md:py-24 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={img("banner.jpg")}
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.15 }}>
            <SectionHeading title="Our Mission" centered={false} />
            <p className="text-text-secondary leading-relaxed">
              Gita Global Family is dedicated to helping communities worldwide,
              regardless of faith, with spiritual growth, economic empowerment,
              poverty alleviation, and providing free, high-quality education for
              children. Led by Sriyut BrahmBodhi, we offer online Zoom classes
              six days a week, available on the Gita Global Gurukul YouTube
              channel, where children and schools can subscribe and benefit from
              these teachings.
            </p>
            <div className="mt-8">
              <DonationButton />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ways We Help */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Ways We Help"
          subtitle="No matter where in the world a village or community is located, our support is available if they seek guidance."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {waysWeHelp.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Our Projects & Works */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Our Projects & Works"
          subtitle="At the heart of our mission lies a harmonious blend of spiritual growth and societal transformation."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            {...fadeInUp}
            className="bg-cream rounded-2xl overflow-hidden border border-cream-dark/30"
          >
            <div className="relative h-56">
              <Image
                src={img("gurukul.png")}
                alt="Gurukul & Ashrams"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-dark-brown mb-4">
                Gurukul & Ashrams
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  <span>
                    <strong>Gita Temple:</strong> A spiritual hub for inner
                    growth.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  <span>
                    <strong>Ashram Retreat:</strong> A space for meditation and
                    self-discovery.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  <span>
                    <strong>Gita Global Gurukul School:</strong> Headquarters for
                    value-based education.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  <span>
                    <strong>Poverty Alleviation Centre:</strong> Direct support
                    for underserved communities.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  <span>
                    <strong>Art & Culture Centre:</strong> Reviving traditions
                    within a 10-km radius.
                  </span>
                </li>
              </ul>
              <Link
                href="/gita-gurukul"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-saffron hover:text-saffron-dark transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-cream rounded-2xl overflow-hidden border border-cream-dark/30"
          >
            <div className="relative h-56">
              <Image
                src={img("publications.png")}
                alt="Gita Publications"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-dark-brown mb-4">
                Gita Publications
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                <strong>Gita Global Publication</strong>, a dedicated unit of the
                Gita Global Family, shares the Bhagavad Gita&apos;s timeless
                wisdom worldwide. Our mission:
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  Promote peace, unity, and brotherhood.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  Combat spiritual and material poverty.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">&#9679;</span>
                  Publish 30+ books to make Gita&apos;s teachings accessible to
                  all.
                </li>
              </ul>
              <Link
                href="/gita-publications"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-saffron hover:text-saffron-dark transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            Join Hands
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding py-16 md:py-24 bg-warm-gray">
        <SectionHeading title="Frequently Asked Questions" />
        <FAQAccordion />
      </section>

      {/* Stay Connected */}
      <section className="section-padding py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              title="Stay Connected with Our Community"
              subtitle="At Gita Global Family, community is at the heart of everything we do. We love hearing from you—whether it's a question, a suggestion, or simply a thought you'd like to share."
              centered={false}
            />
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <span className="text-saffron text-lg">&#9679;</span>
                <div>
                  <p className="font-medium text-dark-brown text-sm">
                    Location
                  </p>
                  <p className="text-sm text-text-secondary">
                    Gopala 1F, 104, Omaxe, Chhatikara Road, Vrindavan, Mathura,
                    UP, India, 281003
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-saffron text-lg">&#9679;</span>
                <div>
                  <p className="font-medium text-dark-brown text-sm">Contact</p>
                  <p className="text-sm text-text-secondary">+91 8865052915</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-saffron text-lg">&#9679;</span>
                <div>
                  <p className="font-medium text-dark-brown text-sm">Email</p>
                  <p className="text-sm text-text-secondary">
                    namaste@gitaglobalfamily.org
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-warm-gray rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-dark-brown mb-6">
              Join Us Today
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Gallery Preview - masonry-style like the Framer site */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading
          title="Gallery"
          subtitle="Capture the essence of mindfulness in every breath and pose."
        />
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 auto-rows-[120px] md:auto-rows-[160px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group"
          >
            <Image
              src={img("gallery-1.jpg")}
              alt="Gallery 1"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="col-span-2 row-span-1 relative rounded-xl overflow-hidden group"
          >
            <Image
              src={img("hero-1.jpeg")}
              alt="Gallery 2"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group"
          >
            <Image
              src={img("gallery-2.jpg")}
              alt="Gallery 3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="col-span-2 row-span-1 relative rounded-xl overflow-hidden group"
          >
            <Image
              src={img("hero-2.jpeg")}
              alt="Gallery 4"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-colors"
          >
            All Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title:
      "विषय : आध्यात्मिक प्रगति के लिए मन के विकारों को कैसे दूर करें?",
    excerpt:
      "अंतःकरण को शुद्ध किए बिना ऊँची आध्यात्मिक उपलब्धि और ईश्वर दर्शन असंभव",
    date: "Jul 31, 2025",
    slug: "व-षय-आध-य-त-म-क-प-रगत-क-ल-ए-मन-क-व-क-र-क-क-स-द-र-कर",
  },
  {
    title:
      "प्रश्न : क़्या बिना गुरू किये ईश्वर का नाम जपनें से अध्यात्मिक उपलब्धि प्राप्त नहीं हो सकती?",
    excerpt:
      "ईश्वर का नाम जप प्रगति की दिशा में ले जा सकता है, लेकिन मार्गदर्शन भक्ति को गहराता है",
    date: "Jul 31, 2025",
    slug: "प-रश-न-क-य-ब-न-ग-र-क-य-ईश-वर-क-न-म-जपन-स-अध-य-त-म-क-उपलब-ध-प-र-प-त-नह-ह-सकत",
  },
  {
    title:
      "Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
    excerpt:
      "Chanting God's name can lead to progress, but guidance deepens devotion and ensures true attainment.",
    date: "Jul 31, 2025",
    slug: "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru",
  },
  {
    title: "How can mental stress be healed through spirituality?",
    excerpt:
      "Exploring how spiritual practices can provide relief from mental stress and anxiety.",
    date: "Jul 31, 2025",
    slug: "question-rajesh-k-dubey-how-can-mental-stress-be-healed-through-spirituality",
  },
  {
    title: "Karmanye Vadhikaraste",
    excerpt:
      "Understanding the profound verse about performing your duty without attachment to results.",
    slug: "karmanye-vadhikaraste",
  },
  {
    title: "The Benefits of Yoga for Mental Health",
    excerpt:
      "Exploring the scientific and spiritual benefits of yoga practices for mental wellness.",
    slug: "the-benefits-of-yoga-for-mental-health",
  },
  {
    title: "आत्म जागृत करते सूर्य एवं अपने अंदर निष्पर्व",
    excerpt:
      "Awakening the self through inner exploration and spiritual awareness.",
    slug: "आत-म-ज-गर-कत-स-ज-ग-ए-अपन-अ-दर-न-सपर-व",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Insights, teachings, and reflections rooted in the timeless wisdom
            of the Bhagavad Gita.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Latest Posts"
          subtitle="Explore our collection of articles on spirituality, yoga, and the teachings of the Gita."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const englishArticles = [
  {
    title: "Does Bhagavad Gita Support the Hindu Caste System?",
    excerpt:
      "Hindu\u2019s have a caste system which is only of its kind in the world. A \u2018caste\u2019 is a community to which entry is based on birth in that community. Hindu society is divided into hundreds of castes. Most traditional Hindu scriptures and Hindu scholars justify the birth based caste system. The big question is whether the Bhagavad Gita also supports this system?",
    date: "Jan 5, 2025",
    slug: "the-benefits-of-yoga-for-mental-health",
  },
  {
    title:
      "Question (Rajesh K. Dubey): How can mental stress be healed through spirituality?",
    excerpt:
      "Stress and depression have become like a pandemic. How to deal with them, and what is their permanent solution \u2014 the answer lies in this discussion.",
    date: "Jun 16, 2025",
    slug: "question-(rajesh-k-dubey)-how-can-mental-stress-be-healed-through-spirituality",
  },
  {
    title:
      "Question: Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
    excerpt:
      "Chanting God\u2019s name can lead to progress, but guidance deepens devotion and ensures true attainment.",
    date: "Jul 31, 2025",
    slug: "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru",
  },
];

const gitaVerses = [
  {
    title: "Karmanye Vadhikaraste",
    excerpt:
      "Here\u2019s a well-structured blog post on one of the most popular verses of the Bhagavad Gita\u2014Chapter 2, Verse 47 (Karmanye Vadhikaraste).",
    date: "Apr 7, 2025",
    slug: "karmanye-vadhikaraste",
  },
];

const hindiArticles = [
  {
    title: "\u0906\u0924\u094d\u092e-\u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0938\u0947 \u091c\u0917\u093e\u090f\u0902 \u0905\u092a\u0928\u0940 \u0905\u0902\u0926\u0930\u0942\u0928\u0940 \u0938\u0941\u092a\u0930\u092a\u093e\u0935\u0930",
    excerpt:
      "\u0905\u092a\u0928\u0940 \u0938\u092b\u0932\u0924\u093e \u0914\u0930 \u0905\u092a\u0928\u0947 \u0935\u093f\u0915\u093e\u0938 \u0915\u0947 \u0909\u092a\u0915\u0930\u0923 \u0939\u092e \u092c\u093e\u0939\u0930 \u0915\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u092e\u0947\u0902 \u0916\u094b\u091c\u0924\u0947 \u092b\u093f\u0930\u0924\u0947 \u0939\u0948\u0902 \u0932\u0947\u0915\u093f\u0928 \u092f\u0939 \u092d\u0942\u0932 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f \u0909\u0938\u0915\u0940 \u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u0940 \u091a\u093e\u092c\u0940 \u0924\u094b \u0939\u092e\u093e\u0930\u0947 \u0905\u0902\u0926\u0930 \u0939\u0940 \u091b\u093f\u092a\u0940 \u0939\u0941\u0908 \u0939\u0948\u0964 \u092f\u0939 \u091a\u093e\u092c\u0940 \u0939\u0948 \u0906\u0924\u094d\u092e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e\u0964",
    date: "Apr 3, 2025",
    slug: "\u0906\u0924-\u092e-\u091c-\u0917\u0930-\u0915\u0924-\u0938-\u091c\u0917-\u090f-\u0905\u092a\u0928-\u0905-\u0926\u0930-\u0928-\u0938-\u092a\u0930\u092a-\u0935\u0930",
  },
  {
    title:
      "\u092a\u094d\u0930\u0936\u094d\u0928 (\u0930\u093e\u091c\u0947\u0936 \u0915\u0947. \u0926\u0942\u092c\u0947) : \u092e\u093e\u0928\u0938\u093f\u0915 \u0924\u0928\u093e\u0935 \u0915\u094b \u0905\u0927\u094d\u092f\u093e\u0924\u094d\u092e \u0915\u0947 \u091c\u0930\u093f\u090f \u0915\u0948\u0938\u0947 \u0920\u0940\u0915 \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948?",
    excerpt:
      "\u0924\u0928\u093e\u0935 \u0914\u0930 \u0905\u0935\u0938\u093e\u0926 \u090f\u0915 \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964 \u0907\u0928\u0938\u0947 \u0915\u0948\u0938\u0947 \u0928\u093f\u092a\u091f\u0947\u0902, \u0907\u0928\u0915\u093e \u0938\u094d\u0925\u093e\u092f\u0940 \u0938\u092e\u093e\u0927\u093e\u0928 \u0915\u094d\u092f\u093e \u0939\u0948, \u0907\u0938\u0915\u093e \u0909\u0924\u094d\u0924\u0930 \u0907\u0938 \u091a\u0930\u094d\u091a\u093e \u092e\u0947\u0902 \u0939\u0948\u0964",
    date: "Jun 15, 2025",
    slug: "\u092a-\u0930\u0936-\u0928-(\u0930-\u091c-\u0935-\u0939-\u0915-\u0921-\u092c-)-\u092e-\u0928\u0938-\u0915-\u0924\u0928-\u0935-\u0915-\u0905\u0927-\u092f-\u0924-\u092e-\u0915-\u091c\u0930-\u090f-\u0915-\u0938-\u0920-\u0915-\u0915-\u092f-\u091c-\u0938\u0915\u0924-\u0939",
  },
  {
    title:
      "\u092a\u094d\u0930\u0936\u094d\u0928 : \u0915\u093c\u094d\u092f\u093e \u092c\u093f\u0928\u093e \u0917\u0941\u0930\u0942 \u0915\u093f\u092f\u0947 \u0908\u0936\u094d\u0935\u0930 \u0915\u093e \u0928\u093e\u092e \u091c\u092a\u0928\u0947\u0902 \u0938\u0947 \u0905\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0909\u092a\u0932\u092c\u094d\u0927\u093f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u0940?",
    excerpt:
      "\u0908\u0936\u094d\u0935\u0930 \u0915\u093e \u0928\u093e\u092e \u091c\u092a \u092a\u094d\u0930\u0917\u0924\u093f \u0915\u0940 \u0926\u093f\u0936\u093e \u092e\u0947\u0902 \u0932\u0947 \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948, \u0932\u0947\u0915\u093f\u0928 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u092d\u0915\u094d\u0924\u093f \u0915\u094b \u0917\u0939\u0930\u093e\u0924\u093e \u0939\u0948 \u0914\u0930 \u0938\u091a\u094d\u091a\u0940 \u0938\u093f\u0926\u094d\u0927\u093f \u0938\u0941\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
    date: "Jul 31, 2025",
    slug: "\u092a-\u0930\u0936-\u0928-\u0915-\u092f-\u092c-\u0928-\u0917-\u0930-\u0915-\u092f-\u0908\u0936-\u0935\u0930-\u0915-\u0928-\u092e-\u091c\u092a\u0928-\u0938-\u0905\u0927-\u092f-\u0924-\u092e-\u0915-\u0909\u092a\u0932\u092c-\u0927-\u092a-\u0930-\u092a\u0924-\u0928\u0939-\u0939-\u0938\u0915\u0924",
  },
  {
    title:
      "\u0935\u093f\u0937\u092f : \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u092a\u094d\u0930\u0917\u0924\u093f \u0915\u0947 \u0932\u093f\u090f \u092e\u0928 \u0915\u0947 \u0935\u093f\u0915\u093e\u0930\u094b\u0902 \u0915\u094b \u0915\u0948\u0938\u0947 \u0926\u0942\u0930 \u0915\u0930\u0947\u0902?",
    excerpt:
      "\u0905\u0902\u0924\u0903\u0915\u0930\u0923 \u0915\u094b \u0936\u0941\u0926\u094d\u0927 \u0915\u093f\u090f \u092c\u093f\u0928\u093e \u090a\u0901\u091a\u0940 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0909\u092a\u0932\u092c\u094d\u0927\u093f \u0914\u0930 \u0908\u0936\u094d\u0935\u0930 \u0926\u0930\u094d\u0936\u0928 \u0905\u0938\u0902\u092d\u0935",
    date: "Jul 31, 2025",
    slug: "\u0935-\u0937\u092f-\u0906\u0927-\u092f-\u0924-\u092e-\u0915-\u092a-\u0930\u0917\u0924-\u0915-\u0932-\u090f-\u092e\u0928-\u0915-\u0935-\u0915-\u0930-\u0915-\u0915-\u0938-\u0926-\u0930-\u0915\u0930",
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
            Articles related to Bhagavad Gita
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            This space explores timeless truths from the Bhagavad Gita, Dharma,
            and humanity&apos;s spiritual heritage. Through reflective articles,
            we bridge ancient wisdom and modern life&mdash;guiding you to live
            intentionally, serve selflessly, and ignite positive change. Here,
            every thought is a step toward light (ज्योतिर्गमय). Join the
            journey.
          </motion.p>
        </div>
      </section>

      {/* English Articles */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading title="Recently Added" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {englishArticles.map((post, i) => (
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

      {/* Gita Verses */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Verses from the Bhagavad Gita" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Immerse yourself in the sacred verses of the Bhagavad Gita, the
          eternal words of Lord Krishna. These shlokas carry profound wisdom,
          guiding you toward righteousness (Dharma), self-realization, and inner
          peace. Read, reflect, and let the Gita&apos;s divine light transform
          your life.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {gitaVerses.map((post, i) => (
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

      {/* Hindi Articles */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading title="Articles in Hindi (लेख)" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          यह स्थान भगवद् गीता, धर्म और मानवता की आध्यात्मिक विरासत से प्राप्त
          शाश्वत सत्यों का अन्वेषण करता है। विचारशील लेखों के माध्यम से, हम
          प्राचीन ज्ञान और आधुनिक जीवन के बीच सेतु बनाते हैं&mdash;आपको सचेतन
          जीवन जीने, निःस्वार्थ सेवा करने और सकारात्मक परिवर्तन की प्रेरणा देने
          के लिए मार्गदर्शन करते हैं। यहाँ प्रत्येक विचार प्रकाश की ओर एक कदम
          है (ज्योतिर्गमय)। इस यात्रा में सहभागी बनें।
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hindiArticles.map((post, i) => (
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

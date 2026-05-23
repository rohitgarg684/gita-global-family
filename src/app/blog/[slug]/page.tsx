import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { img } from "@/lib/image-url";
import BilingualPost from "./BilingualPost";

interface SimpleBlogPost {
  title: string;
  date?: string;
  image?: string;
  content: string[];
}

export interface BilingualBlogPost {
  bilingual: true;
  titleEn: string;
  titleHi: string;
  date?: string;
  imageEn?: string;
  imageHi?: string;
  youtubeUrl?: string;
  contentEn: string[];
  contentHi: string[];
}

type BlogPost = SimpleBlogPost | BilingualBlogPost;

function isBilingual(post: BlogPost): post is BilingualBlogPost {
  return "bilingual" in post && post.bilingual === true;
}

const blogPosts: Record<string, BlogPost> = {
  "the-benefits-of-yoga-for-mental-health": {
    title: "Does Bhagavad Gita Support the Hindu Caste System?",
    date: "Jan 5, 2025",
    image: img("blog-caste-system.webp"),
    content: [
      "Hindu\u2019s have a caste system which is only of its kind in the world. A \u2018caste\u2019 is a community to which entry is based on birth in that community. Hindu society is divided into hundreds of castes. Marriages used to take place earlier only within the members of the same caste.",
      "The different castes were arranged hierarchically, with some being called \u201chigher castes\u201d and some being called \u201clower castes\u201d in terms of social status. This system has been broken quite a bit during the last 100 years, yet it continues in some form or the other.",
      "Most traditional Hindu scriptures and Hindu scholars justify the birth based caste system. The big question is whether the Bhagavad Gita also supports this system?",
      "The Bhagavad Gita presents the concept of Varna, which is fundamentally different from the rigid caste system. In Chapter 4, Verse 13, Lord Krishna says: \u201cch\u0101tur-var\u1e47ya\u1e43 may\u0101 s\u1e5b\u1e63\u1e6da\u1e43 gu\u1e47a-karma-vibh\u0101ga\u015ba\u1e25\u201d \u2014 the four divisions of human society were created by Me according to differences in quality and work, not birth.",
      "This is a revolutionary declaration. The Gita classifies people based on their qualities (gunas) and actions (karma), not their birth. A person\u2019s Varna is determined by their nature and the work they do, making it a dynamic and merit-based system rather than a hereditary one.",
    ],
  },
  "question-(rajesh-k-dubey)-how-can-mental-stress-be-healed-through-spirituality":
    {
      title:
        "Question (Rajesh K. Dubey): How can mental stress be healed through spirituality?",
      date: "Jun 16, 2025",
      image: img("blog-mental-stress-en.png"),
      content: [
        "Stress and depression have become like a pandemic. How to deal with them, and what is their permanent solution \u2014 the answer lies in this discussion.",
        "Mental stress arises when the mind is overwhelmed by desires, fears, and attachments. The Bhagavad Gita offers a comprehensive framework for addressing this through spiritual practice.",
        "Lord Krishna teaches in Chapter 2 that equanimity (samatvam) is the key to mental peace. When we remain balanced in success and failure, pleasure and pain, we transcend the cycles of stress.",
        "The practice of Nishkama Karma \u2014 performing one\u2019s duty without attachment to results \u2014 frees the mind from anxiety about outcomes. This is the essence of stress-free living as taught in the Gita.",
        "Regular meditation, self-reflection, and surrendering to the divine will are practical tools from the Gita that can heal mental stress at its root, rather than merely treating its symptoms.",
      ],
    },
  "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru":
    {
      title:
        "Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
      date: "Jul 31, 2025",
      image: img("blog-chanting-guru.png"),
      content: [
        "Chanting God\u2019s name can lead to progress, but guidance deepens devotion and ensures true attainment.",
        "The Bhagavad Gita emphasizes the importance of a guru in spiritual development. In Chapter 4, Verse 34, Lord Krishna advises: \u201cApproach a wise teacher, inquire from him submissively and render service unto him. The self-realized soul can impart knowledge unto you because he has seen the truth.\u201d",
        "While chanting the divine name (Nama Japa) is a powerful spiritual practice that purifies the mind and heart, the guidance of a realized guru helps the seeker avoid pitfalls, understand subtle spiritual truths, and progress on the path more effectively.",
        "A guru serves as a living example of spiritual realization, providing not just theoretical knowledge but practical wisdom born of direct experience. The guru-disciple relationship is considered sacred in the Gita tradition.",
        "Therefore, while chanting alone can bring some spiritual progress, the combination of devoted practice and guru\u2019s guidance creates the optimal conditions for the highest spiritual attainment.",
      ],
    },
  "karmanye-vadhikaraste": {
    title: "Karmanye Vadhikaraste",
    date: "Apr 7, 2025",
    image: img("blog-karmanye.jpg"),
    content: [
      "One of the most popular and frequently quoted verses of the Bhagavad Gita is Chapter 2, Verse 47: \u201ckarma\u1e47ye v\u0101dhik\u0101raste m\u0101 phale\u1e63hu kad\u0101chana\u201d.",
      "Translation: \u201cYou have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to not doing your duty.\u201d",
      "This verse encapsulates the essence of Karma Yoga \u2014 the yoga of selfless action. It teaches us to focus entirely on our efforts and responsibilities without being anxious about outcomes.",
      "In modern life, this teaching is profoundly relevant. Whether in our professional work, relationships, or personal goals, the anxiety about results often paralyzes us or leads to compromised actions. The Gita advises us to give our best effort and leave the results to the divine order.",
      "This is not about being indifferent to outcomes, but about maintaining inner equanimity regardless of whether things go as planned. When we act without attachment to results, our actions become purer, more focused, and more effective.",
      "The verse also warns against inaction (m\u0101 te sa\u1e45go\u2019stv akarma\u1e47i). Detachment from results should not lead to laziness or avoidance of duty. The Gita calls for engaged, wholehearted action \u2014 just without the burden of expectation.",
    ],
  },
  "\u0906\u0924-\u092e-\u091c-\u0917\u0930-\u0915\u0924-\u0938-\u091c\u0917-\u090f-\u0905\u092a\u0928-\u0905-\u0926\u0930-\u0928-\u0938-\u092a\u0930\u092a-\u0935\u0930":
    {
      title:
        "\u0906\u0924\u094d\u092e-\u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0938\u0947 \u091c\u0917\u093e\u090f\u0902 \u0905\u092a\u0928\u0940 \u0905\u0902\u0926\u0930\u0942\u0928\u0940 \u0938\u0941\u092a\u0930\u092a\u093e\u0935\u0930",
      date: "Apr 3, 2025",
      image: img("blog-atma-jagurukta.webp"),
      content: [
        "\u0905\u092a\u0928\u0940 \u0938\u092b\u0932\u0924\u093e \u0914\u0930 \u0905\u092a\u0928\u0947 \u0935\u093f\u0915\u093e\u0938 \u0915\u0947 \u0909\u092a\u0915\u0930\u0923 \u0939\u092e \u092c\u093e\u0939\u0930 \u0915\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u092e\u0947\u0902 \u0916\u094b\u091c\u0924\u0947 \u092b\u093f\u0930\u0924\u0947 \u0939\u0948\u0902 \u0932\u0947\u0915\u093f\u0928 \u092f\u0939 \u092d\u0942\u0932 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f \u0909\u0938\u0915\u0940 \u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u0940 \u091a\u093e\u092c\u0940 \u0924\u094b \u0939\u092e\u093e\u0930\u0947 \u0905\u0902\u0926\u0930 \u0939\u0940 \u091b\u093f\u092a\u0940 \u0939\u0941\u0908 \u0939\u0948\u0964 \u092f\u0939 \u091a\u093e\u092c\u0940 \u0939\u0948 \u0906\u0924\u094d\u092e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e\u0964",
        "\u0906\u0924\u094d\u092e \u091c\u093e\u0917\u0930\u0942\u0915\u0924\u093e \u0915\u093e \u0905\u0930\u094d\u0925 \u0939\u0948 \u0905\u092a\u0928\u0947 \u0906\u092a \u0915\u094b \u0917\u0939\u0930\u093e\u0908 \u0938\u0947 \u091c\u093e\u0928\u0928\u093e \u2014 \u0905\u092a\u0928\u0947 \u0935\u093f\u091a\u093e\u0930\u094b\u0902, \u092d\u093e\u0935\u0928\u093e\u0913\u0902, \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e\u0913\u0902 \u0914\u0930 \u0935\u094d\u092f\u0935\u0939\u093e\u0930 \u0915\u0947 \u092a\u094d\u0930\u0924\u093f\u092e\u093e\u0928\u094b\u0902 \u0915\u094b \u0938\u092e\u091d\u0928\u093e\u0964",
        "\u092d\u0917\u0935\u0926\u094d \u0917\u0940\u0924\u093e \u092e\u0947\u0902 \u092d\u0917\u0935\u093e\u0928 \u0936\u094d\u0930\u0940\u0915\u0943\u0937\u094d\u0923 \u0928\u0947 \u0906\u0924\u094d\u092e \u091c\u094d\u091e\u093e\u0928 \u0915\u094b \u0938\u092c\u0938\u0947 \u0909\u091a\u094d\u091a \u091c\u094d\u091e\u093e\u0928 \u092c\u0924\u093e\u092f\u093e \u0939\u0948\u0964 \u091c\u092c \u0939\u092e \u0905\u092a\u0928\u0947 \u0906\u092a \u0915\u094b \u091c\u093e\u0928\u0924\u0947 \u0939\u0948\u0902, \u0924\u092c \u0939\u092e \u0905\u092a\u0928\u0940 \u0905\u0902\u0926\u0930\u0942\u0928\u0940 \u0936\u0915\u094d\u0924\u093f\u092f\u094b\u0902 \u0915\u094b \u091c\u0917\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964",
      ],
    },
  "\u092a-\u0930\u0936-\u0928-(\u0930-\u091c-\u0935-\u0939-\u0915-\u0921-\u092c-)-\u092e-\u0928\u0938-\u0915-\u0924\u0928-\u0935-\u0915-\u0905\u0927-\u092f-\u0924-\u092e-\u0915-\u091c\u0930-\u090f-\u0915-\u0938-\u0920-\u0915-\u0915-\u092f-\u091c-\u0938\u0915\u0924-\u0939":
    {
      title:
        "\u092a\u094d\u0930\u0936\u094d\u0928 (\u0930\u093e\u091c\u0947\u0936 \u0915\u0947. \u0926\u0942\u092c\u0947) : \u092e\u093e\u0928\u0938\u093f\u0915 \u0924\u0928\u093e\u0935 \u0915\u094b \u0905\u0927\u094d\u092f\u093e\u0924\u094d\u092e \u0915\u0947 \u091c\u0930\u093f\u090f \u0915\u0948\u0938\u0947 \u0920\u0940\u0915 \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948?",
      date: "Jun 15, 2025",
      image: img("blog-mental-stress-hi.png"),
      content: [
        "\u0924\u0928\u093e\u0935 \u0914\u0930 \u0905\u0935\u0938\u093e\u0926 \u090f\u0915 \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964 \u0907\u0928\u0938\u0947 \u0915\u0948\u0938\u0947 \u0928\u093f\u092a\u091f\u0947\u0902, \u0907\u0928\u0915\u093e \u0938\u094d\u0925\u093e\u092f\u0940 \u0938\u092e\u093e\u0927\u093e\u0928 \u0915\u094d\u092f\u093e \u0939\u0948, \u0907\u0938\u0915\u093e \u0909\u0924\u094d\u0924\u0930 \u0907\u0938 \u091a\u0930\u094d\u091a\u093e \u092e\u0947\u0902 \u0939\u0948\u0964",
        "\u092d\u0917\u0935\u0926\u094d \u0917\u0940\u0924\u093e \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930, \u092e\u093e\u0928\u0938\u093f\u0915 \u0924\u0928\u093e\u0935 \u0915\u093e \u092e\u0942\u0932 \u0915\u093e\u0930\u0923 \u092e\u0928 \u0915\u0940 \u0905\u0936\u093e\u0902\u0924\u093f \u0939\u0948\u0964 \u091c\u092c \u092e\u0928 \u0907\u091a\u094d\u091b\u093e\u0913\u0902, \u092d\u092f\u094b\u0902 \u0914\u0930 \u0906\u0938\u0915\u094d\u0924\u093f\u092f\u094b\u0902 \u0938\u0947 \u0917\u094d\u0930\u0938\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948, \u0924\u092c \u0924\u0928\u093e\u0935 \u0909\u0924\u094d\u092a\u0928\u094d\u0928 \u0939\u094b\u0924\u093e \u0939\u0948\u0964",
        "\u0905\u0927\u094d\u092f\u093e\u0924\u094d\u092e \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0907\u0938 \u0938\u092e\u0938\u094d\u092f\u093e \u0915\u093e \u0938\u094d\u0925\u093e\u092f\u0940 \u0938\u092e\u093e\u0927\u093e\u0928 \u0938\u0902\u092d\u0935 \u0939\u0948\u0964 \u0927\u094d\u092f\u093e\u0928, \u092a\u094d\u0930\u093e\u0923\u093e\u092f\u093e\u092e \u0914\u0930 \u0906\u0924\u094d\u092e-\u0935\u093f\u091a\u093e\u0930 \u091c\u0948\u0938\u0940 \u092a\u094d\u0930\u0925\u093e\u090f\u0901 \u092e\u0928 \u0915\u094b \u0936\u093e\u0902\u0924 \u0915\u0930\u0924\u0940 \u0939\u0948\u0902\u0964",
      ],
    },
  "\u092a-\u0930\u0936-\u0928-\u0915-\u092f-\u092c-\u0928-\u0917-\u0930-\u0915-\u092f-\u0908\u0936-\u0935\u0930-\u0915-\u0928-\u092e-\u091c\u092a\u0928-\u0938-\u0905\u0927-\u092f-\u0924-\u092e-\u0915-\u0909\u092a\u0932\u092c-\u0927-\u092a-\u0930-\u092a\u0924-\u0928\u0939-\u0939-\u0938\u0915\u0924":
    {
      title:
        "\u092a\u094d\u0930\u0936\u094d\u0928 : \u0915\u093c\u094d\u092f\u093e \u092c\u093f\u0928\u093e \u0917\u0941\u0930\u0942 \u0915\u093f\u092f\u0947 \u0908\u0936\u094d\u0935\u0930 \u0915\u093e \u0928\u093e\u092e \u091c\u092a\u0928\u0947\u0902 \u0938\u0947 \u0905\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0909\u092a\u0932\u092c\u094d\u0927\u093f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0928\u0939\u0940\u0902 \u0939\u094b \u0938\u0915\u0924\u0940?",
      date: "Jul 31, 2025",
      image: img("blog-chanting-guru-hi.png"),
      content: [
        "\u0908\u0936\u094d\u0935\u0930 \u0915\u093e \u0928\u093e\u092e \u091c\u092a \u092a\u094d\u0930\u0917\u0924\u093f \u0915\u0940 \u0926\u093f\u0936\u093e \u092e\u0947\u0902 \u0932\u0947 \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948, \u0932\u0947\u0915\u093f\u0928 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u092d\u0915\u094d\u0924\u093f \u0915\u094b \u0917\u0939\u0930\u093e\u0924\u093e \u0939\u0948 \u0914\u0930 \u0938\u091a\u094d\u091a\u0940 \u0938\u093f\u0926\u094d\u0927\u093f \u0938\u0941\u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
        "\u092d\u0917\u0935\u0926\u094d \u0917\u0940\u0924\u093e \u092e\u0947\u0902 \u0917\u0941\u0930\u0941 \u0915\u0940 \u092e\u0939\u0924\u094d\u0924\u093e \u092c\u093e\u0930-\u092c\u093e\u0930 \u0930\u0947\u0916\u093e\u0902\u0915\u093f\u0924 \u0915\u0940 \u0917\u0908 \u0939\u0948\u0964 \u0917\u0941\u0930\u0941 \u0935\u0939 \u0939\u0948 \u091c\u094b \u0905\u0902\u0927\u0915\u093e\u0930 \u0938\u0947 \u092a\u094d\u0930\u0915\u093e\u0936 \u0915\u0940 \u0913\u0930 \u0932\u0947 \u091c\u093e\u0924\u093e \u0939\u0948\u0964",
        "\u0928\u093e\u092e \u091c\u092a \u090f\u0915 \u0936\u0915\u094d\u0924\u093f\u0936\u093e\u0932\u0940 \u0938\u093e\u0927\u0928\u093e \u0939\u0948, \u092a\u0930\u0902\u0924\u0941 \u0917\u0941\u0930\u0941 \u0915\u0947 \u092c\u093f\u0928\u093e \u0938\u093e\u0927\u0915 \u092e\u093e\u0930\u094d\u0917 \u092e\u0947\u0902 \u092d\u091f\u0915 \u0938\u0915\u0924\u093e \u0939\u0948\u0964 \u0917\u0941\u0930\u0941 \u0915\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0938\u093e\u0927\u0928\u093e \u0915\u094b \u0938\u0939\u0940 \u0926\u093f\u0936\u093e \u0926\u0947\u0924\u093e \u0939\u0948 \u0914\u0930 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u092f\u093e\u0924\u094d\u0930\u093e \u0915\u094b \u0938\u0930\u0932 \u092c\u0928\u093e\u0924\u093e \u0939\u0948\u0964",
      ],
    },
  "\u0935-\u0937\u092f-\u0906\u0927-\u092f-\u0924-\u092e-\u0915-\u092a-\u0930\u0917\u0924-\u0915-\u0932-\u090f-\u092e\u0928-\u0915-\u0935-\u0915-\u0930-\u0915-\u0915-\u0938-\u0926-\u0930-\u0915\u0930":
    {
      title:
        "\u0935\u093f\u0937\u092f : \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u092a\u094d\u0930\u0917\u0924\u093f \u0915\u0947 \u0932\u093f\u090f \u092e\u0928 \u0915\u0947 \u0935\u093f\u0915\u093e\u0930\u094b\u0902 \u0915\u094b \u0915\u0948\u0938\u0947 \u0926\u0942\u0930 \u0915\u0930\u0947\u0902?",
      date: "Jul 31, 2025",
      image: img("blog-man-ke-vikar.png"),
      content: [
        "\u0905\u0902\u0924\u0903\u0915\u0930\u0923 \u0915\u094b \u0936\u0941\u0926\u094d\u0927 \u0915\u093f\u090f \u092c\u093f\u0928\u093e \u090a\u0901\u091a\u0940 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u0909\u092a\u0932\u092c\u094d\u0927\u093f \u0914\u0930 \u0908\u0936\u094d\u0935\u0930 \u0926\u0930\u094d\u0936\u0928 \u0905\u0938\u0902\u092d\u0935 \u0939\u0948\u0964",
        "\u092d\u0917\u0935\u0926\u094d \u0917\u0940\u0924\u093e \u092e\u0947\u0902 \u0915\u0939\u093e \u0917\u092f\u093e \u0939\u0948 \u0915\u093f \u092e\u0928 \u0915\u0947 \u0935\u093f\u0915\u093e\u0930 \u2014 \u0915\u093e\u092e, \u0915\u094d\u0930\u094b\u0927, \u0932\u094b\u092d, \u092e\u094b\u0939, \u092e\u0926, \u092e\u093e\u0924\u094d\u0938\u0930\u094d\u092f \u2014 \u092f\u0947 \u0938\u092d\u0940 \u0906\u0927\u094d\u092f\u093e\u0924\u094d\u092e\u093f\u0915 \u092a\u094d\u0930\u0917\u0924\u093f \u092e\u0947\u0902 \u092c\u093e\u0927\u0915 \u0939\u0948\u0902\u0964",
        "\u0907\u0928 \u0935\u093f\u0915\u093e\u0930\u094b\u0902 \u0915\u094b \u0926\u0942\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0906\u0924\u094d\u092e-\u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923, \u0927\u094d\u092f\u093e\u0928, \u0914\u0930 \u0938\u0924\u094d\u0938\u0902\u0917 \u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948\u0964 \u091c\u092c \u0939\u092e \u0905\u092a\u0928\u0947 \u092e\u0928 \u0915\u094b \u0936\u0941\u0926\u094d\u0927 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u0924\u092c \u0908\u0936\u094d\u0935\u0930 \u0926\u0930\u094d\u0936\u0928 \u0938\u0902\u092d\u0935 \u0939\u094b\u0924\u093e \u0939\u0948\u0964",
      ],
    },
  "how-to-overcome-acute-despondency": {
    bilingual: true,
    titleEn: "How to Overcome Acute Despondency",
    titleHi: "गहन विषाद से मुक्ति कैसे मिले?",
    date: "May 23, 2026",
    imageEn: img("qa-acute-despondency-en.jpeg"),
    imageHi: img("qa-acute-despondency-hi.jpeg"),
    contentEn: [
      "@@question@@Just as Arjuna's despondency in the Yoga of Despair made him say, \"I shall not fight,\" causing him to cast aside his bow and sit down on the battlefield, and no argument seemed capable of bringing him out of that depression, similarly we too sometimes become overwhelmed by such deep sorrow and dejection that no inspiration to act remains within us. At such a time, what should we do so that the mind may emerge from that most terrible mental state, and the soul, bound by the deluding power of material nature, may become free from the bondage of the body and lead it back toward the right direction?",
      "@@answer@@Your question has three parts.",
      "The first part is not really a question, but rather an observation or statement. You have said that in a state of despair Arjuna laid down his bow, declaring, \"I shall not fight,\" and sat down, while no reasoning seemed capable of bringing him out of that depression.",
      "The second part is your actual question:\nSometimes such deep sorrow and despondency fill the mind that no motivation, no reasoning, and no effort seem able to remove it. At such a time, what should we do so that the mind may emerge from that dreadful psychological condition?",
      "The third question is this: how can the soul, bound by the deluding power of material nature, become free from bodily bondage and once again guide \"it\" toward the right direction?",
      "@@section@@Let us begin with the first part.",
      "Arjuna certainly fell into despair, but he also emerged completely out of it. Through the teachings of Lord Krishna, he attained a knowledge that utterly destroyed his despondency. Toward the end of the Gita, this is clearly stated:",
      "@@shloka@@Naṣṭo mohaḥ smṛtir labdhā tvat-prasādān mayācyuta;\nSthito'smi gata-sandehaḥ kariṣye vacanaṁ tava.\n(Bhagavad Gita 18.73)",
      "@@meaning@@\"O Achyuta! By Your grace my delusion has been destroyed, my memory has been restored, I now stand free from doubt, and I shall act according to Your word.\"",
      "This itself contains the answer to your question.",
      "Just as Arjuna became free from despair through the wisdom of the Gita, so too can any human being free himself from despondency by listening to, understanding, and assimilating the teachings of the Bhagavad Gita. This freedom is not merely a temporary relief from one isolated sorrow. Gradually, it generates within a person such mental and spiritual strength that he begins to rise above all forms of despair in life.",
      "Even if despondency arises again due to some special circumstance, contemplation upon the Gita restores balance once more.",
      "That is why the wisdom of the Gita is not merely something to be read, but something to be deeply internalized. Read the Gita daily. Reflect upon its meaning. Slowly you will experience that your mind begins to move beyond sorrow and wander in inner spiritual bliss.",
      "@@section@@Now let us come to your third question.",
      "Your question has been expressed somewhat roughly. You said that the soul should become free from bodily bondage and then guide \"it\" in the right direction. The question naturally arises: whom do you mean by \"it\"? The mind? The sorrow-stricken personality?",
      "If that is your meaning, then it is important to understand that the soul itself does not actively \"lead\" the mind anywhere. The soul is fundamentally a witness. The active elements are the mind, intellect, and ego. These think, decide, desire, and experience pleasure and pain.",
      "Together, the mind, intellect, and ego constitute the subtle body. All three belong to material nature. In modern language, they form what may be called our \"empirical self\" or psychological personality.",
      "The soul itself neither thinks, nor acts, nor experiences pleasure and pain. In the Gita, Lord Krishna says:",
      "@@shloka@@Prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ;\nAhaṅkāra-vimūḍhātmā kartāham iti manyate.\n(Bhagavad Gita 3.27)",
      "@@meaning@@\"All actions are performed by the qualities of material nature, but one whose mind is deluded by ego imagines himself to be the doer.\"",
      "Our soul remains attached, as if glued by Maya, to this personality made of mind, intellect, and ego. Therefore, we begin to mistake ourselves for what is in reality merely an instrument of material nature.",
      "Hence, if despair is to be destroyed, its treatment must also occur at the level of mind, intellect, and ego. This is precisely what the Bhagavad Gita does. It reconstructs our consciousness. It reorganizes our mental structure.",
      "Gradually, the wisdom of the Gita builds within a person an armor against despair.",
      "@@list@@the armor of detachment,\nthe armor of equanimity,\nthe armor of wisdom.",
      "Then, when the arrows of sorrow, insult, loss, fear, and failure strike the mind, they collide with this armor of knowledge and slide away harmlessly.",
      "The Gita itself calls this equanimity Yoga:",
      "@@shloka@@Samatvaṁ yoga ucyate.\n(Bhagavad Gita 2.48)",
      "Therefore, daily study of the Gita is like adding one more layer to this protective armor every day. Slowly, the armor becomes so strong that the individual becomes inwardly secure. Then he may continue to live amidst sorrows, yet he no longer remains sorrow-stricken.",
      "@@section@@Now finally, there is a fourth point.",
      "Perhaps unintentionally, you touched upon a very profound spiritual truth when you spoke of the soul becoming free from bodily bondage.",
      "This is what is called Moksha, liberation.",
      "When the soul becomes free not only from the gross physical body but also from the subtle body, namely the mind, intellect, and ego, then it abides in its original nature and attains the divine abode of God, the very realm from which it once came before becoming entangled in the cycle of rebirth within this world.",
      "The Bhagavad Gita also imparts the knowledge of this path of liberation and teaches by what means one may transcend the cycle of birth and death.",
      "However, that perhaps was not the principal subject of your question.",
    ],
    contentHi: [
      "@@question@@जैसे अर्जुन का विषाद योग ने उसे \"मैं युद्ध नहीं करूँगा\" कहकर धनुष ज़मीन पर रख कर नीचे बैठा दिया। कोई भी कारण उसे अपने डिप्रेशन से बाहर नहीं निकाल सका वैसे ही हमें भी कभी कभी ऐसा विषाद मन में भर जाता है और कुछ कर सकने की कोई प्रेरणा काम नहीं करती। उस समय हमें क्या करना चाहिए जिससे मन उस सबसे भयानक मनोस्थिति से बाहर निकल आये और प्रकृति की माया की शक्ति के द्वारा जकड़ी हुई आत्मा शरीर के बंधन से निकल कर स्वतंत्र होकर वापिस उसे सही दिशा में ले आये।",
      "@@answer@@आपके प्रश्न के तीन खंड हैं।",
      "पहला खंड वास्तव में प्रश्न नहीं, बल्कि एक विचार या कथन है। आपने कहा है कि विषाद की अवस्था में अर्जुन ने यह कहकर कि \"मैं युद्ध नहीं करूँगा\", अपना धनुष भूमि पर रख दिया और बैठ गया, तथा कोई भी कारण उसे उस डिप्रेशन से बाहर नहीं निकाल सका।",
      "दूसरा खंड आपका वास्तविक प्रश्न है :\nकभी-कभी मन में ऐसा विषाद भर जाता है कि कोई प्रेरणा, कोई तर्क, कोई प्रयास उसे दूर नहीं कर पाता। उस समय हमें क्या करना चाहिए जिससे मन उस भयानक मनःस्थिति से बाहर निकल आए?",
      "तीसरा प्रश्न यह है कि प्रकृति की माया की शक्ति से बँधी हुई आत्मा शरीर के बंधन से मुक्त होकर स्वतंत्र बने और पुनः \"उसे\" सही दिशा में ले जाए।",
      "@@section@@अब हम पहले खंड से आरंभ करते हैं।",
      "अर्जुन विषाद में अवश्य आ गया था, किंतु वह उस विषाद से पूर्णतः बाहर भी निकल गया। भगवान श्रीकृष्ण के उपदेशों से उसे ऐसा ज्ञान प्राप्त हुआ जिसने उसके विषाद का पूर्ण अंत कर दिया। गीता के अंत में यह बात स्पष्ट रूप से कही भी गई है :",
      "@@shloka@@नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत ।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥\n(भगवद्गीता 18.73)",
      "@@meaning@@\"हे अच्युत! आपका अनुग्रह प्राप्त होने से मेरा मोह नष्ट हो गया है, मेरी स्मृति लौट आई है, मैं अब संशयरहित होकर स्थित हूँ और आपके वचनों का पालन करूँगा।\"",
      "यही आपके प्रश्न का भी उत्तर है।",
      "जिस प्रकार अर्जुन गीता के ज्ञान से विषादमुक्त हुआ, उसी प्रकार कोई भी मनुष्य गीता के वचनों को सुनकर, समझकर और आत्मसात करके विषाद से मुक्त हो सकता है। और यह मुक्ति केवल किसी एक दुःख से क्षणिक राहत नहीं देती, बल्कि धीरे-धीरे मनुष्य के भीतर ऐसी मानसिक और आध्यात्मिक शक्ति उत्पन्न करती है कि वह जीवन के समस्त विषादों के ऊपर उठने लगता है।",
      "यदि कभी किसी विशेष कारण से पुनः विषाद उत्पन्न भी हो जाए, तो गीता का चिंतन उसे पुनः संतुलन प्रदान कर देता है।",
      "इसीलिए गीता का ज्ञान केवल पढ़ने की वस्तु नहीं, बल्कि हृदयंगम करने की वस्तु है। गीता को प्रतिदिन पढ़िए, उसके अर्थ पर मनन कीजिए। धीरे-धीरे आप अनुभव करेंगे कि आपका मन विषादों से मुक्त होकर आत्मानंद में विचरण करने लगा है।",
      "@@section@@अब आपके तीसरे प्रश्न पर आते हैं।",
      "आपका प्रश्न थोड़ा अनगढ़ रूप में व्यक्त हुआ है। आपने कहा कि आत्मा शरीर के बंधन से निकलकर स्वतंत्र होकर \"उसे\" सही दिशा में ले जाए। यहाँ प्रश्न उठता है कि \"उसे\" से आपका अभिप्राय किससे है? मन से? विषादग्रस्त व्यक्तित्व से?",
      "यदि यही आपका आशय है, तो यह समझना आवश्यक है कि आत्मा स्वयं मन को कहीं \"ले\" नहीं जाती। आत्मा मूलतः साक्षीस्वरूप है। सक्रिय तत्व मन, बुद्धि और अहंकार हैं। यही सोचते हैं, निर्णय लेते हैं, इच्छाएँ करते हैं, दुख-सुख अनुभव करते हैं।",
      "मन, बुद्धि और अहंकार मिलकर सूक्ष्म शरीर का निर्माण करते हैं। ये तीनों प्रकृति के तत्व हैं। आधुनिक भाषा में कहें तो यही हमारा \"empirical self\" या व्यवहारिक व्यक्तित्व बनाते हैं।",
      "आत्मा स्वयं न सोचती है, न कर्म करती है, न दुख-सुख भोगती है। गीता में भगवान कहते हैं :",
      "@@shloka@@प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः ।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ॥\n(भगवद्गीता 3.27)",
      "@@meaning@@\"सारे कर्म प्रकृति के गुणों द्वारा संपन्न होते हैं, किंतु अहंकार से मोहित मनुष्य स्वयं को कर्ता मान बैठता है।\"",
      "हमारी आत्मा इस मन-बुद्धि-अहंकार से बने व्यक्तित्व के साथ माया के गोंद से चिपकी रहती है। इसी कारण हम स्वयं को वही मानने लगते हैं जो वास्तव में केवल प्रकृति का एक उपकरण है।",
      "अतः यदि विषाद को नष्ट करना है, तो उसका उपचार भी मन, बुद्धि और अहंकार के स्तर पर ही करना होगा। यही कार्य भगवद्गीता करती है। वह हमारे चित्त का पुनर्निर्माण करती है। वह हमारी मानसिक संरचना को पुनः संयोजित करती है।",
      "धीरे-धीरे गीता का ज्ञान मनुष्य के भीतर एक विषाद-रोधी कवच निर्मित करता है।",
      "@@list@@अनासक्ति का कवच\nसमत्व का कवच\nज्ञान का कवच",
      "फिर जीवन के दुःख, अपमान, हानि, भय और असफलताओं के बाण जब उस मन पर आघात करते हैं, तो वे इस ज्ञान-कवच से टकराकर टूट जाते हैं, या फिसलकर निष्प्रभावी हो जाते हैं।",
      "गीता स्वयं इसी समत्व को योग कहती है :",
      "@@shloka@@समत्वं योग उच्यते\n(भगवद्गीता 2.48)",
      "अतः प्रतिदिन गीता का अध्ययन ऐसा है मानो प्रतिदिन इस कवच की एक नई परत अपने ऊपर चढ़ाना। धीरे-धीरे यह कवच इतना सुदृढ़ हो जाता है कि मनुष्य भीतर से सुरक्षित हो जाता है। तब वह विषादों के बीच रहते हुए भी विषादग्रस्त नहीं रहता।",
      "@@section@@अब अंत में एक चौथी बात।",
      "आपने अनायास ही एक अत्यंत गहरे आध्यात्मिक सत्य को छू लिया। आपने कहा कि आत्मा शरीर के बंधन से निकलकर स्वतंत्र हो जाए।",
      "वास्तव में इसी को मोक्ष कहते हैं।",
      "जब आत्मा केवल स्थूल शरीर से ही नहीं, बल्कि सूक्ष्म शरीर अर्थात् मन, बुद्धि और अहंकार से भी मुक्त हो जाती है, तब वह अपने मूल स्वरूप में स्थित होकर परमात्मा के धाम को प्राप्त होती है। वही धाम जहाँ से वह इस संसार में आई थी और पुनर्जन्म के चक्र में बँध गई थी।",
      "भगवद्गीता इसी मोक्षमार्ग का भी ज्ञान देती है कि मनुष्य किन उपायों से जन्म-मृत्यु के चक्र से ऊपर उठ सकता है।",
      "किंतु संभवतः वह आपके प्रश्न का मुख्य विषय नहीं था।",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts[decodeURIComponent(slug)];
  if (!post) return { title: "Blog Post" };
  const title = isBilingual(post) ? post.titleEn : post.title;
  return { title };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts[decodeURIComponent(slug)];

  if (!post) {
    return (
      <section className="section-padding py-28 text-center">
        <h1 className="text-3xl font-bold text-dark-brown">Post Not Found</h1>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-6 text-saffron hover:text-saffron-dark font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </section>
    );
  }

  if (isBilingual(post)) {
    return <BilingualPost post={post} />;
  }

  return (
    <>
      <section className="section-padding pt-28 pb-16 md:pt-36 md:pb-20 bg-cream">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-saffron hover:text-saffron-dark font-semibold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight max-w-4xl">
          {post.title}
        </h1>

        {post.date && (
          <div className="flex items-center gap-2 mt-5 text-text-muted text-sm">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
        )}
      </section>

      {post.image && (
        <div className="section-padding pb-0">
          <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <section className="section-padding py-12 md:py-16">
        <article className="prose prose-lg max-w-4xl text-text-secondary leading-relaxed space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </section>
    </>
  );
}

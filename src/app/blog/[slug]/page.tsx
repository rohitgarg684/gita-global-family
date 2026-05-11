import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { img } from "@/lib/image-url";

const blogPosts: Record<
  string,
  { title: string; date?: string; image?: string; content: string[] }
> = {
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
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts[decodeURIComponent(slug)];
  return {
    title: post?.title ?? "Blog Post",
  };
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

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";

const blogPosts: Record<string, { title: string; date?: string }> = {
  "व-षय-आध-य-त-म-क-प-रगत-क-ल-ए-मन-क-व-क-र-क-क-स-द-र-कर": {
    title:
      "विषय : आध्यात्मिक प्रगति के लिए मन के विकारों को कैसे दूर करें?",
    date: "Jul 31, 2025",
  },
  "प-रश-न-क-य-ब-न-ग-र-क-य-ईश-वर-क-न-म-जपन-स-अध-य-त-म-क-उपलब-ध-प-र-प-त-नह-ह-सकत":
    {
      title:
        "प्रश्न : क़्या बिना गुरू किये ईश्वर का नाम जपनें से अध्यात्मिक उपलब्धि प्राप्त नहीं हो सकती?",
      date: "Jul 31, 2025",
    },
  "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru":
    {
      title:
        "Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
      date: "Jul 31, 2025",
    },
  "question-rajesh-k-dubey-how-can-mental-stress-be-healed-through-spirituality":
    {
      title: "How can mental stress be healed through spirituality?",
      date: "Jul 31, 2025",
    },
  "karmanye-vadhikaraste": {
    title: "Karmanye Vadhikaraste",
  },
  "the-benefits-of-yoga-for-mental-health": {
    title: "The Benefits of Yoga for Mental Health",
  },
  "आत-म-ज-गर-कत-स-ज-ग-ए-अपन-अ-दर-न-सपर-व": {
    title: "आत्म जागृत करते सूर्य एवं अपने अंदर निष्पर्व",
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts[slug];
  return {
    title: post?.title ?? "Blog Post",
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts[slug];

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

      <section className="section-padding py-12 md:py-16">
        <article className="prose prose-lg max-w-4xl text-text-secondary leading-relaxed space-y-6">
          <p>
            The teachings of the Bhagavad Gita offer profound guidance for
            navigating life&apos;s challenges with wisdom and equanimity. In this
            article, we explore the depth of this timeless scripture and its
            relevance to modern living.
          </p>
          <p>
            The Gita teaches us that true knowledge comes from understanding the
            nature of the self, the world, and the divine. Through disciplined
            practice, selfless service, and devotion, one can attain lasting
            peace and fulfillment.
          </p>
          <p>
            As Lord Krishna guides Arjuna on the battlefield of Kurukshetra,
            these teachings illuminate the path for every seeker — encouraging
            us to act with righteousness, surrender the fruits of our actions,
            and cultivate unwavering faith in the divine plan.
          </p>
        </article>
      </section>
    </>
  );
}

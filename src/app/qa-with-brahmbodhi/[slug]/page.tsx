import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { qaItems, type QAItem } from "@/data/qa-brahmbodhi";
import { bhagavadDharmaQA } from "@/data/qa-bhagavad-dharma";
import { img } from "@/lib/image-url";
import QADetailView from "./QADetailView";

const allItems: QAItem[] = [...qaItems, ...bhagavadDharmaQA];

function findItem(slug: string): QAItem | undefined {
  const decoded = decodeURIComponent(slug);
  return allItems.find((q) => q.id === decoded);
}

export function generateStaticParams() {
  return allItems.map((q) => ({ slug: q.id }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const item = findItem(slug);
  if (!item) {
    return { title: "Question Not Found" };
  }

  const title = item.question;
  const description = item.preview;
  const imageFile = item.image?.en ?? item.coverImage;
  const imageUrl = imageFile ? img(imageFile) : img("og-image.jpeg");
  const path = `/qa-with-brahmbodhi/${item.id}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      siteName: "Gita Global Family",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: item.image?.alt?.en ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function QADetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const item = findItem(slug);

  if (!item) {
    return (
      <section className="section-padding py-28 text-center">
        <h1 className="text-3xl font-bold text-dark-brown">Question Not Found</h1>
        <Link
          href="/qa-with-brahmbodhi"
          className="inline-flex items-center gap-2 mt-6 text-saffron hover:text-saffron-dark font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Q&A
        </Link>
      </section>
    );
  }

  return <QADetailView item={item} />;
}

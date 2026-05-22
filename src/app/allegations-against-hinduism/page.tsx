"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Scale,
  ShieldQuestion,
  ScrollText,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const essays = [
  {
    slug: "islam",
    titleEn: "An Essay on Islam",
    titleHi: "इस्लाम पर निबंध",
    description:
      "A dispassionate examination of Islam's doctrines and practices — its rapid spread, its scriptural sources, its treatment of non-believers, women, and dissenters — and what these mean for Hindu civilization.",
    descriptionHi:
      "इस्लाम के सिद्धांतों और व्यवहार की निष्पक्ष समीक्षा — इसका विस्तार, इसके धर्मग्रंथ, ग़ैर-मुस्लिमों, स्त्रियों और मतभेद रखने वालों के साथ इसका व्यवहार — और हिंदू सभ्यता पर इनका प्रभाव।",
    sectionCount: 26,
    available: true,
    icon: ScrollText,
  },
  {
    slug: "christianity",
    titleEn: "An Essay on Christianity",
    titleHi: "ईसाइयत पर निबंध",
    description:
      "An honest review of Christian theology, its historical conversion campaigns, and the philosophical assumptions underlying its claim to exclusive truth.",
    descriptionHi:
      "ईसाई धर्मशास्त्र, इसके ऐतिहासिक धर्मांतरण अभियानों और इसके 'विशिष्ट सत्य' के दावे की निष्पक्ष समीक्षा।",
    sectionCount: 0,
    available: false,
    icon: ScrollText,
  },
];

export default function AllegationsLandingPage() {
  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-maroon via-dark-brown to-maroon">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_30%_20%,_rgba(232,119,46,0.5)_0%,_transparent_45%),radial-gradient(circle_at_70%_75%,_rgba(201,168,76,0.4)_0%,_transparent_50%)]" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            <Scale className="w-4 h-4" />
            Dispassionate Inquiry · निष्पक्ष विवेचन
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Allegations Against Hinduism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            For centuries, Sanatan Dharma has been the target of allegations
            from other world religions — that it is polytheistic, casteist,
            idolatrous, or backwards. This series examines those critiques
            squarely, and in turn looks back at the doctrines and conduct of
            the religions that make them. Each essay is available in English
            and हिंदी.
          </motion.p>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-saffron font-semibold text-xs uppercase tracking-wider">
              <ShieldQuestion className="w-4 h-4" />
              The Essays
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-dark-brown">
              Examined religions
            </h2>
            <p className="mt-3 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Each essay walks through the founding, scripture, and practice
              of a religion that has historically critiqued Hinduism — broken
              into clearly numbered sections so you can read what interests
              you, in the language you prefer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essays.map((essay) => {
              const Icon = essay.icon;
              const card = (
                <div className="group h-full bg-white rounded-2xl border border-cream-dark/40 shadow-sm hover:shadow-lg hover:border-saffron/40 transition-all overflow-hidden p-7 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-saffron" />
                    </div>
                    {essay.available ? (
                      <span className="text-xs font-semibold uppercase tracking-wider text-saffron bg-saffron/10 px-3 py-1 rounded-full">
                        {essay.sectionCount} sections
                      </span>
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted bg-cream px-3 py-1 rounded-full">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-dark-brown">
                    {essay.titleEn}
                  </h3>
                  <p className="text-saffron font-semibold italic mt-1 text-lg">
                    {essay.titleHi}
                  </p>
                  <p className="mt-4 text-text-secondary leading-relaxed text-sm md:text-base">
                    {essay.description}
                  </p>

                  <div className="mt-auto pt-6">
                    {essay.available ? (
                      <span className="inline-flex items-center gap-2 text-saffron font-semibold text-sm group-hover:gap-3 transition-all">
                        Read the essay
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-text-muted font-semibold text-sm">
                        In preparation
                      </span>
                    )}
                  </div>
                </div>
              );

              return essay.available ? (
                <motion.div key={essay.slug} {...fadeInUp}>
                  <Link href={`/allegations-against-hinduism/${essay.slug}`}>
                    {card}
                  </Link>
                </motion.div>
              ) : (
                <motion.div key={essay.slug} {...fadeInUp} className="opacity-70">
                  {card}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-flex items-center gap-2 text-saffron font-semibold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Source
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-dark-brown">
              भगवद्धर्म प्रकाश · Bhagavad Dharma Prakash
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-base md:text-lg">
              These essays are drawn from <em>Bhagavad Dharma Prakash</em>, a
              comprehensive comparative study of the world&rsquo;s major
              religions written from the standpoint of Sanatan Dharma. The
              full work also presents a dispassionate review of Hindu
              traditions themselves.
            </p>
            <Link
              href="/gita-publications"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-md text-sm"
            >
              Explore Publications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

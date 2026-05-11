"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Sparkles,
  Heart,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const whyMatters = [
  {
    icon: BookOpen,
    title: "Lived Experience",
    description:
      "Bring the Bhagavad Gita's teachings to life through immersive discourses, workshops, and community service.",
  },
  {
    icon: Users,
    title: "Spiritual Connections",
    description:
      "Foster spiritual connections by gathering seekers to learn, reflect, and grow together.",
  },
  {
    icon: Sparkles,
    title: "Empower Action",
    description:
      "Translate wisdom into real-world skills — leadership, mindfulness, and seva.",
  },
  {
    icon: Heart,
    title: "Preserve Tradition",
    description:
      "Making ancient tradition accessible to all ages and backgrounds through modern formats.",
  },
];

interface EventItem {
  image: string;
  title: string;
  description: string;
}

const londonEvents: EventItem[] = [
  {
    image: img("event-london-1.jpeg"),
    title: "Inter-Faith Dialogue, Wimbledon",
    description:
      "At an inter-faith dialogue programme at Holy Trinity Church, Wimbledon, London, UK.",
  },
  {
    image: img("event-london-2.jpeg"),
    title: "Dartford Temple Outreach",
    description:
      "Addressing school children and their parents together at Dartford Temple, London. First session: The basics of Sanatan Dharma. Second session: Study skills, memory skills.",
  },
  {
    image: img("event-london-3.png"),
    title: "Brahma Kumaris, London",
    description:
      "Outside the World Spiritual University of the Brahma Kumaris, London.",
  },
  {
    image: img("event-london-4.jpeg"),
    title: "World Spiritual University Team",
    description:
      "With the core team members of London Brahma Kumaris Centre, called \"World Spiritual University, London\". To the left of Swami Brahm Bodhi is Sister Jaimini, the Chief of the Centre.",
  },
  {
    image: img("event-london-5.jpeg"),
    title: "Christmas Celebrations",
    description:
      "Christmas celebrations fostering interfaith harmony and community spirit in London.",
  },
  {
    image: img("event-london-6.jpg"),
    title: "Nehru Centre Evening, London",
    description:
      "A memorable evening unfolded at the Nehru Centre, London, during a cultural programme celebrating Bhagavad Gita's universal wisdom.",
  },
  {
    image: img("event-london-7.jpg"),
    title: "Nehru Centre Discourse",
    description:
      "Continuing the enriching discourse at the Nehru Centre, London — bridging ancient wisdom with modern life.",
  },
];

const biharEvents: EventItem[] = [
  {
    image: img("event-bihar-1.jpeg"),
    title: "Bihar Leadership Dialogue on Sanatan Nidhi",
    description:
      "Met Chief Minister of Bihar, Samrat Chaudhary, and Trust Board Chairman Ranveer Nandan; discussed Act, temple revival, pilot project, and wider mahant engagement.",
  },
  {
    image: img("event-bihar-2.jpeg"),
    title: "Sanatan Seva Nidhi Bihar Dialogue",
    description:
      "Met Deputy Chief Minister of Bihar, Vijay Kumar Choudhary; discussed Sanatan Seva Nidhi Act, highlighting transparency, temple revival, dharmacharya training, and inclusive strengthening of Sanatan civilisation.",
  },
  {
    image: img("event-bihar-3.jpeg"),
    title: "Punaura Dham Dialogue",
    description:
      "Meeting at Punaura Dham discusses Hindu unity, shared primary scriptures, and Sanatan Seva Nidhi Act, with consensus emerging and further deliberations planned for final endorsement.",
  },
  {
    image: img("event-bihar-4.jpeg"),
    title: "Janakpur Dialogue on Sanatan Law",
    description:
      "Meeting Janaki Mandir mahant in Janakpur, discussed Sanatan Seva Nidhi law; initial resistance noted, but lawyer engagement created a constructive path forward for collaboration.",
  },
  {
    image: img("event-bihar-5.png"),
    title: "Ram Mandir Priest, Janakpur",
    description:
      "Met devoted Ram Mandir priest in Janakpur; discussed devotion and knowledge, encouraged scriptural study, highlighting need for wisdom alongside bhakti for guiding devotees responsibly.",
  },
  {
    image: img("event-bihar-6.jpeg"),
    title: "Meeting Jagadguru Rambhadracharya",
    description:
      "Met Jagadguru Rambhadracharya in Sitamarhi; discussed Sanatan unity, Act support, and multi-sampradaya collaboration, receiving his encouragement, blessings, and commitment toward collective strengthening of Dharma.",
  },
  {
    image: img("event-bihar-7.jpeg"),
    title: "Ideal 40 Team, Siwan",
    description:
      "In Siwan, after meeting Jagadguru Rambhadracharya, discussed temple empowerment pilot with Ideal 40 team, aiming outreach to 1000 families and nurture future spiritual volunteers.",
  },
];

function EventCard({ event, index }: { event: EventItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-dark-brown leading-snug group-hover:text-saffron transition-colors">
          {event.title}
        </h3>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-4">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image
          src={img("event-hero.png")}
          alt="Gita Global Family Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Discourses &bull; Workshops &bull; Seva
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Bringing the Bhagavad Gita&apos;s teachings to life through
            immersive discourses, interfaith dialogues, and community service
            — across the UK and India.
          </motion.p>
        </div>
      </section>

      {/* Why Events Matter */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Why Our Events Matter" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyMatters.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center bg-white rounded-2xl p-7 border border-cream-dark/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-saffron/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-base font-semibold text-dark-brown mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          {...fadeInUp}
          className="max-w-3xl mx-auto mt-14 text-center"
        >
          <p className="text-lg md:text-xl italic text-dark-brown/80 leading-relaxed">
            &ldquo;When souls unite in pursuit of truth, every satsang becomes
            a stepping stone toward collective awakening.&rdquo;
          </p>
        </motion.blockquote>
      </section>

      {/* London Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            London, United Kingdom
          </span>
        </div>
        <SectionHeading
          title="Events in London, UK"
          subtitle="Interfaith dialogues, discourses, and cultural programmes across London — from the Nehru Centre to temples and the Brahma Kumaris World Spiritual University."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {londonEvents.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* Bihar / India Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Bihar &amp; Beyond
          </span>
        </div>
        <SectionHeading
          title="Events in India, Bihar"
          subtitle="Dialogues on the Sanatan Seva Nidhi Act with Chief Ministers, Jagadgurus, temple mahants, and community leaders — building consensus for the strengthening of Sanatan Dharma."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {biharEvents.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("event-hero.png")}
          alt="Join our events"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Join Us at Our Next Event
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Whether you&apos;re in London or India, there&apos;s a place for
              you in our community. Connect with like-minded seekers and
              experience the transformative power of the Gita&apos;s teachings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30"
              >
                Join the Family
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

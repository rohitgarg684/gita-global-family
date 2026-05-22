"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Sparkles,
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
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
  images: string[];
  title: string;
  description: string;
}

const londonEvents: EventItem[] = [
  {
    images: [img("event-london-1.jpeg")],
    title: "Inter-Faith Dialogue, Wimbledon",
    description:
      "At an inter-faith dialogue programme at Holy Trinity Church, Wimbledon, London, UK.",
  },
  {
    images: [img("event-london-2.jpeg")],
    title: "Dartford Temple Outreach",
    description:
      "Addressing school children and their parents together at Dartford Temple, London. First session: The basics of Sanatan Dharma. Second session: Study skills, memory skills.",
  },
  {
    images: [img("event-london-3.png")],
    title: "Brahma Kumaris, London",
    description:
      "Outside the World Spiritual University of the Brahma Kumaris, London.",
  },
  {
    images: [img("event-london-4.jpeg")],
    title: "World Spiritual University Team",
    description:
      "With the core team members of London Brahma Kumaris Centre, called \"World Spiritual University, London\". To the left of Swami Brahm Bodhi is Sister Jaimini, the Chief of the Centre.",
  },
  {
    images: [img("event-london-5.jpeg")],
    title: "Christmas Celebrations",
    description:
      "Christmas celebrations fostering interfaith harmony and community spirit in London.",
  },
  {
    images: [img("event-london-6.jpg")],
    title: "Nehru Centre Evening, London",
    description:
      "A memorable evening unfolded at the Nehru Centre, London, during a cultural programme celebrating Bhagavad Gita's universal wisdom.",
  },
  {
    images: [img("event-london-7.jpg")],
    title: "Nehru Centre Discourse",
    description:
      "Continuing the enriching discourse at the Nehru Centre, London — bridging ancient wisdom with modern life.",
  },
];

const delhiEvents: EventItem[] = [
  {
    images: [img("event-delhi-hindu-mahasabha-1.jpeg")],
    title: "Dialogue with the Akhil Bharat Hindu Mahasabha",
    description:
      "Held a detailed and substantive discussion with Shri Munna Sharma Ji, current President of the Akhil Bharat Hindu Mahasabha, at the organisation's office on Mandir Marg, Delhi, on the draft of the Sanatan Seva Nidhi Act. Both the summary and the full draft of the proposed legislation were presented to him, and his initial response was warm and encouraging.\n\nHe offered several thoughtful and constructive suggestions, and generously shared the contacts of individuals who could help carry this initiative — and the broader conversation around it — forward.\n\nThe Akhil Bharat Hindu Mahasabha is among the oldest Hindu organisations in the country. It was founded in 1915 by Mahamana Madan Mohan Malaviya, who convened a gathering of various Hindu organisations in Haridwar and brought many of them onto a common platform. Its past presidents include towering figures such as Madan Mohan Malaviya, Vinayak Damodar Savarkar, Lala Lajpat Rai, and Bharati Krishna Tirtha.\n\nToday, once again, numerous independent Hindu organisations are working in different directions. What is needed is for them to function in a coordinated manner under a broad, shared, universal Sanatan platform dedicated to larger civilisational interests. Only then can the major objectives concerning society, culture, and Dharma be pursued in a more organised, effective, and impactful way.",
  },
  {
    images: [
      img("event-delhi-bsmp-1.jpeg"),
      img("event-delhi-bsmp-2.jpeg"),
      img("event-delhi-bsmp-3.jpeg"),
    ],
    title: "BSMP Sant Sammelan, Delhi",
    description:
      "Attended a congregation of the Bharatiya Sant Maha Parishad (BSMP) in Delhi, bringing together saints — mostly sannyasis — from across India and abroad. The gathering was led primarily by sannyasis of the Shankar tradition from South India, and was a very well-organised programme. Owing to other engagements in Delhi, I could attend only for about an hour, during which several presentations were made.\n\nThe organisers expressed their aspiration to bring all faiths of Indian origin onto one common platform. They also spoke of establishing a URC — a Uniform Ritual Code — for all Indian faiths, along with five common samskaras for all. Both objectives, however, appear difficult to realise for several reasons. Notably, the organisers themselves refrained from specifying what the proposed common rituals or the five common samskaras would actually be. Yet, there is value even in sitting together and dreaming collectively.\n\nI left some booklets on the Sanatan Seva Nidhi Act with the volunteers, requesting that they be passed on to the leaders of the movement, especially the Swami from Sri Kailash Ashram, Bengaluru. Since I arrived late and had to leave early, there was no opportunity for any detailed personal interaction with the leaders. The event, however, has at least made it easier to connect with them later, over the phone or in person.\n\nThe absence of Vaishnava saints — especially some of the more widely known ones — was noticeable. The leading figures of the Shankaracharya tradition, including the present Shankaracharyas themselves, were also not present.\n\nThe conference underlined one of the principal fault lines within contemporary Hindu society: the limited connectivity and cohesiveness among the leading figures of different streams of Hindu spirituality. One major reason for this, among others, is the absence of a common programme for the broader Sanatan Dharma that would carry genuine meaning and relevance in contemporary India and the modern world.",
  },
];

const biharEvents: EventItem[] = [
  {
    images: [img("event-bihar-1.jpeg")],
    title: "Meeting Chief Minister of Bihar",
    description:
      "Met Chief Minister of Bihar, Shri Samrat Chaudhary, to present the Sanatan Seva Nidhi Act — a proposed legislation for the protection and empowerment of Sanatan Dharma, already submitted to the Central Government. The Chief Minister listened with keen interest and assured his support for reviewing the Act and advancing it further.",
  },
  {
    images: [img("event-bihar-7.jpeg")],
    title: "Meeting Deputy Chief Minister of Bihar",
    description:
      "Met Deputy Chief Minister of Bihar, Shri Vijay Kumar Choudhary, to discuss the Sanatan Seva Nidhi Act. The dialogue covered key provisions including temple revitalisation, training of Adhyatma-Acharyas (spiritual preceptors), and the creation of an organised system of giving for the strengthening of Sanatan Dharma.",
  },
  {
    images: [img("event-bihar-5.png")],
    title: "Trust Board Dialogue, Bihar",
    description:
      "Met Shri Ranveer Nandan, Chairman of the Bihar Religious Trust Board, which oversees approximately 450 temples and monasteries across the state. Discussed the Sanatan Seva Nidhi Act and the temple empowerment project — revitalising temples as centres of community life and distributing the Bhagavad Gita and Ramkatha to 1,000 Sanatani homes. Shri Nandan offered a temple for the pilot and proposed convening a large assembly of mahants for a formal presentation.",
  },
  {
    images: [img("event-bihar-2.jpeg")],
    title: "Punaura Dham Dialogue",
    description:
      "Met Senior Mahant Shri Kaushal Kishore Das Ji Maharaj and his successor Shri Ramkumar Das Ji at Punaura Dham, the manifestation site of Mother Janaki near Sitamarhi. Discussed adopting the Bhagavad Gita and the Vedas as shared primary scriptures across all sects, and the provisions of the Sanatan Seva Nidhi Act. Preliminary agreement was reached on both subjects.",
  },
  {
    images: [img("event-bihar-10.jpeg")],
    title: "Meeting Jagadguru Rambhadracharya",
    description:
      "Met Jagadguru Rambhadracharya in Sitamarhi to discuss the Sanatan Seva Nidhi Act and the need for unity across all sampradayas. Received his encouragement, blessings, and commitment toward the collective strengthening of Dharma.",
  },
  {
    images: [img("event-bihar-6.jpeg")],
    title: "Ideal 40 Team, Siwan",
    description:
      "Held an interactive session on spirituality with approximately 40 students — carefully selected Class 9 students from underprivileged backgrounds, including Muslim girls — coached free of cost by Dr Rajneesh Verma's Ideal 40 initiative. Discussed a temple empowerment pilot to distribute curated editions of the Bhagavad Gita and Ramkatha to 1,000 families in the district.",
  },
  {
    images: [img("event-bihar-8.jpeg")],
    title: "Siwan Community Mobilisation",
    description:
      "A series of engagements with prominent citizens and intellectuals of Siwan — including Dr Rajneesh Verma, Shri Shailendra Singh (former banker), Shri Ravindra Pathak (Professor, DAV College), and Shri Bharat Bhushan (social worker) — to build a dedicated volunteer network for the Sanatan Seva Nidhi Act campaign and the temple empowerment initiative. The draft Act received strong endorsement from all participants.",
  },
];

const nepalEvents: EventItem[] = [
  {
    images: [img("event-nepal-1.jpeg")],
    title: "Janakpur Dialogue on Sanatan Seva Nidhi Act",
    description:
      "Met the chief Mahant of Janaki Mandir in Janakpur, Nepal — the historic land of King Janak where Mother Sita was raised. Discussed the Sanatan Seva Nidhi Act and its relevance for Nepal. Lawyer devotees present offered to review the draft and facilitate further dialogue, opening a promising path for continued engagement.",
  },
  {
    images: [img("event-bihar-4.jpeg")],
    title: "Ram Mandir Priest, Janakpur",
    description:
      "A moving encounter with the devoted priest of Ram Mandir in Janakpur — a man of overflowing bhakti, raised in the temple since childhood. A heartfelt exchange on devotion and knowledge followed, reflecting the Gita's teaching that the wise devotee stands highest, and that a priest's calling is to guide seekers through both devotion and scriptural wisdom.",
  },
];

const vrindavanEvents: EventItem[] = [
  {
    images: [img("event-vrindavan-1.jpeg")],
    title: "Saints' Outreach, Vrindavan",
    description:
      "Meeting with Shri Nagari Das of Shergarh and Shri Dashrath Maharaj of Hanuman Tekri Temple marked the launch of the Sanatan Seva Nidhi Act outreach in Vrindavan. Dashrath Maharaj extended full support and facilitated a gathering of select saints who heard the Act's provisions with keen interest, culminating in an invitation to present at a forthcoming Sant Mahasabha.",
  },
  {
    images: [img("event-vrindavan-1.jpeg")],
    title: "Spiritual Dialogues, Vrindavan",
    description:
      "In-depth discussions with renowned Bhagavat Kathakaar Badrish Ji and Shri Govindanand Tirth, one of Vrindavan's most senior and erudite saints, on the provisions of the Sanatan Seva Nidhi Act. Hindi copies of the Act were shared for review and future written endorsement.",
  },
];

const PREVIEW_CHAR_LIMIT = 180;

function getPreview(text: string): { preview: string; needsMore: boolean } {
  if (text.length <= PREVIEW_CHAR_LIMIT) {
    return { preview: text, needsMore: false };
  }
  const slice = text.slice(0, PREVIEW_CHAR_LIMIT);
  const lastSpace = slice.lastIndexOf(" ");
  const preview = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return { preview: preview.trimEnd(), needsMore: true };
}

function EventCard({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: () => void;
}) {
  const { preview, needsMore } = getPreview(event.description);
  const hasMultiple = event.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative h-56 md:h-64 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-saffron"
        aria-label={`Open photos for ${event.title}`}
      >
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {hasMultiple && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 text-white text-xs font-medium backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            {event.images.length} photos
          </span>
        )}
      </button>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-dark-brown leading-snug group-hover:text-saffron transition-colors">
          {event.title}
        </h3>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          {preview}
          {needsMore && (
            <>
              {" "}
              <button
                type="button"
                onClick={onOpen}
                className="text-saffron font-semibold hover:text-saffron-dark transition-colors underline-offset-2 hover:underline"
              >
                Read more
              </button>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}

function EventModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const total = event.images.length;
  const hasMultiple = total > 1;

  const next = useCallback(() => {
    setPhotoIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setPhotoIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultiple) next();
      if (e.key === "ArrowLeft" && hasMultiple) prev();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, hasMultiple, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[260px] md:min-h-[420px]">
          <div className="relative w-full h-[260px] md:h-full">
            <Image
              src={event.images[photoIndex]}
              alt={`${event.title} — photo ${photoIndex + 1}`}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-dark-brown flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-dark-brown flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {event.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPhotoIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === photoIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="md:w-2/5 p-6 md:p-8 overflow-y-auto">
          <h3 className="text-xl md:text-2xl font-bold text-dark-brown leading-snug pr-8">
            {event.title}
          </h3>
          <div className="mt-4 space-y-3 text-sm md:text-[15px] text-text-secondary leading-relaxed">
            {event.description.split("\n").map((para, i) =>
              para.trim() === "" ? null : (
                <p key={i}>{para}</p>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function EventGrid({ events }: { events: EventItem[] }) {
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <EventCard
            key={`${event.title}-${i}`}
            event={event}
            index={i}
            onOpen={() => setActiveEvent(event)}
          />
        ))}
      </div>
      <AnimatePresence>
        {activeEvent && (
          <EventModal
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
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
            — across the UK, India, and Nepal.
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
        <EventGrid events={londonEvents} />
      </section>

      {/* Delhi Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Delhi
          </span>
        </div>
        <SectionHeading
          title="Events in Delhi, India"
          subtitle="Engagements with national-level gatherings of saints and spiritual leaders, building bridges across sampradayas for the cause of a unified, contemporary Sanatan Dharma."
        />
        <EventGrid events={delhiEvents} />
      </section>

      {/* Bihar / India Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Bihar
          </span>
        </div>
        <SectionHeading
          title="Events in Bihar, India"
          subtitle="Dialogues on the Sanatan Seva Nidhi Act with the Chief Minister, Jagadgurus, temple mahants, and community leaders — building consensus for the strengthening of Sanatan Dharma."
        />
        <EventGrid events={biharEvents} />
      </section>

      {/* Nepal Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            Nepal — Janakpur
          </span>
        </div>
        <SectionHeading
          title="Events in Janakpur, Nepal"
          subtitle="Engaging the spiritual leadership of Janakpur — the historic seat of King Janak and the sacred land where Mother Sita was raised — on the Sanatan Seva Nidhi Act and the timeless bond between devotion and wisdom."
        />
        <EventGrid events={nepalEvents} />
      </section>

      {/* Vrindavan Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Vrindavan, Uttar Pradesh
          </span>
        </div>
        <SectionHeading
          title="Sanatan Seva Nidhi Outreach, Vrindavan"
          subtitle="Engaging Vrindavan's revered saints and spiritual leaders to build support for the Sanatan Seva Nidhi Act — from temple mahants to renowned Bhagavat narrators and senior acharyas."
        />
        <EventGrid events={vrindavanEvents} />
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
              Whether you&apos;re in London, India, or Nepal, there&apos;s a
              place for you in our community. Connect with like-minded seekers and
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

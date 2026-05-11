"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Video, Share2, Camera, MessageCircle, Globe, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const youtubeChannels = [
  {
    title: "BrahmBodhi Hindi Official",
    description:
      "Hindi spiritual discourses, Gita teachings, and guided sessions for Hindi-speaking seekers.",
    url: "https://www.youtube.com/@BrahmBodhi_HindiOfficial",
    image: "/images/youtube-1.png",
  },
  {
    title: "BrahmBodhi English Official",
    description:
      "English teachings, spiritual wisdom, and Gita insights for the global community.",
    url: "https://www.youtube.com/@BrahmBodhi_EnglishOfficial",
    image: "/images/youtube-2.png",
  },
];

const socialLinks = [
  {
    icon: Share2,
    title: "Facebook",
    description: "Join our community on Facebook for updates, events, and spiritual discussions.",
    url: "https://www.facebook.com/profile.php?id=61574091111778",
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Camera,
    title: "Instagram",
    description: "Follow us for daily inspiration, quotes, and glimpses of our community activities.",
    url: "https://www.instagram.com/brahmbodhi_official/",
    color: "bg-pink-500/10",
    iconColor: "text-pink-600",
  },
];

export default function NetworkingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Networking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/80 to-dark-brown/50" />
        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Connect With Us
            </h1>
            <p className="mt-5 text-white/90 text-lg leading-relaxed">
              Stay connected with the Gita Global Family through our various
              channels and platforms. Join our growing spiritual community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Join Our Growing Community"
            subtitle="The Gita Global Family is building a worldwide network of seekers, learners, and practitioners committed to spiritual growth and service."
          />
          <motion.p
            {...fadeInUp}
            className="text-text-secondary leading-relaxed text-base md:text-lg"
          >
            Whether you prefer watching insightful videos, joining live
            discussions, or staying updated through social media, we have
            multiple ways for you to connect, learn, and grow with us.
          </motion.p>
        </div>
      </section>

      {/* YouTube Channels */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="YouTube Channels"
          subtitle="Watch spiritual discourses, Gita teachings, and guided sessions on our official channels."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {youtubeChannels.map((channel, i) => (
            <motion.a
              key={channel.title}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/30 hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={channel.image}
                  alt={channel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <Video className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-brown">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {channel.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-red-600">
                  Subscribe Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* WhatsApp Groups */}
      <section className="section-padding py-16 md:py-24 bg-warm-gray">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="WhatsApp Community"
            subtitle="Join our WhatsApp groups for daily spiritual messages, event updates, and community discussions."
          />
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-12 border border-cream-dark/30"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-dark-brown mb-3">
              Join Our WhatsApp Groups
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Connect with fellow seekers, receive daily wisdom, and stay
              updated on upcoming events and programs. Our WhatsApp groups are
              active spaces for spiritual growth and community support.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              Get Invite Link
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Follow Us on Social Media"
          subtitle="Stay inspired with daily posts, community highlights, and event announcements."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30 group"
            >
              <div
                className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
              >
                <social.icon className={`w-7 h-7 ${social.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-2">
                {social.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {social.description}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-saffron group-hover:text-saffron-dark transition-colors">
                Follow Us <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <motion.div
          {...fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-saffron" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-brown mb-4">
            A Global Spiritual Family
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            No matter where you are in the world, you can be part of our
            community. Join us online and experience the transformative power of
            the Gita&apos;s teachings together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}

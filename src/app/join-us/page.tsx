"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  HandHeart,
  Share2,
  BookOpen,
  Send,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DonationButton from "@/components/DonationButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Dedicate your time and skills to support our programs — from teaching and mentoring to organizing community events.",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your generous contributions fund education for underprivileged children, community meals, and spiritual outreach programs.",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    description:
      "Share our mission with friends and family. Follow us on social media and help us reach more people who need guidance.",
  },
  {
    icon: BookOpen,
    title: "Teach",
    description:
      "If you have knowledge of the Gita, yoga, or other spiritual practices, join our team of educators and share wisdom with the world.",
  },
];

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", interest: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Join the Family"
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
            Join the Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Be part of a global movement dedicated to spiritual growth,
            education, and uplifting humanity through the Gita&apos;s wisdom.
          </motion.p>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Ways to Contribute"
          subtitle="There are many ways you can support our mission and make a difference."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-warm-gray rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-cream-dark/30"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-lg font-semibold text-dark-brown mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Volunteer Sign-Up */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-saffron font-semibold text-sm uppercase tracking-wider">
              Volunteer
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-dark-brown leading-tight">
              Lend Your Hands to a Noble Cause
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Whether you can spare a few hours a week or want to commit
              long-term, your contribution matters. Join our volunteer network
              and help us teach, mentor, organise events, and spread the
              timeless teachings of the Bhagavad Gita to communities in need.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-cream-dark/30 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-2">
                  Thank you for signing up!
                </h3>
                <p className="text-text-secondary">
                  We&apos;ll be in touch soon with volunteer opportunities.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-saffron hover:text-saffron-dark font-medium transition-colors"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-dark-brown mb-4">
                  Volunteer Sign-Up
                </h3>
                <div>
                  <label
                    htmlFor="vol-name"
                    className="block text-sm font-medium text-dark-brown mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="vol-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vol-email"
                    className="block text-sm font-medium text-dark-brown mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vol-interest"
                    className="block text-sm font-medium text-dark-brown mb-1.5"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="vol-interest"
                    required
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors"
                  >
                    <option value="">Select an area</option>
                    <option value="teaching">Teaching &amp; Mentoring</option>
                    <option value="events">Event Organization</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="content">Content &amp; Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Sign Up to Volunteer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Donations */}
      <section id="donations" className="section-padding py-16 md:py-24 bg-maroon text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <Heart className="w-10 h-10 text-saffron-light mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Support Our Mission
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Your donations directly fund free education for underprivileged
            children, community service programs, and the global outreach of
            Bhagavad Gita&apos;s teachings. Every contribution, no matter how
            small, creates a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <DonationButton label="Donate to Gita Global Family" />
            <a
              href="https://rzp.io/rzp/fuo8D7h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Donate via Razorpay
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

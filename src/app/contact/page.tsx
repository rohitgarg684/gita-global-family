"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Gopala 1F, 104, Omaxe, Chhatikara Road, Vrindavan, Mathura, UP, India, 281003",
    href: "https://maps.google.com/?q=Gopala+1F+104+Omaxe+Chhatikara+Road+Vrindavan+Mathura+UP+India+281003",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8865052915",
    href: "tel:+918865052915",
  },
  {
    icon: Mail,
    label: "Email",
    value: "namaste@gitaglobalfamily.org",
    href: "mailto:namaste@gitaglobalfamily.org",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Contact Us"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;d love to hear from you. Reach out with questions,
            feedback, or to learn more about our mission.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding py-16 md:py-24">
        <SectionHeading
          title="Get in Touch"
          subtitle="Fill out the form or reach us through the contact details below."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="space-y-8">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark-brown">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-text-secondary text-sm group-hover:text-saffron transition-colors leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-cream-dark/40 aspect-video">
              <iframe
                title="Gita Global Family Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789!2d77.6800!3d27.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVrindavan%2C+Mathura!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-warm-gray rounded-2xl p-8 md:p-10 border border-cream-dark/30"
          >
            <h3 className="text-xl font-bold text-dark-brown mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

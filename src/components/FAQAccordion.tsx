"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I have to give up my faith or religion to join Gita Global Family?",
    a: "No. Gita Global Family welcomes people of all faiths and backgrounds. The Bhagavad Gita's teachings are universal and complement any spiritual tradition.",
  },
  {
    q: "How can I join GGF as a volunteer?",
    a: "You can join as a volunteer by filling out the form on our Join Us page. We have opportunities for teaching, content creation, event organization, and community outreach.",
  },
  {
    q: "Where can I learn more about the organization's goals and structure?",
    a: "Visit our About page for comprehensive details on our mission, vision, leadership, and organizational structure.",
  },
  {
    q: "Can I organize a fundraising event at home?",
    a: "Yes, we encourage community-led fundraising efforts. Please contact us for guidelines and support materials for hosting a fundraising event.",
  },
  {
    q: "What's the minimum age to volunteer?",
    a: "Volunteers of all ages are welcome. Younger volunteers (under 18) should be accompanied or supervised by a parent or guardian.",
  },
  {
    q: "Is the organization transparent?",
    a: "Yes, we are committed to full transparency. Our financial reports and activity updates are shared regularly with all supporters and stakeholders.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-cream-dark/50 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-medium text-sm md:text-base text-dark-brown">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-saffron shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

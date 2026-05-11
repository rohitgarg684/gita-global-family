"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to the Gita Global Family website. By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined here. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and others who access or use the website.`,
  },
  {
    title: "2. Use of Website",
    content: `You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes harassing or causing distress to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website. Gita Global Family reserves the right to restrict access to areas of this website at our discretion.`,
  },
  {
    title: "3. Intellectual Property",
    content: `All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Gita Global Family or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or in any way exploit any of the content without prior written permission from Gita Global Family.`,
  },
  {
    title: "4. Donations",
    content: `Donations made through this website are voluntary contributions to support the charitable activities of Gita Global Family. All donations are non-refundable unless otherwise determined at our sole discretion. We ensure that donations are used in accordance with our stated mission of spiritual development, education, and poverty alleviation. Tax receipts will be issued in accordance with applicable laws.`,
  },
  {
    title: "5. Privacy",
    content: `Gita Global Family is committed to protecting your privacy. Any personal information collected through this website will be handled in accordance with applicable data protection laws. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Information collected may be used to improve our website, send periodic emails, or process transactions.`,
  },
  {
    title: "6. Disclaimer",
    content: `The information provided on this website is for general informational and spiritual guidance purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance you place on such information is strictly at your own risk. Gita Global Family shall not be liable for any loss or damage arising from the use of this website.`,
  },
  {
    title: "7. Changes to Terms",
    content: `Gita Global Family reserves the right to modify these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting on this website. Your continued use of the website after any changes constitutes acceptance of the new terms.`,
  },
  {
    title: "8. Contact",
    content: `If you have any questions or concerns about these Terms and Conditions, please contact us at:`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding pt-20 md:pt-28 pb-10 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-dark-brown leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-text-muted">
            Last updated: January 2025
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="mb-10"
            >
              <h2 className="text-xl font-semibold text-dark-brown mb-3">
                {section.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.content}
              </p>
              {section.title === "8. Contact" && (
                <div className="mt-4 bg-warm-gray rounded-xl p-6">
                  <p className="text-text-secondary">
                    <strong className="text-dark-brown">Gita Global Family</strong>
                  </p>
                  <p className="text-text-secondary mt-1">
                    Email:{" "}
                    <a
                      href="mailto:namaste@gitaglobalfamily.org"
                      className="text-saffron hover:text-saffron-dark transition-colors"
                    >
                      namaste@gitaglobalfamily.org
                    </a>
                  </p>
                  <p className="text-text-secondary mt-1">
                    Address: Gopala 1F, 104, Omaxe, Chhatikara Road, Vrindavan,
                    Mathura, UP, India, 281003
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

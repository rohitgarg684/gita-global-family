"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-sage" />
        </div>
        <h3 className="text-xl font-semibold text-dark-brown mb-2">
          Thank you!
        </h3>
        <p className="text-text-secondary">
          We&apos;ve received your message and will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-saffron hover:text-saffron-dark font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-cream-dark/50 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Submit
      </button>
    </form>
  );
}

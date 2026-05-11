"use client";

import { Heart } from "lucide-react";

interface DonationButtonProps {
  label?: string;
  className?: string;
}

export default function DonationButton({
  label = "Donate to Gita Global Family",
  className = "",
}: DonationButtonProps) {
  return (
    <a
      href="https://rzp.io/rzp/TsaLFcd"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-8 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg ${className}`}
    >
      <Heart className="w-5 h-5" />
      {label}
    </a>
  );
}

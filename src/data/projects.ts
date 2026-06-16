import {
  Landmark,
  BookOpenText,
  HeartHandshake,
  Users,
  ShieldCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { img } from "@/lib/image-url";

export interface ProjectCard {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  href: string;
}

export interface FlagshipInitiative {
  badge: string;
  title: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const flagshipInitiative: FlagshipInitiative = {
  badge: "Flagship Initiative",
  title: "Temple-Centred Village Transformation Initiative",
  description:
    "A simple, repeatable cycle of knowledge, engagement, assessment, incentive, leadership, and expansion — designed to reach 1,000 households per village with curated scriptures, Dharma outreach educators, youth leadership tracks, social resilience training, and dignified livelihood pathways.",
  image: img("project-hero-temple-village.png"),
  stats: [
    { value: "6", label: "Projects" },
    { value: "1,000", label: "Households" },
    { value: "1", label: "Temple Hub" },
  ],
  primaryCta: { label: "Explore the Initiative", href: "/projects" },
  secondaryCta: { label: "Partner With Us", href: "/contact" },
};

export const projectCards: ProjectCard[] = [
  {
    icon: Landmark,
    title: "Temple Empowerment",
    text: "Reviving the temple as a self-sustaining centre of guidance, learning, and community leadership.",
    image: img("project-temple-empowerment.png"),
    href: "/projects#temple-empowerment",
  },
  {
    icon: BookOpenText,
    title: "Spiritual Literacy in 1,000 Homes",
    text: "Free curated libraries — Gita, Ramcharitmanas, and Dharma booklets — for every household.",
    image: img("project-spiritual-literacy.png"),
    href: "/projects#spiritual-literacy",
  },
  {
    icon: HeartHandshake,
    title: "Dharma Outreach Educators",
    text: "Trained extension workers who visit homes, build trust, and turn reading into living practice.",
    image: img("project-holistic-wellbeing.png"),
    href: "/projects#active-engagement",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    text: "Identifying gifted children and youth as the next generation of spiritual ambassadors.",
    image: img("project-youth-leaders.png"),
    href: "/projects#youth-leadership",
  },
  {
    icon: ShieldCheck,
    title: "Social Resilience",
    text: "Building intellectual and emotional immunity against conversion pressure and misinformation.",
    image: img("project-social-resilience.png"),
    href: "/projects#social-resilience",
  },
  {
    icon: Briefcase,
    title: "Livelihood Empowerment",
    text: "Skill training, agriculture linkages, and entrepreneurship — anchoring Dharma in dignified self-reliance.",
    image: img("project-livelihood-empowerment.png"),
    href: "/projects#livelihood-empowerment",
  },
];

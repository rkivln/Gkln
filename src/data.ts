/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectCard, BentoItem, ArticleItem, ProfileSlide } from "./types";

export const PROJECT_DECK: ProjectCard[] = [
  {
    id: "altus-hub",
    title: "Altus Campus Hub",
    description: "Multi-tenant academic command center serving 5,000+ daily student active sessions, simplifying grades trackers, live campus schedules, and resource pooling.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Docker"],
    role: "Lead Architect",
    year: "2025",
    bgGradient: "from-blue-600 via-indigo-950 to-black"
  },
  {
    id: "campus-ride",
    title: "EcoRide Sharing Platform",
    description: "Peer-to-peer campus transit coordinator engineered with real-time route optimization to minimize carbon footprints and offer safe inter-dorm pooling.",
    tags: ["React Native", "Socket.io", "Tailwind CSS", "Redis"],
    role: "Full-Stack Engineer",
    year: "2025",
    bgGradient: "from-teal-600 via-slate-900 to-black"
  },
  {
    id: "sem-docs",
    title: "Sem-Docs Archive Engine",
    description: "Centralized archive engine compiling past papers, dynamic notes digests, and generative exam syllabus roadmaps, loaded over lightning CDN caches.",
    tags: ["Next.js", "PostgreSQL", "Google AI Studio", "Cloudflare"],
    role: "Creator & Host",
    year: "2026",
    bgGradient: "from-purple-900 via-neutral-950 to-black"
  },
  {
    id: "volt-media",
    title: "Volt Media Hub",
    description: "Digital agency portfolio and content engine empowering tech agencies with high-fidelity branding, serverless deployments, and optimized media rendering.",
    tags: ["MERN Stack", "Framer Motion", "AWS S3", "GraphQL"],
    role: "Founder & Dev",
    year: "2024",
    bgGradient: "from-amber-600 via-neutral-900 to-black"
  }
];

export const BENTO_SERVICES: BentoItem[] = [
  {
    id: "web-dev",
    category: "01 / ENGINEERING",
    title: "Robust Full-Stack Web App Development",
    description: "Architecting standard MERN stacks, scalable Next.js servers, custom state management engines, and high-performance serverless endpoints.",
    visualType: "console",
    accentText: "npm run start:production"
  },
  {
    id: "ui-ux",
    category: "02 / STRUCTURE & DESIGN",
    title: "Brutalist & Neo-Minimalist Art Direction",
    description: "Designing high-end responsive wireframes, responsive grids, pixel-perfect spacing typography, and smooth interactive animations.",
    visualType: "bezier",
    accentText: "4px Borders • Custom Curves"
  },
  {
    id: "mini-projects",
    category: "03 / FLUID BUILDS",
    title: "Interactive Web Utilities & Speed hacks",
    description: "Custom lightweight micro-utilities, interactive dashboards, speed calculators, and custom canvas visualizations designed for instantaneous load times.",
    visualType: "gradient",
    glowingColor: "rgba(37, 99, 235, 0.4)", // Blue glow
    accentText: "Instant Handoff"
  },
  {
    id: "end-sem-docs",
    category: "04 / ACADEMICS",
    title: "End-Sem Academic Document Structuring",
    description: "Orchestrating organized, clean textbook digests, fast review checklists, exam prep directories, and structured study syllabi assets for student bodies.",
    visualType: "list",
    detailsList: ["Curated Syllabus Outlines", "Past Exam Resolution Sheets", "Simplified Concept Cheat Sheets", "Interactive Term Trackers"],
    accentText: "A+ Preparation"
  },
  {
    id: "academic-tech",
    category: "05 / COMMUNITY UTILITIES",
    title: "Academic Tech Support & Tooling",
    description: "Engineering tailored calculators, GPA planners, automated laboratory formatters, and collaborative canvas study boards.",
    visualType: "card",
    accentText: "Designed for Students"
  }
];

export const CAPABILITIES: string[] = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "Next.js",
  "Git & GitHub",
  "Generative AI integration"
];

export const SOCIAL_PROJECTS = {
  header: "Social & Campus Projects",
  stickyDescription: "Bridging the gap between software development and hands-on community service.",
  communityParagraph: "Active builder in the Google Developer Group (GDG) Puducherry, organizing hackathons, conducting tech labs, and orchestrating open-source utilities assisting hundreds of engineering students in navigating modern development frameworks.",
  hardwareTitle: "Arduino Anti-Sleep Safety Glasses",
  hardwareDescription: "A smart hardware prototype leveraging specialized blink-duration infrared sensors and custom code logic to trigger alert buzzers when micro-sleep is detected—preventing driver and late-night study burnout.",
  hardwareSpecs: ["Arduino Nano Controller", "Infrared Laser Eyewear", "Tactile Buzzer Modules", "Rechargeable Lithium Setup"]
};

export const ARTICLES_UPDATES: ArticleItem[] = [
  {
    id: "cert-ai",
    category: "CERTIFICATION",
    title: "Earning my Generative AI Certification from Google Workspace & Cloud",
    date: "MAY 15, 2026",
    cardColor: "red",
    badge: "GOOGLE CLOUD"
  },
  {
    id: "campus-eco",
    category: "ARCHITECTURE",
    title: "Building high-performance campus ecosystem architectures using microservices",
    date: "APRIL 02, 2026",
    cardColor: "amber",
    badge: "MERN EXCEL"
  },
  {
    id: "google-io",
    category: "COMMUNITY EVENTS",
    title: "Attending Google I/O Extended 2026 with GDG Puducherry Lead Organizers",
    date: "MAY 24, 2026",
    cardColor: "white",
    badge: "GDG EVENT"
  }
];

export const MANIFESTO_PHRASES = [
  { type: "serif", text: "Zero Bullshit" },
  { type: "sans", text: "High Engineering Standards" },
  { type: "serif", text: "Celebrating Innovation" },
  { type: "serif", text: "Endless Passion" },
  { type: "sans", text: "Taking Scalability Risks" },
  { type: "serif", text: "Trusting the Architecture" }
];

export const PROFILE_SLIDES: ProfileSlide[] = [
  {
    id: "lead-dev",
    name: "Gokulan R",
    role: "Full-Stack JavaScript Specialist",
    tagline: "Bridging architectural logic with elegant, high-impact interactive interfaces.",
    facts: [
      "Specialist in robust MERN stack implementations across India.",
      "Dedicated developer of student-centric campus ecosystems like Altus Hub.",
      "Committed to clean modular code and ultra-responsive layout structures."
    ],
    signature: "Gokulan.dev",
    avatarBgColor: "bg-amber-400"
  },
  {
    id: "volt-founder",
    name: "Founder of Volt Media by ALTUS",
    role: "Creative Director & Tech Lead",
    tagline: "Empowering developers and student bodies with optimized, accessible digital products.",
    facts: [
      "Directs high-fidelity asset rendering and custom digital portfolios.",
      "Focuses on zero-bloat architecture designs with 100% lighthouse execution.",
      "Envisions collaborative student-led development projects."
    ],
    signature: "VOLT MEDIA",
    avatarBgColor: "bg-blue-600"
  },
  {
    id: "gdg-builder",
    name: "Google Developer Group Puducherry",
    role: "Core Tech Organizer & Speaker",
    tagline: "Mentoring upcoming student communities and hosting hands-on cloud labs.",
    facts: [
      "Organized student-facing workshops covering React, Express, and GenAI.",
      "Built numerous open-source community templates for campus projects.",
      "Speaker on modern software architectural best practices."
    ],
    signature: "GDG PUDUCHERRY",
    avatarBgColor: "bg-emerald-500"
  }
];

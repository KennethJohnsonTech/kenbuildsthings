export interface Project {
  name: string;
  description: string;
  priority: "P1" | "P2" | "P3" | "P4";
  accentColor: "teal" | "amber" | "dim";
  statusDotColor: string;
  meta: { label: string; value: string }[];
}

export interface WritingEntry {
  title: string;
  subtitle: string;
  status: string;
  mostRecent?: boolean;
}

export interface StatCard {
  label: string;
  value: string;
  isPlain?: boolean;
}

export interface AboutSection {
  heading: string;
  body: string;
}

export const projects: Project[] = [
  {
    name: "LeadQuest",
    description:
      "Lead management for small teams. Designed and built from scratch using AI as the engineering layer.",
    priority: "P1",
    accentColor: "teal",
    statusDotColor: "#00C4B4",
    meta: [
      { label: "STACK", value: "React / Next.js" },
      { label: "BUILT WITH", value: "Claude" },
      { label: "STATUS", value: "Active" },
    ],
  },
  {
    name: "BuildLaunchGrow",
    description:
      "Content curation platform. Designed it, built it, launched it, learned from it.",
    priority: "P2",
    accentColor: "dim",
    statusDotColor: "#565F64",
    meta: [
      { label: "TYPE", value: "Platform" },
      { label: "YEAR", value: "2024" },
      { label: "STATUS", value: "Shipped" },
    ],
  },
  {
    name: "Micro tools",
    description:
      "Weekend builds. Scoped tight, shipped fast. Built with AI, documented on GitHub.",
    priority: "P3",
    accentColor: "amber",
    statusDotColor: "#D4870A",
    meta: [
      { label: "SCOPE", value: "Weekend" },
      { label: "STATUS", value: "In progress" },
    ],
  },
  {
    name: "This site",
    description:
      "kenbuildsthings.com. Designed with AI, built in code. The portfolio is the proof of work.",
    priority: "P4",
    accentColor: "amber",
    statusDotColor: "#D4870A",
    meta: [
      { label: "STACK", value: "Next.js" },
      { label: "STATUS", value: "Building" },
    ],
  },
];

export const writingEntries: WritingEntry[] = [
  {
    title: "What I learned going through Meta's PM interviews",
    subtitle:
      "60 mock interviews, 4 months of prep, and the real lesson had nothing to do with frameworks.",
    status: "Published",
    mostRecent: true,
  },
  {
    title: "Here's what I learned building LeadQuest with AI",
    subtitle:
      "The difference between tools that hold your hand and tools that hand you the keys.",
    status: "Published",
  },
  {
    title: "Why I stopped using Lovable",
    subtitle: "It wasn't about the tool. It was about what I wanted to become.",
    status: "Published",
  },
];

export const statCards: StatCard[] = [
  { label: "LOCATION", value: "United States", isPlain: true },
  { label: "CURRENT FOCUS", value: "AI-powered dev tools & shipping fast" },
  {
    label: "DREAM ROLE",
    value:
      "Founding engineer at an AI-first startup, building the product from zero to one",
  },
  {
    label: "OFF-TRACK",
    value:
      "Music production, sim racing, mechanical keyboards, exploring new cities",
  },
  {
    label: "TECH STACK",
    value: "TypeScript, React, Next.js, Node, Python, Claude, Cursor, Vercel",
  },
];

export const aboutSections: AboutSection[] = [
  {
    heading: "WHAT I DO",
    body: "I build AI-powered products and tools that solve real problems for real people. From full-stack web apps to browser extensions to design tools — if it can be built with code and AI, I'm probably already halfway through the prototype.",
  },
  {
    heading: "WHY I BUILD",
    body: "Because the gap between idea and product has never been smaller. AI lets one person move like a team of ten. I want to prove that a single builder with the right tools can ship things that actually matter.",
  },
  {
    heading: "HOW I WORK",
    body: "Ship fast, learn faster. I prototype in hours, not weeks. Every build starts with a real problem and a tight feedback loop. No committees, no roadmaps — just code, users, and iteration.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/KennethJohnsonTech" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kennethdjohnson/",
  },
  { label: "X", href: "https://x.com/Kenbuildsthings" },
];

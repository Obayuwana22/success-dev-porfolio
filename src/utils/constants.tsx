import type { Project, SkillCategory, Experience } from "../types/types";
import projectOne from "../assets/thumbnail/lockedIn.png";
import projectTwo from "../assets/thumbnail/kropp fitness.png";
import projectThree from "../assets/thumbnail/comfy store.png";
import projectFour from "../assets/thumbnail/colourist.png";

//change descriptions(short descriptions because they don't relate to long description)

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "LockedIn",
    description:
      "A performance-first component library focused on high-frequency data updates.",
    longDescription:
      "LockedIn is a modern personal finance web application that helps users manage their budgets, track transactions, and organize spending into categories.It offers a clean interface with persistent data storage, allowing users to stay on top of their finances effortlessly.",
    image: projectOne,
    tags: ["React", "Typescript", "TailwindCSS", "Redux Toolkit"],
    link: "https://lockedin-teal.vercel.app/",
    github: "https://github.com/Obayuwana22/lockedin",
  },
  {
    id: "2",
    title: "Kropp Fitness App",
    description: "Headless CMS bridge for distributed marketing teams.",
    longDescription:
      "Kropp Fitness, a sleek and user-friendly website designed to help you achieve your fitness goals.",
    image: projectTwo,
    tags: ["React", "CSS", "JavaScript"],
    link: "https://kropp-fitness.vercel.app/",
    github: "https://github.com/Obayuwana22/fitness-site",
  },
  {
    id: "3",
    title: "Comfy Store",
    description: "Experimental browser-based synthesis engine.",
    longDescription:
      "Comfy is your go-to destination for modern, affordable furniture that brings comfort and style into every corner of your home.",
    image: projectThree,
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://comfy-store-delta-two.vercel.app/",
    github: "https://github.com/Obayuwana22/comfy-store",
  },

  {
    id: "4",
    title: "Colourist Portfolio",
    description: "Experimental browser-based synthesis engine.",
    longDescription:
      "A freelance colorist specializing in color grading, with a portfolio that highlights a keen eye for detail and a talent for elevating visual storytelling through rich, cinematic color.",
    image: projectFour,
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://courageobayuwana.com/",
    github: "https://github.com/Obayuwana22/courage-portfolio",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Production Stack",
    skills: [
      "React (18/19)",
      "TypeScript (Strict Mode)",
      "Next.js App Router",
      "Tailwind CSS",
      "Radix UI / Headless Patterns",
    ],
  },
  {
    title: "Engineering Layer",
    skills: [
      "Node.js Architecture",
      "PostgreSQL / Prisma",
      "Redis Caching",
      "Browser APIs (Audio/Canvas)",
      "CI/CD Automation",
    ],
  },
  {
    title: "Design & Philosophy",
    skills: [
      "Figma to Code Pipeline",
      "WCAG 2.1 Compliance",
      "Design Systems Thinking",
      "Performance Budgeting",
      "Unit Testing (Vitest)",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "Charisol",
    period: "July 2025 — Active",
    description: [
      "Refactored a legacy dashboard to Next.js, improving Lighthouse performance scores from 42 to 98.",
      "Mentored 3 junior developers on TypeScript best practices and design system implementation.",
      "Orchestrated the transition to a headless commerce architecture, increasing conversion by 12% via improved speed.",
    ],
    // description:
    //     "Working on frontend development for a scalable web application, implementing modern React/Nextjs patterns, collaborating with designers and backend engineers, and growing toward advanced frontend architecture skills.",
    //   achievements: [
    //     "Collaborated with cross-functional teams in agile environment",
    //     "Contributed and implemented automated API testing with Postman and configured GitHub Actions workflows to run tests in a CI/CD pipeline, improving build reliability and release confidence.",
    //     "Improved client satisfaction scores by implementing user feedback",
    //   ],
    //   technologies: ["Next.js", "React", "TypeScript", "GraphQL"],
    current: true,
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Pedxo",
    period: "Sept 2024 - Jan 2025",
    description: [
      "Built and maintained a library of 40+ React components used by over 500,000 monthly active users.",
      "Reduced initial bundle size by 30% through aggressive code-splitting and dependency auditing.",
      "Collaborated directly with the Product Design head to bridge the gap between Figma and Production.",
    ],
    // description:
    //     "Developed responsive web application for connecting devs with clients, collaborated with design teams, and implemented pixel-perfect UI components.",
    //   achievements: [
    //     "Developed interactive React components based on UI/UX designs, focusing on creating user-friendly and engaging web interfaces.",
    //     "Ensures device-optimized websites for consistent user experiences using ReactJS and Tailwindcss.",
    //   ],
    //   technologies: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    id: "exp-3",
    role: "Junior Frontend Developer",
    company: "TechVerse",
    period: "Jan 2024 - July 2024",
    description: [
      "Partnered with 5+ startups to ship MVP versions of their web applications.",
      'Learned the importance of "shipping fast" without sacrificing "building right".',
      "Developed a deep appreciation for the client relationship and project scoping.",
    ],
    //  description:
    //     "Built interactive web interfaces, collaborated with backend developers",
    //   achievements: [
    //     "Leveraged Git for version control, ensuring smooth collaboration and efficient code management throughout the development lifecycle.",
    //     "Implemented responsive designs for mobile-first approach",
    //     "Ensures device-optimized websites for consistent user experiences using HTML5 and CSS3.",
    //   ],
    //   technologies: ["HTML5", "CSS3", "TailwindCSS", "Javascript"],
  },
];

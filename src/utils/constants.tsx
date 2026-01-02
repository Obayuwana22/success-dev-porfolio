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
    tags: ["HTML", "CSS", "JavaScript"],
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
    title: "Core Frontend Stack",
    skills: [
      "HTML",
      "CSS & Tailwind CSS",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Redux Toolkit",
      "REST API Integration",
      "GraphQL",
    ],
  },
  {
    title: "UI Engineering",
    skills: [
      "Component Architecture",
      "Shadcn/ui & Headless UI Patterns",
      "Reusable Design Systems",
      "Responsive & Mobile-First Design",
    ],
  },
  {
    title: "Performance & Quality",
    skills: [
      "Web Performance Optimization",
      "Accessibility (WCAG 2.1)",
      "Code Splitting & Lazy Loading",
      "Unit & Component Testing (Jest)",
      "Linting & Code Standards",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "Charisol",
    period: "July 2025 — Present",
    description: [
      "Collaborated with cross-functional teams in agile environment.",
      "Contributed and implemented automated API testing with Postman and configured GitHub Actions workflows to run tests in a CI/CD pipeline, improving build reliability and release confidence.",
      "Improved client satisfaction scores by implementing user feedback.",
    ],
    // technologies: ["Next.js", "React", "TypeScript", "GraphQL"],
    current: true,
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Pedxo",
    period: "Sept 2024 - Jan 2025",
    description: [
      "Developed responsive web application for connecting devs with clients, collaborated with design teams, and implemented pixel-perfect UI components.",
      "Developed interactive React components based on UI/UX designs, focusing on creating user-friendly and engaging web interfaces.",
      "Ensures device-optimized websites for consistent user experiences using ReactJS and Tailwindcss.",
    ],
    //   technologies: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    id: "exp-3",
    role: "Junior Frontend Developer",
    company: "TechVerse",
    period: "Jan 2024 - July 2024",

    description: [
      "Leveraged Git for version control, ensuring smooth collaboration and efficient code management throughout the development lifecycle.",
      "Implemented responsive designs for mobile-first approach.",
      "Ensures device-optimized websites for consistent user experiences using HTML5 and CSS3.",
    ],
    //   technologies: ["HTML5", "CSS3", "TailwindCSS", "Javascript"],
  },
];

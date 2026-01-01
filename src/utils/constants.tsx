
import { Project, SkillCategory, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Kinetic UI System',
    description: 'A performance-first component library focused on high-frequency data updates.',
    longDescription: 'Developed a specialized UI kit for real-time monitoring. Solved the "prop-drilling exhaustion" by implementing a localized signal-based state pattern, reducing re-renders by 65% in high-density tables.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'WebWorkers', 'Tailwind', 'Zustand'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'The Foundry',
    description: 'Headless CMS bridge for distributed marketing teams.',
    longDescription: 'Bridges the gap between Contentful and static generation. I built a custom validation engine that prevents broken links before build-time, saving roughly 4 hours of debugging per deployment cycle.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'Contentful', 'GraphQL', 'TypeScript'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Vanguard Audio',
    description: 'Experimental browser-based synthesis engine.',
    longDescription: 'An exploration of the Web Audio API. This project pushed my understanding of audio buffering and scheduling. It features a custom-built sequencer that maintains 120bpm stability even under heavy main-thread load.',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200',
    tags: ['Web Audio API', 'React', 'Canvas', 'GLSL'],
    link: '#',
    github: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Production Stack',
    skills: ['React (18/19)', 'TypeScript (Strict Mode)', 'Next.js App Router', 'Tailwind CSS', 'Radix UI / Headless Patterns']
  },
  {
    title: 'Engineering Layer',
    skills: ['Node.js Architecture', 'PostgreSQL / Prisma', 'Redis Caching', 'Browser APIs (Audio/Canvas)', 'CI/CD Automation']
  },
  {
    title: 'Design & Philosophy',
    skills: ['Figma to Code Pipeline', 'WCAG 2.1 Compliance', 'Design Systems Thinking', 'Performance Budgeting', 'Unit Testing (Vitest)']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Frontend Engineer',
    company: 'Nexus Creative',
    period: 'Mar 2023 — Active',
    description: [
      'Refactored a legacy dashboard to Next.js, improving Lighthouse performance scores from 42 to 98.',
      'Mentored 3 junior developers on TypeScript best practices and design system implementation.',
      'Orchestrated the transition to a headless commerce architecture, increasing conversion by 12% via improved speed.'
    ],
    current: true
  },
  {
    id: 'exp-2',
    role: 'UI Developer',
    company: 'Stellar Tech',
    period: 'Jan 2021 — Feb 2023',
    description: [
      'Built and maintained a library of 40+ React components used by over 500,000 monthly active users.',
      'Reduced initial bundle size by 30% through aggressive code-splitting and dependency auditing.',
      'Collaborated directly with the Product Design head to bridge the gap between Figma and Production.'
    ]
  },
  {
    id: 'exp-3',
    role: 'The Freelance Phase',
    company: 'Independent',
    period: '2019 — 2020',
    description: [
      'Partnered with 5+ startups to ship MVP versions of their web applications.',
      'Learned the importance of "shipping fast" without sacrificing "building right".',
      'Developed a deep appreciation for the client relationship and project scoping.'
    ]
  }
];

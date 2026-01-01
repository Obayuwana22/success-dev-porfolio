export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

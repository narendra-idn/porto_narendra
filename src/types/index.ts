// Type definitions for the portfolio project

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  demo?: string | null;
  image: string | string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  category: string;
}

export interface GitHubRepo {
  fork: any;
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

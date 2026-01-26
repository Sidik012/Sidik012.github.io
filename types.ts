export interface Project {
  id: string;
  title: string;
  category: 'ML' | 'Data Engineering' | 'Analytics';
  description: string;
  tech: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Review {
  id: string;
  title: string;
  author: string;
  summary: string;
  tags: string[];
}

export enum Section {
  HERO = 'hero',
  DATA = 'data',
  BUSINESS = 'business',
  SKILLS = 'skills',
  CONTACT = 'contact'
}
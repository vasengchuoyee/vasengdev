export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  image: string;
  level?: number;
  category?: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Social {
  name: string;
  src: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}
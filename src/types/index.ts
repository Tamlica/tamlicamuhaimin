export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experiment {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
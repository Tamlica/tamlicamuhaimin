import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Foreign Exchange Report System',
    description: 'A real-time report system for foreign exchange transactions.The frontend application is integrated with the authentication database, while the transaction database is accessed via API calls and synchronize in real-time with BI.',
    image: '/sismontavar.png',
    technologies: ['Python', 'Django', 'PostgreSQL', 'RestAPI', 'Bootstrap', 'JavaScript'],
    highlights: [
      'User authentication and authorization',
      'CRUD operations for transaction data',
      'Real-time data synchronization',
      'Admin and operator roles'
    ],
  },
  {
    id: 2,
    title: 'RIKKESLA App',
    description: 'RIKKESLA is a comprehensive medical checkup management system for tracking and managing medical examinations, participant data, and medical results.',
    image: '/rikkesla.png',
    technologies: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui', 'Tanstack Query', 'Node.js', 'Express.js', 'Drizzle ORM', 'PostgreSQL'],
    highlights: [
      'Comprehensive medical examination tracking and management',
      'Participant data management with secure storage',
      'Medical results documentation and history',
      'Real-time data synchronization and reporting'
    ],
    // demoUrl: 'https://weather-app.example.com',
    // githubUrl: 'https://github.com/tamlica/rikkes'
  },
  {
    id: 3,
    title: 'Food Journal Map',
    description: "A full-featured food journal application with a map-first interface. Track places you've visited, want to visit, or want to avoid, complete with photos, ratings, and pricing information—all visualized on an interactive map.",
    image: '/food-journal-map.png',
    technologies: ['Next.js', 'MapLibre GL JS', 'Mapcn', 'Tailwind CSS', 'shadcn/ui', 'zustand', 'TypeScript', 'Supabase'],
    highlights: [
      'Map-first interface for visualizing food locations',
      'Track visited places, want-to-visit, and places to avoid',
      'Photo uploads with ratings and pricing information',
      'Interactive map with place filtering and search'
    ],
    demoUrl: 'https://food-journal-mapcn.tamlicamuhaim.in/',
    // githubUrl: 'https://github.com/Tamlica/sass-productivity'
  }
];
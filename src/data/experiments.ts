import { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 1,
    title: 'SplitWise - Bill Splitter',
    description: 'An online bill splitter that calculates based on meals, discounts, and fees for a group of friends.',
    technologies: ['JavaScript','TypeScript', 'React'],
    link: 'https://wise-splitting.netlify.app/'
  },
  {
    id: 2,
    title: 'NeoShopper - Shopping List App',
    description: 'A simple shopping list mobile apps allows users to customable categories and quick add items, with a Neo Brutalism UI. (Open the link with mobile device to directly download it from Expo)',
    technologies: ['JavaScript', 'React Native', 'Expo', 'Neo Brutalism'],
    link: 'https://expo.dev/accounts/tamlica/projects/neo-shopper/builds/df5fd29a-d779-4ad7-a044-8474c8e58926'
  },
  {
    id: 3,
    title: 'Steam Sales Discord Bot',
    description: 'A steam sales discord bot that sends daily information about steam sales.',
    technologies: ['JavaScript', 'NodeJs', 'Discord API'],
    link: 'https://github.com/Tamlica/Steam-Fortnite-Shop-Discord-Bot'
  },
  {
    id: 4,
    title: 'TaskFlow - Task Management App',
    description: 'A modern task management application with a focus on clean design and intuitive UX, featuring GitHub and Google Sign In integration',
    technologies: ['TypeScript', 'Javascript', 'React', 'Tailwind CSS'],
    link: 'https://github.com/Tamlica/sass-productivity'
  }
];
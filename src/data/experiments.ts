import { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 1,
    title: 'AI Image Generator',
    description: 'An experimental web app that uses AI to generate unique images based on text prompts. Built with React and integrated with OpenAI API.',
    technologies: ['React', 'OpenAI API', 'Canvas API'],
    link: 'https://ai-image-generator.example.com'
  },
  {
    id: 2,
    title: 'Voice-Controlled Music Player',
    description: 'A music player that responds to voice commands for a hands-free listening experience, using browser speech recognition API.',
    technologies: ['JavaScript', 'Web Speech API', 'Spotify API'],
    link: 'https://voice-music-player.example.com'
  },
  {
    id: 3,
    title: '3D Portfolio Visualizer',
    description: 'A three-dimensional representation of development skills and projects, allowing users to explore through an interactive 3D space.',
    technologies: ['Three.js', 'WebGL', 'GSAP'],
    link: 'https://3d-portfolio.example.com'
  },
  {
    id: 4,
    title: 'Coding Challenge Solver',
    description: 'An AI-powered tool that helps developers solve coding challenges by suggesting optimized solutions and explaining the approach.',
    technologies: ['TypeScript', 'NLP', 'Algorithm Visualization'],
    link: 'https://code-solver.example.com'
  }
];
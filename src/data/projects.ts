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
    title: 'Weather Forecast App',
    description: 'A beautifully designed weather application providing accurate forecasts, hourly predictions, and location-based weather alerts.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API', 'Geolocation'],
    highlights: [
      'Location-based weather forecasts with 7-day predictions',
      'Interactive radar maps with precipitation tracking',
      'Custom notifications for severe weather alerts',
      'Available for both iOS and Android platforms'
    ],
    demoUrl: 'https://weather-app.example.com',
    githubUrl: 'https://github.com/tamlica/weather-app'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A collaborative project management tool designed for teams to organize tasks, track progress, and meet deadlines efficiently.',
    image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Drag-and-Drop API'],
    highlights: [
      'Kanban board with customizable columns and task statuses',
      'Real-time collaboration with multi-user editing',
      'Deadline tracking with calendar integration',
      'File attachment and sharing capabilities'
    ],
    demoUrl: 'https://task-manager.example.com',
    githubUrl: 'https://github.com/tamlica/task-manager'
  }
];
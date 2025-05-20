import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for online store management with real-time analytics, inventory tracking, and customer insights.',
    image: 'https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js'],
    highlights: [
      'Real-time sales analytics with customizable date ranges',
      'Inventory management system with low-stock alerts',
      'Customer behavior insights and segmentation',
      'Responsive design works across all devices'
    ],
    demoUrl: 'https://ecommerce-dashboard.example.com',
    githubUrl: 'https://github.com/tamlica/ecommerce-dashboard'
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
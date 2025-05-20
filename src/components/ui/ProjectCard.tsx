import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed = false }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
    >
      <div className="w-full md:w-1/2 relative group">
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="absolute bottom-4 left-4 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-mono font-bold mb-3">{project.title}</h3>
        
        <p className="text-journal-ink/80 dark:text-darkjournal-ink/80 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="space-y-3">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <span className="text-journal-accent dark:text-darkjournal-accent mr-2">•</span>
              <span className="text-sm text-journal-ink/80 dark:text-darkjournal-ink/80">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ChevronDown } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsChapter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const scrollToNext = () => {
    document.getElementById('experiments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="journal-page">
      <div className="flex items-center gap-4 mb-6">
        <Code className="w-10 h-10 mb-6 text-journal-accent dark:text-darkjournal-accent" />
        <h2 className="chapter-title">Chapter 3: Projects</h2>
      </div>

      <p className="text-lg mb-8">
        These projects represent key milestones in my development journey, showcasing both technical skills and problem-solving abilities.
      </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16 md:space-y-24"
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            isReversed={index % 2 !== 0}
          />
        ))}

        <div className='flex flex-col items-center justify-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn btn-primary mx-auto"
            onClick={scrollToNext}
          >
            Next
            <ChevronDown className="ml-2 w-5 h-5" />
          </motion.button>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectsChapter;
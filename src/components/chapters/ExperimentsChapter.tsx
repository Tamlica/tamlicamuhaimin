import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Brain, ExternalLink, ChevronDown } from 'lucide-react';
import { experiments } from '../../data/experiments';

const ExperimentsChapter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const scrollToNext = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="journal-page">
      <div className="flex items-center gap-4 mb-6">
        <Brain className="w-10 h-10 mb-6 text-journal-accent dark:text-darkjournal-accent" />
        <h2 className="chapter-title">Chapter 4: Experiments</h2>
      </div>

      <p className="text-lg mb-10">
        Beyond client work and structured projects, I've enjoyed exploring emerging technologies 
        and experimenting with creative coding concepts.
      </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {experiments.map((experiment) => (
          <motion.div
            key={experiment.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <span className="bg-journal-accent/10 dark:bg-darkjournal-accent/20 p-2 rounded-full mr-3 text-journal-accent dark:text-darkjournal-accent">
                <Lightbulb className="w-5 h-5" />
              </span>
              <h3 className="font-mono font-bold text-lg">{experiment.title}</h3>
            </div>
            
            <p className="text-journal-ink/80 dark:text-darkjournal-ink/80 mb-4">
              {experiment.description}
            </p>
            
            <div className="flex flex-wrap mb-4">
              {experiment.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            
            {experiment.link && (
              <a 
                href={experiment.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-journal-accent dark:text-darkjournal-accent hover:underline mt-2"
              >
                <span>View Experiment</span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}

      </motion.div>
        <div className='flex flex-col items-center justify-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="btn btn-primary mx-auto mt-5"
            onClick={scrollToNext}
          >
            Next
            <ChevronDown className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
    </div>
  );
};

export default ExperimentsChapter;
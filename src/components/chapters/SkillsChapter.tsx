import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ChevronDown } from 'lucide-react';

interface SkillTier {
  icon: string;
  name: string;
  skills: string[];
}

const skillTiers: SkillTier[] = [
  {
    icon: '🔹',
    name: 'Fluent (Use Daily / Deep Understanding)',
    skills: ['Python','Django', 'JavaScript', 'TypeScript', 'React','VueJs', 'Node.js', 'HTML & CSS', 'Git', 'REST APIs']
  },
  {
    icon: '🔸',
    name: 'Proficient (Used in Multiple Projects)',
    skills: ['FastAPI','Flask', 'Express', 'Machine Learning', 'PostgreSQL', 'MongoDB', 'Docker', 'UI/UX Design', 'Figma']
  },
  {
    icon: '🔻',
    name: 'Exploring / Experimental',
    skills: ['React Native', 'AWS', 'WebAssembly', 'GraphQL', 'Rust']
  }
];

const SkillsChapter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="journal-page">
      <div className="flex items-center gap-4 mb-6">
        <Code className="w-10 h-10 mb-6 text-journal-accent dark:text-darkjournal-accent" />
        <h2 className="chapter-title">Chapter 2: Skills Learned</h2>
      </div>

      <p className="text-lg mb-8">
        Throughout my journey, I've acquired and honed various skills across different areas of software development.
      </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-12"
      >
        {skillTiers.map((tier) => (
          <motion.div 
            key={tier.name}
            variants={itemVariants}
            className="skill-tier"
          >
            <h3 className="text-xl font-mono font-bold mb-4 flex items-center">
              <span className="mr-2">{tier.icon}</span>
              {tier.name}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {tier.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-journal-paper dark:bg-darkjournal-paper rounded-lg border border-journal-ink/10 dark:border-darkjournal-ink/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.p 
          variants={itemVariants}
          className="text-journal-ink/70 dark:text-darkjournal-ink/70 italic mt-8 flex items-center"
        >
          <span className="mr-2">⚙️</span>
          I value clarity over hype — these reflect what I've shipped with, not just what I've touched.
        </motion.p>

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

export default SkillsChapter;
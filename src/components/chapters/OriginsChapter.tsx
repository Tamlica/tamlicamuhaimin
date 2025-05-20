import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book } from 'lucide-react';

const OriginsChapter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
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

  return (
    <div className="journal-page">
      <div className="flex items-center gap-4 mb-6">
        <Book className="w-10 h-10 mb-6 text-journal-accent dark:text-darkjournal-accent" />
        <h2 className="chapter-title">Chapter 1: Origins</h2>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="space-y-6"
      >
        <motion.p variants={itemVariants} className="text-lg leading-relaxed">
          My journey into software development began in 2019, when I first discovered the joy of bringing ideas to life through code. What started as curiosity quickly evolved into passion as I realized the potential to create solutions that could impact people's lives.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg leading-relaxed">
          I still remember my first "Hello World" program and the excitement I felt seeing those simple words appear on screen. That small success sparked a determination to keep learning and exploring the vast world of programming.
        </motion.p>

        <motion.div variants={itemVariants} className="my-8 p-4 border-l-4 border-journal-accent dark:border-darkjournal-accent bg-gray-50 dark:bg-gray-900/50 rounded-r">
          <p className="italic text-journal-ink/80 dark:text-darkjournal-ink/80">
            "The greatest challenge in computing is not to write more code, but to understand the code we've already written."
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg leading-relaxed">
          Through countless hours of practice, online courses, and collaboration with inspiring mentors, I gradually built a foundation of knowledge that would serve as the bedrock for my career. Each new language and framework I learned opened doors to new possibilities and ways of thinking.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg leading-relaxed">
          The journey hasn't always been easy. I've faced challenging bugs, confusing documentation, and seemingly impossible deadlines. But with each obstacle overcome, my skills have grown stronger and my passion for development has only deepened.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OriginsChapter;
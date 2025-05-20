import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CoverPage: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('origins')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="journal-page max-w-4xl w-full mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-journal-accent dark:bg-darkjournal-accent text-white rounded-md"
        >
          <span className="text-sm font-mono">DEVELOPER JOURNAL</span>
        </motion.div>

        <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-4">
          Tamlica's Developer Journal
        </h1>

        <div className="w-16 h-1 bg-journal-accent dark:bg-darkjournal-accent mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl mb-12 text-journal-ink/80 dark:text-darkjournal-ink/80 max-w-2xl mx-auto">
          A journey through code, creativity, and continuous learning.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary mx-auto"
          onClick={scrollToNext}
        >
          Begin Journey
          <ChevronDown className="ml-2 w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CoverPage;
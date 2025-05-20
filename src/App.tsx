import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import CoverPage from './components/CoverPage';
import Chapter from './components/Chapter';
import OriginsChapter from './components/chapters/OriginsChapter';
import SkillsChapter from './components/chapters/SkillsChapter';
import ProjectsChapter from './components/chapters/ProjectsChapter';
import ExperimentsChapter from './components/chapters/ExperimentsChapter';
import ContactChapter from './components/chapters/ContactChapter';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative">
      <motion.div
        className="progress-bar bg-journal-accent dark:bg-darkjournal-accent"
        style={{ scaleX: scrollYProgress }}
      />
      
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-journal-paper dark:bg-darkjournal-paper shadow-md"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-darkjournal-highlight" />
        ) : (
          <Moon className="w-6 h-6 text-journal-accent" />
        )}
      </button>

      <ScrollToTop />
      
      <CoverPage />
      
      <Chapter id="origins">
        <OriginsChapter />
      </Chapter>
      
      <Chapter id="skills">
        <SkillsChapter />
      </Chapter>
      
      <Chapter id="projects">
        <ProjectsChapter />
      </Chapter>
      
      <Chapter id="experiments">
        <ExperimentsChapter />
      </Chapter>
      
      <Chapter id="contact">
        <ContactChapter />
      </Chapter>
    </div>
  );
}

export default App;
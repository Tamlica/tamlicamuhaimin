import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const ContactChapter: React.FC = () => {
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

  const socialLinks = [
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:tamlicamuhaimin@outlook.com' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/tamlica' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/tamlicamuhaimin' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/tamlicamuhaimin' }
  ];

  return (
    <div className="journal-page">
      <div className="flex items-center gap-4 mb-6">
        <Mail className="w-10 h-10 mb-6 text-journal-accent dark:text-darkjournal-accent" />
        <h2 className="chapter-title">Chapter 5: Contact + What's Next</h2>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        <motion.p variants={itemVariants} className="text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-mono font-bold">Get in Touch</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="bg-journal-accent/10 dark:bg-darkjournal-accent/20 p-2 rounded-full mr-3 text-journal-accent dark:text-darkjournal-accent">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-mono font-bold">What's Next</h3>
            <p className="text-journal-ink/80 dark:text-darkjournal-ink/80">
              I'm currently exploring opportunities in full-stack development with a focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-journal-ink/80 dark:text-darkjournal-ink/80">
              <li>AI-powered web applications</li>
              <li>Interactive data visualizations</li>
              <li>Building accessible and performant UIs</li>
              <li>Contributing to open-source projects</li>
            </ul>
            <p className="text-journal-ink/80 dark:text-darkjournal-ink/80">
              I'm always looking to learn and grow – this journal is just one chapter in an ongoing story.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-journal-ink/60 dark:text-darkjournal-ink/60">
            © {new Date().getFullYear()} Tamlica • Developer Journal
          </p>
          <p className="text-sm text-journal-ink/60 dark:text-darkjournal-ink/60 mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactChapter;
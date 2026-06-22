import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-dark-900/50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: '0%' }}
      />
    </div>
  );
}

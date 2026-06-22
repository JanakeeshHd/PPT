import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { scrollToTop } from './Common';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTopHandler = () => {
    scrollToTop();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTopHandler}
          className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-xl shadow-primary-500/40 flex items-center justify-center"
        >
          <ChevronUp className="w-7 h-7 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

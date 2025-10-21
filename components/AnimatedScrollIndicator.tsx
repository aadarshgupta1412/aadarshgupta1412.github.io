'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToContent}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer bg-transparent border-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      aria-label="Scroll to content"
    >
      {/* Desktop indicator */}
      <div className="hidden md:block relative w-7 h-12 border-2 border-[var(--text-light)] rounded-full">
        <motion.div
          className="absolute top-2 left-1/2 w-0.5 h-2 bg-[var(--text-light)] rounded-full"
          style={{ x: '-50%' }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Mobile indicator */}
      <motion.div
        className="md:hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--text-light)]"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.button>
  );
}


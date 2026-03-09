'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: readonly string[];
  interval?: number;
  className?: string;
  prefix?: string;
}

export function RotatingText({ 
  texts, 
  interval = 3000, 
  className = '',
  prefix = ''
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      isFirstRender.current = false;
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-block ${className}`}>
      {prefix && <span className="opacity-40 mr-2">{prefix}</span>}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={isFirstRender.current ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}


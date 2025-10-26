'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.8, 0.1, 0.27, 1],
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[var(--primary)] z-10"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.8, 0.1, 0.27, 1],
        }}
      />
    </div>
  );
}

export function TextRevealLine({ children, delay = 0, className = '' }: TextRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.8, 0.1, 0.27, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}


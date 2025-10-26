'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HighlightTextProps {
  children: ReactNode;
  delay?: number;
  color?: string;
}

export function HighlightText({ children, delay = 0, color = 'var(--primary)' }: HighlightTextProps) {
  return (
    <span className="relative inline-block">
      <motion.span
        className="absolute inset-0 rounded-md"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.6,
          delay: delay + 0.3,
          ease: [0.8, 0.1, 0.27, 1],
        }}
      />
      <motion.span
        className="relative z-10 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          delay: delay + 0.5,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

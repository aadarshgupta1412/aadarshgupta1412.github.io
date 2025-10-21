'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DeviceFrameProps {
  children: ReactNode;
  variant?: 'laptop' | 'mobile';
  className?: string;
}

export function DeviceFrame({ children, variant = 'laptop', className = '' }: DeviceFrameProps) {
  if (variant === 'laptop') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative ${className}`}
      >
        {/* Laptop Frame */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[var(--background-light)] p-2">
          {/* Screen bezel */}
          <div className="relative rounded-lg overflow-hidden border-2 border-[var(--accent)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5">
            {children}
          </div>
          {/* Bottom bar */}
          <div className="h-6 bg-gradient-to-b from-[var(--background-light)] to-[var(--background)] rounded-b-lg mt-1 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-3 bg-[var(--background)] rounded-full" />
          </div>
        </div>
        {/* Shadow base */}
        <div className="h-2 bg-gradient-to-b from-black/10 to-transparent blur-sm mt-1 rounded-full" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative ${className}`}
    >
      {/* Mobile Frame */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[var(--background)] border-8 border-[var(--background-light)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[var(--background)] rounded-b-3xl z-10" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

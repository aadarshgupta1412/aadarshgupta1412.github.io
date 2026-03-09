'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: ReactNode;
  subtitle?: string;
  meta?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, subtitle, meta, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-[var(--background-light)] border-l-4 border-[var(--accent)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 hover:bg-[var(--background-light)]/80 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-[var(--text-title)]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-lg text-[var(--accent)] mt-1">{subtitle}</p>
              )}
            </div>
            {meta && (
              <span className="text-[var(--text-light)] text-sm md:text-base shrink-0">{meta}</span>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 mt-1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--text-light)]"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
}

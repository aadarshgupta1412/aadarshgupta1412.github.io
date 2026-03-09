'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { DecoderText } from './DecoderText';
import { RotatingText } from './RotatingText';
import { AnimatedScrollIndicator } from './AnimatedScrollIndicator';
import { TextRevealLine } from './TextReveal';
import { PERSONAL_INFO } from '@/lib/data';

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden">
      {/* Subtle grain texture overlay */}
      {isClient && (
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Name with Decoder Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-sm md:text-base font-medium tracking-[0.3em] text-[var(--text-light)] uppercase">
            <DecoderText text={PERSONAL_INFO.name} delay={300} />
          </h1>
        </motion.div>

        {/* Main Heading with Animated Line */}
        <div className="mb-8">
          {/* Main Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4">
            <TextRevealLine delay={0.2}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-title)] leading-none">
                {PERSONAL_INFO.title}
              </h2>
            </TextRevealLine>
            
            {/* Animated Horizontal Line */}
            <motion.div
              className="hidden md:block h-0.5 flex-grow bg-[var(--text-light)] opacity-30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Rotating Disciplines */}
          <motion.div 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-title)] leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <RotatingText
              texts={PERSONAL_INFO.disciplines}
              prefix="+"
              interval={3000}
              className="text-[var(--primary)]"
            />
          </motion.div>
        </div>

        {/* Tagline */}
        <TextRevealLine delay={0.5}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--text-body)] mb-8">
            {PERSONAL_INFO.tagline}
          </h3>
        </TextRevealLine>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[var(--text-body)] max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          I make AI systems that actually work in production — not just demos. 
          Currently shipping agentic workflows at{' '}
          <span className="text-[var(--primary)] font-medium">Thena.ai</span>, 
          with a background in neuroscience research at IIT Delhi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-xl font-medium overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <AnimatedScrollIndicator />
      </div>
    </section>
  );
}

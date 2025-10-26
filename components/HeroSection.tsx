'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense, lazy, useState, useEffect } from 'react';
import { DecoderText } from './DecoderText';
import { RotatingText } from './RotatingText';
import { AnimatedScrollIndicator } from './AnimatedScrollIndicator';
import { TextReveal, TextRevealLine } from './TextReveal';
import { PERSONAL_INFO } from '@/lib/data';

// Lazy load the heavy Three.js component
const DisplacementSphere = lazy(() => 
  import('./DisplacementSphere').then(mod => ({ default: mod.DisplacementSphere }))
);

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden">
      {/* Three.js Displacement Sphere Background */}
      {isClient && (
        <Suspense fallback={null}>
          <DisplacementSphere />
        </Suspense>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Name with Decoder Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h1 className="text-sm md:text-base font-medium tracking-[0.3em] text-[var(--text-light)] uppercase">
            <DecoderText text={PERSONAL_INFO.name} delay={500} />
          </h1>
        </motion.div>

        {/* Main Heading with Animated Line */}
        <div className="mb-8">
          {/* Main Title */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4">
            <TextRevealLine delay={0.6}>
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
                delay: 1.2,
                duration: 0.8,
                ease: [0.8, 0.1, 0.27, 1],
              }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Rotating Disciplines */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-title)] leading-none">
            <RotatingText
              texts={PERSONAL_INFO.disciplines}
              prefix="+"
              interval={3000}
              className="text-[var(--primary)]"
            />
          </div>
        </div>

        {/* Tagline */}
        <TextRevealLine delay={0.8}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--text-body)] mb-8">
            {PERSONAL_INFO.tagline}
          </h3>
        </TextRevealLine>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[var(--text-body)] max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Building production-grade AI agents and intelligent systems at{' '}
          <span className="text-[var(--primary)] font-medium">Thena.ai</span>. 
          Specializing in LLM integration, agentic workflows, and end-to-end ML pipelines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Link
            href="/work"
            className="group relative px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary)]/50"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.8, 0.1, 0.27, 1] }}
            />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white transition-all hover:scale-105"
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

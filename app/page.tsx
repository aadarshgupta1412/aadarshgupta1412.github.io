'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, FEATURED_PROJECTS, STATS } from '@/lib/data';
import { HeroSection } from '@/components/HeroSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';

export const dynamic = 'force-dynamic';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Work Section */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-title)] mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-[var(--text-body)] max-w-2xl">
              A selection of projects spanning AI/ML systems, research, and production deployments
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectShowcase
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-16 bg-gradient-to-b from-transparent via-[var(--background-light)]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[var(--text-title)] text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By the numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard number={stat.number} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-16 bg-[var(--background-light)] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium text-[var(--text-title)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--text-body)] mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I'm always interested in hearing about new projects and opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
}) {
  return (
    <Link href={link} className="group block h-full">
      <motion.div 
        className="h-full p-8 rounded-2xl bg-[var(--background)] transition-all duration-300 border-2 border-transparent relative overflow-hidden"
        whileHover={{ 
          y: -8,
          borderColor: 'var(--accent)',
          backgroundColor: 'var(--background-light)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
          }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-2xl font-medium text-[var(--text-title)] mb-4 group-hover:text-[var(--accent)] transition-colors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-[var(--text-body)] mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-[var(--background-light)] text-[var(--text-body)] group-hover:bg-[var(--background)] transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 text-[var(--accent)] opacity-0 group-hover:opacity-100"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div 
      className="text-center p-6 rounded-xl bg-[var(--background-light)] border-2 border-transparent hover:border-[var(--accent)] transition-colors"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div 
        className="text-5xl md:text-6xl font-medium text-[var(--primary)] mb-2"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        {number}
      </motion.div>
      <div className="text-[var(--text-light)] text-sm md:text-base">
        {label}
      </div>
    </motion.div>
  );
}

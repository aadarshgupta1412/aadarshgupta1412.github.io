'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS, STATS } from '@/lib/data';
import { HeroSection } from '@/components/HeroSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';

export default function Home() {
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

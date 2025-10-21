'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DeviceFrame } from './DeviceFrame';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  image?: string;
  variant?: 'default' | 'large' | 'featured';
}

export function ProjectShowcase({
  title,
  description,
  tags,
  link,
  image,
  variant = 'default',
}: ProjectShowcaseProps) {
  const isLarge = variant === 'large' || variant === 'featured';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative ${isLarge ? 'col-span-full' : ''}`}
    >
      <Link href={link} className="group block">
        <div
          className={`relative overflow-hidden rounded-3xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10 ${
            isLarge ? 'p-12' : 'p-8'
          }`}
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(circle at top right, var(--primary)/5, transparent 50%), radial-gradient(circle at bottom left, var(--accent)/5, transparent 50%)',
            }}
          />

          <div className={`relative z-10 ${isLarge ? 'grid md:grid-cols-2 gap-12 items-center' : ''}`}>
            {/* Content */}
            <div className={isLarge ? 'order-1' : ''}>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--background-light)] text-[var(--text-light)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <motion.h3
                className={`font-bold text-[var(--text-title)] mb-4 group-hover:text-[var(--primary)] transition-colors ${
                  isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Description */}
              <p
                className={`text-[var(--text-body)] leading-relaxed ${
                  isLarge ? 'text-lg mb-6' : 'text-base mb-4'
                }`}
              >
                {description}
              </p>

              {/* View link */}
              <div className="flex items-center gap-2 text-[var(--primary)] font-medium group/link">
                <span>View project</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover/link:translate-x-1 transition-transform"
                >
                  <path d="M4 10h12m-6-6l6 6-6 6" />
                </motion.svg>
              </div>
            </div>

            {/* Device mockup */}
            {isLarge && (
              <div className="order-2">
                <DeviceFrame variant="laptop">
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex items-center justify-center">
                    <div className="text-[var(--text-light)] text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <div className="text-sm">Project Preview</div>
                    </div>
                  </div>
                </DeviceFrame>
              </div>
            )}
          </div>

          {/* Hover border effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, var(--primary)/20, var(--accent)/20)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

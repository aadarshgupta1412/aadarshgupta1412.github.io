'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ease: [0.33, 1, 0.68, 1] as any, // cubic-bezier easing
    },
  },
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/aadarshgupta1412',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/aadarshgupta1412',
    icon: Linkedin,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=lfjj5T4AAAAJ',
    icon: GraduationCap,
  },
  {
    name: 'Email',
    href: 'mailto:aadarsh.iitd@gmail.com',
    icon: Mail,
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-bold tracking-tight mb-8"
          style={{
            fontSize: 'var(--font-size-h0)',
            lineHeight: 'var(--line-height-title)',
            color: 'var(--text-title)',
          }}
        >
          Aadarsh Gupta
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-medium mb-12"
          style={{
            fontSize: 'var(--font-size-h3)',
            color: 'var(--accent)',
          }}
        >
          AI/ML Engineer · Researcher · Builder
        </motion.h2>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 mb-12"
          style={{
            fontSize: 'var(--font-size-body-l)',
            lineHeight: 'var(--line-height-body)',
            color: 'var(--text-body)',
          }}
        >
          <p>
            Building intelligent systems at{' '}
            <Link
              href="https://thena.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--text-title)' }}
            >
              Thena.ai
            </Link>
            . Previously at Enphase Energy.
          </p>
          <p>
            IIT Delhi graduate focused on AI agents, brain-computer interfaces, and
            applied machine learning. Passionate about building production-grade ML
            systems that solve real-world problems.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 mb-12"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label={link.name}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex gap-6 flex-wrap">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--background)',
            }}
          >
            View My Work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="mailto:aadarsh.iitd@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all"
            style={{
              border: '2px solid var(--border)',
              color: 'var(--text-title)',
            }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

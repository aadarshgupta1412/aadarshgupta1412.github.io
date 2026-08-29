'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from './ExternalLink';
import { PERSONAL_INFO, STORY, SOCIAL_LINKS } from '@/lib/data';
import { SocialIcon } from '@/lib/icons';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] lg:min-h-svh flex items-center py-12 lg:py-0">
      <div className="relative z-10 w-full max-w-[1080px] 2xl:max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(220px,280px)] gap-10 lg:gap-16 items-center">
          <div>
            <motion.h1
              className="font-display text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[5.25rem] font-extrabold tracking-[-0.045em] leading-[0.95] text-[var(--text-title)] mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-title)] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              {PERSONAL_INFO.title} at{' '}
              <ExternalLink href={PERSONAL_INFO.affiliationUrl} className="text-[var(--primary)] hover:opacity-100">
                {PERSONAL_INFO.affiliation}
              </ExternalLink>
              <span className="text-[var(--text-light)] font-normal"> · {PERSONAL_INFO.location}</span>
            </motion.p>

            <motion.div
              className="space-y-4 text-base md:text-lg text-[var(--text-body)] max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.5 }}
            >
              {STORY.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {SOCIAL_LINKS.map((s) => (
                <ExternalLink
                  key={s.name}
                  href={s.url}
                  className="inline-flex items-center gap-2 text-[var(--text-light)] hover:text-[var(--accent)] hover:opacity-100"
                >
                  <SocialIcon name={s.icon} size={16} />
                  {s.name}
                </ExternalLink>
              ))}
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[var(--text-light)] hover:text-[var(--accent)]">
                Contact
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="justify-self-center lg:justify-self-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link href="/photography/" className="group block relative w-48 sm:w-56 lg:w-[240px]" aria-label="Captures">
              <div className="absolute -inset-3 rounded-full bg-[var(--accent)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-full overflow-hidden border border-[var(--border)] ring-1 ring-[var(--accent)]/20">
                <img
                  src={PERSONAL_INFO.portrait}
                  alt={PERSONAL_INFO.name}
                  className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                />
              </div>
              <span className="mt-3 block text-center text-xs tracking-widest uppercase text-[var(--text-light)]">
                Captures →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

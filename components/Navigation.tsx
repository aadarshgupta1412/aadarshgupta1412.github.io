'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { ExternalLink } from './ExternalLink';
import { NAV_ITEMS } from '@/lib/data';

const mobileItems = [{ name: 'Home', path: '/' }, ...NAV_ITEMS.map((i) => ({ name: i.label, path: i.href }))];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-[var(--text-title)] relative z-[60]">
            Aadarsh Gupta
          </Link>
          <div className="flex items-center gap-1 relative z-[60]">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-[var(--text-title)]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={toggleMenu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--background)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pt-10">
              {mobileItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.path}
                    className={`text-3xl font-medium transition-colors ${
                      pathname === item.path || pathname === item.path.replace(/\/$/, '')
                        ? 'text-[var(--primary)]'
                        : 'text-[var(--text-body)] hover:text-[var(--primary)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <ExternalLink
                href="/resume.pdf"
                className="mt-4 px-5 py-2.5 border border-[var(--primary)] text-[var(--primary)] rounded-lg text-sm font-medium hover:opacity-100"
              >
                CV
              </ExternalLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

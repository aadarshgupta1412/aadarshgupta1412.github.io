'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Mobile-only navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[var(--background)]/95 backdrop-blur-md">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-[var(--text-title)] font-medium text-lg hover:opacity-80 transition-opacity relative z-[60]"
              title="Aadarsh Gupta"
            >
              Aadarsh Gupta
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 relative z-[60] text-[var(--text-title)]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={toggleMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.line
                  x1="3" x2="21" y1="6" y2="6"
                  animate={mobileOpen ? { y1: 12, y2: 12, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.line
                  x1="3" y1="12" x2="21" y2="12"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.line
                  x1="3" x2="21" y1="18" y2="18"
                  animate={mobileOpen ? { y1: 12, y2: 12, rotate: -45 } : { y1: 18, y2: 18, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--background)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-3xl font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-[var(--primary)]'
                        : 'text-[var(--text-body)] hover:text-[var(--primary)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

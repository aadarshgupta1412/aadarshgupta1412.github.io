'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monogram } from './Monogram';
import { SOCIAL_LINKS } from '@/lib/data';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function VerticalNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && !activeHash;
    }
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <nav 
      className="fixed left-8 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center py-8"
      style={{ 
        width: '48px',
        maxWidth: '48px'
      }}
    >
      {/* Monogram at top */}
      <Link
        href={pathname === '/' ? '/#intro' : '/'}
        className="mb-16 text-[var(--text-title)] hover:text-[var(--accent)] transition-colors"
        aria-label="Aadarsh Gupta, AI/ML Engineer"
      >
        <Monogram highlight />
      </Link>

      {/* Navigation items */}
      <div className="flex flex-col gap-8 flex-1 justify-center items-center">
        {navItems.map((item) => {
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className="nav-link group relative inline-flex items-center text-base font-medium"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                padding: '16px 0',
                color: active ? 'var(--text-body)' : 'var(--text-light)',
                lineHeight: 1,
                transition: 'color 200ms ease',
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      
      {/* Social icons at bottom */}
      <div className="flex flex-col gap-6 mt-16">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
            aria-label={social.name}
            title={social.name}
          >
            {social.icon === 'github' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            )}
            {social.icon === 'linkedin' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            )}
            {social.icon === 'scholar' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            )}
          </a>
        ))}
      </div>
      
      {/* Hover effect with ::after pseudo-element for strikethrough */}
      <style jsx global>{`
        .nav-link::after {
          content: '';
          position: absolute;
          inset-inline-start: 12px;
          inset-inline-end: 12px;
          block-size: 4px;
          background: var(--accent);
          transform: scaleY(0) translateZ(0);
          transform-origin: bottom;
          transition: transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .nav-link:hover,
        .nav-link:active,
        .nav-link[aria-current='page'] {
          color: var(--text-body) !important;
        }
        
        .nav-link:hover::after,
        .nav-link:active::after,
        .nav-link[aria-current='page']::after {
          transform: scaleY(1) translateZ(0);
          transform-origin: top;
        }
      `}</style>
    </nav>
  );
}

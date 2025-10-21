'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
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
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col justify-between items-center"
      style={{ 
        width: '48px',
        maxWidth: '48px'
      }}
    >
      <ul 
        className="flex flex-col-reverse relative"
        style={{ 
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
        }}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="group relative inline-flex items-center text-base font-medium transition-colors duration-200"
                style={{
                  padding: '16px',
                  color: active ? 'var(--text-body)' : 'color-mix(in lab, var(--text) 80%, transparent)',
                  lineHeight: 1,
                }}
              >
                {item.label}
                {/* Underline indicator */}
                <span
                  className="absolute transition-transform duration-300 bg-[var(--accent)]"
                  style={{
                    insetInlineStart: '8px',
                    insetInlineEnd: '8px',
                    blockSize: '4px',
                    transform: active 
                      ? 'scaleY(1) translateZ(0)' 
                      : 'scaleY(0) translateZ(0)',
                    transformOrigin: active ? 'top' : 'bottom',
                    transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      
      {/* Hover effect */}
      <style jsx>{`
        a:hover {
          color: var(--text-body) !important;
        }
        a:hover span {
          transform: scaleY(1) translateZ(0) !important;
          transform-origin: top !important;
        }
      `}</style>
    </nav>
  );
}

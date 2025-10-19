'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'color-mix(in srgb, var(--background) 80%, transparent)',
      }}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo/Name */}
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight transition-colors"
          style={{
            color: 'var(--text-title)',
          }}
        >
          {isHomePage ? 'AG' : 'Aadarsh Gupta'}
        </Link>

        {/* Navigation + Theme Toggle */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-medium text-sm transition-colors"
                style={{
                  color:
                    pathname === item.href
                      ? 'var(--text-title)'
                      : 'var(--text-light)',
                }}
              >
                {item.name}
                {pathname === item.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

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
    <header className="w-full py-6">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Left side: Name/Logo (always visible, clickable on non-home pages) */}
        <div className="flex items-center">
          {!isHomePage ? (
            <Link 
              href="/" 
              className="text-lg font-semibold hover:text-muted-foreground transition-colors"
            >
              Aadarsh Gupta
            </Link>
          ) : (
            <span className="text-lg font-semibold text-muted-foreground">
              AG
            </span>
          )}
        </div>

        {/* Right side: Navigation + Theme Toggle */}
        <div className="flex items-center gap-6">
          {!isHomePage && (
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main container using flex, items-center, and justify-between */}
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Links */}
        {/* Use space-x-8 for spacing between direct children (Links) */}
        <nav className="flex items-center space-x-8 text-sm font-medium">
          {/* First link (Your Name) - no extra margins needed */}
          <Link href="/" className="flex items-center space-x-2">
            {/* TODO: Replace Your Name */}
            <span className="font-bold">Your Name</span>
          </Link>

          {/* Subsequent links - spacing handled by parent's space-x-8 */}
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="/work" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Work
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </Link>
          <Link href="/creative" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Creative
          </Link>
        </nav>

        {/* Theme Toggle Container - simple flex container */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
};

export default Header;
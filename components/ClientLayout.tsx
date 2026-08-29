'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { VerticalNav } from './VerticalNav';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';

export function ClientLayout({ children }: { children: ReactNode }) {
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <Navigation />
      <VerticalNav />
      <div className="hidden lg:block">
        <ThemeToggle className="fixed top-7 right-7 xl:top-8 xl:right-8 z-50" />
      </div>
      <div className="pt-14 lg:pt-0 lg:pl-16 xl:pl-[72px]">{children}</div>
    </>
  );
}

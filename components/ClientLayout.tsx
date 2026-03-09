'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { VerticalNav } from './VerticalNav';
import { Navigation } from './Navigation';

export function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.classList.add('is-scrolling');
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {mounted && (
        <>
          <Navigation />
          <VerticalNav />
        </>
      )}
      {children}
    </>
  );
}

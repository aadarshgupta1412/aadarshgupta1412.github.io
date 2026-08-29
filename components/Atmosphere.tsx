'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Atmosphere() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.atmosphere = isHome ? 'home' : 'page';

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const setScroll = (value: number) => {
      root.style.setProperty('--atmosphere-scroll', value.toFixed(3));
    };

    if (reduce) {
      setScroll(isHome ? 0.2 : 0.45);
      return () => {
        delete root.dataset.atmosphere;
        root.style.removeProperty('--atmosphere-scroll');
      };
    }

    const update = () => {
      const vh = window.innerHeight || 1;
      setScroll(Math.min(1, window.scrollY / (vh * 0.95)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      delete root.dataset.atmosphere;
      root.style.removeProperty('--atmosphere-scroll');
    };
  }, [isHome]);

  return (
    <div className="atmosphere" aria-hidden>
      <div className="atmosphere-grain" />
      <div className="atmosphere-wash" />
    </div>
  );
}

'use client';

import { ReactNode, useEffect, useState } from 'react';
import { VerticalNav } from './VerticalNav';
import { ThemeToggle } from './ThemeToggle';

export function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <>
          <VerticalNav />
          <ThemeToggle />
        </>
      )}
      {children}
    </>
  );
}


'use client';

import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/lib/data';

export function EmailScrambler({ className = '' }: { className?: string }) {
  const [addr, setAddr] = useState('');

  useEffect(() => {
    const user = ['aadarsh', 'iitd'].join('.');
    const host = ['gmail', 'com'].join('.');
    setAddr(`${user}@${host}`);
  }, []);

  if (!addr) {
    return (
      <span className={className} aria-hidden>
        [email]
      </span>
    );
  }

  return (
    <a href={`mailto:${addr}`} className={className}>
      {addr}
    </a>
  );
}

export function EmailButton({ className = '' }: { className?: string }) {
  const [href, setHref] = useState('#');

  useEffect(() => {
    setHref(`mailto:${PERSONAL_INFO.email}`);
  }, []);

  return (
    <a href={href} className={className}>
      Write
    </a>
  );
}

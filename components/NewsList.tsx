'use client';

import { useState } from 'react';
import { NEWS } from '@/lib/data';
import { ExternalLink } from './ExternalLink';
import { FadeIn } from './FadeIn';

export function NewsList({ preview = 6 }: { preview?: number }) {
  const [open, setOpen] = useState(false);
  const items = open ? NEWS : NEWS.slice(0, preview);
  const hasMore = NEWS.length > preview;

  return (
    <FadeIn>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.date + item.text} className="flex gap-4 md:gap-6 text-[15px] leading-relaxed">
            <span className="font-mono text-xs text-[var(--accent)] shrink-0 w-[4.5rem] pt-1">
              {item.date}
            </span>
            <span className="text-[var(--text-body)]">
              {item.href ? (
                <ExternalLink href={item.href} className="hover:text-[var(--accent)] hover:opacity-100">
                  {item.text}
                </ExternalLink>
              ) : (
                item.text
              )}
            </span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-5 text-sm text-[var(--primary)] hover:opacity-100"
        >
          {open ? 'Show less' : 'All news →'}
        </button>
      )}
    </FadeIn>
  );
}

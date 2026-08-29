'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monogram } from './Monogram';
import { ExternalLink } from './ExternalLink';
import { SocialIcon } from '@/lib/icons';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/data';

export function VerticalNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    const base = href.replace(/\/$/, '');
    return pathname === href || pathname === base || pathname?.startsWith(base + '/');
  };

  return (
    <nav
      className="fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center py-6 w-16 xl:w-[72px] overflow-y-auto"
      aria-label="Primary"
    >
      <Link
        href="/"
        className="mb-6 text-[var(--text-title)] hover:text-[var(--accent)]"
        aria-label="Aadarsh Gupta — home"
      >
        <Monogram highlight />
      </Link>

      <div className="flex flex-col gap-3 flex-1 justify-center items-center">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className="nav-link group relative inline-flex items-center text-[13px] xl:text-sm font-medium tracking-wide"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                padding: '6px 0',
                color: active ? 'var(--text-body)' : 'var(--text-light)',
                lineHeight: 1,
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 mt-4 pb-1">
        {SOCIAL_LINKS.map((social) => (
          <ExternalLink
            key={social.name}
            href={social.url}
            className="text-[var(--text-light)] hover:text-[var(--accent)] hover:opacity-100"
            aria-label={social.name}
            title={social.name}
          >
            <SocialIcon name={social.icon} size={18} />
          </ExternalLink>
        ))}
      </div>

      <style jsx global>{`
        .nav-link::after {
          content: '';
          position: absolute;
          inset-inline-start: 10px;
          inset-inline-end: 10px;
          block-size: 3px;
          background: var(--accent);
          transform: scaleY(0) translateZ(0);
          transform-origin: bottom;
          transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover,
        .nav-link[aria-current='page'] {
          color: var(--text-body) !important;
        }
        .nav-link:hover::after,
        .nav-link[aria-current='page']::after {
          transform: scaleY(1) translateZ(0);
          transform-origin: top;
        }
      `}</style>
    </nav>
  );
}

'use client';

import { useId } from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const id = useId();
  const maskId = `${id}-theme-toggle-mask`;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-2 rounded-lg hover:opacity-80 transition-opacity"
      aria-label="Toggle theme"
      style={{
        color: 'var(--text-body)',
      }}
    >
      <svg
        aria-hidden="true"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        style={{
          display: 'block',
        }}
      >
        <defs>
          <mask id={maskId}>
            <circle
              cx="19"
              cy="19"
              r="13"
              fill="white"
              style={{
                transform: theme === 'dark' ? 'scale(1)' : 'scale(0.6)',
                transformOrigin: 'center',
                transition: 'transform var(--duration-l) var(--bezier)',
                transitionDelay: theme === 'dark' ? '0.3s' : '0s',
              }}
            />
            <circle
              cx="25"
              cy="14"
              r="9"
              fill="black"
              style={{
                transform: theme === 'dark' ? 'translate(0, 0)' : 'translate(100%, -100%)',
                transition: 'transform var(--duration-l) var(--bezier)',
                transitionDelay: theme === 'dark' ? '0.3s' : '0s',
              }}
            />
          </mask>
        </defs>
        {/* Sun rays */}
        <path
          d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7 7"
          fill="none"
          style={{
            strokeDashoffset: theme === 'dark' ? 7 : 0,
            opacity: theme === 'dark' ? 0 : 1,
            transition: 'stroke-dashoffset var(--duration-l) var(--bezier), opacity var(--duration-l) var(--bezier)',
            transitionDelay: theme === 'dark' ? '0s' : '0.3s',
          }}
        />
        {/* Moon/Sun circle */}
        <circle
          mask={`url(#${maskId})`}
          cx="19"
          cy="19"
          r="12"
          fill="currentColor"
          style={{
            transform: theme === 'dark' ? 'scale(1)' : 'scale(0.6)',
            transformOrigin: 'center',
            transition: 'transform var(--duration-l) var(--bezier)',
            transitionDelay: theme === 'dark' ? '0.3s' : '0s',
          }}
        />
      </svg>
    </button>
  );
}

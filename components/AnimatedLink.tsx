'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  secondary?: boolean;
}

export function AnimatedLink({ 
  href, 
  children, 
  className = '', 
  external = false,
  secondary = false 
}: AnimatedLinkProps) {
  const linkColor = secondary ? 'var(--text)' : 'var(--primary)';
  const lineOpacity = '30%';
  
  const linkStyle = {
    '--link-color': linkColor,
    '--line-opacity': lineOpacity,
    '--filled-gradient': `linear-gradient(${linkColor}, ${linkColor})`,
    '--unfilled-gradient': `linear-gradient(color-mix(in lab, ${linkColor} ${lineOpacity}, transparent), color-mix(in lab, ${linkColor} ${lineOpacity}, transparent))`,
    cursor: 'pointer',
    display: 'inline',
    color: linkColor,
    background: `var(--filled-gradient) no-repeat 100% 100% / 0 2px, var(--unfilled-gradient) no-repeat 0 100% / 100% 2px`,
    paddingBottom: '2px',
    transition: 'background-size 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
  } as React.CSSProperties;

  const hoverStyle = {
    background: `var(--filled-gradient) no-repeat 0 100% / 100% 2px, var(--unfilled-gradient) no-repeat 0 100% / 100% 2px`,
  };

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, linkStyle);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      style={linkStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, linkStyle);
      }}
    >
      {children}
    </Link>
  );
}


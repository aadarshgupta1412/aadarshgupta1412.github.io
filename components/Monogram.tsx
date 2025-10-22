'use client';

import { forwardRef, useId } from 'react';

interface MonogramProps extends React.SVGProps<SVGSVGElement> {
  highlight?: boolean;
}

export const Monogram = forwardRef<SVGSVGElement, MonogramProps>(
  ({ highlight, className = '', ...props }, ref) => {
    const id = useId();
    const clipId = `${id}monogram-clip`;

    return (
      <>
        <svg
          aria-hidden
          className={`monogram ${className}`}
          width="46"
          height="29"
          viewBox="0 0 46 29"
          ref={ref}
          {...props}
        >
          <defs>
            <clipPath id={clipId}>
              {/* Stylized "A" path - clean and modern */}
              <path d="M20 0L8 29h6l2-5h12l2 5h6L24 0h-4zm2 8l4 11h-8l4-11z" />
            </clipPath>
          </defs>
          {/* Base layer - always visible */}
          <rect 
            clipPath={`url(#${clipId})`} 
            width="100%" 
            height="100%" 
            className="monogram-base"
          />
          {/* Highlight layer - animated on hover */}
          {highlight && (
            <g clipPath={`url(#${clipId})`}>
              <rect
                width="100%"
                height="100%"
                className="monogram-highlight"
              />
            </g>
          )}
        </svg>
        
        <style jsx global>{`
          .monogram {
            transition: fill 600ms ease;
          }
          
          .monogram-base {
            fill: var(--text-title);
            transition: fill 600ms ease;
          }
          
          .monogram-highlight {
            fill: var(--accent);
            opacity: 0;
            transform: scale3d(1, 0, 1);
            transform-origin: top;
            transition: transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1),
                        opacity 0.1s ease 400ms;
          }
          
          a:hover .monogram-highlight,
          .monogram:hover .monogram-highlight {
            opacity: 1;
            transform: scale3d(1, 1, 1);
            transform-origin: bottom;
            transition: transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1),
                        opacity 0.1s ease;
          }
          
          /* Respect reduced motion preference */
          @media (prefers-reduced-motion: reduce) {
            .monogram-highlight {
              transition: opacity 0.2s ease;
              transform: none !important;
            }
            
            a:hover .monogram-highlight,
            .monogram:hover .monogram-highlight {
              transition: opacity 0.2s ease;
            }
          }
        `}</style>
      </>
    );
  }
);

Monogram.displayName = 'Monogram';

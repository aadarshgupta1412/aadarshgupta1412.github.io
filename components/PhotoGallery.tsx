'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PHOTOGRAPHY } from '@/lib/data';

const ease = [0.25, 0.1, 0.25, 1] as const;

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActive(null), []);

  const shift = useCallback((dir: number) => {
    setActive((i) => {
      if (i === null) return i;
      return (i + dir + PHOTOGRAPHY.length) % PHOTOGRAPHY.length;
    });
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') shift(1);
      if (e.key === 'ArrowLeft') shift(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lightbox-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.documentElement.classList.remove('lightbox-open');
    };
  }, [active, close, shift]);

  const photo = active !== null ? PHOTOGRAPHY[active] : null;
  const duration = reduce ? 0.01 : 0.38;

  return (
    <>
      <ul className="columns-1 sm:columns-2 gap-5 [column-fill:_balance] list-none p-0 m-0">
        {PHOTOGRAPHY.map((item, i) => (
          <li key={item.id} className="mb-8 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="w-full text-left rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block rounded-xl"
              />
              <span className="mt-2.5 block px-0.5">
                <span className="block font-display text-[15px] text-[var(--text-title)]">
                  {item.title}
                </span>
                <span className="block mt-0.5 text-sm leading-snug text-[var(--text-light)]">
                  {item.note}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {photo && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration, ease }}
                onClick={close}
              >
                <div
                  className="absolute inset-0 backdrop-blur-md"
                  style={{ backgroundColor: 'rgba(10, 12, 14, 0.28)' }}
                  aria-hidden
                />

                <button
                  type="button"
                  aria-label="Close"
                  onClick={close}
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/15 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3.5 3.5l9 9M12.5 3.5l-9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Previous"
                  className="absolute left-1 sm:left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    shift(-1);
                  }}
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    ‹
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Next"
                  className="absolute right-1 sm:right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    shift(1);
                  }}
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    ›
                  </span>
                </button>

                <AnimatePresence mode="wait">
                  <motion.figure
                    key={photo.id}
                    className="relative z-10 m-0"
                    initial={{ opacity: 0, scale: reduce ? 1 : 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: reduce ? 1 : 0.985 }}
                    transition={{ duration, ease }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="block mx-auto max-h-[92vh] w-auto max-w-[min(94vw,1600px)] h-auto object-contain rounded-md select-none"
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-md bg-gradient-to-t from-black/70 via-black/35 to-transparent pt-16 pb-4 px-6 text-center">
                      <p id={titleId} className="font-display text-base sm:text-lg text-white">
                        {photo.title}
                      </p>
                      <p className="mt-1 text-sm text-white/80 max-w-md mx-auto">
                        {photo.note}
                      </p>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

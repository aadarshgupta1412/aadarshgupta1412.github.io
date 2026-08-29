'use client';

import { useCallback, useEffect, useState } from 'react';
import { PHOTOGRAPHY } from '@/lib/data';

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const shift = useCallback(
    (dir: number) => {
      setActive((i) => {
        if (i === null) return i;
        return (i + dir + PHOTOGRAPHY.length) % PHOTOGRAPHY.length;
      });
    },
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') shift(1);
      if (e.key === 'ArrowLeft') shift(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, shift]);

  return (
    <>
      <div className="columns-1 sm:columns-2 gap-4 [column-fill:_balance]">
        {PHOTOGRAPHY.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActive(i)}
            className="mb-4 w-full break-inside-avoid group relative overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto block"
            />
            <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm text-white/90 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/88 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOGRAPHY[active].caption}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white text-sm tracking-widest uppercase"
            onClick={close}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-3 md:left-6 text-white/70 hover:text-white text-3xl px-2"
            onClick={(e) => {
              e.stopPropagation();
              shift(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <figure
            className="max-w-5xl max-h-[88vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PHOTOGRAPHY[active].src}
              alt={PHOTOGRAPHY[active].alt}
              className="max-h-[80vh] w-auto max-w-full mx-auto rounded-lg"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {PHOTOGRAPHY[active].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 md:right-6 text-white/70 hover:text-white text-3xl px-2"
            onClick={(e) => {
              e.stopPropagation();
              shift(1);
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

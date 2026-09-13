'use client';

import { useEffect, useRef, useState } from 'react';

type Perch = 'hello' | 'work' | 'photos' | 'notes' | 'contact';
const captions: Record<Perch, string> = {
  hello: 'Oh, hello.',
  work: 'Following the evidence.',
  photos: 'Nice light.',
  notes: 'Just one more page.',
  contact: 'See you on the trail.',
};

function Bird({ perch }: { perch: Perch }) {
  return (
    <svg viewBox="0 0 88 88" fill="none" aria-hidden="true" className="trail-bird">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path className="bird-ground" d="M15 77c17-2 37-1 56 0" opacity=".25" />
        <path d="m37 68-2 8m3-1-7 1m20-8 2 8m-2-1 7 1" />
        <g className="bird-body">
          <path d="M24 55 13 48l8 17 12-1" fill="var(--background)" />
          <path d="M26 36c0-14 10-22 23-20 13 1 20 13 17 28-1 5 1 9-1 14-4 12-22 16-33 8-8-6-9-17-6-30Z" fill="var(--background)" />
          <path d="m42 16-4-7m8 7 2-9m3 10 6-6" />
          <path d="m65 35 10 5-11 4" fill="var(--accent)" />
          <g className="bird-eyes">
            <circle cx="43" cy="32" r="2.1" fill="currentColor" stroke="none" />
            <circle cx="57" cy="32" r="2.1" fill="currentColor" stroke="none" />
          </g>
          <path d="M47 39q4 3 7 0" opacity=".65" />
          <path className="bird-wing" d="M32 44c-3 13 8 16 16 9-6 1-11-3-16-9Z" fill="var(--background)" />
          {perch === 'work' && <g className="bird-prop"><circle cx="60" cy="48" r="8" fill="var(--background)" /><path d="m66 54 7 9" /><circle cx="60" cy="48" r="4.5" stroke="var(--accent)" opacity=".6" /></g>}
          {perch === 'photos' && <g className="bird-prop"><path d="m43 51 4-5h12l3 5h6v15H42V51Z" fill="var(--background)" /><circle cx="55" cy="58" r="5" stroke="var(--accent)" /><path d="M63 54h1" /></g>}
          {perch === 'notes' && <g className="bird-prop"><path d="M42 50q8-3 13 1 6-4 14-1v17q-8-3-14 1-5-4-13-1Z" fill="var(--background)" /><path d="M55 51v17m-9-13 5 1m8 0 6-1m-19 5 5 1m8 0 6-1" opacity=".6" /></g>}
          {perch === 'contact' && <g className="bird-prop"><path d="M43 49h26v17H43Z" fill="var(--background)" /><path d="m43 49 13 10 13-10" stroke="var(--accent)" /></g>}
        </g>
      </g>
    </svg>
  );
}

function BirdButton({ perch }: { perch: Perch }) {
  const [greeting, setGreeting] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <div className="bird-perch">
      <button
        type="button"
        className="bird-button"
        aria-label="Say hello to the trail bird"
        onClick={() => {
          setGreeting((value) => value + 1);
          setSpeaking(true);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => setSpeaking(false), 2400);
        }}
      >
        <span key={greeting} className={greeting ? 'bird-greeting' : ''}><Bird perch={perch} /></span>
      </button>
      <span className="bird-caption" data-speaking={speaking} role="status">{speaking ? captions[perch] : ''}</span>
    </div>
  );
}

/** In-flow perches keep the bird clear of text on small screens. */
export function CompanionPerch({ perch }: { perch: Perch }) {
  return <div className="bird-inline"><BirdButton perch={perch} /></div>;
}

/** One margin companion on wide screens; only computes while input changes. */
export function TrailCompanion() {
  const [perch, setPerch] = useState<Perch>('hello');
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bird-perch]'));

    function update() {
      frame = 0;
      if (!desktop.matches || document.hidden || !rail.current) return;
      let current: Perch = 'hello';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = section.dataset.birdPerch as Perch;
        }
      }
      setPerch(current);
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)));
      const y = reduced.matches ? 0 : progress * Math.min(160, window.innerHeight * 0.2);
      let xEye = 0;
      let yEye = 0;
      if (pointer && !reduced.matches) {
        const bounds = rail.current.getBoundingClientRect();
        xEye = Math.max(-2, Math.min(2, (pointer.x - bounds.left - bounds.width / 2) / 160));
        yEye = Math.max(-1.5, Math.min(1.5, (pointer.y - bounds.top - 28) / 160));
      }
      rail.current.style.cssText = `--bird-travel: ${y}px; --bird-eye-x: ${xEye}px; --bird-eye-y: ${yEye}px;`;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function onPointer(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || reduced.matches || !desktop.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    }
    function resetPointer() { pointer = null; schedule(); }

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', schedule);
    reduced.addEventListener('change', schedule);
    desktop.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', onPointer);
      document.documentElement.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('visibilitychange', schedule);
      reduced.removeEventListener('change', schedule);
      desktop.removeEventListener('change', schedule);
    };
  }, []);

  return <div ref={rail} className="bird-rail"><BirdButton perch={perch} /></div>;
}

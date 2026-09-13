'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

type Perch = 'hello' | 'work' | 'photos' | 'notes' | 'contact' | 'map';
const captions: Record<Perch, string> = {
  hello: 'Oh, hello.',
  work: 'Following the evidence.',
  photos: 'Nice light.',
  notes: 'Just one more page.',
  contact: 'A little note for the road.',
  map: 'How did we get here?',
};

function Bird({ perch }: { perch: Perch }) {
  const { theme, themeChangeId } = useTheme();
  const lastThemeChange = useRef(themeChangeId);
  const [birdTheme, setBirdTheme] = useState(theme);
  const cloth = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const deliberate = lastThemeChange.current !== themeChangeId;
    lastThemeChange.current = themeChangeId;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!deliberate || reduced.matches || !cloth.current?.animate) {
      setBirdTheme(theme);
      return;
    }

    // The bird keeps its old palette until the cloth completely covers it.
    const animation = cloth.current.animate([
      { opacity: 0, transform: 'translate(12px, 44px) scale(0.08, 0.12)' },
      { opacity: 1, transform: 'translate(0, 20px) scale(0.65, 0.7)', offset: 0.12 },
      { opacity: 1, transform: 'translate(0, 0) scale(1)', offset: 0.28 },
      { opacity: 1, transform: 'translate(0, 0) scale(1)', offset: 0.58 },
      { opacity: 1, transform: 'translate(8px, 30px) scale(0.8, 0.45)', offset: 0.82 },
      { opacity: 0, transform: 'translate(12px, 44px) scale(0.08, 0.12)' },
    ], { duration: 1600, easing: 'ease-in-out' });
    const reveal = window.setTimeout(() => setBirdTheme(theme), 600);
    const onPreferenceChange = () => {
      if (reduced.matches) {
        window.clearTimeout(reveal);
        animation.cancel();
        setBirdTheme(theme);
      }
    };
    reduced.addEventListener('change', onPreferenceChange);
    return () => {
      window.clearTimeout(reveal);
      animation.cancel();
      reduced.removeEventListener('change', onPreferenceChange);
    };
  }, [theme, themeChangeId]);

  return (
    <svg data-bird-theme={birdTheme} viewBox="0 0 88 88" fill="none" aria-hidden="true" className="trail-bird">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path className="bird-ground" d="M15 77c17-2 37-1 56 0" opacity=".25" />
        <path d="m37 68-2 8m3-1-7 1m20-8 2 8m-2-1 7 1" />
        <g className="bird-body">
          <path d="M24 55 13 48l8 17 12-1" fill="var(--background)" />
          <g className="bird-backpack">
            <path d="M17 39v-4q0-5 5-5h3" />
            <path d="M13 39q7-5 16 0l2 24q-9 6-18 0Z" fill="var(--background-light)" />
            <path d="M16 51h12v10H16Z" opacity=".65" />
            <path className="bird-pack-flap" d="M13 39q8-4 16 0l-2 9H15Z" fill="var(--background-light)" />
            <path d="M21 45v5" stroke="var(--accent)" />
          </g>
          <path d="M26 36c0-14 10-22 23-20 13 1 20 13 17 28-1 5 1 9-1 14-4 12-22 16-33 8-8-6-9-17-6-30Z" fill="var(--background)" />
          <path d="M28 38q6 5 6 16" stroke="var(--accent)" opacity=".7" />
          <path d="m42 16-4-7m8 7 2-9m3 10 6-6" />
          <path d="m65 35 10 5-11 4" fill="var(--accent)" />
          <g className="bird-eyes">
              <circle cx="43" cy="32" r="2.1" fill="currentColor" stroke="none" />
              <circle cx="57" cy="32" r="2.1" fill="currentColor" stroke="none" />
          </g>
          <path d="M47 39q4 3 7 0" opacity=".65" />
          <path className="bird-wing" d="M32 44c-3 13 8 16 16 9-6 1-11-3-16-9Z" fill="var(--background)" />
          {perch === 'work' && <g className="bird-prop"><g className="bird-tool"><circle cx="60" cy="48" r="8" fill="var(--background)" /><path d="m66 54 7 9" /><circle cx="60" cy="48" r="4.5" stroke="var(--accent)" opacity=".6" /></g></g>}
          {perch === 'photos' && <g className="bird-prop"><g className="bird-tool"><path d="m43 51 4-5h12l3 5h6v15H42V51Z" fill="var(--background)" /><circle cx="55" cy="58" r="5" stroke="var(--accent)" /><path d="M63 54h1" /><path className="bird-shutter" d="m69 43 3-3m-7 1v-4m7 10h4" stroke="var(--accent)" /></g></g>}
          {perch === 'notes' && <g className="bird-prop"><g className="bird-tool"><path d="M42 50q8-3 13 1 6-4 14-1v17q-8-3-14 1-5-4-13-1Z" fill="var(--background)" /><path d="M55 51v17m-9-13 5 1m8 0 6-1m-19 5 5 1m8 0 6-1" opacity=".6" /></g></g>}
          {(perch === 'map' || perch === 'hello') && <g className="bird-prop"><g className="bird-tool"><path d="m41 50 9-3 9 3 10-3v20l-10 3-9-3-9 3Z" fill="var(--background)" /><path d="M50 47v20m9-17v20" opacity=".4" /><path className="bird-map-route" d="m45 62 7-8 6 9 7-8" stroke="var(--accent)" strokeDasharray="2 3" /><circle cx="65" cy="55" r="2" fill="var(--accent)" stroke="none" /></g></g>}
          {perch === 'contact' && <g className="bird-prop"><g className="bird-tool"><path d="M43 49h26v17H43Z" fill="var(--background)" /><path d="m43 49 13 10 13-10" stroke="var(--accent)" /></g></g>}
        </g>
      </g>
      <g ref={cloth} className="bird-cloth" stroke="#866e98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6Q24 1 42 6T79 5L81 75Q72 82 62 77T43 79T24 77T7 78Z" fill="#dbcce8" />
        <path d="M23 9Q18 35 23 72M42 10Q48 37 42 73M64 9Q58 39 66 72" opacity=".35" />
        <path d="m45 30 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#fff9ed" stroke="none" />
        <path d="M12 72q8-3 13 1t17 0 18 0 16-1" strokeDasharray="2 3" opacity=".6" />
      </g>
    </svg>
  );
}

function BirdButton({ perch, route }: { perch: Perch; route: string }) {
  const [greeting, setGreeting] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    setSpeaking(false);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [route, perch]);

  return (
    <div className="bird-perch">
      <button
        type="button"
        className="bird-button"
        aria-label="See what the trail bird has in its backpack"
        onClick={() => {
          setGreeting((value) => value + 1);
          setSpeaking(true);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => setSpeaking(false), 2400);
        }}
      >
        <span key={`${route}:${perch}:${greeting}`} className="bird-action" data-tool={perch}><Bird perch={perch} /></span>
      </button>
      <span className="bird-caption" data-speaking={speaking} role="status">{speaking ? captions[perch] : ''}</span>
    </div>
  );
}

/** One continuous margin companion at every viewport size. */
export function TrailCompanion() {
  const pathname = usePathname();
  const [homePerch, setHomePerch] = useState<Perch>('hello');
  const page = pathname.split('/').filter(Boolean)[0] || '';
  const routePerches: Record<string, Perch> = { projects: 'work', photography: 'photos', blog: 'notes', about: 'map', vitae: 'map', contact: 'contact' };
  const perch = page ? (routePerches[page] || 'hello') : homePerch;
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let lastScroll = window.scrollY;
    let scrollGaze = 0;
    let pointer: { x: number; y: number } | null = null;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bird-perch]'));

    function update() {
      frame = 0;
      if (document.hidden || !rail.current) return;
      let current: Perch = 'hello';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = section.dataset.birdPerch as Perch;
        }
      }
      setHomePerch(current);
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)));
      const y = reduced.matches ? 0 : progress * Math.min(160, window.innerHeight * 0.2);
      let xEye = reduced.matches ? 0 : -1;
      let yEye = reduced.matches ? 0 : scrollGaze;
      if (pointer && !reduced.matches) {
        const bounds = rail.current.getBoundingClientRect();
        xEye = Math.max(-2, Math.min(2, (pointer.x - bounds.left - bounds.width / 2) / 160));
        yEye = Math.max(-1.5, Math.min(1.5, (pointer.y - bounds.top - 28) / 160));
      }
      rail.current.style.cssText = `--bird-travel: ${y}px; --bird-eye-x: ${xEye}px; --bird-eye-y: ${yEye}px;`;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function onScroll() {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (Math.abs(delta) > 0.5) scrollGaze = delta > 0 ? 2.5 : -2.5;
      pointer = null;
      schedule();
    }
    function onPointer(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || reduced.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    }
    function resetPointer() { pointer = null; schedule(); }

    schedule();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', schedule);
    reduced.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', onPointer);
      document.documentElement.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('visibilitychange', schedule);
      reduced.removeEventListener('change', schedule);
    };
  }, [pathname]);

  return <div ref={rail} className="bird-rail"><BirdButton perch={perch} route={pathname} /></div>;
}

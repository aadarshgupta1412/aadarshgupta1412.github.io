import { ARC } from '@/lib/data';
import { FadeIn } from './FadeIn';

export function StoryArc() {
  return (
    <FadeIn>
      <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        <div
          className="hidden lg:block absolute top-[22px] left-[8%] right-[8%] h-px bg-[var(--border)]"
          aria-hidden
        />
        {ARC.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="flex lg:flex-col lg:items-center gap-4 lg:gap-3 lg:text-center">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] font-mono text-[11px] text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-mono text-[11px] tracking-wide text-[var(--text-light)] mb-1">
                  {step.year}
                </p>
                <h3 className="font-display text-xl text-[var(--text-title)]">{step.title}</h3>
                <p className="text-sm text-[var(--primary)] mb-1">{step.place}</p>
                <p className="text-sm text-[var(--text-body)] leading-relaxed max-w-[220px] lg:mx-auto">
                  {step.note}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </FadeIn>
  );
}

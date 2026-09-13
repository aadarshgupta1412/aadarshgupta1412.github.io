'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';

type Step = { label: string; note: string };

/** A small, user-driven diagram. No timers or automatic progression. */
export function WorkSteps({ title, steps }: { title: string; steps: Step[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowDown': next = (index + 1) % steps.length; break;
      case 'ArrowUp': next = (index - 1 + steps.length) % steps.length; break;
      case 'Home': next = 0; break;
      case 'End': next = steps.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="self-center">
      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-light)] mb-3">Explore the steps</p>
      <div role="tablist" aria-label={`${title}: process`} aria-orientation="vertical" className="work-steps">
        {steps.map((step, index) => (
          <button
            key={step.label}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className="work-step"
          >
            <span className="work-step-number" aria-hidden="true">0{index + 1}</span>
            <span>{step.label}</span>
            <span className="work-step-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
      {/* Overlapping grid cells reserve the tallest note's space without fixed heights. */}
      <div className="grid mt-4">
        {steps.map((step, index) => (
          <div
            key={step.label}
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
            className="work-step-note col-start-1 row-start-1 text-sm leading-relaxed text-[var(--text-body)]"
            style={{ visibility: active === index ? 'visible' : 'hidden' }}
          >
            {step.note}
          </div>
        ))}
      </div>
    </div>
  );
}

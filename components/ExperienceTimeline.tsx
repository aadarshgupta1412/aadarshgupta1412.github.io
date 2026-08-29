import { EXPERIENCE } from '@/lib/data';
import { ExternalLink } from './ExternalLink';
import { IconArrowOut } from '@/lib/icons';
import { FadeIn } from './FadeIn';

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? EXPERIENCE.slice(0, 3) : EXPERIENCE;

  return (
    <ol className="relative border-l border-[var(--border)] ml-3 md:ml-4 space-y-10">
      {items.map((exp, i) => (
        <FadeIn key={exp.id} delay={i * 0.04}>
          <li className="pl-8 md:pl-10 relative">
            <span className="absolute -left-[15px] md:-left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-light)] font-mono text-[10px] text-[var(--accent)]">
              {exp.mark}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-title)]">{exp.role}</h3>
              <span className="font-mono text-xs text-[var(--text-light)] shrink-0">{exp.period}</span>
            </div>

            <p className="text-[var(--primary)] mb-1">
              {exp.companyUrl ? (
                <ExternalLink href={exp.companyUrl} className="inline-flex items-center gap-1 hover:opacity-100">
                  {exp.company}
                  <IconArrowOut size={12} />
                </ExternalLink>
              ) : (
                exp.company
              )}
              <span className="text-[var(--text-light)] font-normal"> · {exp.location}</span>
            </p>

            <p className="text-[var(--text-body)] text-sm mb-3 max-w-2xl">{exp.summary}</p>

            <ul className="space-y-1.5 mb-3">
              {exp.highlights.slice(0, compact ? 2 : undefined).map((h) => (
                <li key={h} className="text-sm text-[var(--text-body)] leading-relaxed pl-3 border-l-2 border-[var(--accent)]/40">
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-2">
              {exp.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-[var(--background-light)] text-[var(--text-light)] border border-[var(--border)]">
                  {t}
                </span>
              ))}
            </div>

            {exp.links && (
              <div className="mt-2">
                {exp.linksNote && (
                  <p className="text-xs text-[var(--text-light)] mb-1.5">{exp.linksNote}</p>
                )}
                <div className="flex flex-wrap gap-3">
                  {exp.links.map((l) => (
                    <ExternalLink
                      key={l.url}
                      href={l.url}
                      className="text-xs font-medium text-[var(--accent)] hover:opacity-100"
                    >
                      {l.text} ↗
                    </ExternalLink>
                  ))}
                </div>
              </div>
            )}
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

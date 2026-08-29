'use client';

import { useMemo, useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '@/lib/data';
import { ExternalLink } from './ExternalLink';
import { FadeIn } from './FadeIn';

function Card({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background-light)] hover:border-[var(--accent)]/50 transition-colors">
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--background)]">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-display text-xl text-[var(--text-title)]">{project.title}</h3>
          <span className="font-mono text-[11px] text-[var(--text-light)] shrink-0">{project.period}</span>
        </div>
        <p className="text-sm text-[var(--text-body)] leading-relaxed mb-4">{project.blurb}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[11px] rounded-full border border-[var(--border)] text-[var(--text-light)]">
              {t}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((l) => (
              <ExternalLink key={l.url} href={l.url} className="text-sm font-medium text-[var(--accent)] hover:opacity-100">
                {l.text} ↗
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [tag, setTag] = useState<(typeof PROJECT_CATEGORIES)[number]>('All');

  const list = useMemo(() => {
    const base = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;
    if (tag === 'All') return base;
    return base.filter((p) => p.category === tag);
  }, [tag, featuredOnly]);

  return (
    <div>
      {!featuredOnly && (
        <div className="flex flex-wrap gap-2 mb-8">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setTag(c)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                tag === c
                  ? 'bg-[var(--primary)] text-[var(--background)]'
                  : 'bg-[var(--background-light)] text-[var(--text-light)] hover:text-[var(--text-body)]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {list.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.05}>
            <Card project={p} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ExternalLink } from '@/components/ExternalLink';
import { AWARDS, EDUCATION, PUBLICATIONS, TEACHING, PERSONAL_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Vitae',
};

export default function VitaePage() {
  const fellowships = AWARDS.filter((a) => a.group === 'fellowship');
  const scholastic = AWARDS.filter((a) => a.group === 'scholastic');

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-kicker">Career</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)]">Vitae</h1>
          </div>
          <ExternalLink
            href={PERSONAL_INFO.cv}
            className="text-sm text-[var(--primary)] hover:opacity-100"
          >
            Download CV ↗
          </ExternalLink>
        </div>

        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Appointments</h2>
          <ExperienceTimeline />
        </section>

        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Education</h2>
          <p className="text-[var(--text-title)] font-medium">
            <ExternalLink href={EDUCATION.institutionUrl} className="hover:text-[var(--accent)] hover:opacity-100">
              {EDUCATION.institution}
            </ExternalLink>
          </p>
          <p>
            {EDUCATION.degree}; minor in {EDUCATION.minor}
          </p>
          <p className="font-mono text-sm text-[var(--text-light)]">
            {EDUCATION.period} · GPA {EDUCATION.gpa}
          </p>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Publications & patents</h2>
          <ol className="space-y-8">
            {PUBLICATIONS.map((pub) => (
              <li key={pub.id}>
                <p className="text-[var(--text-title)] leading-snug">
                  <span className="font-mono text-xs text-[var(--accent)] mr-2">
                    [{pub.kind === 'patent' ? 'P' : 'C'}.1]
                  </span>
                  <span className="font-medium">{pub.title}</span>
                </p>
                <p className="text-sm text-[var(--text-body)] mt-1">
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      {a.includes('Aadarsh') ? <strong>{a}</strong> : a}
                      {i < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p className="text-sm text-[var(--text-light)]">
                  {pub.venue}, {pub.year}
                  {'note' in pub && pub.note ? ` · ${pub.note}` : ''}
                </p>
                {pub.links.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-3">
                    {pub.links.map((l) => (
                      <ExternalLink key={l.url} href={l.url} className="text-sm text-[var(--accent)] hover:opacity-100">
                        {l.text}
                      </ExternalLink>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Awards</h2>
          <h3 className="text-sm font-medium tracking-wide uppercase text-[var(--text-light)] mb-3">
            Fellowships
          </h3>
          <ul className="space-y-3 mb-8">
            {fellowships.map((a) => (
              <li key={a.title} className="flex gap-4">
                <span className="font-mono text-xs text-[var(--accent)] w-12 shrink-0 pt-0.5">{a.year}</span>
                <span>
                  {a.href ? (
                    <ExternalLink href={a.href} className="font-medium text-[var(--text-title)] hover:text-[var(--accent)] hover:opacity-100">
                      {a.title}
                    </ExternalLink>
                  ) : (
                    <span className="font-medium text-[var(--text-title)]">{a.title}</span>
                  )}
                  <span className="text-[var(--text-body)]"> — {a.detail}</span>
                </span>
              </li>
            ))}
          </ul>
          <h3 className="text-sm font-medium tracking-wide uppercase text-[var(--text-light)] mb-3">
            Earlier
          </h3>
          <ul className="space-y-3">
            {scholastic.map((a) => (
              <li key={a.title} className="flex gap-4">
                <span className="font-mono text-xs text-[var(--accent)] w-12 shrink-0 pt-0.5">{a.year}</span>
                <span>
                  <span className="font-medium text-[var(--text-title)]">{a.title}</span>
                  <span className="text-[var(--text-body)]"> — {a.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Teaching</h2>
          <ul className="space-y-4">
            {TEACHING.map((t) => (
              <li key={t.course} className="flex gap-4">
                <span className="font-mono text-xs text-[var(--text-light)] w-28 shrink-0 pt-0.5 hidden sm:block">
                  {t.period.split(' – ')[0]}
                </span>
                <span>
                  <span className="font-medium text-[var(--text-title)]">{t.course}</span>
                  <span className="text-[var(--text-body)]">
                    {' '}
                    · {t.role},{' '}
                    {'withUrl' in t && t.withUrl ? (
                      <ExternalLink href={t.withUrl} className="hover:text-[var(--accent)] hover:opacity-100">
                        {t.with}
                      </ExternalLink>
                    ) : (
                      t.with
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}

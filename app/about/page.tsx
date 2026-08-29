import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { ExternalLink } from '@/components/ExternalLink';
import {
  STORY,
  EDUCATION,
  RESEARCH_INTERESTS,
  TEACHING,
  PERSONAL_INFO,
  SKILLS,
  THENA_PRODUCTS,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container narrow>
        <FadeIn>
          <p className="section-kicker">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-8">
            About
          </h1>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <Link href="/photography/" className="shrink-0 w-28 h-28 rounded-full overflow-hidden border border-[var(--border)]" aria-label="Captures">
            <img src={PERSONAL_INFO.portrait} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
          </Link>
          <div className="space-y-5 text-lg text-[var(--text-body)] leading-relaxed">
            {STORY.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-2">Thena product writeups</h2>
          <p className="text-sm text-[var(--text-light)] mb-4">
            Features I built. These posts were written by the company, not by me.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {THENA_PRODUCTS.map((item) => (
              <li key={item.url}>
                <ExternalLink
                  href={item.url}
                  className="block p-4 rounded-xl border border-[var(--border)] bg-[var(--background-light)] hover:border-[var(--accent)] hover:opacity-100"
                >
                  <p className="font-medium text-[var(--text-title)]">{item.title} ↗</p>
                  <p className="text-sm text-[var(--text-body)] mt-1">{item.blurb}</p>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm rounded-full border border-[var(--border)] bg-[var(--background-light)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">Education</h2>
          <div className="border-l-2 border-[var(--accent)] pl-5">
            <h3 className="text-lg text-[var(--text-title)] font-medium">
              <ExternalLink href={EDUCATION.institutionUrl} className="hover:text-[var(--accent)] hover:opacity-100">
                {EDUCATION.institution}
              </ExternalLink>
            </h3>
            <p className="text-[var(--text-body)]">
              {EDUCATION.degree}; minor in {EDUCATION.minor}
            </p>
            <p className="text-sm text-[var(--text-light)] font-mono mt-1">
              {EDUCATION.period} · GPA {EDUCATION.gpa}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {EDUCATION.courses.map((c) => (
                <span key={c} className="text-xs px-2 py-1 rounded bg-[var(--background-light)] text-[var(--text-light)]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">Teaching</h2>
          <ul className="space-y-5">
            {TEACHING.map((t) => (
              <li key={t.course}>
                <p className="text-[var(--text-title)] font-medium">{t.course}</p>
                <p className="text-sm text-[var(--text-light)]">
                  {t.role} ·{' '}
                  {'withUrl' in t && t.withUrl ? (
                    <ExternalLink href={t.withUrl} className="hover:text-[var(--accent)] hover:opacity-100">
                      {t.with}
                    </ExternalLink>
                  ) : (
                    t.with
                  )}{' '}
                  · {t.period}
                </p>
                <p className="text-sm text-[var(--text-body)] mt-1">{t.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-4">Stack</h2>
          <dl className="space-y-3">
            {Object.entries(SKILLS).map(([k, vals]) => (
              <div key={k} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm font-medium text-[var(--text-title)]">{k}</dt>
                <dd className="text-sm text-[var(--text-body)]">{vals.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="text-sm text-[var(--text-light)]">
          Appointments, papers, and awards live on the{' '}
          <Link href="/vitae/" className="text-[var(--primary)]">
            vitae
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}

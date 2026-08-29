import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ExternalLink } from '@/components/ExternalLink';
import { EmailScrambler } from '@/components/EmailScrambler';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/data';
import { SocialIcon, IconMail } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container narrow>
        <p className="section-kicker">Contact</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-6">
          Contact
        </h1>
        <p className="text-lg text-[var(--text-body)] mb-10 max-w-xl">
          I&apos;m in {PERSONAL_INFO.location}. Email is the reliable channel.
        </p>

        <div className="space-y-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-light)] mb-2">Email</p>
            <p className="flex items-center gap-2 text-xl text-[var(--text-title)]">
              <IconMail size={20} />
              <EmailScrambler className="hover:text-[var(--accent)]" />
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-light)] mb-2">CV</p>
            <ExternalLink href={PERSONAL_INFO.cv} className="text-[var(--primary)] hover:opacity-100">
              Download PDF ↗
            </ExternalLink>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SOCIAL_LINKS.filter((s) => s.icon !== 'cv').map((s) => (
            <li key={s.name}>
              <ExternalLink
                href={s.url}
                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--background-light)] hover:border-[var(--accent)] hover:opacity-100"
              >
                <SocialIcon name={s.icon} size={18} />
                <span>{s.name}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

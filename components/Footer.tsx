import { ExternalLink } from './ExternalLink';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/data';
import { SocialIcon } from '@/lib/icons';
import { EmailScrambler } from './EmailScrambler';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-[1080px] 2xl:max-w-[1180px] mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
        <p className="text-sm text-[var(--text-light)]">
          © {year} {PERSONAL_INFO.name}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {SOCIAL_LINKS.map((s) => (
            <ExternalLink
              key={s.name}
              href={s.url}
              className="text-[var(--text-light)] hover:text-[var(--accent)] hover:opacity-100"
              aria-label={s.name}
            >
              <SocialIcon name={s.icon} size={18} />
            </ExternalLink>
          ))}
          <EmailScrambler className="text-sm text-[var(--text-light)] hover:text-[var(--accent)]" />
        </div>
      </div>
    </footer>
  );
}

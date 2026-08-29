import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { BlogMark } from '@/components/BlogMark';
import { BLOG_POSTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Notes',
};

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <Container narrow>
        <p className="section-kicker">Notes</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-4">Writing</h1>
        <p className="text-[var(--text-body)] mb-12">
          Short notes on the work. Not a newsletter.
        </p>
        <ul className="divide-y divide-[var(--border)]">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="flex gap-4 py-6 group">
                <BlogMark className="text-[var(--accent)] mt-1 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-[var(--text-light)] mb-1">{post.date}</p>
                  <h2 className="font-display text-2xl text-[var(--text-title)] group-hover:text-[var(--primary)]">
                    {post.title}
                  </h2>
                  <p className="text-[var(--text-body)] mt-2">{post.excerpt}</p>
                  <div className="flex gap-2 mt-3">
                    {post.tags.map((t) => (
                      <span key={t} className="text-[11px] uppercase tracking-wide text-[var(--text-light)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

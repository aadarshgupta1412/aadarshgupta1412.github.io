import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { BlogMark } from '@/components/BlogMark';
import { ExternalLink } from '@/components/ExternalLink';
import { BLOG_POSTS } from '@/lib/data';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Note' };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <Container narrow>
        <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-[var(--text-light)] mb-8 hover:text-[var(--accent)]">
          <BlogMark />
          Notes
        </Link>
        <p className="font-mono text-xs text-[var(--accent)] mb-3">{post.date}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="space-y-5 text-lg text-[var(--text-body)] leading-relaxed">
          {post.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i} className="font-display text-2xl font-bold text-[var(--text-title)] pt-4">
                {block.text}
              </h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )}
        </div>
        {post.links && post.links.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[var(--border)]">
            <p className="text-xs uppercase tracking-widest text-[var(--text-light)] mb-3">Links</p>
            <ul className="flex flex-wrap gap-3">
              {post.links.map((l) => (
                <li key={l.url}>
                  <ExternalLink href={l.url} className="text-[var(--accent)] hover:opacity-100">
                    {l.text} ↗
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </article>
  );
}

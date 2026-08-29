'use client';

import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { StoryArc } from '@/components/StoryArc';
import { NewsList } from '@/components/NewsList';
import { ProjectGrid } from '@/components/ProjectGrid';
import { FadeIn } from '@/components/FadeIn';
import { Container } from '@/components/Container';
import { BLOG_POSTS } from '@/lib/data';
import { BlogMark } from '@/components/BlogMark';

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-20 md:py-28">
        <Container>
          <p className="section-kicker">News</p>
          <h2 className="section-title">Lately</h2>
          <NewsList />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-[var(--background-light)]">
        <Container>
          <p className="section-kicker">Path</p>
          <h2 className="section-title">Where the work has gone</h2>
          <p className="text-[var(--text-body)] max-w-2xl mb-12 -mt-4">
            IIT Delhi, a summer at Medtronic, firmware at Enphase, a year of production agents at Thena, and now agent observability at Neatlogs.
          </p>
          <StoryArc />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="section-kicker">Work</p>
              <h2 className="section-title mb-0">Selected</h2>
            </div>
            <Link href="/projects/" className="text-sm text-[var(--primary)] mb-1 shrink-0">
              All work →
            </Link>
          </div>
          <ProjectGrid featuredOnly />
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--border)]">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="section-kicker">Notes</p>
              <h2 className="section-title mb-0">Writing</h2>
            </div>
            <Link href="/blog/" className="text-sm text-[var(--primary)] mb-1 shrink-0">
              All notes →
            </Link>
          </div>
          <ul className="divide-y divide-[var(--border)]">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <FadeIn>
                  <Link href={`/blog/${post.slug}/`} className="flex gap-4 py-5 group">
                    <BlogMark className="text-[var(--accent)] mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display text-xl text-[var(--text-title)] group-hover:text-[var(--primary)]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--text-light)] mt-1">{post.excerpt}</p>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}

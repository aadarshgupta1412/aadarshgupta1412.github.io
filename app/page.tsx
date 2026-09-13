import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SelectedWork } from '@/components/SelectedWork';
import { Container } from '@/components/Container';
import { BLOG_POSTS, PHOTOGRAPHY } from '@/lib/data';

const photographs = ['confluence', 'kuari-night'].map((id) => PHOTOGRAPHY.find((photo) => photo.id === id)!);

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="pb-16 md:pb-24" aria-labelledby="work-title">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 id="work-title" className="section-title mb-0">Questions I’ve worked on</h2>
            </div>
            <Link href="/projects/" className="text-sm text-[var(--accent)] shrink-0 quiet-link">All work →</Link>
          </div>
          <SelectedWork />
          <Link href="/about/" className="inline-block mt-6 text-sm text-[var(--accent)] quiet-link">More about my path →</Link>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-[var(--background-light)]" aria-labelledby="photos-title">
        <Container>
          <p className="section-kicker">Away from the screen</p>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 id="photos-title" className="section-title mb-3">A camera on the trail</h2>
              <p>Mostly treks, plus a couple of trips.</p>
            </div>
            <Link href="/photography/" className="text-sm text-[var(--accent)] shrink-0 quiet-link">All photos →</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {photographs.map((photo) => (
              <figure key={photo.id}>
                <Link href="/photography/" className="photo-print block rounded-sm" aria-label={`View photography: ${photo.title}`}>
                  <img src={photo.src} alt={photo.alt} width={900} height={600} loading="lazy" className="w-full aspect-[3/2] object-cover rounded-sm" />
                </Link>
                <figcaption className="mt-4">
                  <p className="font-display text-lg text-[var(--text-title)]">{photo.title}</p>
                  <p className="text-sm text-[var(--text-body)] mt-1">{photo.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="notes-title">
        <Container>
          <p className="section-kicker">Notes</p>
          <h2 id="notes-title" className="section-title">From the work</h2>
          <ul className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}/`} className="note-link grid sm:grid-cols-[100px_1fr_24px] gap-2 sm:gap-6 py-6 group">
                  <time dateTime={post.date} className="font-mono text-xs text-[var(--text-light)] pt-1">{post.date.slice(0, 7)}</time>
                  <div>
                    <h3 className="font-display text-xl group-hover:text-[var(--accent)]">{post.title}</h3>
                    <p className="text-sm text-[var(--text-body)] mt-2 max-w-2xl">{post.excerpt}</p>
                  </div>
                  <span aria-hidden="true" className="note-arrow hidden sm:block text-[var(--accent)]">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-16 md:pb-24" aria-labelledby="contact-title">
        <Container>
          <div className="border-t border-[var(--border)] pt-9 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 id="contact-title" className="text-2xl mb-2">Have something in mind?</h2>
              <p>Agents, research, or a good trail.</p>
            </div>
            <Link href="/contact/" className="text-[var(--accent)] quiet-link">Get in touch →</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

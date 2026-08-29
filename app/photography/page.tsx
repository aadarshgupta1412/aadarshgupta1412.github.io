import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PhotoGallery } from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'Captures',
};

export default function PhotographyPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <p className="section-kicker">The world from my lens</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-4">
          Captures
        </h1>
        <p className="text-[var(--text-body)] max-w-xl mb-12">
          Mostly treks, plus a couple of trips.
        </p>
        <PhotoGallery />
      </Container>
    </div>
  );
}

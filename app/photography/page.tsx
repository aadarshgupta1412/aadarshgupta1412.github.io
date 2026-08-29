import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PhotoGallery } from '@/components/PhotoGallery';

export const metadata: Metadata = {
  title: 'Photography',
};

export default function PhotographyPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <p className="section-kicker">Art & photography</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-4">
          Photographs
        </h1>
        <p className="text-[var(--text-body)] max-w-xl mb-12">
          Click a frame to open it.
        </p>
        <PhotoGallery />
      </Container>
    </div>
  );
}

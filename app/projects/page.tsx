import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectGrid } from '@/components/ProjectGrid';

export const metadata: Metadata = {
  title: 'Work',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <p className="section-kicker">Work</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-title)] mb-4">
          Projects
        </h1>
        <p className="text-lg text-[var(--text-body)] max-w-2xl mb-12">
          Agent observability, production support agents, surgical vision, and sleep EEG. Filter by tag.
        </p>
        <ProjectGrid />
      </Container>
    </div>
  );
}

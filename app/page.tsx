'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, FEATURED_PROJECTS, STATS } from '@/lib/data';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 lg:px-16">
        <div className="max-w-5xl w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[var(--text-title)] mb-6 leading-tight">
              Hi, I'm <span className="text-[var(--primary)]">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-body)] mb-8">
              {PERSONAL_INFO.title} {PERSONAL_INFO.tagline}
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-body)] max-w-3xl mb-8 leading-relaxed">
              {PROFESSIONAL_SUMMARY.split('. ').slice(0, 2).join('. ')}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 lg:px-16 bg-[var(--background-light)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-title)] mb-16">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <StatCard key={stat.label} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-16 bg-[var(--background-light)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[var(--text-title)] mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-[var(--text-body)] mb-8">
            Interested in collaborating on AI/ML projects or discussing opportunities?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
}) {
  return (
    <Link href={link} className="group">
      <div className="h-full p-8 rounded-2xl bg-[var(--background)] hover:bg-[var(--background-light)] transition-all duration-300 border-2 border-transparent hover:border-[var(--accent)]">
        <h3 className="text-2xl font-medium text-[var(--text-title)] mb-4 group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--text-body)] mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[var(--background-light)] text-[var(--text-light)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-medium text-[var(--primary)] mb-2">
        {number}
      </div>
      <div className="text-[var(--text-light)] text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

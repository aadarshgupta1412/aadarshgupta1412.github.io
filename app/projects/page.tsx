'use client';

import { useEffect, useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/data';

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-medium text-[var(--text-title)] mb-6">
            Projects
          </h1>
          <p className="text-xl text-[var(--text-body)] max-w-3xl">
            From neural signal processing and surgical robotics to production AI agents
            — work that bridges research with real-world systems.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[var(--primary)] text-[var(--background)]'
                  : 'bg-[var(--background-light)] text-[var(--text-light)] hover:text-[var(--text-body)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="p-8 md:p-10 rounded-2xl bg-[var(--background-light)] border-2 border-transparent hover:border-[var(--accent)] transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start gap-4">
          <span className="text-4xl font-bold text-[var(--accent)] opacity-30 leading-none mt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h2 className="text-3xl font-medium text-[var(--text-title)] mb-2">
              {project.title}
            </h2>
            <p className="text-[var(--text-light)]">{project.period}</p>
          </div>
        </div>
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[var(--background)] text-[var(--accent)] mt-4 md:mt-0 self-start">
          {project.category}
        </span>
      </div>

      <p className="text-lg text-[var(--text-body)] mb-6 leading-relaxed md:pl-14">
        {project.description}
      </p>

      <div className="mb-6 md:pl-14">
        <h3 className="text-sm font-medium text-[var(--text-light)] mb-3 uppercase tracking-wide">
          Key Highlights
        </h3>
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, i: number) => (
            <li key={i} className="flex items-start">
              <span className="text-[var(--accent)] mr-3 mt-1">▸</span>
              <span className="text-[var(--text-body)]">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 md:pl-14">
        <h3 className="text-sm font-medium text-[var(--text-light)] mb-3 uppercase tracking-wide">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-[var(--background)] text-[var(--text-body)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {'links' in project && project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 md:pl-14">
          {project.links.map((link: { text: string; url: string }) => (
            <a
              key={link.text}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all text-sm font-medium"
            >
              {link.text}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

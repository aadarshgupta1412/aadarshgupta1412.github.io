import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectGrid from '@/components/ProjectGrid';
import { publicationsData } from '@/lib/publicationsData';

export default function WorkPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Work</h1>
        <p className="text-muted-foreground">
          Experience, research projects, and publications.
        </p>
      </div>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ExperienceTimeline />
      </section>

      {/* Publications Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Publications & Patents</h2>
        <div className="space-y-8">
          {publicationsData.map((pub, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium leading-tight">{pub.title}</h3>
              <p className="text-sm text-muted-foreground">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {author.includes('Aadarsh Gupta') ? (
                      <span className="text-foreground font-medium">{author}</span>
                    ) : (
                      author
                    )}
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="text-sm text-muted-foreground">
                {pub.venue} • {pub.year}
              </p>
              {pub.links && (
                <div className="flex gap-4 pt-1">
                  {pub.links.paper && (
                    <Link
                      href={pub.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Paper
                    </Link>
                  )}
                  {pub.links.pdf && (
                    <Link
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      PDF
                    </Link>
                  )}
                  {pub.links.code && (
                    <Link
                      href={pub.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Code
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ProjectGrid />
      </section>
    </div>
  );
} 
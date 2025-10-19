import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import type { ProjectType } from '@/lib/projectData';

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 space-y-4 bg-card">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 pt-2">
        {project.githubUrl && (
          <Link 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        {project.liveUrl && (
          <Link 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" />
            View
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 
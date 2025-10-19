'use client';

import React, { useState, useMemo } from 'react';
import { projectData, getAllTags } from '@/lib/projectData';
import ProjectCard from './ProjectCard';

const allTags = ['All', ...getAllTags()];

const ProjectGrid = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') {
      return projectData;
    }
    return projectData.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              selectedTag === tag
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:bg-foreground/10'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid; 
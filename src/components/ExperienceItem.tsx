import React from 'react';
import type { ExperienceItem as ExperienceItemType } from '@/lib/experienceData';

type ExperienceItemProps = {
  item: ExperienceItemType;
};

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-foreground">{item.role}</h3>
          <p className="text-sm text-muted-foreground">{item.company}</p>
        </div>
        <time className="text-sm text-muted-foreground whitespace-nowrap">
          {item.period}
        </time>
      </div>
      
      <ul className="space-y-2 text-sm text-muted-foreground">
        {item.description.map((point, index) => (
          <li key={index} className="leading-relaxed">
            • {point}
          </li>
        ))}
      </ul>
      
      {item.skills && item.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {item.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem; 
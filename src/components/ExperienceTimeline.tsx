import React from 'react';
import { experienceData } from '@/lib/experienceData';
import ExperienceItem from './ExperienceItem';

const ExperienceTimeline = () => {
  return (
    <div className="space-y-12">
      {experienceData.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ExperienceTimeline; 
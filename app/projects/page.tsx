'use client';

import { useEffect, useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/data';

// Using imported PROJECTS from lib/data.ts
/*const projects = [
  {
    id: 'thena',
    title: 'AI-Driven CRM Workflows at Thena.ai',
    period: 'January 2025 - Present',
    description: 'Designed and shipped production-grade AI agents for Thena\'s B2B CRM platform with entity-aware memory and retrieval-augmented knowledge.',
    highlights: [
      'Architected AI-driven CRM workflows with idempotency and supersession safeguards',
      'Achieved 85% reduction in chat latency & 66% faster workflow executions',
      'Built modular AI toolchain including MCP server, NL2SQL generation, and dynamic chart generation',
      'Implemented distributed testing pipeline and production monitoring with Sentry',
    ],
    technologies: ['LangGraph', 'FastAPI', 'Python', 'RAG', 'MCP', 'PostgreSQL', 'Redis', 'Sentry'],
    category: 'Production AI',
  },
  {
    id: 'brain-states',
    title: 'Characterizing Brain States using Deep Learning',
    period: 'August 2022 - May 2023',
    description: 'Developed classification strategies for sleep stages from polysomnographic data using deep learning techniques.',
    highlights: [
      'Classification of sleep stages from EEG, EOG, and EMG signals',
      'Detection and classification of lucid dream states',
      'Microsleep event detection using neural signal processing',
      'Published Bachelor\'s Thesis with Prof. Saurabh Gandhi at CSND Lab, IIT Delhi',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Signal Processing', 'Python', 'Deep Learning'],
    category: 'Research',
    links: [
      { text: 'Thesis', url: 'https://drive.google.com/file/d/18Okc9WLLyHJkzXcqNayY5lLpSSfAILBD/view' },
      { text: 'Slides', url: 'https://drive.google.com/file/d/1hWRyexxCHhPFrs9_Ty6T683C5selSqQs/view' },
    ],
  },
  {
    id: 'covid',
    title: 'COVID-19 Diagnostics using Machine Learning',
    period: 'October 2021 - June 2022',
    description: 'Developed low-resource detection techniques for COVID-19 from public datasets with feature correlation analysis.',
    highlights: [
      'Achieved 93.36% accuracy using feature reduction for supervised classifiers',
      'Presented at IEEE INDICON 2022',
      'Published in IEEE 19th India Council International Conference',
    ],
    technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Mining'],
    category: 'Research',
    links: [
      { text: 'Paper', url: 'https://ieeexplore.ieee.org/document/10040129/' },
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/covid-symptoms-classification/' },
    ],
  },
  {
    id: 'enphase',
    title: 'Firmware Optimization at Enphase Energy',
    period: 'July 2023 - December 2024',
    description: 'Developed Python-based tools for firmware analysis and control system optimization.',
    highlights: [
      'Improved simulated power performance by 15% through firmware correction analysis',
      'Deployed SciPy-based optimization for parameter estimation via time series curve fitting',
      'Reduced test duration by 20% through Python test framework implementation',
    ],
    technologies: ['Python', 'SciPy', 'Control Systems', 'Time Series Analysis'],
    category: 'Engineering',
  },
  {
    id: 'medtronic',
    title: 'Surgical Robotics at Medtronic',
    period: 'June 2022 - August 2022',
    description: 'Worked on vision systems and tracking for HUGO RAS surgical robotic arms.',
    highlights: [
      'Devised novel vision mechanism for automated masking of laparoscopic surgical video (US Patent filed)',
      'Real-time localized tracking system for robotic arms',
      'Collision-avoidance algorithms implementation',
    ],
    technologies: ['Computer Vision', 'Python', 'Real-time Systems'],
    category: 'Research',
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
    ],
  },
  {
    id: 'pischool',
    title: 'LLM-based Chatbot Evaluation System',
    period: 'March 2023 - May 2023',
    description: 'Developed an LLM-based chatbot evaluation system for Pi School of AI fellowship.',
    highlights: [
      'Created system that emulates human assessment for feedback generation',
      'Integrated with business chatbot websites',
      'Presented findings at prompt engineering workshop',
    ],
    technologies: ['LLMs', 'Python', 'NLP', 'Prompt Engineering'],
    category: 'Research',
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/pischool-generative-model/' },
      { text: 'Workshop', url: 'https://github.com/aadarshgupta1412/pischool-prompt-guide/' },
    ],
  },
  {
    id: 'dementia',
    title: 'ML Approaches to Differential Diagnosis of Dementia',
    period: 'January 2022',
    description: 'Built models for clinical dementia rating prediction at NEUROHACK 2022.',
    highlights: [
      'Achieved 95.72% test accuracy on dementia rating prediction',
      'Implemented PCA-based multi-class SVM classifier',
      'Multi-modal ensemble classification on LASI-DAD dataset',
    ],
    technologies: ['Machine Learning', 'SVM', 'PCA', 'Python', 'Healthcare'],
    category: 'Hackathon',
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/NEUROHACK2022_Dementia/' },
    ],
  },
  {
    id: 'handwriting',
    title: 'Handwritten Expression Evaluator',
    period: 'June 2021',
    description: 'ML model to recognize handwritten digits and operators using CNN.',
    highlights: [
      'Achieved 78.1% accuracy on test set of 50K images',
      'Trained on annotated dataset of 60K images',
      'Hack The Summer project at AIML Club, IIT Delhi',
    ],
    technologies: ['CNN', 'TensorFlow', 'Computer Vision', 'Python'],
    category: 'Hackathon',
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/ML_Hackathon/' },
    ],
  },
];*/

// Using imported PROJECT_CATEGORIES from lib/data.ts
// const categories = ['All', 'Production AI', 'Research', 'Engineering', 'Hackathon'];

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
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-medium text-[var(--text-title)] mb-6">
            Projects
          </h1>
          <p className="text-xl text-[var(--text-body)] max-w-3xl">
            A collection of my work spanning production AI systems, research projects, 
            and experimental implementations across AI/ML, computer vision, and cognitive computing.
          </p>
        </div>

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`transition-all duration-700 delay-${index * 100}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-8 md:p-10 rounded-2xl bg-[var(--background-light)] border-2 border-transparent hover:border-[var(--accent)] transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h2 className="text-3xl font-medium text-[var(--text-title)] mb-2">
            {project.title}
          </h2>
          <p className="text-[var(--text-light)] mb-4">{project.period}</p>
        </div>
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[var(--background)] text-[var(--accent)] mb-4 md:mb-0">
          {project.category}
        </span>
      </div>

      <p className="text-lg text-[var(--text-body)] mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-[var(--text-light)] mb-3 uppercase tracking-wide">
          Key Highlights
        </h3>
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-[var(--accent)] mr-3 mt-1">▸</span>
              <span className="text-[var(--text-body)]">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
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

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {project.links.map((link: { text: string; url: string }) => (
            <a
              key={link.text}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              {link.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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

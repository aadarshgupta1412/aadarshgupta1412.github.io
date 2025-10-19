'use client';

import { useEffect, useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, AWARDS, TEACHING_EXPERIENCE, RESEARCH_INTERESTS } from '@/lib/data';


export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-medium text-[var(--text-title)] mb-8">
            About {PERSONAL_INFO.name}
          </h1>
          <div className="text-xl text-[var(--text-body)] space-y-6 leading-relaxed">
            <p>
              I'm an AI/ML Engineer with expertise in building production-grade intelligent systems, 
              AI agents, and machine learning applications. Currently at <span className="text-[var(--primary)] font-medium">Thena.ai</span>, 
              I architect agentic workflows that power B2B CRM automation.
            </p>
            <p>
              My journey began at <span className="font-medium">IIT Delhi</span>, where I specialized in Cognitive & Intelligent Systems 
              alongside my Electrical Engineering degree. I've had the privilege of working at the 
              intersection of AI research and engineering, from surgical robotics at Medtronic to 
              energy systems at Enphase Energy.
            </p>
            <p>
              I'm passionate about brain-computer interfaces, cognitive computing, and building AI 
              systems that enhance human capabilities. My work combines deep technical expertise with 
              a research-driven approach to solving complex problems.
            </p>
            <p className="text-[var(--text-light)] italic">
              With publications in healthcare ML, a US patent filing, and experience delivering high-impact 
              ML solutions in enterprise environments, I bring both research rigor and practical engineering 
              to every project.
            </p>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Experience
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-2xl bg-[var(--background-light)] border-l-4 border-[var(--accent)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-medium text-[var(--text-title)]">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-[var(--accent)] mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[var(--text-light)] mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-[var(--text-light)] text-sm mb-3">{exp.location}</p>
                <p className="text-[var(--text-body)]">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Education
          </h2>
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--background-light)] border-l-4 border-[var(--accent)]">
            <h3 className="text-2xl font-medium text-[var(--text-title)] mb-2">
              {EDUCATION.institution}
            </h3>
            <p className="text-lg text-[var(--accent)] mb-3">{EDUCATION.degree}</p>
            <div className="flex flex-wrap gap-6 text-[var(--text-body)]">
              <div>
                <span className="text-[var(--text-light)] text-sm">Period:</span> {EDUCATION.period}
              </div>
              <div>
                <span className="text-[var(--text-light)] text-sm">GPA:</span> {EDUCATION.gpa}
              </div>
              <div>
                <span className="text-[var(--text-light)] text-sm">Minor:</span> {EDUCATION.minor}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="p-6 rounded-2xl bg-[var(--background-light)]">
                <h3 className="text-lg font-medium text-[var(--text-title)] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-[var(--background)] text-[var(--text-body)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Awards & Achievements
          </h2>
          <div className="space-y-4">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="flex items-start p-4 rounded-lg hover:bg-[var(--background-light)] transition-colors"
              >
                <span className="text-[var(--accent)] mr-4 mt-1 text-xl">✦</span>
                <p className="text-[var(--text-body)]">{award}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Teaching Experience
          </h2>
          <div className="space-y-8">
            {TEACHING_EXPERIENCE.map((exp, index) => (
              <div key={index} className="p-6 md:p-8 rounded-2xl bg-[var(--background-light)]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-medium text-[var(--text-title)]">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-[var(--accent)] mt-1">{exp.course}</p>
                  </div>
                  <span className="text-[var(--text-light)] mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-[var(--text-light)] text-sm mb-3">{exp.institution}</p>
                <p className="text-[var(--text-body)]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Research Interests
          </h2>
          <div className="p-8 rounded-2xl bg-[var(--background-light)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--text-body)]">
              {RESEARCH_INTERESTS.map((interest) => (
                <div key={interest} className="flex items-center">
                  <span className="text-[var(--accent)] mr-3">▸</span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

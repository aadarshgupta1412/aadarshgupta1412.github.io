'use client';

import { useEffect, useState } from 'react';
import { EXPERIENCE, EDUCATION, SKILLS, AWARDS, TEACHING_EXPERIENCE, RESEARCH_INTERESTS } from '@/lib/data';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { Tabs, TabPanel } from '@/components/Tabs';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillTabs = Object.entries(SKILLS).map(([category, items]) => ({
    id: category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    label: category.split('&')[0].trim(),
    content: (
      <TabPanel>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-lg bg-[var(--background)] text-[var(--text-body)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </TabPanel>
    ),
  }));

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
            About Me
          </h1>
          <div className="text-xl text-[var(--text-body)] space-y-6 leading-relaxed">
            <p>
              The human brain continuously processes vision, sound, and touch on roughly 20 watts.
              Simulating equivalent neural activity on modern hardware would require billions.
              I view this efficiency gap as a roadmap for where AI needs to go next — and it shapes
              everything I build.
            </p>
            <p>
              At <span className="text-[var(--primary)] font-medium">Thena.ai</span>, I architect
              production AI agents with graph-based workflows, explicit feedback loops, context
              re-evaluation, and tool orchestration. These are early functional analogs of the brain's
              parallel and multimodal processing — and watching them work reinforced my conviction that
              intelligence is a dynamic process grounded in signals and interaction, not static models.
            </p>
            <p>
              This perspective started at <span className="font-medium">IIT Delhi</span>, where I
              studied Electrical Engineering with a minor in Cognitive & Intelligent Systems. My thesis
              work on classifying brain states — sleep stages, lucid dreaming, microsleep events — from
              EEG, EOG, and EMG signals taught me to think about cognition as internal state reflected in
              neural activity, where meaning must be inferred rather than directly accessed.
            </p>
            <p>
              Between research and production systems, I've worked on surgical robotics vision at
              Medtronic (US Patent filed), firmware optimization at Enphase Energy, and LLM evaluation
              systems as an AI Fellow at Pi School in Italy.
            </p>
          </div>
        </div>

        {/* Experience - Accordion */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Experience
          </h2>
          <Accordion>
            {EXPERIENCE.map((exp, index) => (
              <AccordionItem
                key={index}
                title={exp.role}
                subtitle={exp.company}
                meta={exp.period}
                defaultOpen={index === 0}
              >
                <p className="text-[var(--text-light)] text-sm mb-4">{exp.location}</p>
                <p className="text-[var(--text-body)] mb-4">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-[var(--text-body)]">
                        <span className="text-[var(--accent)] mr-3 mt-1 text-sm">▸</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionItem>
            ))}
          </Accordion>
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
            <p className="text-lg text-[var(--accent)] mb-4">{EDUCATION.degree}</p>
            <div className="flex flex-wrap gap-6 text-[var(--text-body)] mb-6">
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
            {EDUCATION.relevantCourses && (
              <div>
                <p className="text-[var(--text-light)] text-sm mb-2">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm rounded-lg bg-[var(--background)] text-[var(--text-body)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Skills - Tabs */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Skills & Technologies
          </h2>
          <Tabs tabs={skillTabs} />
        </section>

        {/* Awards - Collapsible list */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AWARDS.map((award, index) => {
              const [title, ...rest] = award.split(' - ');
              const description = rest.join(' - ');
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[var(--background-light)] hover:border-[var(--accent)] border-2 border-transparent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--accent)] text-lg mt-0.5">✦</span>
                    <div>
                      <p className="font-medium text-[var(--text-title)]">{title}</p>
                      {description && (
                        <p className="text-sm text-[var(--text-light)] mt-1">{description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Teaching Experience - Accordion */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Teaching Experience
          </h2>
          <Accordion>
            {TEACHING_EXPERIENCE.map((exp, index) => (
              <AccordionItem
                key={index}
                title={exp.role}
                subtitle={exp.course}
                meta={exp.period}
              >
                <p className="text-[var(--text-light)] text-sm mb-3">{exp.institution}</p>
                <p className="text-[var(--text-body)]">{exp.description}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-title)] mb-10">
            Research Interests
          </h2>
          <div className="p-8 rounded-2xl bg-[var(--background-light)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_INTERESTS.map((interest) => (
                <div 
                  key={interest} 
                  className="flex items-center p-3 rounded-lg hover:bg-[var(--background)] transition-colors"
                >
                  <span className="text-[var(--accent)] mr-3">▸</span>
                  <span className="text-[var(--text-body)]">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { PERSONAL_INFO, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/data';

// Icons for contact info
const icons = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  scholar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-medium text-[var(--text-title)] mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-[var(--text-body)] leading-relaxed">
            I'm {PERSONAL_INFO.name}, and I'm always interested in discussing AI/ML projects, research collaborations, 
            or opportunities to build intelligent systems. Feel free to reach out!
          </p>
        </div>

        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-[var(--background-light)] hover:border-[var(--accent)] border-2 border-transparent transition-all"
              >
                <div className="text-[var(--accent)] mb-4">{icons[item.icon as keyof typeof icons]}</div>
                <h3 className="text-sm font-medium text-[var(--text-light)] mb-2 uppercase tracking-wide">
                  {item.label}
                </h3>
                {'href' in item ? (
                  <a
                    href={item.href}
                    className="text-[var(--text-body)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[var(--text-body)]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-medium text-[var(--text-title)] mb-8">
            Find Me Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[var(--background-light)] hover:bg-[var(--accent)] border-2 border-transparent hover:border-[var(--accent)] transition-all flex items-center gap-4"
              >
                <div className="text-[var(--accent)] group-hover:text-[var(--background)] transition-colors">
                  {icons[link.icon as keyof typeof icons]}
                </div>
                <span className="text-[var(--text-body)] group-hover:text-[var(--background)] font-medium transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-10 rounded-2xl bg-[var(--background-light)] text-center">
          <h2 className="text-3xl font-medium text-[var(--text-title)] mb-4">
            Ready to Start a Conversation?
          </h2>
          <p className="text-[var(--text-body)] mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate on research, 
            or just want to say hello, I'd love to hear from you.
          </p>
          <a
            href="mailto:aadarsh.iitd@gmail.com"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Me an Email
          </a>
        </section>
      </div>
    </div>
  );
}

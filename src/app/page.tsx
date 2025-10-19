import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 md:py-32">
      <div className="space-y-12">
        {/* Name and Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Aadarsh Gupta
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            AI/ML Engineer building intelligent systems at{' '}
            <Link 
              href="https://thena.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              Thena.ai
            </Link>
            . Previously at Enphase Energy. IIT Delhi graduate working on AI agents,
            brain-computer interfaces, and applied machine learning.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/aadarshgupta1412"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/aadarshgupta1412"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=lfjj5T4AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:aadarsh.iitd@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 pt-4">
          <Link
            href="/work"
            className="text-foreground hover:text-muted-foreground transition-colors text-base"
          >
            Work →
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors text-base"
          >
            Blog →
          </Link>
        </div>
      </div>
    </div>
  );
}

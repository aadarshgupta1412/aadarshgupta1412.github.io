export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--text-light)] border-opacity-20 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[var(--text-light)] text-sm">
            © {currentYear} Aadarsh Gupta. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/aadarshgupta1412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/in/aadarshgupta1412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            
            <a
              href="https://scholar.google.com/citations?user=lfjj5T4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
              aria-label="Google Scholar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </a>
            
            <a
              href="mailto:aadarsh.iitd@gmail.com"
              className="text-[var(--text-light)] hover:text-[var(--accent)] transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

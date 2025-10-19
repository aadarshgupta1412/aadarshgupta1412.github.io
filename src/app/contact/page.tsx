import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText, GraduationCap } from 'lucide-react'; // Added GraduationCap for Scholar

// --- Updated with actual links/info ---
// --- IMPORTANT: Make sure 'Aadarsh_Gupta_CV.pdf' exists in the /public folder ---
const cvUrl = "/Aadarsh_Gupta_CV.pdf"; // Local path for direct download
const email = "aadarsh.iitd@gmail.com";
const githubUrl = "https://github.com/aadarshgupta1412";
const linkedinUrl = "https://www.linkedin.com/in/aadarshgupta1412/";
const googleScholarUrl = "https://scholar.google.co.in/citations?user=lfjj5T4AAAAJ&hl=en&authuser=1";
// ------------------------------------

const contactLinks = [
  {
    href: linkedinUrl,
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5 mr-2" />,
  },
  {
    href: githubUrl,
    label: "GitHub",
    icon: <Github className="h-5 w-5 mr-2" />,
  },
  {
    href: googleScholarUrl,
    label: "Google Scholar",
    icon: <GraduationCap className="h-5 w-5 mr-2" />,
  },
  {
    href: `mailto:${email}`,
    label: "Email",
    icon: <Mail className="h-5 w-5 mr-2" />,
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      
      <p className="text-center text-muted-foreground mb-10">
        Feel free to reach out through any of the following channels or download my CV.
      </p>

      <div className="flex flex-col items-center space-y-6">
        {/* CV Download Button - Uses local path and download attribute */}
        <Button asChild size="lg">
          <Link href={cvUrl} target="_blank" download> {/* download attribute enables direct download */}
            <FileText className="h-5 w-5 mr-2" />
            Download CV 
          </Link>
        </Button>

        {/* Social/Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          {contactLinks.map((link) => (
            <Button key={link.label} variant="outline" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
} 
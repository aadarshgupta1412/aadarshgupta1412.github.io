import React from 'react';
import Image from 'next/image'; // Optional: If you want to add a profile picture

// --- TODO: Replace placeholders with your actual information ---
const professionalSummary = `
A passionate and detail-oriented [Your Role, e.g., Software Engineer, Researcher] based in Bengaluru, India. Graduated from IIT Delhi (IITD '23). 
Driven by [mention key passion, e.g., building innovative solutions, solving complex problems]. 
Currently exploring opportunities in [mention field/area, e.g., AI/ML, Web Development].
`;

const researchInterests = [
  "Placeholder: e.g., Generative Models",
  "Placeholder: e.g., Natural Language Processing",
  "Placeholder: e.g., Explainable AI",
  // Add your actual research interests
];

const currentWork = `
Currently, I am [Describe current status, e.g., seeking new opportunities, working on personal projects like this portfolio, contributing to open source]. 
My recent focus has been on [mention specific technologies or projects].
`;

const personalIntroduction = `
Beyond my professional pursuits, I enjoy [mention hobbies/interests, e.g., photography, blogging, hiking]. 
I believe in continuous learning and [mention a core value or belief]. 
Feel free to connect or explore my work!
`;

const profileImageUrl = "/profile-placeholder.jpg"; // Optional: Add your photo to public/
// --------------------------------------------------------------

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">About Me</h1>

      {/* Optional Profile Image */}
      {/* <div className="flex justify-center mb-10">
        <Image 
          src={profileImageUrl}
          alt="Aadarsh Gupta"
          width={150}
          height={150}
          className="rounded-full object-cover"
          unoptimized
        />
      </div> */} 

      <div className="space-y-8">
        {/* Professional Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {professionalSummary}
          </p>
        </div>

        {/* Research Interests */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Research Interests</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {researchInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* Current Work */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Current Work</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {currentWork}
          </p>
        </div>

        {/* Personal Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Personal Introduction</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {personalIntroduction}
          </p>
        </div>
      </div>
    </section>
  );
} 
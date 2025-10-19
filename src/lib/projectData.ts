// src/lib/projectData.ts
export type ProjectType = {
  title: string;
  description: string;
  imageUrl: string; // Path to project image/screenshot in public/projects/
  tags: string[]; // For filtering (e.g., "React", "Next.js", "Data Science")
  liveUrl?: string; // Optional link to live demo
  githubUrl?: string; // Optional link to GitHub repository
};

export const projectData: ProjectType[] = [
  {
    title: "Characterizing Brain States using Deep Learning",
    description:
      "Developed classification strategies for sleep stages from polysomnographic data. Synthesized neural signal processing methods to classify Lucid dream state & detection of microsleep events using EEG data.",
    imageUrl: "/projects/brain-states.png",
    tags: ["Deep Learning", "EEG", "Neural Signals", "Python", "Research"],
    githubUrl: "https://drive.google.com/file/d/18Okc9WLLyHJkzXcqNayY5lLpSSfAILBD/view?usp=sharing",
  },
  {
    title: "COVID-19 Diagnostics using Machine Learning",
    description:
      "Developed low-resource detection techniques of COVID-19 from public datasets. Achieved 93.360% accuracy using feature reduction for supervised classifiers. Published at IEEE INDICON 2022.",
    imageUrl: "/projects/covid-ml.png",
    tags: ["Machine Learning", "Healthcare", "Data Science", "Python", "Published"],
    githubUrl: "https://github.com/aadarshgupta1412/covid-symptoms-classification/",
    liveUrl: "https://ieeexplore.ieee.org/document/10040129/",
  },
  {
    title: "Dementia Differential Diagnosis (NEUROHACK 2022)",
    description:
      "Built a model for clinical dementia rating prediction from CDR scores with 95.72% test accuracy. Implemented PCA based multi-class SVM classifier and multi-modal ensemble classification on LASI-DAD dataset.",
    imageUrl: "/projects/dementia.png",
    tags: ["Machine Learning", "Healthcare", "SVM", "PCA", "Python"],
    githubUrl: "https://github.com/aadarshgupta1412/NEUROHACK2022_Dementia/",
  },
  {
    title: "Handwritten Expression Evaluator",
    description:
      "Implemented a ML model to recognize handwritten digits & operators using CNN. Achieved 78.1% accuracy on test set of 50K images; trained on annotated dataset of 60K images.",
    imageUrl: "/projects/handwritten.png",
    tags: ["CNN", "Computer Vision", "Deep Learning", "Python"],
    githubUrl: "https://github.com/aadarshgupta1412/ML_Hackathon/",
  },
  {
    title: "LLM Chatbot Evaluation System",
    description:
      "Developed an LLM-based chatbot evaluation system that emulates human assessment for feedback generation. Integrated with business chatbot websites.",
    imageUrl: "/projects/llm-eval.png",
    tags: ["LLMs", "NLP", "Evaluation", "Python", "Prompt Engineering"],
    githubUrl: "https://github.com/aadarshgupta1412/pischool-generative-model/",
  },
];

// Helper function to get all unique tags
export const getAllTags = () => {
    const allTags = projectData.reduce((acc, project) => {
        project.tags.forEach(tag => acc.add(tag));
        return acc;
    }, new Set<string>());
    return Array.from(allTags).sort();
}; 
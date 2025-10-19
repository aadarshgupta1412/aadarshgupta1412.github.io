// Personal Information
export const PERSONAL_INFO = {
  name: 'Aadarsh Gupta',
  title: 'AI/ML Engineer',
  tagline: 'Building Intelligent Systems',
  email: 'aadarsh.iitd@gmail.com',
  phone: '+91-7879974479',
  location: 'Bangalore, India',
  linkedin: 'https://linkedin.com/in/aadarshgupta1412',
  github: 'https://github.com/aadarshgupta1412',
  scholar: 'https://scholar.google.com/citations?user=lfjj5T4AAAAJ',
} as const;

// Professional Summary
export const PROFESSIONAL_SUMMARY = `AI/ML Engineer with expertise in building production-grade intelligent systems, AI agents, and machine learning applications. Experienced in end-to-end ML pipeline development, LLM integration, and system optimization. Strong background in research with publications in healthcare ML and cognitive computing. IIT Delhi graduate with proven track record in delivering high-impact ML solutions in enterprise environments.`;

// Education
export const EDUCATION = {
  institution: 'Indian Institute of Technology (IIT), Delhi',
  degree: 'Bachelor of Technology in Electrical Engineering',
  period: '2019 – 2023',
  gpa: '8.0/10',
  minor: 'Cognitive & Intelligent Systems',
  relevantCourses: [
    'Data Structures and Algorithms',
    'Machine Intelligence & Learning',
    'Computer Vision',
    'Computational Cognition and Perception',
    'Control Systems',
  ],
} as const;

// Professional Experience
export const EXPERIENCE = [
  {
    company: 'Thena.ai',
    role: 'Software Engineer AI/ML - II',
    period: 'January 2025 - Present',
    location: 'Bangalore, India',
    description: 'Building production-grade AI agents and agentic workflows for B2B CRM platform.',
    highlights: [
      'Designed and shipped production-grade AI agents for Thena\'s B2B CRM platform, integrating entity-aware memory and retrieval-augmented knowledge to enable context-driven, agentic chat interface in under 3 months',
      'Architected AI-driven CRM workflows automating ticket deflection, dynamic ticket summarization, and platform actions with idempotency and supersession safeguards for reliable execution during concurrent high-volume customer interactions',
      'Engineered performance optimizations with caching and state checkpointing, achieving 85% reduction in chat latency & 66% faster workflow executions and enhanced RAG pipeline with queued background processing for high-throughput retrieval',
      'Developed modular AI toolchain including MCP server integration, federated knowledge retrieval, web search integration, NL2SQL generation, dynamic chart generation, and Thena API connectors to expand agent capabilities',
      'Built end-to-end feedback pipeline and guardrails with observability frameworks for real-time LLM output monitoring and evaluations',
      'Implemented distributed testing pipeline with GitHub Actions to safeguard code quality across agent APIs and monitoring of production failures with Sentry to gain visibility of agent performance',
    ],
  },
  {
    company: 'Enphase Energy',
    role: 'System Software Engineer',
    period: 'July 2023 - December 2024',
    location: 'Bangalore, India',
    description: 'Developed optimization tools for firmware analysis and control systems.',
    highlights: [
      'Developed Python-based parsers for firmware correction analysis, improving simulated power performance by 15%',
      'Deployed SciPy-based optimization scripts for control system parameter estimation through time series curve fitting',
      'Implemented visualization scripts for simulation analysis; designed Python test frameworks reducing test duration by 20%',
    ],
  },
  {
    company: 'Pi School',
    role: 'AI Fellow',
    period: 'March 2023 - May 2023',
    location: 'Remote',
    description: 'Developed LLM-based chatbot evaluation system and presented at workshops.',
    highlights: [
      'Developed an LLM-based chatbot evaluation system that emulates human assessment for feedback generation',
      'Integrated assessment generation with business chatbot websites; Presented findings at a prompt engineering workshop',
    ],
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/pischool-generative-model/' },
      { text: 'Workshop', url: 'https://github.com/aadarshgupta1412/pischool-prompt-guide/' },
      { text: 'Presentation', url: 'https://picampus-school.com/pitch-day-pischool-of-ai-session-12/' },
    ],
  },
  {
    company: 'Medtronic',
    role: 'Summer Intern',
    period: 'June 2022 - August 2022',
    location: 'Hyderabad, India',
    description: 'Worked on vision systems for HUGO RAS surgical robotic arms.',
    highlights: [
      'Devised a novel vision mechanism for automated masking of laparoscopic surgical video (US Patent filed)',
      'Worked on real-time localized tracking system for HUGO RAS surgical robotic arms & collision-avoidance algorithms',
    ],
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
    ],
  },
] as const;

// Skills
export const SKILLS = {
  'Languages & Frameworks': ['Python', 'FastAPI', 'SQL', 'C/C++', 'Next.js', 'TypeScript', 'React', 'MATLAB'],
  'AI/ML Libraries': ['LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'Pandas', 'Shadcn UI'],
  'DevOps & Monitoring': ['Redis', 'PostgreSQL', 'Git', 'AWS (EC2, Cloudwatch)', 'Portkey', 'Sentry', 'Docker', 'Grafana', 'Exa API', 'Firecrawl', 'Postman', 'Cursor'],
  'Specializations': ['AI Agents & Agentic Systems', 'LLM Integration', 'RAG Systems', 'Computer Vision', 'Signal Processing', 'NL2SQL'],
} as const;

// Awards
export const AWARDS = [
  'AI Fellowship (2023) - Selected as 1 of 10 fellows and awarded scholarship for Pi School of AI, Italy',
  'Singapore International Pre-Graduate Award (2023) - Selected as a visiting research scholar at IHPC, A*STAR',
  'Project Fellowship (2022) - Granted scholarship by IHFC for project mentored by Addverb Technologies',
  'JEE Advanced (2019) - Secured All India Rank 467 among 2,30,000 shortlisted candidates',
  'JEE Mains (2019) - Secured All India Rank 498 among 1.2M candidates; obtained 99.963 percentile',
  'KVPY Fellow (2018) - Awarded fellowship by Dept. of Science & Technology, Govt. of India and IISc Bangalore',
  'INChO (2018) - Awarded Certificate of Merit by IACT for securing top 1% position in NSEC',
  'NTSE (2017) - Awarded national scholarship and Certificate of Merit by NCERT, Govt. of India',
] as const;

// Teaching Experience
export const TEACHING_EXPERIENCE = [
  {
    role: 'Teaching Assistant',
    course: 'ELL457: Computation and Cognition',
    period: 'January 2023 - May 2023',
    institution: 'IIT Delhi',
    description: 'TA for Prof. Sumeet Agarwal, covering topics in Cognition & Deep Learning. Assisted in creating resources and evaluation materials for 80+ students.',
  },
  {
    role: 'Teaching Assistant',
    course: 'ELL409: Machine Intelligence & Learning',
    period: 'August 2022 - December 2022',
    institution: 'IIT Delhi',
    description: 'TA for Prof. Brejesh Lall, covering topics in Machine Learning & Computer Vision. Created quizzes, study material and question banks for 120+ students.',
  },
  {
    role: 'Mentor',
    course: 'CML101: Introduction to Chemistry',
    period: 'March 2021 - June 2021',
    institution: 'IIT Delhi',
    description: 'Mentored a group of 30 students, conducting regular teaching sessions and creating reference notes.',
  },
] as const;

// Research Interests
export const RESEARCH_INTERESTS = [
  'AI Agents & Agentic Systems',
  'Brain-Computer Interfaces',
  'Machine Learning & Deep Learning',
  'Computer Vision',
  'Cognitive Computing & Neuroscience',
  'Natural Language Processing',
  'Applied ML in Healthcare',
] as const;

// Projects
export const PROJECTS = [
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
] as const;

// Project Categories
export const PROJECT_CATEGORIES = ['All', 'Production AI', 'Research', 'Engineering', 'Hackathon'] as const;

// Stats for Homepage
export const STATS = [
  { number: '85%', label: 'Latency Reduction' },
  { number: '2+', label: 'Years Experience' },
  { number: '1', label: 'Patent Filed' },
  { number: '1', label: 'Publication' },
] as const;

// Featured Projects for Homepage
export const FEATURED_PROJECTS = [
  {
    title: 'AI-Driven CRM Workflows',
    description: 'Architected production-grade AI agents with entity-aware memory and RAG for Thena\'s B2B CRM platform.',
    tags: ['LangGraph', 'FastAPI', 'RAG'],
    link: '/projects#thena',
  },
  {
    title: 'Brain State Classification',
    description: 'Deep learning techniques for sleep stage classification and lucid dream state detection from EEG data.',
    tags: ['PyTorch', 'Signal Processing', 'ML'],
    link: '/projects#brain-states',
  },
  {
    title: 'COVID-19 ML Diagnostics',
    description: 'Low-resource detection techniques achieving 93.36% accuracy using feature reduction for supervised classifiers.',
    tags: ['ML', 'Healthcare', 'Research'],
    link: '/projects#covid',
  },
] as const;

// Contact Information
export const CONTACT_INFO = [
  {
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: 'email',
  },
  {
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`,
    icon: 'phone',
  },
  {
    label: 'Location',
    value: PERSONAL_INFO.location,
    icon: 'location',
  },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: PERSONAL_INFO.github,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: PERSONAL_INFO.linkedin,
    icon: 'linkedin',
  },
  {
    name: 'Google Scholar',
    url: PERSONAL_INFO.scholar,
    icon: 'scholar',
  },
] as const;

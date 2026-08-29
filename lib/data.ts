export const SITE = {
  url: 'https://aadarshgupta1412.github.io',
  title: 'Aadarsh Gupta',
  description:
    'Founding AI Engineer at Neatlogs. Previously built production agents at Thena. IIT Delhi.',
} as const;

export const PERSONAL_INFO = {
  name: 'Aadarsh Gupta',
  title: 'Founding AI Engineer',
  affiliation: 'Neatlogs',
  affiliationUrl: 'https://neatlogs.com',
  email: 'aadarsh.iitd@gmail.com',
  phone: '+91-7879974479',
  location: 'Bangalore, India',
  linkedin: 'https://linkedin.com/in/aadarshgupta1412',
  github: 'https://github.com/aadarshgupta1412',
  scholar: 'https://scholar.google.com/citations?user=lfjj5T4AAAAJ',
  cv: '/resume.pdf',
  portrait: '/images/identity/portrait.jpg',
} as const;

export const STORY = {
  intro: [
    'I work on observability for AI agents: finding failures in traces, searching across runs, and scoring those runs so a person can see the evidence.',
    'Before Neatlogs I spent a year at Thena building the AI layer for B2B support — chat agents, a copilot, AI logs, and an MCP server. I studied electrical engineering at IIT Delhi, with a minor in Cognitive & Intelligent Systems.',
  ],
  about: [
    'At Neatlogs I build the systems that sit on top of agent traces. That means a detection pipeline (a QLoRA-finetuned LLaMA 3.1 model on about 16K labeled samples, 0.83–0.91 F1, served on Azure ML and SageMaker), hybrid BM25 + vector search on ClickHouse, and agents that can walk a trace and draft an eval from context.',
    'In 2025 I was at Thena, where I shipped production agents for a B2B CRM: entity-aware memory, RAG, tool use, and workflows that had to stay idempotent under concurrent ticket load. Chat latency dropped 85%; workflow time dropped 66%. The public product writeups below describe the features I worked on — I did not write those posts.',
    'Earlier: firmware and control-system tooling at Enphase, an LLM-as-judge fellowship at Pi School, and a summer at Medtronic on laparoscopic video masking (US patent application) plus tracking for HUGO RAS. My B.Tech thesis, with Prof. Saurabh Gandhi at CSND Lab, was sleep-stage, lucid-dream, and microsleep classification from EEG.',
  ],
} as const;

/** Product posts about features I built. I did not author these articles. */
export const THENA_PRODUCTS = [
  {
    title: 'AI Logs',
    blurb: 'Per-ticket audit of every agent action, with a reasoning trail.',
    url: 'https://www.thena.ai/post/ai-logs-for-transparent-customer-support',
  },
  {
    title: 'AI web chat',
    blurb: 'Always-on site widget grounded in a knowledge base, with human handoff.',
    url: 'https://www.thena.ai/post/thena-ai-web-chat-smart-24-7-engagement-for-your-website',
  },
  {
    title: 'AI copilot',
    blurb: 'Account context, draft replies, and tool calls inside the support workspace.',
    url: 'https://www.thena.ai/post/ai-copilot-b2b-customer-support',
  },
  {
    title: 'Auto-responder',
    blurb: 'Channel-aware, branded replies for holidays, after-hours, and unavailability.',
    url: 'https://www.thena.ai/post/thena-auto-responder-for-multichannel-support',
  },
  {
    title: 'Agentic chat',
    blurb: 'Chat agent with tools, retrieval, and a clean path to a human.',
    url: 'https://www.thena.ai/post/agentic-ai-chat-agents',
  },
  {
    title: 'MCP · Claude',
    blurb: 'Thena data and actions inside Claude via MCP.',
    url: 'https://www.thena.ai/post/customer-support-data-in-claude-ai',
  },
  {
    title: 'MCP · Raycast',
    blurb: 'Tickets and status changes from the Raycast command bar.',
    url: 'https://www.thena.ai/post/customer-support-tickets-now-in-raycast-that-easy-with-thena',
  },
] as const;

export const RESEARCH_INTERESTS = [
  'Agent observability and evaluation',
  'Production LLM systems',
  'Computer vision',
  'Sleep EEG / brain states',
  'Applied ML in healthcare',
] as const;

export type NewsItem = {
  date: string;
  text: string;
  href?: string;
};

export const NEWS: NewsItem[] = [
  {
    date: '01/2026',
    text: 'Joined Neatlogs as Founding AI Engineer.',
    href: 'https://neatlogs.com',
  },
  {
    date: '01/2026',
    text: 'Left Thena after a year on production agents, copilots, AI logs, and MCP.',
    href: 'https://thena.ai',
  },
  {
    date: '07/2023',
    text: 'Joined Enphase Energy as a System Software Engineer.',
  },
  {
    date: '05/2023',
    text: 'Graduated IIT Delhi (B.Tech EE; minor in Cognitive & Intelligent Systems).',
  },
  {
    date: '03/2023',
    text: 'Selected as 1 of 10 AI Fellows at Pi School, Italy.',
    href: 'https://picampus-school.com/programme/school-of-artificial-intelligence/',
  },
  {
    date: '2023',
    text: 'Awarded the Singapore International Pre-Graduate Award (IHPC, A*STAR).',
  },
  {
    date: '2022',
    text: 'US patent application filed with Medtronic on laparoscopic surgical vision.',
  },
  {
    date: '12/2022',
    text: 'Paper presented at IEEE INDICON 2022.',
    href: 'https://ieeexplore.ieee.org/document/10040129/',
  },
];

export const ARC = [
  {
    year: '2019–23',
    title: 'IIT Delhi',
    place: 'B.Tech EE',
    note: 'Minor in cognitive systems. Thesis on sleep EEG with Prof. Saurabh Gandhi.',
  },
  {
    year: '2022',
    title: 'Medtronic',
    place: 'Internship',
    note: 'Laparoscopic video masking (patent filed) and HUGO RAS tracking.',
  },
  {
    year: '2023–24',
    title: 'Enphase',
    place: 'Systems',
    note: 'Firmware correction analysis and control-system curve fitting.',
  },
  {
    year: '2025',
    title: 'Thena',
    place: 'AI / ML',
    note: 'Production agents, copilots, AI logs, MCP. Chat latency down 85%.',
  },
  {
    year: '2026',
    title: 'Neatlogs',
    place: 'Founding',
    note: 'Detections, search, and evaluations over agent traces.',
  },
] as const;

export type ExperienceLink = { text: string; url: string };

export type ExperienceItem = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  mark: string;
  summary: string;
  highlights: string[];
  tags: string[];
  linksNote?: string;
  links?: ExperienceLink[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'neatlogs',
    company: 'Neatlogs',
    companyUrl: 'https://neatlogs.com',
    role: 'Founding AI Engineer',
    period: 'Jan 2026 – Present',
    location: 'Bangalore',
    mark: 'NL',
    summary:
      'Observability for AI agents: detections on traces, search across runs, and evals a reviewer can inspect.',
    highlights: [
      'Multi-label detection on agent traces with QLoRA-finetuned LLaMA 3.1 (8B), ~16K curated samples, MLflow on A100s, 0.83–0.91 F1. Served on Azure ML and SageMaker with blue-green rollout and latency SLOs.',
      'Event-driven FastAPI services on AWS App Runner with Kafka consumers — ML, regex, conditional, and Presidio PII detectors, with batching and graceful degradation.',
      'Search and interpretability agents over traces (FSM streaming parser, adaptive model routing, sub-2s TTFT). Hybrid BM25 + vector retrieval with RRF on ClickHouse (HNSW); six embedding models × four dimensions for recall vs latency.',
      'Prompt-template reverse-engineering with FastCDC, Merkle structural diffs, and anchor matching — >90% precision, sub-50ms extract.',
    ],
    tags: ['QLoRA', 'LLaMA', 'FastAPI', 'Kafka', 'ClickHouse', 'Azure ML', 'SageMaker'],
  },
  {
    id: 'thena',
    company: 'Thena.ai',
    companyUrl: 'https://thena.ai',
    role: 'Software Engineer AI/ML II',
    period: 'Jan 2025 – Jan 2026',
    location: 'Bangalore',
    mark: 'TH',
    summary:
      'Production AI for B2B support: agents, copilots, logs, and an MCP server on top of the CRM.',
    highlights: [
      'Shipped an agentic chat interface with entity-aware memory and RAG in under three months, then the surrounding CRM workflows (ticket deflection, summarization, platform actions) with idempotency and supersession under concurrent load.',
      'Cut chat latency 85% and workflow time 66% with caching, checkpointing, and queued retrieval.',
      'Tooling around the agents: MCP server, federated retrieval, web search, NL2SQL, charting, Thena API connectors, evals, guardrails, GitHub Actions, and Sentry.',
    ],
    tags: ['LangGraph', 'RAG', 'MCP', 'FastAPI', 'PostgreSQL', 'Redis'],
    linksNote: 'Product posts about features I built. I did not write these articles.',
    links: THENA_PRODUCTS.map((p) => ({ text: p.title, url: p.url })),
  },
  {
    id: 'enphase',
    company: 'Enphase Energy',
    companyUrl: 'https://enphase.com',
    role: 'System Software Engineer',
    period: 'Jul 2023 – Dec 2024',
    location: 'Bangalore',
    mark: 'EN',
    summary: 'Firmware analysis and control-system estimation for energy hardware.',
    highlights: [
      'Python parsers for firmware correction analysis — 15% better simulated power performance.',
      'SciPy curve-fitting for control parameters; a test framework that cut run time 20%.',
    ],
    tags: ['Python', 'SciPy', 'Control systems'],
  },
  {
    id: 'pischool',
    company: 'Pi School',
    companyUrl: 'https://picampus-school.com/programme/school-of-artificial-intelligence/',
    role: 'AI Fellow',
    period: 'Mar 2023 – May 2023',
    location: 'Remote',
    mark: 'PI',
    summary: 'LLM-as-judge for business chatbots. One of ten fellows.',
    highlights: [
      'Evaluation system that writes human-like feedback for chatbot replies.',
      'Workshop on prompt engineering; materials are public.',
    ],
    tags: ['LLMs', 'Eval', 'NLP'],
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/pischool-generative-model/' },
      { text: 'Workshop', url: 'https://github.com/aadarshgupta1412/pischool-prompt-guide/' },
      { text: 'Talk', url: 'https://picampus-school.com/pitch-day-pischool-of-ai-session-12/' },
    ],
  },
  {
    id: 'medtronic',
    company: 'Medtronic',
    companyUrl: 'https://www.medtronic.com',
    role: 'Summer Intern',
    period: 'Jun 2022 – Aug 2022',
    location: 'Hyderabad',
    mark: 'MD',
    summary: 'Vision for HUGO RAS. US patent application filed.',
    highlights: [
      'Automated masking of laparoscopic surgical video.',
      'Real-time tracking and collision avoidance for the robotic arms.',
    ],
    tags: ['Computer vision', 'Robotics'],
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
      {
        text: 'LoR',
        url: 'https://drive.google.com/file/d/1K6I-O4OPIWpBWJfTDMUIqwAMENpbCahA/view?usp=sharing',
      },
    ],
  },
];

export const EDUCATION = {
  institution: 'Indian Institute of Technology Delhi',
  institutionUrl: 'https://home.iitd.ac.in',
  degree: 'B.Tech, Electrical Engineering',
  minor: 'Cognitive & Intelligent Systems',
  period: '2019 – 2023',
  gpa: '8.0 / 10',
  courses: [
    'Data Structures and Algorithms',
    'Machine Intelligence & Learning',
    'Computer Vision',
    'Computational Cognition and Perception',
    'Control Systems',
  ],
} as const;

export const SKILLS: Record<string, string[]> = {
  Languages: ['Python', 'TypeScript', 'SQL', 'C/C++'],
  'ML / AI': ['PyTorch', 'Transformers', 'PEFT', 'QLoRA', 'MLflow', 'LangGraph'],
  Systems: ['FastAPI', 'Kafka', 'PostgreSQL', 'ClickHouse', 'Redis', 'Next.js'],
  Cloud: ['AWS SageMaker', 'AWS App Runner', 'Azure ML', 'GCP Vertex', 'Docker'],
};

export type AwardItem = {
  title: string;
  detail: string;
  year: string;
  group: 'fellowship' | 'scholastic';
  href?: string;
};

export const AWARDS: AwardItem[] = [
  {
    title: 'AI Fellowship, Pi School',
    detail: '1 of 10 fellows. Scholarship, School of AI, Italy.',
    year: '2023',
    group: 'fellowship',
    href: 'https://picampus-school.com/programme/school-of-artificial-intelligence/',
  },
  {
    title: 'Singapore International Pre-Graduate Award',
    detail: 'Visiting research scholar selection, IHPC, A*STAR.',
    year: '2023',
    group: 'fellowship',
  },
  {
    title: 'IHFC Project Fellowship',
    detail: 'Scholarship for a project mentored by Addverb Technologies.',
    year: '2022',
    group: 'fellowship',
    href: 'https://www.ihfc.co.in/',
  },
  {
    title: 'KVPY Fellow',
    detail: 'DST, Govt. of India and IISc Bangalore.',
    year: '2018',
    group: 'scholastic',
  },
  {
    title: 'NTSE',
    detail: 'National scholarship, NCERT.',
    year: '2017',
    group: 'scholastic',
  },
  {
    title: 'INChO / NSEC',
    detail: 'Certificate of Merit, top 1%.',
    year: '2018',
    group: 'scholastic',
  },
  {
    title: 'JEE Advanced',
    detail: 'AIR 467 / ~230,000 shortlisted.',
    year: '2019',
    group: 'scholastic',
  },
  {
    title: 'JEE Mains',
    detail: 'AIR 498 / 1.2M. 99.963 percentile.',
    year: '2019',
    group: 'scholastic',
  },
];

export const TEACHING = [
  {
    role: 'Teaching Assistant',
    course: 'ELL457: Computation and Cognition',
    with: 'Prof. Sumeet Agarwal',
    withUrl: 'https://web.iitd.ac.in/~sumeet/',
    period: 'Jan 2023 – May 2023',
    note: 'Cognition and deep learning. Resources and eval for 80+ students.',
  },
  {
    role: 'Teaching Assistant',
    course: 'ELL409: Machine Intelligence & Learning',
    with: 'Prof. Brejesh Lall',
    withUrl: 'https://web.iitd.ac.in/~brejesh/',
    period: 'Aug 2022 – Dec 2022',
    note: 'ML and computer vision. Quizzes and question banks for 120+ students.',
  },
  {
    role: 'Mentor',
    course: 'CML101: Introduction to Chemistry',
    with: 'IIT Delhi',
    period: 'Mar 2021 – Jun 2021',
    note: 'Weekly sessions and notes for a group of 30.',
  },
] as const;

export const PUBLICATIONS = [
  {
    id: 'p1',
    kind: 'patent' as const,
    title: 'Surgical Robotic System with Laparoscopic System',
    venue: 'US Patent Application · Medtronic Inc.',
    year: '2022',
    authors: ['K V S Manoj Kumar Vadali', 'Sai Gautham Ravipati', 'Aadarsh Gupta'],
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
      {
        text: 'LoR',
        url: 'https://drive.google.com/file/d/1K6I-O4OPIWpBWJfTDMUIqwAMENpbCahA/view?usp=sharing',
      },
    ] as { text: string; url: string }[],
  },
  {
    id: 'c1',
    kind: 'paper' as const,
    title:
      'Text based diagnosis of COVID-19 using Data mining techniques: A comparative study',
    venue: 'IEEE INDICON',
    year: '2022',
    authors: ['Aadarsh Gupta*', 'Aastha Valecha*', 'Sapna Mishra', 'Tapan Gandhi'],
    note: '* Equal contribution',
    links: [
      { text: 'Paper', url: 'https://ieeexplore.ieee.org/document/10040129/' },
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/covid-symptoms-classification/' },
      {
        text: 'Slides',
        url: 'https://drive.google.com/file/d/1uzPiXztPDv-8mYI5ayAbPW8zjBweFH2B/view?usp=share_link',
      },
    ],
  },
];

export const PROJECT_CATEGORIES = [
  'All',
  'Agents',
  'Research',
  'Systems',
  'Healthcare',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  period: string;
  blurb: string;
  image: string;
  category: Exclude<ProjectCategory, 'All'>;
  tags: string[];
  featured?: boolean;
  links?: { text: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: 'traces',
    title: 'Agent traces at Neatlogs',
    period: '2026',
    blurb:
      'Detections, hybrid search, and interpretability agents over production traces.',
    image: '/images/covers/traces.jpg',
    category: 'Agents',
    tags: ['QLoRA', 'ClickHouse', 'Kafka', 'FastAPI'],
    featured: true,
    links: [{ text: 'Neatlogs', url: 'https://neatlogs.com' }],
  },
  {
    id: 'thena-agents',
    title: 'Agents at Thena',
    period: '2025',
    blurb:
      'Chat agents, copilots, AI logs, and MCP for B2B support. Shipped in the first three months, then the rest of the AI surface.',
    image: '/images/covers/agents.jpg',
    category: 'Agents',
    tags: ['LangGraph', 'RAG', 'MCP'],
    featured: true,
    links: [
      { text: 'AI Logs', url: 'https://www.thena.ai/post/ai-logs-for-transparent-customer-support' },
      { text: 'Web chat', url: 'https://www.thena.ai/post/thena-ai-web-chat-smart-24-7-engagement-for-your-website' },
      { text: 'Copilot', url: 'https://www.thena.ai/post/ai-copilot-b2b-customer-support' },
      { text: 'Auto-responder', url: 'https://www.thena.ai/post/thena-auto-responder-for-multichannel-support' },
      { text: 'MCP', url: 'https://www.thena.ai/post/customer-support-data-in-claude-ai' },
    ],
  },
  {
    id: 'brain-states',
    title: 'Characterizing brain states',
    period: '2022–23',
    blurb:
      'Sleep stages, lucid dreaming, and microsleep from polysomnography. B.Tech thesis, CSND Lab, Prof. Saurabh Gandhi.',
    image: '/images/covers/eeg.jpg',
    category: 'Research',
    tags: ['EEG', 'PyTorch'],
    featured: true,
    links: [
      {
        text: 'Thesis',
        url: 'https://drive.google.com/file/d/18Okc9WLLyHJkzXcqNayY5lLpSSfAILBD/view?usp=sharing',
      },
      {
        text: 'Slides',
        url: 'https://drive.google.com/file/d/1hWRyexxCHhPFrs9_Ty6T683C5selSqQs/view?usp=sharing',
      },
      { text: 'Lab', url: 'https://web.iitd.ac.in/~gsaurabhr/team/' },
      { text: 'Advisor', url: 'https://sites.google.com/view/gsaurabhr' },
    ],
  },
  {
    id: 'medtronic-vision',
    title: 'Surgical video masking',
    period: '2022',
    blurb:
      'Automated masking of laparoscopic video for HUGO RAS. US patent application, Medtronic.',
    image: '/images/covers/surgery.jpg',
    category: 'Healthcare',
    tags: ['Computer vision', 'Robotics'],
    featured: true,
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
      {
        text: 'LoR',
        url: 'https://drive.google.com/file/d/1K6I-O4OPIWpBWJfTDMUIqwAMENpbCahA/view?usp=sharing',
      },
    ],
  },
  {
    id: 'enphase-firmware',
    title: 'Firmware correction analysis',
    period: '2023–24',
    blurb: 'Parsers and curve-fitting for Enphase energy systems.',
    image: '/images/covers/energy.jpg',
    category: 'Systems',
    tags: ['Python', 'SciPy'],
  },
  {
    id: 'pischool-eval',
    title: 'LLM-as-judge for chatbots',
    period: '2023',
    blurb: 'Pi School fellowship: evaluation that writes feedback for business chatbots.',
    image: '/images/covers/eval.jpg',
    category: 'Agents',
    tags: ['LLMs', 'Eval'],
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/pischool-generative-model/' },
      { text: 'Workshop', url: 'https://github.com/aadarshgupta1412/pischool-prompt-guide/' },
      { text: 'Talk', url: 'https://picampus-school.com/pitch-day-pischool-of-ai-session-12/' },
    ],
  },
  {
    id: 'covid',
    title: 'Text-based COVID diagnosis',
    period: '2021–22',
    blurb:
      'Low-resource classifiers from public symptom data. 93.36% with feature reduction. INDICON 2022. Equal contribution with Aastha Valecha; advised by Prof. Tapan K. Gandhi.',
    image: '/images/covers/health.jpg',
    category: 'Healthcare',
    tags: ['ML', 'INDICON'],
    links: [
      { text: 'Paper', url: 'https://ieeexplore.ieee.org/document/10040129/' },
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/covid-symptoms-classification/' },
      {
        text: 'Slides',
        url: 'https://drive.google.com/file/d/1uzPiXztPDv-8mYI5ayAbPW8zjBweFH2B/view?usp=share_link',
      },
      { text: 'Advisor', url: 'https://tapankgandhi.com/' },
    ],
  },
  {
    id: 'dementia',
    title: 'Dementia rating from LASI-DAD',
    period: '2022',
    blurb:
      'CDR prediction at NEUROHACK 2022. PCA-SVM and a multimodal ensemble. 95.72% test accuracy.',
    image: '/images/covers/health.jpg',
    category: 'Healthcare',
    tags: ['SVM', 'Healthcare'],
    links: [
      { text: 'Code', url: 'https://github.com/aadarshgupta1412/NEUROHACK2022_Dementia/' },
      { text: 'NEUROHACK', url: 'https://demondementia.com/neurohack2022/' },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: { type: 'p' | 'h2'; text: string }[];
  links?: { text: string; url: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'thena-ai-year',
    title: 'A year of shipping agents at Thena',
    date: '2026-01-15',
    excerpt:
      'What I actually built: chat agents, a copilot, AI logs, auto-responders, and an MCP server. The company blog describes the products; this is the engineering list.',
    tags: ['Thena', 'Agents'],
    body: [
      {
        type: 'p',
        text: 'I joined Thena in January 2025 to put agents into a B2B support product that already lived in Slack, email, and tickets. The first three months were a chat interface with memory and retrieval. After that the work was the rest of the surface: workflows that change tickets, a copilot that can call tools, logs that show what the model did, and a way for Claude or Raycast to talk to the same data.',
      },
      {
        type: 'p',
        text: 'The numbers I still use: 85% lower chat latency, 66% faster workflows, after caching, checkpointing, and queued RAG. The harder part was not the model. It was idempotency when two agent turns try to update the same ticket, and evals that catch a bad tool call before a customer sees it.',
      },
      {
        type: 'p',
        text: 'Thena published product posts on AI Logs, web chat, the copilot, auto-responders, and MCP. I did not write those articles. They are a reasonable description of the features.',
      },
    ],
    links: THENA_PRODUCTS.map((p) => ({ text: p.title, url: p.url })),
  },
  {
    slug: 'reading-sleep',
    title: 'Sleep staging from EEG',
    date: '2023-05-01',
    excerpt:
      'B.Tech thesis at CSND Lab: sleep stages, lucid dreaming, and microsleep from polysomnography.',
    tags: ['Thesis', 'EEG'],
    body: [
      {
        type: 'p',
        text: 'The thesis was a classification problem on overnight recordings — EEG, EOG, EMG — under Prof. Saurabh Gandhi at CSND Lab, IIT Delhi. Standard sleep stages (wake, N1–N3, REM) are the usual labels. Lucid dreaming and microsleep are rarer and worse labeled; you cannot ask someone in the moment, so you infer them from the recording. Write-up and slides are below.',
      },
    ],
    links: [
      {
        text: 'Thesis',
        url: 'https://drive.google.com/file/d/18Okc9WLLyHJkzXcqNayY5lLpSSfAILBD/view?usp=sharing',
      },
      {
        text: 'Slides',
        url: 'https://drive.google.com/file/d/1hWRyexxCHhPFrs9_Ty6T683C5selSqQs/view?usp=sharing',
      },
    ],
  },
  {
    slug: 'masking-the-or',
    title: 'Masking laparoscopic video',
    date: '2022-08-15',
    excerpt:
      'Summer at Medtronic: automated masking for surgical video, plus tracking for HUGO RAS. Patent filed.',
    tags: ['Vision', 'Patent'],
    body: [
      {
        type: 'p',
        text: 'The internship was on HUGO RAS. One thread was automated masking of laparoscopic video — decide, in the stream, what should stay in the frame. The other was real-time arm tracking and collision avoidance. Latency is a safety property in that room, not a dashboard metric.',
      },
      {
        type: 'p',
        text: 'The work went into a US patent application with Medtronic. Report and letter of recommendation are below.',
      },
    ],
    links: [
      { text: 'Report', url: 'https://github.com/aadarshgupta1412/Medtronic_internship/' },
      {
        text: 'LoR',
        url: 'https://drive.google.com/file/d/1K6I-O4OPIWpBWJfTDMUIqwAMENpbCahA/view?usp=sharing',
      },
    ],
  },
];

export const PHOTOGRAPHY = [
  {
    id: 'canopy',
    src: '/images/photography/canopy.jpg',
    alt: 'Looking up through a dark canopy at a pale opening of sky',
    caption: 'Canopy',
    aspect: '3/4',
  },
  {
    id: 'corridor',
    src: '/images/photography/corridor.jpg',
    alt: 'Long concrete corridor ending in a strip of daylight',
    caption: 'Corridor',
    aspect: '4/3',
  },
  {
    id: 'water',
    src: '/images/photography/water.jpg',
    alt: 'Dark water with a single bright reflection',
    caption: 'Water',
    aspect: '3/4',
  },
  {
    id: 'terrace',
    src: '/images/photography/terrace.jpg',
    alt: 'City at blue hour from a terrace, warm windows in the distance',
    caption: 'Terrace',
    aspect: '4/3',
  },
  {
    id: 'paper',
    src: '/images/photography/paper.jpg',
    alt: 'Close photograph of paper fiber and graphite',
    caption: 'Notebook',
    aspect: '3/4',
  },
  {
    id: 'bench',
    src: '/images/photography/bench.jpg',
    alt: 'Cables and a faint waveform glow on a dark bench',
    caption: 'Bench',
    aspect: '4/3',
  },
] as const;

export const NAV_ITEMS = [
  { label: 'Work', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Vitae', href: '/vitae/' },
  { label: 'Notes', href: '/blog/' },
  { label: 'Photo', href: '/photography/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'CV', url: '/resume.pdf', icon: 'cv' as const },
  { name: 'GitHub', url: PERSONAL_INFO.github, icon: 'github' as const },
  { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: 'linkedin' as const },
  { name: 'Scholar', url: PERSONAL_INFO.scholar, icon: 'scholar' as const },
] as const;

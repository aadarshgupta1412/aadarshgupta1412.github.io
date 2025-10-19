export type ExperienceItem = {
  company: string;
  role: string;
  period: string; // e.g., "Jan 2023 - Present"
  description: string[]; // Array of description points
  logoUrl?: string; // Optional path to company logo
  skills?: string[]; // Optional list of relevant skills/technologies
};

export const experienceData: ExperienceItem[] = [
  {
    company: "Thena.ai",
    role: "Software Engineer AI/ML - II",
    period: "January 2025 - Present",
    description: [
      "Designed and shipped production-grade AI agents for B2B CRM platform with entity-aware memory and RAG in under 3 months",
      "Architected AI-driven CRM workflows automating ticket deflection, dynamic summarization, and platform actions with idempotency safeguards",
      "Engineered performance optimizations achieving 85% reduction in chat latency & 66% faster workflow executions",
      "Developed modular AI toolchain including MCP server integration, federated knowledge retrieval, web search, NL2SQL, and dynamic chart generation",
      "Built end-to-end feedback pipeline and guardrails with observability frameworks for real-time LLM monitoring",
    ],
    skills: ["Python", "FastAPI", "LangChain", "LangGraph", "RAG", "NL2SQL", "PostgreSQL", "Redis", "AWS", "Sentry"],
  },
  {
    company: "Enphase Energy",
    role: "System Software Engineer",
    period: "July 2023 - December 2024",
    description: [
      "Developed Python-based parsers for firmware correction analysis, improving simulated power performance by 15%",
      "Deployed SciPy-based optimization scripts for control system parameter estimation through time series curve fitting",
      "Implemented visualization scripts for simulation analysis; designed test frameworks reducing test duration by 20%",
    ],
    skills: ["Python", "SciPy", "Control Systems", "Time Series Analysis", "Optimization"],
  },
  {
    company: "Pi School",
    role: "AI Fellow",
    period: "March 2023 - May 2023",
    description: [
      "Developed an LLM-based chatbot evaluation system that emulates human assessment for feedback generation",
      "Integrated assessment generation with business chatbot websites; Presented findings at a prompt engineering workshop",
    ],
    skills: ["LLMs", "Prompt Engineering", "Chatbot Evaluation"],
  },
  {
    company: "Medtronic",
    role: "Summer Intern",
    period: "June 2022 - August 2022",
    description: [
      "Devised a novel vision mechanism for automated masking of laparoscopic surgical video (US Patent filed)",
      "Worked on real-time localized tracking system for HUGO RAS surgical robotic arms & collision-avoidance algorithms",
    ],
    skills: ["Computer Vision", "Real-time Tracking", "Robotics", "Medical Imaging"],
  },
]; 
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { ExternalLink } from './ExternalLink';
import { WorkSteps } from './WorkSteps';

const investigations = [
  {
    id: 'traces',
    question: 'Where did the agent go wrong?',
    note: 'I build detections, search, and evaluations over agent traces so a reviewer can find a failure and inspect the evidence.',
    steps: [
      { label: 'Agent runs', note: 'The starting point is a trace: the record of an agent’s run, including its tool calls and responses.' },
      { label: 'Detections + search', note: 'I combine model-based and rule-based detections with hybrid search over traces in ClickHouse.' },
      { label: 'Evidence to inspect', note: 'Interpretability agents walk a trace and help draft evaluations from its context, keeping the evidence available to a reviewer.' },
    ],
  },
  {
    id: 'thena-agents',
    question: 'What happens when agents meet real support tickets?',
    note: 'I shipped chat agents, a copilot, AI logs, and MCP. The work included keeping ticket updates idempotent under concurrent load, and cutting chat latency by 85%.',
    steps: [
      { label: 'Ticket context', note: 'Entity-aware memory and retrieval bring account and ticket context into the agent’s conversation.' },
      { label: 'Retrieval + tools', note: 'Agents retrieve knowledge and call tools across the support product. Caching and checkpointing helped cut chat latency by 85%.' },
      { label: 'Action + audit trail', note: 'Ticket workflows need idempotency under concurrent load. AI Logs expose the actions an agent took.' },
    ],
  },
  {
    id: 'brain-states',
    question: 'What can a recording tell us about sleep?',
    note: 'My thesis at IIT Delhi studied sleep stages, lucid dreaming, and microsleep from EEG, EOG, and EMG recordings, with Prof. Saurabh Gandhi at CSND Lab.',
    steps: [
      { label: 'Overnight recordings', note: 'Polysomnography brings together EEG, eye movements (EOG), and muscle activity (EMG) across a night of sleep.' },
      { label: 'Classification', note: 'The thesis studied classification from these recordings, including the standard wake, N1–N3, and REM stages.' },
      { label: 'Brain states', note: 'Lucid dreaming and microsleep are rarer and harder to label. The thesis and slides describe the research in more detail.' },
    ],
  },
];

export function SelectedWork() {
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {investigations.map((item, index) => {
        const project = PROJECTS.find((p) => p.id === item.id)!;
        return (
          <article key={item.id} className="grid gap-6 py-9 md:py-12 lg:grid-cols-[1fr_280px] lg:gap-12">
            <div>
              <p className="font-mono text-xs text-[var(--accent)] mb-3">0{index + 1} / {project.title} / {project.period}</p>
              <h3 className="text-2xl sm:text-3xl max-w-xl mb-4">{item.question}</h3>
              <p className="max-w-xl mb-4">{item.note}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--accent)]">
                {item.id === 'thena-agents' ? (
                  <Link href="/blog/thena-ai-year/" className="quiet-link">Engineering notes →</Link>
                ) : project.links?.slice(0, 2).map((link) => (
                  <ExternalLink key={link.url} href={link.url} className="quiet-link">{link.text} ↗</ExternalLink>
                ))}
              </div>
            </div>
            <WorkSteps title={project.title} steps={item.steps} />
          </article>
        );
      })}
    </div>
  );
}

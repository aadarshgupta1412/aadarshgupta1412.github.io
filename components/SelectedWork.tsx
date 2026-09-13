import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { ExternalLink } from './ExternalLink';

const investigations = [
  {
    id: 'traces',
    question: 'Where did the agent go wrong?',
    note: 'I build detections, search, and evaluations over agent traces so a reviewer can find a failure and inspect the evidence.',
    detail: 'QLoRA detection · hybrid retrieval · trace evaluations',
    steps: ['Agent runs', 'Detections + search', 'Evidence to inspect'],
  },
  {
    id: 'thena-agents',
    question: 'What happens when agents meet real support tickets?',
    note: 'I shipped chat agents, a copilot, AI logs, and MCP. The work included keeping ticket updates idempotent under concurrent load, and cutting chat latency by 85%.',
    detail: 'Memory · tool use · concurrent workflows',
    steps: ['Ticket context', 'Retrieval + tools', 'Action + audit trail'],
  },
  {
    id: 'brain-states',
    question: 'What can a recording tell us about sleep?',
    note: 'My thesis at IIT Delhi studied sleep stages, lucid dreaming, and microsleep from EEG, EOG, and EMG recordings, with Prof. Saurabh Gandhi at CSND Lab.',
    detail: 'B.Tech thesis · cognitive systems · sleep classification',
    steps: ['Overnight recordings', 'Classification', 'Brain states'],
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
                  <Link href="/blog/thena-ai-year/" className="hover:underline underline-offset-4">Engineering notes →</Link>
                ) : project.links?.slice(0, 2).map((link) => (
                  <ExternalLink key={link.url} href={link.url} className="hover:underline underline-offset-4">{link.text} ↗</ExternalLink>
                ))}
              </div>
            </div>
            <div className="self-center border-l-2 border-[var(--border)] pl-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-light)] mb-4">At a glance</p>
              <ol className="space-y-2">
                {item.steps.map((step, i) => (
                  <li key={step} className="text-sm text-[var(--text-title)]">
                    {i > 0 && <span aria-hidden="true" className="block text-[var(--accent)] mb-2">↓</span>}
                    {step}
                  </li>
                ))}
              </ol>
              <p className="text-xs text-[var(--text-light)] mt-5 leading-relaxed">{item.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

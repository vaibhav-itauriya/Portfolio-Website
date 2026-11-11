import { ExternalLink } from 'lucide-react';
import { decks, portfolioFolder } from '../data/content';
import { useLens } from '../lens';
import { Section } from './Section';

export default function CaseDecks() {
  const { lens } = useLens();

  return (
    <Section
      id="decks"
      title="Case decks"
      intro={
        <>
          The decks behind my product and consulting cases.{' '}
          <a href={portfolioFolder} target="_blank" rel="noopener noreferrer" className="link text-ink">
            Open the full folder
          </a>
          .
        </>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2">
        {decks.map((d) => {
          const dim = lens !== 'all' && !d.lenses.includes(lens);
          return (
            <li key={d.title} className="bg-paper">
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col p-5 transition-opacity hover:bg-surface ${dim ? 'opacity-55 hover:opacity-100' : ''}`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-xl font-semibold leading-snug">{d.title}</span>
                  <ExternalLink size={17} aria-hidden className="mt-1.5 shrink-0 text-muted group-hover:text-accent" />
                </span>
                {d.result && <span className="mt-1 font-medium text-accent">{d.result}</span>}
                <span className="mt-2 text-muted">{d.brief}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

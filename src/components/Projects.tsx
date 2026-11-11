import { useState } from 'react';
import { Award, ChevronDown, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';
import type { Project } from '../data/content';
import { pickView, useLens } from '../lens';
import { Blocks, Section, Tags, countItems } from './Section';

// Shown in full on the Everything view. Order follows the data file.
const FEATURED_IN_ALL = [
  'Pacto',
  'Amazon ML Challenge 2026',
  'Campus Beats 2026',
  'LoreDrop',
  'Inter IIT Tech Meet 13.0',
  'LLuminating Language',
];

export default function Projects() {
  const { lens, info } = useLens();

  const featured =
    lens === 'all'
      ? projects.filter((p) => FEATURED_IN_ALL.includes(p.title))
      : projects.filter((p) => p.lenses.includes(lens));
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <Section
      id="projects"
      title="Projects"
      intro={
        lens === 'all'
          ? 'Newest and biggest first. Everything else is folded below.'
          : `The projects that show my ${info.label.toLowerCase()} work. The rest are folded below.`
      }
    >
      <div key={lens} className="lens-fade">
        <ul className="divide-y divide-rule border-y border-rule">
          {featured.map((p) => (
            <li key={p.title} className="py-9">
              <ProjectBody project={p} />
            </li>
          ))}
        </ul>

        {rest.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold">More projects</h3>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {rest.map((p) => (
                <li key={p.title}>
                  <details className="group py-4">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="font-semibold">{p.title}</span>
                        <span className="text-muted">, {p.kind}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2 text-sm text-muted">
                        {p.dates}
                        <ChevronDown size={18} aria-hidden className="transition-transform group-open:rotate-180" />
                      </span>
                    </summary>
                    <div className="pt-4">
                      <ProjectBody project={p} compact />
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}

function ProjectBody({ project: p, compact = false }: { project: Project; compact?: boolean }) {
  const { lens } = useLens();
  const blocks = pickView(p.views, lens);
  const total = countItems(blocks);
  const [expanded, setExpanded] = useState(false);
  const limit = compact || expanded ? undefined : 3;

  return (
    <article>
      {!compact && (
        <h3 className="font-display text-2xl font-semibold leading-tight md:text-[1.75rem]">
          {p.title}
          <span className="font-normal text-muted">, {p.kind}</span>
        </h3>
      )}
      <div className={`${compact ? '' : 'mt-1'} flex flex-col gap-x-6 text-muted sm:flex-row sm:justify-between`}>
        <p>
          {p.context}
          {p.role && <>. {p.role}</>}
        </p>
        {!compact && p.dates && <p className="shrink-0">{p.dates}</p>}
      </div>
      {p.badge && (
        <p className="mt-3 inline-flex items-center gap-2 font-medium text-accent">
          <Award size={18} aria-hidden />
          {p.badge}
        </p>
      )}

      <div className="mt-4">
        <Blocks blocks={blocks} limit={limit} />
        {!compact && total > 3 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="link mt-3 font-medium"
          >
            {expanded ? 'Show less' : `Show all ${total} points`}
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Tags tags={p.tags} />
        {p.links && (
          <div className="flex gap-4">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1.5 font-medium"
              >
                {l.label}
                <ExternalLink size={15} aria-hidden />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

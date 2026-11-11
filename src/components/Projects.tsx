import { ChevronDown, Award, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/content';
import type { Project } from '../data/content';
import { pickView, useLens } from '../lens';
import { CollapsibleBlocks, Section, Tags } from './Section';

// Shown in full on the Everything view. Order follows the data file.
const FEATURED_IN_ALL = [
  'Pacto',
  'FINN',
  'Amazon ML Challenge 2026',
  'SabhaSaar',
  'Bharat Trial Network',
  'Campus Beats 2026',
  'LoreDrop',
  'Inter IIT Tech Meet 13.0',
];

export default function Projects() {
  const { lens, info } = useLens();

  const matching =
    lens === 'all'
      ? projects.filter((p) => FEATURED_IN_ALL.includes(p.title))
      : projects.filter((p) => p.lenses.includes(lens));
  // Projects with a screenshot lead, so the first thing a reader sees is real work.
  const featured = [...matching.filter((p) => p.image), ...matching.filter((p) => !p.image)];
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <Section
      id="projects"
      title="Projects"
      stacked
      intro={
        lens === 'all'
          ? `${featured.length} main projects first. Smaller ones are folded below.`
          : `${featured.length} projects that show my ${info.label.toLowerCase()} work. The rest are folded below.`
      }
    >
      <div key={lens} className="lens-fade">
        <ul className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <li key={p.title} className={p.image ? '' : 'md:col-span-1'}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>

        {rest.length > 0 && (
          <div className="mt-14 md:ml-auto md:w-2/3">
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
                    <div className="space-y-4 pt-4">
                      <p className="text-muted">
                        {p.context}
                        {p.role && <>. {p.role}</>}
                      </p>
                      <CollapsibleBlocks blocks={pickView(p.views, lens)} limit={6} />
                      <ProjectLinks project={p} />
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

function ProjectCard({ project: p }: { project: Project }) {
  const { lens } = useLens();
  const blocks = pickView(p.views, lens);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-surface">
      {p.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-rule bg-paper">
          <img
            src={p.image}
            alt={`Screenshot of ${p.title}`}
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
          {p.dates && <p className="shrink-0 text-sm text-muted">{p.dates}</p>}
        </div>
        <p className="mt-0.5 text-lg text-muted">{p.kind}</p>
        <p className="mt-2 text-sm text-muted">
          {p.context}
          {p.role && <>. {p.role}</>}
        </p>
        {p.badge && (
          <p className="mt-3 inline-flex items-center gap-2 font-medium text-accent">
            <Award size={18} aria-hidden />
            {p.badge}
          </p>
        )}
        <div className="mt-4 flex-1">
          <CollapsibleBlocks blocks={blocks} limit={3} />
        </div>
        <div className="mt-5">
          <Tags tags={p.tags} />
        </div>
        <ProjectLinks project={p} className="mt-5" />
      </div>
    </article>
  );
}

function ProjectLinks({ project: p, className = '' }: { project: Project; className?: string }) {
  if (!p.links?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {p.links.map((l, i) => {
        const primary = i === 0 && l.label !== 'Code';
        const Icon = l.label === 'Code' ? Github : ExternalLink;
        return (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.label} for ${p.title} (opens in a new tab)`}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
              primary
                ? 'bg-ink text-white hover:bg-ink/85'
                : 'border border-rule bg-surface hover:border-ink'
            }`}
          >
            <Icon size={16} aria-hidden />
            {l.label}
          </a>
        );
      })}
    </div>
  );
}

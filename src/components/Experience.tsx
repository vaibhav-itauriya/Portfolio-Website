import { ExternalLink } from 'lucide-react';
import { experience } from '../data/content';
import { pickView, useLens } from '../lens';
import { CollapsibleBlocks, Section } from './Section';

export default function Experience() {
  const { lens, info } = useLens();

  return (
    <Section
      id="experience"
      title="Experience"
      intro={
        lens === 'all' ? (
          <>Pick the role you are hiring for at the top to see the most relevant work from each internship.</>
        ) : (
          <>Showing the {info.label.toLowerCase()} side of each internship.</>
        )
      }
    >
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <p className="text-muted sm:pt-2">{job.dates}</p>
            <article>
              <h3 className="font-display text-2xl font-semibold leading-tight md:text-[1.75rem]">
                {job.role}, {job.company}
              </h3>
              <p className="mt-1 text-muted">
                {job.place}
                {job.team && <>. {job.team}</>}
              </p>

              {job.highlights.length > 0 && (
                <ul className="mt-4 space-y-1 border-l-[3px] border-accent pl-4">
                  {job.highlights.map((h) => (
                    <li key={h} className="font-medium">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div key={lens} className="lens-fade mt-5">
                <CollapsibleBlocks blocks={pickView(job.views, lens)} limit={4} />
              </div>

              {job.link && (
                <a
                  href={job.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-4 inline-flex items-center gap-1.5 font-medium"
                >
                  {job.link.label}
                  <ExternalLink size={15} aria-hidden />
                </a>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

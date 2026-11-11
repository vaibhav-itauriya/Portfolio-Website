import { ExternalLink } from 'lucide-react';
import { certifications, courses, education, skills } from '../data/content';
import { useLens } from '../lens';
import { Section } from './Section';

export default function Background() {
  const { lens } = useLens();

  return (
    <Section id="background" title="Background" intro="Education, skills and the courses behind them.">
      <div className="space-y-14">
        <div>
          <h3 className="font-display text-xl font-semibold">Education</h3>
          <ul className="mt-3">
            {education.map((e) => (
              <li
                key={e.degree}
                className="grid gap-x-6 border-t border-rule py-3 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-muted">{e.school}</p>
                </div>
                <p className="text-muted sm:text-right">
                  <span className="font-medium text-ink">{e.score}</span>
                  <span className="ml-3">{e.years}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Skills</h3>
          <dl className="mt-3">
            {skills.map((s) => {
              const marked = lens !== 'all' && s.lenses.includes(lens);
              return (
                <div key={s.group} className="grid gap-x-6 gap-y-1 border-t border-rule py-3 sm:grid-cols-[11rem_1fr]">
                  <dt className={`font-medium ${marked ? 'text-accent' : ''}`}>{s.group}</dt>
                  <dd className="text-muted">{s.items.join(', ')}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">Relevant courses</h3>
            <ul className="mt-3 space-y-1.5">
              {courses.map((c) => (
                <li key={c.name}>
                  {c.name}
                  {c.starred && <span className="text-muted">, outstanding performance (A/A*)</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="link inline font-medium">
                    {c.name}
                    <ExternalLink size={14} aria-hidden className="ml-1.5 inline align-[-1px]" />
                  </a>
                  <p className="text-muted">{c.provider}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

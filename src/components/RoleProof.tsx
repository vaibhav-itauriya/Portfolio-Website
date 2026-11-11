import { roleProof } from '../data/content';
import { useLens } from '../lens';
import { Emphasize, Section } from './Section';

export default function RoleProof() {
  const { lens } = useLens();
  const data = lens === 'all' ? undefined : roleProof[lens];
  if (!data) return null;

  return (
    <Section id="skills" title={data.title} intro={data.intro}>
      <dl className="lens-fade divide-y divide-rule border-y border-rule">
        {data.rows.map((row) => (
          <div key={row.skill} className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-[13rem_1fr]">
            <dt className="font-display text-lg font-semibold leading-snug">{row.skill}</dt>
            <dd>
              <p>
                <Emphasize text={row.proof} />
              </p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem]">
                {row.links.map((l) => (
                  <a key={l.label + l.href} href={l.href} className="link font-medium text-accent">
                    {l.label}
                  </a>
                ))}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

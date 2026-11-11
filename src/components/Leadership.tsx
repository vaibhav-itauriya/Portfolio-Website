import { leadership } from '../data/content';
import { Bullet, Emphasize, Section } from './Section';

export default function Leadership() {
  const [lead, ...others] = leadership;

  return (
    <Section id="leadership" title="Leadership" intro="Running the placement season at IIT Kanpur, and the clubs and causes before it.">
      <article className="rounded-2xl bg-surface p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-display text-2xl font-semibold leading-tight md:text-[1.75rem]">{lead.title}</h3>
          <p className="text-muted">{lead.dates}</p>
        </div>
        <p className="mt-1 text-muted">{lead.org}</p>
        {lead.path && <p className="mt-1 text-muted">{lead.path}</p>}
        {lead.note && <p className="mt-4 border-l-[3px] border-accent pl-4 font-medium">{lead.note}</p>}
        <ul className="mt-5 space-y-2">
          {lead.items.map((item) => (
            <Bullet key={item}>
              <Emphasize text={item} />
            </Bullet>
          ))}
        </ul>
      </article>

      <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {others.map((r) => (
          <li key={r.org}>
            <h3 className="font-semibold">
              {r.title}
              {r.dates && <span className="font-normal text-muted">, {r.dates}</span>}
            </h3>
            <p className="text-muted">{r.org}</p>
            <ul className="mt-2 space-y-1.5">
              {r.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {r.links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-block font-medium">
                {l.label}
              </a>
            ))}
          </li>
        ))}
      </ul>
    </Section>
  );
}

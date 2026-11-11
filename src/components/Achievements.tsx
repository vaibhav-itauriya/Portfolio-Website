import { achievements } from '../data/content';
import { useLens } from '../lens';
import { Section } from './Section';

export default function Achievements() {
  const { lens, info } = useLens();

  return (
    <Section
      id="achievements"
      title="Achievements"
      intro={
        lens === 'all'
          ? 'Case competitions, hackathons and exams.'
          : `Results that matter most for ${info.label.toLowerCase()} roles are marked.`
      }
    >
      <div className="space-y-12">
        {achievements.map((group) => (
          <div key={group.group}>
            <h3 className="font-display text-xl font-semibold">{group.group}</h3>
            <table className="mt-3 w-full border-collapse text-left">
              <caption className="sr-only">{group.group} achievements</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Result</th>
                  <th scope="col">Event and detail</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((a) => {
                  const marked = lens !== 'all' && a.lenses.includes(lens);
                  return (
                    <tr
                      key={a.event}
                      className="border-t border-rule align-baseline"
                    >
                      <th
                        scope="row"
                        className={`w-[32%] py-3 pr-4 font-display text-lg font-semibold leading-snug sm:w-[11.5rem] ${
                          marked ? 'text-accent' : ''
                        }`}
                      >
                        {a.result}
                      </th>
                      <td className="py-3">
                        <span className="font-medium">{a.event}</span>
                        <span className="block text-muted">
                          {a.detail}
                          {a.deck && (
                            <>
                              {'. '}
                              <a href={a.deck} target="_blank" rel="noopener noreferrer" className="link text-ink">
                                See the deck
                              </a>
                            </>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Section>
  );
}

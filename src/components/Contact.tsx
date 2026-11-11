import { Download, Github, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { contact, lenses } from '../data/content';

export default function Contact() {
  const resumes = lenses.filter((l) => l.resume);

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            Let’s talk
          </h2>
          <p className="mt-5 max-w-md text-lg text-paper/75">
            I’m open to full-time roles in product, software, data and consulting. Email is the fastest way to reach me.
          </p>
          <ul className="mt-8 space-y-2">
            {contact.emails.map((e) => (
              <li key={e}>
                <a
                  href={`mailto:${e}`}
                  className="break-all font-display text-2xl font-semibold underline decoration-paper/30 underline-offset-[6px] hover:decoration-[rgb(var(--accent))] md:text-3xl"
                >
                  {e}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-8 space-y-2 text-paper/75">
            <li className="flex items-center gap-3">
              <Phone size={18} aria-hidden />
              <a href={contact.phone.href} className="hover:text-paper">
                {contact.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} aria-hidden />
              {contact.location}
            </li>
          </ul>
          <ul className="mt-8 flex gap-3">
            {[
              { href: contact.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: contact.github, label: 'GitHub', Icon: Github },
              { href: contact.instagram, label: 'Instagram', Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 hover:border-paper"
                >
                  <Icon size={19} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:pt-4">
          <h3 className="font-display text-xl font-semibold">Resumes</h3>
          <p className="mt-2 text-paper/75">One for each kind of role, as PDFs.</p>
          <ul className="mt-5 divide-y divide-paper/15 border-y border-paper/15">
            {resumes.map((l) => (
              <li key={l.id}>
                <a
                  href={l.resume!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 text-lg hover:text-white"
                >
                  {l.resume!.label}
                  <Download size={18} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

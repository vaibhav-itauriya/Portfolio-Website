import { Download, Github, GraduationCap, Briefcase, Linkedin, Mail, MapPin } from 'lucide-react';
import LensSwitch from './LensSwitch';
import { Emphasize } from './Section';
import { useLens } from '../lens';
import { contact } from '../data/content';

const facts = [
  { Icon: GraduationCap, text: 'B.Tech, IIT Kanpur, 2023 – 2027' },
  { Icon: Briefcase, text: 'Interned at Jaguar Land Rover and PFA India' },
  { Icon: MapPin, text: 'Kanpur, India' },
];

export default function Hero() {
  const { lens, info } = useLens();

  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-14">
      <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <div className="flex items-center gap-5">
            <img
              src="/vaibhav.jpg"
              alt="Portrait of Vaibhav Itauriya"
              width={900}
              height={900}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover object-[50%_25%] md:hidden"
            />
            <div>
              <h1
                className="font-display font-extrabold text-ink"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.035em' }}
              >
                Vaibhav Itauriya
              </h1>
              <p key={lens} className="lens-fade mt-2 font-display text-2xl font-semibold text-accent md:text-3xl">
                {info.headline}
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {facts.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={18} aria-hidden className="shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-rule bg-surface p-4 md:p-5">
            <p id="hiring-for" className="mb-3 font-medium">
              What role are you hiring for?
            </p>
            <LensSwitch />
            <p className="mt-3 text-sm text-muted">
              The page updates to show the experience and projects that matter for that role.
            </p>
          </div>

          <div key={lens} className="lens-fade mt-8">
            <p className="max-w-[40rem] text-xl leading-relaxed text-ink">
              <Emphasize text={info.summary} />
            </p>
            <ul className="mt-5 space-y-2">
              {info.proof.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-[3px] w-4 shrink-0 rounded-full bg-accent" />
                  <span>
                    <Emphasize text={p} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-muted">Core skills</p>
              <ul className="flex flex-wrap gap-2" aria-label="Core skills">
                {info.skills.map((s) => (
                  <li key={s} className="rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 text-[0.95rem] font-medium text-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {info.resume ? (
              <a
                href={info.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
              >
                <Download size={18} aria-hidden />
                {info.resume.label}
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
              >
                <Download size={18} aria-hidden />
                Resumes
              </a>
            )}
            <a
              href={`mailto:${contact.emails[0]}`}
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-4 py-2.5 font-medium hover:border-ink"
            >
              <Mail size={18} aria-hidden />
              Email me
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-4 py-2.5 font-medium hover:border-ink"
            >
              <Github size={18} aria-hidden />
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-4 py-2.5 font-medium hover:border-ink"
            >
              <Linkedin size={18} aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:col-span-4 md:block md:pt-4">
          <div className="relative ml-auto max-w-[20rem]">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-accent transition-colors duration-300"
            />
            <img
              src="/vaibhav.jpg"
              alt="Portrait of Vaibhav Itauriya"
              width={900}
              height={900}
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

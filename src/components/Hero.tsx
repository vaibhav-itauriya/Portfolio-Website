import { Download, Github, Linkedin, Mail } from 'lucide-react';
import LensSwitch from './LensSwitch';
import { useLens } from '../lens';
import { contact } from '../data/content';

export default function Hero() {
  const { lens, info } = useLens();

  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <div className="grid items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-muted">Final year, Mechanical Engineering, IIT Kanpur</p>
          <h1
            className="mt-3 font-display font-extrabold text-ink"
            style={{ fontSize: 'clamp(3.25rem, 9vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '-0.035em' }}
          >
            Vaibhav
            <br />
            Itauriya
          </h1>

          <div className="mt-10">
            <p className="mb-3 text-muted">Read this page as</p>
            <LensSwitch />
          </div>

          <div key={lens} className="lens-fade mt-8 max-w-[38rem]">
            <p className="text-xl leading-relaxed text-ink">{info.summary}</p>
            <ul className="mt-6 space-y-2">
              {info.proof.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-[3px] w-4 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
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
                <Mail size={18} aria-hidden />
                Get in touch
              </a>
            )}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-4 py-2.5 font-medium hover:border-ink"
            >
              <Linkedin size={18} aria-hidden />
              LinkedIn
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
          </div>
        </div>

        <div className="md:col-span-5 md:pt-6">
          <div className="relative mx-auto max-w-[22rem] md:ml-auto md:mr-0">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] bg-accent transition-colors duration-300"
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

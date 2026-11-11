import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LensSwitch, { LensSelect } from './LensSwitch';

const links = [
  { href: '#experience', text: 'Experience' },
  { href: '#projects', text: 'Projects' },
  { href: '#decks', text: 'Case decks' },
  { href: '#achievements', text: 'Achievements' },
  { href: '#leadership', text: 'Leadership' },
  { href: '#background', text: 'Background' },
  { href: '#contact', text: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur transition-[border-color] ${
        pastHero ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight">
          Vaibhav Itauriya
        </a>

        {pastHero ? (
          <>
            <div className="hidden lg:block">
              <LensSwitch size="compact" />
            </div>
            <div className="lg:hidden">
              <LensSelect />
            </div>
          </>
        ) : (
          <ul className="hidden items-center gap-6 text-[0.95rem] lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-ink">
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="rounded p-1 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-rule px-5 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg">
                {l.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

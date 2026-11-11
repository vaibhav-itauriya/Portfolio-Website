import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ViewMenu from './ViewMenu';
import { showDecks } from './CaseDecks';
import { useLens } from '../lens';

const allLinks = [
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
  const { lens } = useLens();
  const links = allLinks.filter((l) => l.href !== '#decks' || showDecks(lens));

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3 md:px-8" aria-label="Main">
        <a href="#top" className="whitespace-nowrap font-display text-lg font-extrabold tracking-tight">
          Vaibhav Itauriya
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 text-[0.95rem] xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-ink">
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
          <ViewMenu />
          <button
            type="button"
            className="rounded p-1 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="mx-auto max-w-page border-t border-rule px-5 pb-4 pt-2 md:px-8 xl:hidden">
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

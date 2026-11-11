import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { lenses } from './data/content';
import type { Block, Lens, LensInfo, Views } from './data/content';

export const accents: Record<Lens, string> = {
  all: '194 65 12',
  frontend: '29 78 216',
  software: '51 65 85',
  product: '190 24 93',
  data: '15 118 110',
  strategy: '109 40 217',
};

const ids = lenses.map((l) => l.id);

function readLens(): Lens {
  const value = new URLSearchParams(window.location.search).get('lens');
  return value && (ids as string[]).includes(value) ? (value as Lens) : 'all';
}

interface LensState {
  lens: Lens;
  info: LensInfo;
  setLens: (lens: Lens) => void;
}

const LensContext = createContext<LensState | null>(null);

export function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>(readLens);
  // Switching lens changes how long the sections above the reader are.
  // Remember which section is on screen and keep it in place after the switch.
  const anchor = useRef<{ el: Element; top: number } | null>(null);

  const setLens = useCallback((next: Lens) => {
    const hit = document.elementFromPoint(window.innerWidth / 2, 120);
    const section = hit?.closest('section');
    anchor.current =
      section && section.id !== 'top' ? { el: section, top: section.getBoundingClientRect().top } : null;
    setLensState(next);
    const url = new URL(window.location.href);
    if (next === 'all') url.searchParams.delete('lens');
    else url.searchParams.set('lens', next);
    window.history.replaceState(null, '', url);
  }, []);

  useLayoutEffect(() => {
    const a = anchor.current;
    if (a) {
      window.scrollBy({ top: a.el.getBoundingClientRect().top - a.top, behavior: 'instant' as ScrollBehavior });
      anchor.current = null;
    }
  }, [lens]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accents[lens]);
  }, [lens]);

  const info = lenses.find((l) => l.id === lens)!;
  return <LensContext.Provider value={{ lens, info, setLens }}>{children}</LensContext.Provider>;
}

export function useLens() {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error('useLens must be used inside LensProvider');
  return ctx;
}

/** Pick the blocks written for this lens, or fall back to the general version. */
export function pickView(views: Views, lens: Lens): Block[] {
  return views[lens] ?? views.all ?? [];
}

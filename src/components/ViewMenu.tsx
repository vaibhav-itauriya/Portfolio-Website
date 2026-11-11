import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { lenses } from '../data/content';
import type { Lens } from '../data/content';
import { accents, useLens } from '../lens';

// The four tracks first, the combined view last.
export const order: Lens[] = ['frontend', 'software', 'product', 'data', 'strategy', 'all'];

export const descriptions: Record<Lens, string> = {
  frontend: 'React, UI and web apps',
  software: 'Full stack and backend systems',
  product: 'Research, PRDs and metrics',
  data: 'SQL, analytics and ML',
  strategy: 'Cases, sizing and go-to-market',
  all: 'A short version of everything',
};

/**
 * Compact "Viewing as" menu in the header. Follows the menu button pattern:
 * arrow keys move between options, Enter or Space picks, Escape closes and
 * returns focus to the button.
 */
export default function ViewMenu() {
  const { lens, info, setLens } = useLens();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const wrapper = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    items.current[order.indexOf(lens)]?.focus();
    const onPointer = (e: PointerEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open, lens]);

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) button.current?.focus();
  };

  const onMenuKey = (e: React.KeyboardEvent) => {
    const current = items.current.indexOf(document.activeElement as HTMLButtonElement);
    const focusAt = (i: number) => items.current[(i + order.length) % order.length]?.focus();
    const moves: Record<string, number> = { ArrowDown: current + 1, ArrowUp: current - 1, Home: 0, End: order.length - 1 };
    if (e.key in moves) {
      e.preventDefault();
      focusAt(moves[e.key]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }    else if (e.key === 'Tab') close(false);
  };

  return (
    <div ref={wrapper} className="relative">
      <button
        ref={button}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface py-1.5 pl-3 pr-2.5 text-sm transition-colors hover:border-ink"
      >
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
        <span className="hidden text-muted sm:inline">Viewing as</span>
        <span className="font-semibold">{info.label}</span>
        <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="View this page as"
          onKeyDown={onMenuKey}
          className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-rule bg-surface p-1.5 shadow-[0_12px_32px_-12px_rgba(20,33,61,0.35)]"
        >
          <p className="px-3 pb-1 pt-2 text-sm text-muted">Show the work that matters for</p>
          {order.map((id, i) => {
            const option = lenses.find((l) => l.id === id)!;
            const selected = id === lens;
            return (
              <button
                key={id}
                ref={(el) => (items.current[i] = el)}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                tabIndex={-1}
                onClick={() => {
                  setLens(id);
                  close();
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-paper focus:bg-paper focus:outline-none"
              >
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: `rgb(${accents[id]})` }} />
                <span className="flex-1">
                  <span className="block font-medium">{option.label}</span>
                  <span className="block text-sm text-muted">{descriptions[id]}</span>
                </span>
                {selected && <Check size={16} aria-hidden className="text-accent" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

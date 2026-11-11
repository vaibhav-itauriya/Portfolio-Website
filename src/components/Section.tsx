import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import type { Block } from '../data/content';

export function Section({
  id,
  title,
  intro,
  stacked = false,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  /** Title above the content at full width, for sections that need room (project cards). */
  stacked?: boolean;
  children: ReactNode;
}) {
  if (stacked) {
    return (
      <section id={id} className="border-t border-rule">
        <div className="mx-auto max-w-page px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title">{title}</h2>
            {intro && <div className="max-w-md text-muted md:text-right">{intro}</div>}
          </div>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <h2 className="section-title">{title}</h2>
            {intro && <div className="mt-4 max-w-xs text-muted">{intro}</div>}
          </div>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

// Numbers carry most of the proof in a bullet, so results (150+, 20 sec, 7%, 0.9867) are set
// in a heavier weight for a quick scan. Plain counts and versions ("React 19", "3-week") are left alone.
const NUMBER = /((?<![\w.-])(?:\d[\d,]*(?:\.\d+)?(?:\s?(?:%|ms|sec|min|K|M|Cr|L|x)\+?|\+)|\d+(?:[.,]\d+)+)(?![\w-]))/;

export function Emphasize({ text }: { text: string }) {
  const parts = text.split(NUMBER);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-5">
      <span aria-hidden className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-accent/70" />
      {children}
    </li>
  );
}

export function Blocks({ blocks, limit }: { blocks: Block[]; limit?: number }) {
  let remaining = limit ?? Infinity;
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (remaining <= 0) return null;
        const items = block.items.slice(0, remaining);
        remaining -= items.length;
        return (
          <div key={block.label ?? i} className={block.label ? 'grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4' : ''}>
            {block.label && <p className="pt-0.5 text-sm font-medium text-accent">{block.label}</p>}
            <ul className="space-y-2">
              {items.map((item) => (
                <Bullet key={item}>
                  <Emphasize text={item} />
                </Bullet>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function countItems(blocks: Block[]) {
  return blocks.reduce((n, b) => n + b.items.length, 0);
}

/** Bullets with a "Show all" control once there are more than `limit`. */
export function CollapsibleBlocks({ blocks, limit }: { blocks: Block[]; limit: number }) {
  const [open, setOpen] = useState(false);
  const total = countItems(blocks);
  return (
    <>
      <Blocks blocks={blocks} limit={open ? undefined : limit} />
      {total > limit && (
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="link mt-3 font-medium">
          {open ? 'Show less' : `Show all ${total} points`}
        </button>
      )}
    </>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tools used">
      {tags.map((t) => (
        <li key={t} className="rounded-md bg-ink/[0.06] px-2 py-0.5 text-sm text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

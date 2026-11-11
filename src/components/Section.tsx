import type { ReactNode } from 'react';
import type { Block } from '../data/content';

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
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
                <li key={item} className="relative pl-5">
                  <span aria-hidden className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-accent/70" />
                  {item}
                </li>
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

export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li key={t} className="rounded-md bg-ink/[0.06] px-2 py-0.5 text-sm text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

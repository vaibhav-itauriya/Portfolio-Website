import { lenses } from '../data/content';
import type { Lens } from '../data/content';
import { accents, useLens } from '../lens';

// Order shown to visitors: the four tracks first, the combined view last.
const order: Lens[] = ['product', 'software', 'data', 'strategy', 'all'];

export default function LensSwitch({ size = 'large' }: { size?: 'large' | 'compact' }) {
  const { lens, setLens } = useLens();
  const large = size === 'large';

  return (
    <div
      role="group"
      aria-label="Choose which side of my work to see"
      className={`inline-flex flex-wrap ${large ? 'gap-2' : 'gap-1'}`}
    >
      {order.map((id) => {
        const info = lenses.find((l) => l.id === id)!;
        const active = id === lens;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => setLens(id)}
            style={{ ['--chip' as string]: accents[id] }}
            className={`rounded-full border font-medium transition-colors ${
              large ? 'px-4 py-2 text-base' : 'px-3 py-1 text-sm'
            } ${
              active
                ? 'border-[rgb(var(--chip))] bg-[rgb(var(--chip))] text-white'
                : 'border-rule bg-surface text-ink hover:border-[rgb(var(--chip))] hover:text-[rgb(var(--chip))]'
            }`}
          >
            {info.label}
          </button>
        );
      })}
    </div>
  );
}

export function LensSelect() {
  const { lens, setLens } = useLens();
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="hidden text-muted sm:inline">View</span>
      <select
        value={lens}
        aria-label="Choose which side of my work to see"
        onChange={(e) => setLens(e.target.value as Lens)}
        className="rounded-full border border-rule bg-surface px-3 py-1 font-medium text-accent"
      >
        {order.map((id) => (
          <option key={id} value={id}>
            {lenses.find((l) => l.id === id)!.label}
          </option>
        ))}
      </select>
    </label>
  );
}

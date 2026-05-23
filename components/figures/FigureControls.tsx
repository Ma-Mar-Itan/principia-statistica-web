"use client";

export function ControlGroup({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <label className="block border-b border-[var(--border)] py-4 last:border-b-0">
      <span className="block text-sm font-semibold">{title}</span>
      {description ? <span className="mb-3 block text-xs leading-5 text-[var(--muted)]">{description}</span> : null}
      {children}
    </label>
  );
}

export function RangeControl({
  label,
  value,
  min,
  max,
  step = 1,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-[var(--muted)]">
        <span>Low</span>
        <span className="font-mono text-[var(--foreground)]">{value}</span>
        <span>High</span>
      </div>
      <input aria-label={label} className="w-full accent-[var(--accent)]" type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </div>
  );
}

export function ToggleControl({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 py-2 text-sm">
      <span>{label}</span>
      <input aria-label={label} className="size-4 accent-[var(--accent)]" type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}

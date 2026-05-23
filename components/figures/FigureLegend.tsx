export function FigureLegend({ items }: { items: { label: string; color: string; dashed?: boolean }[] }) {
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-[var(--muted)]">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <span className="h-px w-8" style={{ background: item.dashed ? `repeating-linear-gradient(90deg, ${item.color}, ${item.color} 4px, transparent 4px, transparent 8px)` : item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

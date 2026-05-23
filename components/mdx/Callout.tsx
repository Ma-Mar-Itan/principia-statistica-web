export function Callout({ children, title = "Note" }: { children: React.ReactNode; title?: string }) {
  return (
    <aside className="my-8 rounded border border-[var(--border)] bg-[var(--paper)] p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{title}</p>
      <div className="text-base leading-7">{children}</div>
    </aside>
  );
}

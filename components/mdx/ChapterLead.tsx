export function ChapterLead({ children }: { children: React.ReactNode }) {
  return <span className="block font-serif text-2xl italic leading-10 text-[var(--muted)]">{children}</span>;
}

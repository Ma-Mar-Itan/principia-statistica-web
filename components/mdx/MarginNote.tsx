export function MarginNote({ children }: { children: React.ReactNode }) {
  return <span className="block border-l border-[var(--gold)] pl-4 text-sm leading-6 text-[var(--muted)] lg:float-right lg:ml-6 lg:w-56">{children}</span>;
}

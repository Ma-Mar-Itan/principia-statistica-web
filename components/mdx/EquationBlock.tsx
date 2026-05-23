export function EquationBlock({ children }: { children: React.ReactNode }) {
  return <div className="my-8 overflow-x-auto rounded border border-[var(--border)] bg-[var(--paper)] p-5 text-center font-mono">{children}</div>;
}

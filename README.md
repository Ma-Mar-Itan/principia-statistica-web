# Principia Statistica Web

A modular Next.js App Router website for publishing *Principia Statistica: The Intuitive Foundations of Mathematical Evidence, Inference, and Risk* by Malek M. Itani.

## Architecture

- Content: `content/chapters/*.mdx`
- Structure: `content/book.config.ts`
- Interaction: `components/figures/FigureRegistry.tsx`
- Presentation: reusable layout, reader, MDX, and figure components
- Simulation: isolated model files under each figure plus shared helpers in `lib/simulation`

## Run

```bash
pnpm install
pnpm dev
```

Adding a chapter requires a new MDX file, chapter metadata in `content/book.config.ts`, and optional figure registration.

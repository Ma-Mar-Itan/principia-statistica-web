import { z } from "zod";
import { bookConfig } from "@/content/book.config";

export const sectionSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string()
});

export const chapterSchema = z.object({
  number: z.number(),
  slug: z.string(),
  title: z.string(),
  shortTitle: z.string(),
  status: z.string(),
  mdxPath: z.string(),
  summary: z.string(),
  sections: z.array(sectionSchema),
  figures: z.array(z.string())
});

export type ChapterMeta = (typeof bookConfig.chapters)[number];
export type ChapterSection = ChapterMeta["sections"][number];
export type Heading = { id: string; level: number; text: string };

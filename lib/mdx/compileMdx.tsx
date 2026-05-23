import fs from "node:fs/promises";
import path from "node:path";
import type React from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import type { ChapterMeta } from "@/lib/book/schema";

export type CompiledChapter = {
  content: React.ReactNode;
  frontmatter: Record<string, unknown>;
};

export async function compileChapterMdx(chapter: ChapterMeta): Promise<CompiledChapter> {
  const absolutePath = path.join(process.cwd(), chapter.mdxPath);
  const source = await fs.readFile(absolutePath, "utf8");
  const parsed = matter(source);
  const { content } = await compileMDX({
    source: parsed.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false
    }
  });

  return {
    content,
    frontmatter: parsed.data
  };
}

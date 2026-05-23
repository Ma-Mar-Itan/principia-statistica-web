"use client";

import Fuse from "fuse.js";
import type { SearchRecord } from "./buildSearchIndex";

export function createSearch(records: SearchRecord[]) {
  return new Fuse(records, {
    keys: ["title", "excerpt", "type"],
    threshold: 0.35
  });
}

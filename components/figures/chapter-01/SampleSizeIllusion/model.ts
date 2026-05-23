import { mulberry32 } from "@/lib/simulation/random";
import type { SamplePoint, SampleSizeParams } from "./types";

export const defaultParams: SampleSizeParams = { sampleSize: 20, trueProportion: 0.55, showInterval: true, seed: 1729 };

export function generateSampleSizeData(params: SampleSizeParams) {
  const random = mulberry32(params.seed);
  const samples: SamplePoint[] = Array.from({ length: 42 }, (_, id) => {
    let successes = 0;
    for (let i = 0; i < params.sampleSize; i += 1) successes += random() < params.trueProportion ? 1 : 0;
    return { id, estimate: successes / params.sampleSize, y: id % 7 };
  });
  const estimate = samples[0].estimate;
  const se = Math.sqrt((estimate * (1 - estimate)) / params.sampleSize);
  return { samples, estimate, low: Math.max(0, estimate - 1.96 * se), high: Math.min(1, estimate + 1.96 * se) };
}

import { normal, mulberry32 } from "@/lib/simulation/random";
import { linearRegression } from "@/lib/simulation/regression";
import type { DataMeaningParams, MeaningPoint } from "./types";

export const defaultParams: DataMeaningParams = {
  showRaw: true,
  showLabels: false,
  showGroups: true,
  showTrend: true,
  showBand: false,
  showConfounder: false,
  seed: 1729
};

export function generateMeaningData(params: DataMeaningParams) {
  const random = mulberry32(params.seed);
  const points: MeaningPoint[] = Array.from({ length: 70 }, (_, id) => {
    const group = id % 2 === 0 ? "A" : "B";
    const confounder = group === "A" ? -1 : 1;
    const x = normal(random, confounder * 0.7, 1);
    const y = 0.7 * x + (params.showConfounder ? confounder * 1.2 : 0) + normal(random, 0, 0.9);
    return { id, x, y, group, label: group === "A" ? "Context A" : "Context B" };
  });
  return { points, regression: linearRegression(points) };
}

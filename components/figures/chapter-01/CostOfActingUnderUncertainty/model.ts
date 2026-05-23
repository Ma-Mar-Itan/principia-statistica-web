import { normalCdf, normalPdf } from "@/lib/simulation/distributions";
import type { CostParams, DensityPoint } from "./types";

export const defaultParams: CostParams = { falseAlarmCost: 25, missedDetectionCost: 65, baseRate: 0.28, threshold: 0.75 };

export function generateCostData(params: CostParams) {
  const sd = 1;
  const signalMean = 1.5;
  const data: DensityPoint[] = Array.from({ length: 121 }, (_, i) => {
    const x = -3 + i * 0.05;
    return { x, noSignal: normalPdf(x, 0, sd) * (1 - params.baseRate), signal: normalPdf(x, signalMean, sd) * params.baseRate };
  });
  const falsePositiveRate = 1 - normalCdf((params.threshold - 0) / sd);
  const falseNegativeRate = normalCdf((params.threshold - signalMean) / sd);
  const expectedCost =
    falsePositiveRate * (1 - params.baseRate) * params.falseAlarmCost +
    falseNegativeRate * params.baseRate * params.missedDetectionCost;
  const optimalThreshold = (signalMean / 2) + Math.log(((1 - params.baseRate) * params.falseAlarmCost) / Math.max(params.baseRate * params.missedDetectionCost, 0.001)) / signalMean;
  return { data, falsePositiveRate, falseNegativeRate, expectedCost, optimalThreshold };
}

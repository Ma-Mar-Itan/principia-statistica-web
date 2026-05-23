import { mulberry32, normal } from "@/lib/simulation/random";
import { mean, sd } from "@/lib/simulation/statistics";
import type { ObservationPoint, ThreeSourcesParams } from "./types";

export const DEFAULT_SEED = 1729;
export const defaultParams: ThreeSourcesParams = {
  naturalVariation: 45,
  ignorance: 35,
  measurementError: 30,
  seed: DEFAULT_SEED
};

export function generateUncertaintyData(params: ThreeSourcesParams) {
  const random = mulberry32(params.seed);
  const trueValue = normal(random, 0, params.ignorance / 55);
  const spread = 0.25 + params.naturalVariation / 45 + params.measurementError / 80;
  const points: ObservationPoint[] = Array.from({ length: 64 }, (_, id) => ({
    id,
    x: normal(random, trueValue, spread),
    y: normal(random, 0, 0.16)
  }));
  const values = points.map((point) => point.x);
  const observedMean = mean(values);
  const uncertainty = sd(values);
  const snr = Math.abs(observedMean) / Math.max(uncertainty, 0.01);

  return { points, trueValue, observedMean, uncertainty, snr };
}

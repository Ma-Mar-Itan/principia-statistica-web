import { normal, mulberry32 } from "@/lib/simulation/random";
import { movingAverage } from "@/lib/simulation/statistics";
import type { SignalParams, SignalPoint } from "./types";

export const defaultParams: SignalParams = { noise: 55, trend: 45, showSignal: true, showAverage: true, showRaw: true, seed: 1729 };

export function generateSignalData(params: SignalParams): SignalPoint[] {
  const random = mulberry32(params.seed);
  const raw = Array.from({ length: 90 }, (_, t) => {
    const signal = Math.sin(t / 9) + (params.trend / 100) * (t / 18);
    return signal + normal(random, 0, params.noise / 45);
  });
  const avg = movingAverage(raw, 7);
  return raw.map((value, t) => ({ t, raw: value, signal: Math.sin(t / 9) + (params.trend / 100) * (t / 18), average: avg[t] }));
}

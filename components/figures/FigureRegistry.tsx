"use client";

import dynamic from "next/dynamic";
import { figureMetadata } from "./FigureMetadata";

const ThreeSourcesOfUncertainty = dynamic(() => import("./chapter-01/ThreeSourcesOfUncertainty"), { ssr: false });
const SampleSizeIllusion = dynamic(() => import("./chapter-01/SampleSizeIllusion"), { ssr: false });
const SignalInsideNoise = dynamic(() => import("./chapter-01/SignalInsideNoise"), { ssr: false });
const DataIsNotUnderstanding = dynamic(() => import("./chapter-01/DataIsNotUnderstanding"), { ssr: false });
const CostOfActingUnderUncertainty = dynamic(() => import("./chapter-01/CostOfActingUnderUncertainty"), { ssr: false });

export const figureRegistry = {
  "fig-1-1": {
    ...figureMetadata["fig-1-1"],
    component: ThreeSourcesOfUncertainty,
  },
  "fig-1-2": {
    ...figureMetadata["fig-1-2"],
    component: SampleSizeIllusion,
  },
  "fig-1-3": {
    ...figureMetadata["fig-1-3"],
    component: SignalInsideNoise,
  },
  "fig-1-4": {
    ...figureMetadata["fig-1-4"],
    component: DataIsNotUnderstanding,
  },
  "fig-1-5": {
    ...figureMetadata["fig-1-5"],
    component: CostOfActingUnderUncertainty,
  }
} as const;

export type { FigureId, FigureMeta } from "./FigureMetadata";

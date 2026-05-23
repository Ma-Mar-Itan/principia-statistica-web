"use client";

import { ToggleControl } from "../../FigureControls";
import type { DataMeaningParams } from "./types";

export function Controls({ params, setParams }: { params: DataMeaningParams; setParams: (params: DataMeaningParams) => void }) {
  return (
    <div>
      <ToggleControl label="Show raw data" checked={params.showRaw} onChange={(showRaw) => setParams({ ...params, showRaw })} />
      <ToggleControl label="Show labels" checked={params.showLabels} onChange={(showLabels) => setParams({ ...params, showLabels })} />
      <ToggleControl label="Show groups" checked={params.showGroups} onChange={(showGroups) => setParams({ ...params, showGroups })} />
      <ToggleControl label="Show trend line" checked={params.showTrend} onChange={(showTrend) => setParams({ ...params, showTrend })} />
      <ToggleControl label="Show uncertainty band" checked={params.showBand} onChange={(showBand) => setParams({ ...params, showBand })} />
      <ToggleControl label="Show hidden confounder" checked={params.showConfounder} onChange={(showConfounder) => setParams({ ...params, showConfounder })} />
    </div>
  );
}

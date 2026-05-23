"use client";

import { ControlGroup, RangeControl, ToggleControl } from "../../FigureControls";
import type { SignalParams } from "./types";

export function Controls({ params, setParams }: { params: SignalParams; setParams: (params: SignalParams) => void }) {
  return (
    <div>
      <ControlGroup title="Noise level"><RangeControl label="Noise level" value={params.noise} min={0} max={100} onChange={(noise) => setParams({ ...params, noise })} /></ControlGroup>
      <ControlGroup title="Trend strength"><RangeControl label="Trend strength" value={params.trend} min={0} max={100} onChange={(trend) => setParams({ ...params, trend })} /></ControlGroup>
      <ToggleControl label="Show true signal" checked={params.showSignal} onChange={(showSignal) => setParams({ ...params, showSignal })} />
      <ToggleControl label="Show moving average" checked={params.showAverage} onChange={(showAverage) => setParams({ ...params, showAverage })} />
      <ToggleControl label="Show raw observations" checked={params.showRaw} onChange={(showRaw) => setParams({ ...params, showRaw })} />
    </div>
  );
}

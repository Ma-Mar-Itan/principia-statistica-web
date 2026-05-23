"use client";

import { ControlGroup, RangeControl } from "../../FigureControls";
import type { CostParams } from "./types";

export function Controls({ params, setParams }: { params: CostParams; setParams: (params: CostParams) => void }) {
  return (
    <div>
      <ControlGroup title="False alarm cost"><RangeControl label="False alarm cost" min={1} max={100} value={params.falseAlarmCost} onChange={(falseAlarmCost) => setParams({ ...params, falseAlarmCost })} /></ControlGroup>
      <ControlGroup title="Missed detection cost"><RangeControl label="Missed detection cost" min={1} max={100} value={params.missedDetectionCost} onChange={(missedDetectionCost) => setParams({ ...params, missedDetectionCost })} /></ControlGroup>
      <ControlGroup title="Base rate"><RangeControl label="Base rate" min={0.01} max={0.9} step={0.01} value={params.baseRate} onChange={(baseRate) => setParams({ ...params, baseRate })} /></ControlGroup>
      <ControlGroup title="Decision threshold"><RangeControl label="Decision threshold" min={-2} max={3} step={0.05} value={params.threshold} onChange={(threshold) => setParams({ ...params, threshold })} /></ControlGroup>
    </div>
  );
}

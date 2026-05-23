"use client";

import { Button } from "@/components/ui/button";
import { ControlGroup, RangeControl, ToggleControl } from "../../FigureControls";
import type { SampleSizeParams } from "./types";

export function Controls({ params, setParams }: { params: SampleSizeParams; setParams: (params: SampleSizeParams) => void }) {
  return (
    <div>
      <ControlGroup title="Sample size" description="Small samples can look persuasive.">
        <select aria-label="Sample size" className="w-full rounded border border-[var(--border)] bg-[var(--paper)] p-2" value={params.sampleSize} onChange={(event) => setParams({ ...params, sampleSize: Number(event.target.value) })}>
          {[5, 20, 100, 1000].map((size) => <option key={size} value={size}>{size}</option>)}
        </select>
      </ControlGroup>
      <ControlGroup title="True population proportion">
        <RangeControl label="True population proportion" min={0.05} max={0.95} step={0.01} value={params.trueProportion} onChange={(trueProportion) => setParams({ ...params, trueProportion })} />
      </ControlGroup>
      <ToggleControl label="Show confidence interval" checked={params.showInterval} onChange={(showInterval) => setParams({ ...params, showInterval })} />
      <Button className="mt-4 w-full" variant="secondary" onClick={() => setParams({ ...params, seed: params.seed + 1 })}>Generate new sample</Button>
    </div>
  );
}

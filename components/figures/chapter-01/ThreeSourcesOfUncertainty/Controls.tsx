"use client";

import { Button } from "@/components/ui/button";
import { ControlGroup, RangeControl } from "../../FigureControls";
import type { ThreeSourcesParams } from "./types";

export function Controls({ params, setParams }: { params: ThreeSourcesParams; setParams: (params: ThreeSourcesParams) => void }) {
  return (
    <div>
      <p className="mb-3 text-sm text-[var(--muted)]">Uncertainty in any observed outcome comes from three sources. Adjust each to see their impact.</p>
      <ControlGroup title="1. Natural Variation" description="Real differences in the world.">
        <RangeControl label="Natural variation" value={params.naturalVariation} min={0} max={100} onChange={(naturalVariation) => setParams({ ...params, naturalVariation })} />
      </ControlGroup>
      <ControlGroup title="2. Ignorance" description="Missing or incomplete knowledge.">
        <RangeControl label="Ignorance" value={params.ignorance} min={0} max={100} onChange={(ignorance) => setParams({ ...params, ignorance })} />
      </ControlGroup>
      <ControlGroup title="3. Measurement Error" description="Imprecision in instruments.">
        <RangeControl label="Measurement error" value={params.measurementError} min={0} max={100} onChange={(measurementError) => setParams({ ...params, measurementError })} />
      </ControlGroup>
      <Button className="mt-4 w-full" variant="secondary" onClick={() => setParams({ ...params, seed: params.seed + 1 })}>
        Generate new sample
      </Button>
    </div>
  );
}

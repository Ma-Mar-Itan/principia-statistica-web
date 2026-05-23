"use client";

import { useMemo, useState } from "react";
import { FigureInsight } from "../../FigureInsight";
import { FigureShell } from "../../FigureShell";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { defaultParams, generateUncertaintyData } from "./model";

export default function ThreeSourcesOfUncertainty({ id }: { id?: string }) {
  const [params, setParams] = useState(defaultParams);
  const result = useMemo(() => generateUncertaintyData(params), [params]);

  return (
    <FigureShell
      id={id}
      number="Figure 1.1"
      title="The Three Sources of Uncertainty"
      subtitle="Observed outcome"
      controls={<Controls params={params} setParams={setParams} />}
      chart={<Chart data={result.points} trueValue={result.trueValue} observedMean={result.observedMean} />}
      summary={
        <div className="grid gap-4 text-sm">
          <p><span className="block text-[var(--muted)]">Mean observed</span><span className="font-mono text-xl">{result.observedMean.toFixed(2)}</span></p>
          <p><span className="block text-[var(--muted)]">Uncertainty SD</span><span className="font-mono text-xl">{result.uncertainty.toFixed(2)}</span></p>
          <p><span className="block text-[var(--muted)]">Signal-to-noise</span><span className="font-mono text-xl">{result.snr.toFixed(2)}</span></p>
          <div className="rounded border border-[var(--border)] p-4">High uncertainty makes it difficult to know what is really going on.</div>
        </div>
      }
      insight={<FigureInsight>Try changing one source at a time. The same observation can be produced by different causes.</FigureInsight>}
      caption="The dark line is the observed mean; the dashed line is the true value used by the simulation."
      onReset={() => setParams(defaultParams)}
    />
  );
}

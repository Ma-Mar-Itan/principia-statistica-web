"use client";

import { useMemo, useState } from "react";
import { FigureInsight } from "../../FigureInsight";
import { FigureShell } from "../../FigureShell";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { defaultParams, generateSampleSizeData } from "./model";

export default function SampleSizeIllusion({ id }: { id?: string }) {
  const [params, setParams] = useState(defaultParams);
  const result = useMemo(() => generateSampleSizeData(params), [params]);
  return (
    <FigureShell
      id={id}
      number="Figure 1.2"
      title="Sample Size and the Illusion of Certainty"
      controls={<Controls params={params} setParams={setParams} />}
      chart={<Chart samples={result.samples} trueProportion={params.trueProportion} low={result.low} high={result.high} showInterval={params.showInterval} />}
      summary={<div className="grid gap-4 text-sm"><p><span className="block text-[var(--muted)]">First sample estimate</span><span className="font-mono text-xl">{(result.estimate * 100).toFixed(1)}%</span></p><p><span className="block text-[var(--muted)]">Interval</span><span className="font-mono">{(result.low * 100).toFixed(1)}% to {(result.high * 100).toFixed(1)}%</span></p><div className="rounded border border-[var(--border)] p-4">Small samples can look decisive while being unstable.</div></div>}
      insight={<FigureInsight>Increase the sample size and the repeated estimates tighten around the true value.</FigureInsight>}
      onReset={() => setParams(defaultParams)}
    />
  );
}

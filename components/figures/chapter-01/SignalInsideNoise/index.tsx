"use client";

import { useMemo, useState } from "react";
import { FigureInsight } from "../../FigureInsight";
import { FigureShell } from "../../FigureShell";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { defaultParams, generateSignalData } from "./model";

export default function SignalInsideNoise({ id }: { id?: string }) {
  const [params, setParams] = useState(defaultParams);
  const data = useMemo(() => generateSignalData(params), [params]);
  return (
    <FigureShell
      id={id}
      number="Figure 1.3"
      title="Signal Hidden Inside Noise"
      controls={<Controls params={params} setParams={setParams} />}
      chart={<Chart data={data} params={params} />}
      summary={<div className="rounded border border-[var(--border)] p-4 text-sm">The eye sees movement before the mind knows whether the movement is meaningful.</div>}
      insight={<FigureInsight>Hide the true signal, then raise the noise. Notice how quickly interpretation becomes a negotiation.</FigureInsight>}
      onReset={() => setParams(defaultParams)}
    />
  );
}

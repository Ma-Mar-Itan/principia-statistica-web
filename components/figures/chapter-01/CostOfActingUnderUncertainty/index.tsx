"use client";

import { useMemo, useState } from "react";
import { FigureInsight } from "../../FigureInsight";
import { FigureShell } from "../../FigureShell";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { defaultParams, generateCostData } from "./model";

export default function CostOfActingUnderUncertainty({ id }: { id?: string }) {
  const [params, setParams] = useState(defaultParams);
  const result = useMemo(() => generateCostData(params), [params]);
  return (
    <FigureShell
      id={id}
      number="Figure 1.5"
      title="The Cost of Acting Under Uncertainty"
      controls={<Controls params={params} setParams={setParams} />}
      chart={<Chart data={result.data} threshold={params.threshold} />}
      summary={<div className="grid gap-4 text-sm"><p><span className="block text-[var(--muted)]">False positive rate</span><span className="font-mono text-xl">{(result.falsePositiveRate * 100).toFixed(1)}%</span></p><p><span className="block text-[var(--muted)]">False negative rate</span><span className="font-mono text-xl">{(result.falseNegativeRate * 100).toFixed(1)}%</span></p><p><span className="block text-[var(--muted)]">Expected cost</span><span className="font-mono text-xl">{result.expectedCost.toFixed(2)}</span></p><p><span className="block text-[var(--muted)]">Optimal threshold</span><span className="font-mono">{result.optimalThreshold.toFixed(2)}</span></p></div>}
      insight={<FigureInsight>Evidence does not make decisions alone. Costs and consequences shape action.</FigureInsight>}
      onReset={() => setParams(defaultParams)}
    />
  );
}

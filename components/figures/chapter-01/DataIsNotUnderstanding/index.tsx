"use client";

import { useMemo, useState } from "react";
import { FigureInsight } from "../../FigureInsight";
import { FigureShell } from "../../FigureShell";
import { Chart } from "./Chart";
import { Controls } from "./Controls";
import { defaultParams, generateMeaningData } from "./model";

export default function DataIsNotUnderstanding({ id }: { id?: string }) {
  const [params, setParams] = useState(defaultParams);
  const result = useMemo(() => generateMeaningData(params), [params]);
  return (
    <FigureShell
      id={id}
      number="Figure 1.4"
      title="Data Is Not Understanding"
      controls={<Controls params={params} setParams={setParams} />}
      chart={<Chart data={result.points} params={params} regression={result.regression} />}
      summary={<div className="rounded border border-[var(--border)] p-4 text-sm">Data becomes evidence only after structure is imposed.</div>}
      insight={<FigureInsight>Toggle context and groups. The numerical cloud stays similar, but its meaning changes.</FigureInsight>}
      onReset={() => setParams(defaultParams)}
    />
  );
}

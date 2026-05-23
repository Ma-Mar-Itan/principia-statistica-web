"use client";

import { CartesianGrid, ReferenceArea, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from "recharts";
import type { DataMeaningParams, MeaningPoint } from "./types";

export function Chart({ data, params, regression }: { data: MeaningPoint[]; params: DataMeaningParams; regression: { slope: number; intercept: number } }) {
  const line: [{ x: number; y: number }, { x: number; y: number }] = [
    { x: -3, y: regression.intercept + regression.slope * -3 },
    { x: 3, y: regression.intercept + regression.slope * 3 }
  ];
  const groupA = data.filter((point) => point.group === "A");
  const groupB = data.filter((point) => point.group === "B");

  return (
    <div className="h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#d8d2c4" strokeDasharray="3 6" />
          <XAxis type="number" dataKey="x" domain={[-3.5, 3.5]} tick={{ fill: "#596579", fontSize: 12 }} />
          <YAxis type="number" dataKey="y" domain={[-4, 4]} tick={{ fill: "#596579", fontSize: 12 }} />
          <ZAxis range={[60, 60]} />
          {params.showBand ? <ReferenceArea x1={-3} x2={3} y1={line[0].y - 0.8} y2={line[1].y + 0.8} fill="#d8e5ef" fillOpacity={0.55} /> : null}
          {params.showTrend ? <ReferenceLine segment={line} stroke="#061d36" strokeWidth={2} /> : null}
          {params.showRaw && params.showGroups ? <Scatter data={groupA} fill="#2f6f9f" name="Context A" /> : null}
          {params.showRaw && params.showGroups ? <Scatter data={groupB} fill="#a77a2d" name="Context B" /> : null}
          {params.showRaw && !params.showGroups ? <Scatter data={data} fill="#2f6f9f" /> : null}
        </ScatterChart>
      </ResponsiveContainer>
      {params.showLabels ? <p className="text-center text-xs text-[var(--muted)]">Labels reveal that apparently similar points belong to different contexts.</p> : null}
    </div>
  );
}

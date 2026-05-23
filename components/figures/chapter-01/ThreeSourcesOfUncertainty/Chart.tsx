"use client";

import { CartesianGrid, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";
import type { ObservationPoint } from "./types";

export function Chart({ data, trueValue, observedMean }: { data: ObservationPoint[]; trueValue: number; observedMean: number }) {
  return (
    <div className="h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#d8d2c4" strokeDasharray="3 6" />
          <XAxis type="number" dataKey="x" domain={[-5, 5]} tick={{ fill: "#596579", fontSize: 12 }} />
          <YAxis type="number" dataKey="y" domain={[-1, 1]} hide />
          <ReferenceLine x={trueValue} stroke="#596579" strokeDasharray="4 4" />
          <ReferenceLine x={observedMean} stroke="#061d36" strokeWidth={2} />
          <ReferenceLine y={0} stroke="#a77a2d" />
          <Scatter data={data} fill="#2f6f9f" opacity={0.75} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

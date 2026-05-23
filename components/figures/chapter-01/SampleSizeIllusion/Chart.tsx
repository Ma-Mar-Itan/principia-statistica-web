"use client";

import { CartesianGrid, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";
import type { SamplePoint } from "./types";

export function Chart({ samples, trueProportion, low, high, showInterval }: { samples: SamplePoint[]; trueProportion: number; low: number; high: number; showInterval: boolean }) {
  return (
    <div className="h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#d8d2c4" strokeDasharray="3 6" />
          <XAxis type="number" dataKey="estimate" domain={[0, 1]} tickFormatter={(v) => `${Math.round(Number(v) * 100)}%`} tick={{ fill: "#596579", fontSize: 12 }} />
          <YAxis type="number" dataKey="y" hide />
          <ReferenceLine x={trueProportion} stroke="#061d36" strokeWidth={2} />
          {showInterval ? <ReferenceLine segment={[{ x: low, y: 3.5 }, { x: high, y: 3.5 }]} stroke="#a77a2d" strokeWidth={5} /> : null}
          <Scatter data={samples} fill="#2f6f9f" opacity={0.65} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

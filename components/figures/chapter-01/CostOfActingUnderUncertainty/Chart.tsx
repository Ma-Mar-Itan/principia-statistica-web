"use client";

import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { DensityPoint } from "./types";

export function Chart({ data, threshold }: { data: DensityPoint[]; threshold: number }) {
  return (
    <div className="h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#d8d2c4" strokeDasharray="3 6" />
          <XAxis dataKey="x" tick={{ fill: "#596579", fontSize: 12 }} />
          <YAxis tick={{ fill: "#596579", fontSize: 12 }} />
          <Area dataKey="noSignal" stroke="#2f6f9f" fill="#d8e5ef" name="No signal" />
          <Area dataKey="signal" stroke="#a77a2d" fill="#ead8ba" name="Signal" />
          <ReferenceLine x={threshold} stroke="#061d36" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { SignalParams, SignalPoint } from "./types";

export function Chart({ data, params }: { data: SignalPoint[]; params: SignalParams }) {
  return (
    <div className="h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#d8d2c4" strokeDasharray="3 6" />
          <XAxis dataKey="t" tick={{ fill: "#596579", fontSize: 12 }} />
          <YAxis tick={{ fill: "#596579", fontSize: 12 }} />
          {params.showRaw ? <Line type="monotone" dataKey="raw" stroke="#2f6f9f" strokeWidth={1.5} dot={false} opacity={0.55} /> : null}
          {params.showSignal ? <Line type="monotone" dataKey="signal" stroke="#061d36" strokeWidth={2.5} dot={false} /> : null}
          {params.showAverage ? <Line type="monotone" dataKey="average" stroke="#a77a2d" strokeWidth={2.5} dot={false} /> : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export type DataMeaningParams = {
  showRaw: boolean;
  showLabels: boolean;
  showGroups: boolean;
  showTrend: boolean;
  showBand: boolean;
  showConfounder: boolean;
  seed: number;
};

export type MeaningPoint = { id: number; x: number; y: number; group: "A" | "B"; label: string };

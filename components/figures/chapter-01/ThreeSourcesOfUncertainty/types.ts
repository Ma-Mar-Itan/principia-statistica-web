export type ThreeSourcesParams = {
  naturalVariation: number;
  ignorance: number;
  measurementError: number;
  seed: number;
};

export type ObservationPoint = {
  id: number;
  x: number;
  y: number;
};

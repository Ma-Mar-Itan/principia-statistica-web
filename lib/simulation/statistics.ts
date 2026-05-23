export function mean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function sd(values: number[]) {
  const m = mean(values);
  return Math.sqrt(values.reduce((sum, value) => sum + (value - m) ** 2, 0) / Math.max(values.length - 1, 1));
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function movingAverage(values: number[], windowSize: number) {
  return values.map((_, index) => {
    const start = Math.max(0, index - windowSize + 1);
    return mean(values.slice(start, index + 1));
  });
}

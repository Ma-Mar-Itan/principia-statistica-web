import { figureMetadata } from "@/components/figures/FigureMetadata";

export function getFigures() {
  return Object.values(figureMetadata);
}

export function getFigureById(id: string) {
  return getFigures().find((figure) => figure.id === id);
}

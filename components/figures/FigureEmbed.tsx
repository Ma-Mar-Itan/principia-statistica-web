"use client";

import { figureRegistry, type FigureId } from "./FigureRegistry";

export function FigureEmbed({ id }: { id: FigureId }) {
  const figure = figureRegistry[id];
  const Component = figure.component;
  return <Component id={id} />;
}

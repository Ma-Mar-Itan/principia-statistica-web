import { FigureEmbed } from "@/components/figures/FigureEmbed";
import type { FigureId } from "@/components/figures/FigureRegistry";

export function Figure({ id }: { id: FigureId }) {
  return <FigureEmbed id={id} />;
}

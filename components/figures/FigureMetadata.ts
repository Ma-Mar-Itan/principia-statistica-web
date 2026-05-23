export const figureMetadata = {
  "fig-1-1": {
    id: "fig-1-1",
    number: "Figure 1.1",
    chapterSlug: "why-statistics-exists",
    title: "The Three Sources of Uncertainty",
    shortTitle: "Three Sources",
    summary: "Adjust variation, ignorance, and measurement error to see how uncertainty enters an observed outcome.",
    learningGoal: "Uncertainty is not one thing. It can arise from the world, from our ignorance, or from imperfect measurement."
  },
  "fig-1-2": {
    id: "fig-1-2",
    number: "Figure 1.2",
    chapterSlug: "why-statistics-exists",
    title: "Sample Size and the Illusion of Certainty",
    shortTitle: "Sample Size",
    summary: "Change the sample size and observe how small samples can create false confidence.",
    learningGoal: "Small samples often look meaningful even when they are accidental."
  },
  "fig-1-3": {
    id: "fig-1-3",
    number: "Figure 1.3",
    chapterSlug: "why-statistics-exists",
    title: "Signal Hidden Inside Noise",
    shortTitle: "Signal and Noise",
    summary: "Reveal or hide the underlying signal inside noisy observations.",
    learningGoal: "Observed data usually contains signal and noise fused together."
  },
  "fig-1-4": {
    id: "fig-1-4",
    number: "Figure 1.4",
    chapterSlug: "why-statistics-exists",
    title: "Data Is Not Understanding",
    shortTitle: "Data and Meaning",
    summary: "Toggle context, labels, groups, and hidden variables to see how interpretation changes.",
    learningGoal: "More data does not automatically produce understanding. Interpretation requires structure."
  },
  "fig-1-5": {
    id: "fig-1-5",
    number: "Figure 1.5",
    chapterSlug: "why-statistics-exists",
    title: "The Cost of Acting Under Uncertainty",
    shortTitle: "Cost of Action",
    summary: "Change the cost of false alarms and missed detections to see how optimal decisions move.",
    learningGoal: "The same evidence may justify different decisions when the stakes differ."
  }
} as const;

export type FigureId = keyof typeof figureMetadata;
export type FigureMeta = (typeof figureMetadata)[FigureId];

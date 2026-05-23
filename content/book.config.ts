export const bookConfig = {
  title: "Principia Statistica",
  subtitle: "The Intuitive Foundations of Mathematical Evidence, Inference, and Risk",
  author: "Malek M. Itani",
  description:
    "A first-principles introduction to statistical reasoning, evidence, inference, and risk.",
  chapters: [
    {
      number: 1,
      slug: "why-statistics-exists",
      title: "Why Statistics Exists",
      shortTitle: "Why Statistics Exists",
      status: "published",
      mdxPath: "content/chapters/chapter-01.mdx",
      summary:
        "Why uncertainty makes statistical reasoning necessary, and why evidence requires discipline before it can guide belief or action.",
      sections: [
        { id: "problem-of-uncertainty", number: "1.1", title: "The Problem of Uncertainty" },
        { id: "why-raw-observation-is-not-enough", number: "1.2", title: "Why Raw Observation Is Not Enough" },
        { id: "data-versus-understanding", number: "1.3", title: "Data Versus Understanding" },
        { id: "noise-signal-and-decision-making", number: "1.4", title: "Noise, Signal, and Decision-Making" },
        { id: "statistics-as-disciplined-uncertainty", number: "1.5", title: "Statistics as Disciplined Uncertainty" },
        { id: "statistics-versus-mathematics", number: "1.6", title: "Statistics Versus Mathematics" },
        { id: "statistics-versus-machine-learning", number: "1.7", title: "Statistics Versus Machine Learning" },
        { id: "statistics-as-a-language-of-evidence", number: "1.8", title: "Statistics as a Language of Evidence" }
      ],
      figures: ["fig-1-1", "fig-1-2", "fig-1-3", "fig-1-4", "fig-1-5"]
    },
    {
      number: 2,
      slug: "from-observation-to-inference",
      title: "From Observation to Inference",
      shortTitle: "Inference",
      status: "draft",
      mdxPath: "content/chapters/chapter-02.mdx",
      summary: "How we move from observed data to claims about the unseen world.",
      sections: [
        { id: "what-is-inference", number: "2.1", title: "What Is Inference?" },
        { id: "role-of-probability", number: "2.2", title: "The Role of Probability" },
        { id: "statistics-as-evidence", number: "2.3", title: "Statistics as Evidence" },
        { id: "beyond-the-data", number: "2.4", title: "Beyond the Data" },
        { id: "limits-of-inference", number: "2.5", title: "The Limits of Inference" }
      ],
      figures: []
    }
  ]
} as const;

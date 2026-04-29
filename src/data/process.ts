export type ProcessStep = {
  id: string;
  titleKey: string;
  descriptionKey: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "brief",
    titleKey: "process.steps.brief.title",
    descriptionKey: "process.steps.brief.description",
  },
  {
    id: "concept",
    titleKey: "process.steps.concept.title",
    descriptionKey: "process.steps.concept.description",
  },
  {
    id: "docs",
    titleKey: "process.steps.docs.title",
    descriptionKey: "process.steps.docs.description",
  },
  {
    id: "realization",
    titleKey: "process.steps.realization.title",
    descriptionKey: "process.steps.realization.description",
  },
];

export type Service = {
  id: string;
  titleKey: string;
  descriptionKey: string;
};

export const services: Service[] = [
  {
    id: "planning",
    titleKey: "services.items.planning.title",
    descriptionKey: "services.items.planning.description",
  },
  {
    id: "technical",
    titleKey: "services.items.technical.title",
    descriptionKey: "services.items.technical.description",
  },
  {
    id: "design",
    titleKey: "services.items.design.title",
    descriptionKey: "services.items.design.description",
  },
  {
    id: "supervision",
    titleKey: "services.items.supervision.title",
    descriptionKey: "services.items.supervision.description",
  },
  {
    id: "stained-glass",
    titleKey: "services.items.stainedGlass.title",
    descriptionKey: "services.items.stainedGlass.description",
  },
];

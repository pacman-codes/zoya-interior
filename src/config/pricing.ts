export type PricingPackage = {
  id: string;
  nameKey: string;
  price: string;
  features: string[];
};

export const pricingConfig: { packages: PricingPackage[]; ctaKey: string } = {
  packages: [
    {
      id: "planning",
      nameKey: "pricing.packages.planning.name",
      price: "от 2 500 ₽/м²",
      features: [
        "pricing.packages.planning.features.0",
        "pricing.packages.planning.features.1",
        "pricing.packages.planning.features.2",
      ],
    },
    {
      id: "full",
      nameKey: "pricing.packages.full.name",
      price: "от 4 500 ₽/м²",
      features: [
        "pricing.packages.full.features.0",
        "pricing.packages.full.features.1",
        "pricing.packages.full.features.2",
      ],
    },
    {
      id: "supervision",
      nameKey: "pricing.packages.supervision.name",
      price: "от 85 000 ₽/месяц",
      features: [
        "pricing.packages.supervision.features.0",
        "pricing.packages.supervision.features.1",
        "pricing.packages.supervision.features.2",
      ],
    },
  ],
  ctaKey: "servicesPage.cta",
};

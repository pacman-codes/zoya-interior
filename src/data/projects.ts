export type Project = {
  slug: string;
  title: string;
  location: string;
  area: string;
  type: string;
  description: string;
  coverImage: string;
  gallery: string[];
  hasStainedGlass: boolean;
  stainedGlassNote?: string;
};

export const featuredProjectSlugs = [
  "sochi-apartment",
  "family-house",
  "restaurant-interior",
  "office-space",
];

export const projects: Project[] = [
  {
    slug: "sochi-apartment",
    title: "Квартира в Сочи",
    location: "Сочи",
    area: "82 м²",
    type: "Квартира",
    description: "Теплый интерьер с мягкой палитрой, натуральными фактурами и спокойной атмосферой.",
    coverImage: "/images/projects/sochi-apartment/cover.jpg",
    gallery: [
      "/images/projects/sochi-apartment/cover.jpg",
      "/images/projects/sochi-apartment/01.jpg",
      "/images/projects/sochi-apartment/cover.jpg",
    ],
    hasStainedGlass: true,
    stainedGlassNote:
      "Особая деталь проекта — авторский витраж, созданный Зоей Маскиной под пространство.",
  },
  {
    slug: "family-house",
    title: "Семейный дом",
    location: "Краснодарский край",
    area: "180 м²",
    type: "Дом",
    description: "Пространство для семьи с акцентом на комфорт, функциональность и мягкий свет.",
    coverImage: "/images/projects/family-house/cover.jpg",
    gallery: [
      "/images/projects/family-house/cover.jpg",
      "/images/projects/family-house/01.jpg",
      "/images/projects/family-house/cover.jpg",
    ],
    hasStainedGlass: false,
  },
  {
    slug: "restaurant-interior",
    title: "Ресторан",
    location: "Сочи",
    area: "120 м²",
    type: "Коммерция",
    description: "Атмосферный коммерческий интерьер с выразительными материалами и вечерним настроением.",
    coverImage: "/images/projects/restaurant/cover.jpg",
    gallery: [
      "/images/projects/restaurant/cover.jpg",
      "/images/projects/restaurant/01.jpg",
      "/images/projects/restaurant/cover.jpg",
    ],
    hasStainedGlass: true,
    stainedGlassNote:
      "Особая деталь проекта — авторский витраж, созданный Зоей Маскиной под пространство.",
  },
  {
    slug: "office-space",
    title: "Офисное пространство",
    location: "Удаленный проект",
    area: "95 м²",
    type: "Офис",
    description: "Сдержанный интерьер для работы, встреч и спокойной повседневной коммуникации.",
    coverImage: "/images/projects/office/cover.jpg",
    gallery: [
      "/images/projects/office/cover.jpg",
      "/images/projects/office/01.jpg",
      "/images/projects/office/cover.jpg",
    ],
    hasStainedGlass: false,
  },
];

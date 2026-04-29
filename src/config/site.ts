export const siteConfig = {
  studioName: "studio",
  contacts: {
    phone: "+7 988 142 5888",
    telegram: "https://t.me/Zoya2278",
    max: "https://t.me/Zoya2278",
    instagram:
      "https://www.instagram.com/zoyamaskinadesign?igsh=amJ6ejNlZ2t2NG1o",
    email: "vidmiaan@gmail.com",
  },
  location: "Sochi",
  locales: ["ru", "en"] as const,
  defaultLocale: "ru" as const,
  seo: {
    title: "studio — Интерьеры",
    description: "Дизайн жилых и коммерческих пространств",
  },
  palette: ["#DCCCCC", "#2C2220", "#B4A79F", "#4F4B47", "#867B76"] as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];

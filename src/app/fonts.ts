import { Playfair_Display, Inter } from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

export const fontBody = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

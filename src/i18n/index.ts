import { en } from "./en";
import { ru } from "./ru";

export const dictionaries = {
  ru,
  en,
} as const;

export type Locale = keyof typeof dictionaries;

export const localeList = Object.keys(dictionaries) as Locale[];

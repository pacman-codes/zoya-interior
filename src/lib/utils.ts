import type { Locale } from "@/i18n";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function withLang(path: string, locale: Locale): string {
  const divider = path.includes("?") ? "&" : "?";
  return `${path}${divider}lang=${locale}`;
}

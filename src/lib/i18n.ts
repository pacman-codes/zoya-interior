import { dictionaries, type Locale, localeList } from "@/i18n";
import { siteConfig } from "@/config/site";

type DictValue = string | Record<string, unknown>;
type SearchParamsValue = string | string[] | undefined;

export function t(locale: Locale, path: string): string {
  const keys = path.split(".");
  let current: DictValue | undefined = dictionaries[locale];

  for (const key of keys) {
    if (typeof current !== "object" || current === null || !(key in current)) {
      return path;
    }
    current = (current as Record<string, DictValue>)[key];
  }

  return typeof current === "string" ? current : path;
}

export function resolveLocale(value: SearchParamsValue): Locale {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate) {
    return siteConfig.defaultLocale;
  }

  return localeList.includes(candidate as Locale)
    ? (candidate as Locale)
    : siteConfig.defaultLocale;
}

export async function getLocale(
  searchParams?: Promise<Record<string, SearchParamsValue>>,
): Promise<Locale> {
  if (!searchParams) {
    return siteConfig.defaultLocale;
  }

  try {
    const resolved = await searchParams;
    return resolveLocale(resolved.lang);
  } catch {
    return siteConfig.defaultLocale;
  }
}

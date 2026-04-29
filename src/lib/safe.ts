export function safeArray<T>(value: T[] | undefined | null): T[] {
  return Array.isArray(value) ? value : [];
}

export function safeFindBySlug<T extends { slug: string }>(
  items: T[],
  slug: string,
): T | null {
  return items.find((item) => item.slug === slug) ?? null;
}

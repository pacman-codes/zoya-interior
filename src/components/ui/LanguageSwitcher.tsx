"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const LOCALES: Locale[] = ["ru", "en"];

type LanguageSwitcherProps = {
  locale: Locale;
};

function buildHref(pathname: string, current: URLSearchParams, locale: Locale): string {
  const params = new URLSearchParams(current.toString());
  params.set("lang", locale);
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  return (
    <div className="inline-flex w-fit max-w-full min-w-0 items-center self-start rounded-full border border-[var(--line-soft)] bg-white/75 p-1 shadow-[0_6px_26px_-20px_rgba(44,34,32,0.8)] lg:self-auto">
      {LOCALES.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={buildHref(pathname, searchParams, item)}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-all duration-300",
              isActive
                ? "bg-[var(--tone-dark)] text-white"
                : "text-[var(--tone-muted)] hover:bg-[var(--tone-light)]/35 hover:text-[var(--tone-dark)]",
            )}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}

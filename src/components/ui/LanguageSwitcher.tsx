"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function LanguageSwitcher({ locale }: { locale: "ru" | "en" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggle = () => {
    const newLocale = locale === "ru" ? "en" : "ru";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLocale);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-[var(--line-soft)] px-3 py-1 text-[10px] text-[var(--tone-dark)] transition hover:bg-black hover:text-white"
    >
      {locale.toUpperCase()}
    </button>
  );
}

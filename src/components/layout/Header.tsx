"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header({ locale }: { locale: "ru" | "en" }) {
  const items = [
    { href: `/projects?lang=${locale}`, ru: "Проекты", en: "Projects" },
    { href: `/services?lang=${locale}`, ru: "Услуги", en: "Services" },
    { href: `/?lang=${locale}&slide=contacts`, ru: "Контакты", en: "Contacts" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[var(--bg-main)]/88 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-5 md:relative md:px-6">
        <Link
          href={`/?lang=${locale}`}
          className="text-[11px] uppercase tracking-[0.22em] text-[var(--tone-dark)] transition hover:opacity-60"
        >
          Studio
        </Link>

        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.18em] text-[var(--tone-dark)] md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:opacity-60">
              {locale === "ru" ? item.ru : item.en}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

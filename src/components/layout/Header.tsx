"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header({ locale }: { locale: "ru" | "en" }) {
  const items = [
    { href: "/", ru: "Studio", en: "Studio" },
    { href: "/projects", ru: "Проекты", en: "Projects" },
    { href: "/services", ru: "Услуги", en: "Services" },
    { href: "/contact", ru: "Контакты", en: "Contacts" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[var(--bg-main)]/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-11 max-w-[1200px] items-center px-6">
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-10 text-[11px] uppercase tracking-[0.18em] text-[var(--tone-dark)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`${item.href}?lang=${locale}`}
              className="transition hover:opacity-60"
            >
              {locale === "ru" ? item.ru : item.en}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}

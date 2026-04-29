import { Suspense } from "react";
import Link from "next/link";
import { navigationItems } from "@/config/navigation";
import { type Locale } from "@/i18n";
import { t } from "@/lib/i18n";
import { withLang } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
};

const RU_LABELS_BY_HREF: Record<string, string> = {
  "/projects": "Проекты",
  "/services": "Услуги",
  "/contact": "Контакты",
};

export function Header({ locale }: HeaderProps) {
  const getLabel = (href: string, key: string) => {
    const translated = t(locale, key);
    if (locale === "ru" && href in RU_LABELS_BY_HREF) {
      return RU_LABELS_BY_HREF[href];
    }
    return translated;
  };

  return (
    <header className="hidden lg:flex border-b border-[var(--line-soft)] bg-[rgb(253_249_246_/_82%)] backdrop-blur-xl lg:sticky lg:top-0 lg:z-40">
      <div className="container-shell flex w-full max-w-full min-w-0 flex-col gap-3 py-3 sm:py-4 lg:flex-row lg:items-center lg:justify-between">
        <nav className="flex w-full max-w-full min-w-0 flex-wrap items-center gap-1.5 sm:gap-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={withLang(item.href, locale)}
              className="min-w-0 max-w-full rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--tone-muted)] transition-all duration-300 hover:bg-white hover:text-[var(--tone-dark)] sm:px-3 sm:text-[11px]"
            >
              {getLabel(item.href, item.labelKey)}
            </Link>
          ))}
        </nav>

        <Suspense
          fallback={
            <div className="inline-flex min-h-9 w-fit items-center self-start rounded-full border border-[var(--tone-mid)]/55 bg-white/70 px-3 text-[11px] uppercase tracking-[0.12em] text-[var(--tone-muted)] lg:self-auto">
              {locale}
            </div>
          }
        >
          <LanguageSwitcher locale={locale} />
        </Suspense>
      </div>
    </header>
  );
}

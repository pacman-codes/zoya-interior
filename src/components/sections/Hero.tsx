import Image from "next/image";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n";
import { t } from "@/lib/i18n";
import { withLang } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  return (
    <Section id="hero" className="!pt-4 !pb-6 lg:!py-8">
      <div className="relative min-h-[580px] overflow-hidden rounded-[1.35rem] bg-[var(--tone-dark)] lg:min-h-[calc(100svh-9rem)]">
        <Image
          src="/images/hero.jpg"
          alt={t(locale, "hero.title")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(20,14,12,0.48)]" />

        <div className="relative z-10 flex min-h-[580px] flex-col items-center justify-center px-5 py-10 text-center lg:min-h-[calc(100svh-9rem)] lg:px-12">
<h1 className="mx-auto max-w-4xl font-display whitespace-pre-line text-[3.15rem] leading-[0.92] text-white lg:text-[4.6rem]">
            {t(locale, "hero.title")}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/82 lg:text-lg">
            {t(locale, "hero.subtitle")}
          </p>

          <a
            href={withLang("/projects", locale)}
            className="mt-6 inline-flex text-sm font-medium text-white underline underline-offset-4 transition hover:text-white/75 lg:hidden"
          >
            {t(locale, "buttons.viewProjects")} →
          </a>

          <div className="mt-8 hidden justify-center gap-3 lg:flex">
            <Button href={withLang("/projects", locale)}>
              {t(locale, "buttons.viewProjects")}
            </Button>

            <Button href={withLang("/contact", locale)} variant="ghost">
              {t(locale, "buttons.discussProject")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

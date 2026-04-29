import { SiteShell } from "@/components/layout/SiteShell";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { pricingConfig } from "@/config/pricing";
import { services } from "@/data/services";
import { getLocale, t } from "@/lib/i18n";

export default async function ServicesPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  return (
    <SiteShell locale={locale}>
      <Section title={t(locale, "servicesPage.title")} subtitle={t(locale, "servicesPage.subtitle")}>
        <div className="divide-y divide-[var(--line-soft)] border-y border-[var(--line-soft)]">
          {services.map((service) => (
            <article key={service.id} className="grid gap-3 py-6 sm:grid-cols-[0.42fr_1fr] sm:gap-10 sm:py-8">
              <h3 className="font-display text-2xl leading-tight text-[var(--tone-dark)] sm:text-3xl">
                {t(locale, service.titleKey)}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--tone-muted)] sm:text-base">
                {t(locale, service.descriptionKey)}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t(locale, "sections.packages")}>
        <div className="divide-y divide-[var(--line-soft)] border-y border-[var(--line-soft)]">
          {pricingConfig.packages.map((item) => (
            <article key={item.id} className="grid gap-3 py-6 sm:grid-cols-[0.32fr_0.22fr_1fr] sm:gap-8 sm:py-8">
              <h3 className="font-display text-2xl leading-tight text-[var(--tone-dark)] sm:text-3xl">
                {t(locale, item.nameKey)}
              </h3>
              <p className="text-sm text-[var(--tone-muted)]">{item.price}</p>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--tone-muted)] sm:text-base">
                {item.features.map((feature) => (
                  <li key={feature}>— {t(locale, feature)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--tone-muted)] sm:text-base">
          {t(locale, pricingConfig.ctaKey)}
        </p>
      </Section>

      <Contact locale={locale} />
    </SiteShell>
  );
}

import type { Locale } from "@/i18n";
import { t } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  return (
    <Section id="about" title={t(locale, "sections.about")}>
      <div className="surface-card max-w-5xl p-7 sm:p-10 lg:p-12">
        <p className="text-lg leading-relaxed text-[var(--tone-muted)] sm:text-2xl sm:leading-relaxed">
          {t(locale, "about.text")}
        </p>
      </div>
    </Section>
  );
}

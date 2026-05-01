import Image from "next/image";
import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type Props = {
  locale: Locale;
};

export function ZoyaIntro({ locale }: Props) {
  const isRu = locale === "ru";

  return (
    <Section id="about-zoya" className="!pt-8">
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-black/5">
          <Image
            src="/images/zoya.jpg"
            alt="Зоя Маскина"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--tone-muted)]">
            {isRu ? "О Зое" : "About Zoya"}
          </p>

          <h2 className="mt-4 font-display text-[42px] leading-[1] text-[var(--tone-dark)]">
            {isRu
              ? "Дизайн как спокойная сцена для жизни"
              : "Design as a calm setting for life"}
          </h2>

          <p className="mt-5 text-[16px] leading-relaxed text-[var(--tone-muted)]">
            {isRu
              ? "Зоя Маскина создает интерьеры, в которых важны не только форма и материалы, но и ощущение дома, ритм жизни, свет и детали."
              : "Zoya Maskina creates interiors where form, materials, light and personal rhythm work together."}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[var(--line-soft)] pt-7">
          {[
            ["18+", isRu ? "лет опыта" : "years"],
            ["45+", isRu ? "проектов" : "projects"],
            ["100%", isRu ? "внимание к деталям" : "attention"],
            ["12", isRu ? "направлений работы" : "directions"],
          ].map(([value, label]) => (
            <div key={value}>
              <p className="font-display text-[30px] leading-none text-[var(--tone-dark)]">
                {value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[var(--tone-muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.1rem] bg-[var(--tone-light)]">
          <Image
            src="/images/zoya.jpg"
            alt="Зоя Маскина"
            fill
            sizes="45vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
              {isRu ? "О Зое" : "About Zoya"}
            </p>

            <h2 className="mt-4 font-display text-5xl leading-tight text-[var(--tone-dark)]">
              {isRu
                ? "Дизайн как спокойная сцена для жизни"
                : "Design as a calm setting for life"}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--tone-muted)]">
              {isRu
                ? "Зоя Маскина создает интерьеры, в которых важны не только форма и материалы, но и ощущение дома, ритм жизни, свет и детали."
                : "Zoya Maskina creates interiors where form, materials, light and personal rhythm work together."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-l border-[var(--line-soft)] pl-8">
            {[
              ["18+", isRu ? "лет опыта" : "years"],
              ["45+", isRu ? "проектов" : "projects"],
              ["100%", isRu ? "внимание к деталям" : "attention"],
              ["12", isRu ? "направлений работы" : "directions"],
            ].map(([value, label]) => (
              <div key={value}>
                <p className="font-display text-3xl text-[var(--tone-dark)]">
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

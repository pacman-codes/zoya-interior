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
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[var(--tone-light)] lg:aspect-[5/4]">
          <Image
            src="/images/zoya.jpg"
            alt="Зоя Маскина"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
              {isRu ? "О Зое" : "About Zoya"}
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--tone-dark)] sm:text-4xl lg:text-5xl">
              {isRu ? "Дизайн как спокойная сцена для жизни" : "Design as a calm setting for life"}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--tone-muted)]">
              {isRu
                ? "Зоя Маскина создает интерьеры, в которых важны не только форма и материалы, но и ощущение дома, ритм жизни, свет и детали."
                : "Zoya Maskina creates interiors where form, materials, light and personal rhythm work together."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--line-soft)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="font-display text-3xl text-[var(--tone-dark)]">18+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                {isRu ? "лет опыта" : "years"}
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-[var(--tone-dark)]">45+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                {isRu ? "проектов" : "projects"}
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-[var(--tone-dark)]">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                {isRu ? "внимание к деталям" : "attention"}
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-[var(--tone-dark)]">12</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--tone-muted)]">
                {isRu ? "направлений работы" : "directions"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

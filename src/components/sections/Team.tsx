import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type TeamProps = {
  locale: Locale;
};

export function Team({ locale }: TeamProps) {
  const isRu = locale === "ru";

  const items = [
    {
      n: "01",
      title: isRu ? "Визуализация" : "Visualization",
      text: isRu
        ? "Позволяет заранее увидеть объем, свет и атмосферу будущего пространства."
        : "Allows you to preview volume, light and atmosphere of the future space.",
    },
    {
      n: "02",
      title: isRu ? "Комплектация" : "Procurement",
      text: isRu
        ? "Подбор материалов, мебели и контроль реализации до финального результата."
        : "Selection of materials, furniture and control until final result.",
    },
    {
      n: "03",
      title: isRu ? "Реализация" : "Execution",
      text: isRu
        ? "Координация процессов и сохранение идеи проекта на каждом этапе."
        : "Process coordination and preservation of design intent.",
    },
  ];

  return (
    <Section id="team" className="!py-0">
      <div className="mx-auto w-full max-w-[92rem]">

        {/* Header */}
        <div className="mb-14 flex items-center gap-6">
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
          <p className="shrink-0 text-[11px] uppercase tracking-[0.28em] text-[var(--tone-muted)]">
            {isRu ? "Команда" : "Team"}
          </p>
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
        </div>

        {/* Items */}
        <div className="flex flex-col">

          {items.map((item, index) => (
            <article
              key={item.n}
              className="py-12 border-b border-[var(--line-soft)] last:border-0"
            >
              <div className="flex flex-col gap-4">

                <p className="text-[11px] text-[var(--tone-muted)] opacity-60">
                  {item.n}
                </p>

                <h3 className="font-display text-[38px] leading-[1] tracking-[-0.02em] text-[var(--tone-dark)] lg:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-md text-[16px] leading-relaxed text-[var(--tone-muted)] lg:text-sm">
                  {item.text}
                </p>

              </div>
            </article>
          ))}

        </div>

      </div>
    </Section>
  );
}

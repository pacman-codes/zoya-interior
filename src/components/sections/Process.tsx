import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type Props = {
  locale: Locale;
};

export function Process({ locale }: Props) {
  const isRu = locale === "ru";

  const items = [
    {
      n: "01",
      title: isRu ? "Планировка" : "Planning",
      text: isRu
        ? "Сценарии жизни, эргономика и логика пространства."
        : "Lifestyle scenarios, ergonomics and spatial logic.",
      price: isRu ? "от 2 500 ₽ / м²" : "from 2,500 ₽ / m²",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      detail: isRu
        ? "Обмерный план, зонирование и 2–3 варианта расстановки мебели."
        : "Measured plan, zoning and 2–3 furniture layout options.",
    },
    {
      n: "02",
      title: isRu ? "Дизайн-проект" : "Interior design",
      text: isRu
        ? "Материалы, свет, мебель и настроение будущего интерьера."
        : "Materials, lighting, furniture and the mood of the future interior.",
      price: isRu ? "от 5 000 ₽ / м²" : "from 5,000 ₽ / m²",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop",
      detail: isRu
        ? "Концепция, коллажи, референсы и подбор ключевых решений."
        : "Concept, moodboards, references and key design decisions.",
    },
    {
      n: "03",
      title: isRu ? "Документация" : "Documentation",
      text: isRu
        ? "Чертежи и спецификации для спокойной реализации проекта."
        : "Drawings and specifications for a smooth implementation.",
      price: isRu ? "от 3 500 ₽ / м²" : "from 3,500 ₽ / m²",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop",
      detail: isRu
        ? "Рабочие чертежи, развертки стен, ведомости и спецификации."
        : "Working drawings, wall elevations, schedules and specifications.",
    },
    {
      n: "04",
      title: isRu ? "Авторский надзор" : "Project supervision",
      text: isRu
        ? "Контроль решений, координация и сохранение идеи проекта."
        : "Decision control, coordination and preservation of the design intent.",
      price: isRu ? "от 20 000 ₽ / мес" : "from 20,000 ₽ / month",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
      detail: isRu
        ? "Выезды на объект, связь со строителями и аккуратная комплектация."
        : "Site visits, builder communication and careful procurement.",
    },
  ];

  return (
    <Section id="services-process" className="!py-0">
      <div className="mx-auto w-full max-w-[92rem]">
        <div className="mb-10 flex items-center gap-6 lg:mb-8">
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
          <p className="shrink-0 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--tone-muted)] lg:text-xs lg:tracking-[0.2em]">
            {isRu ? "Услуги и процесс" : "Services and process"}
          </p>
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
        </div>

        <div className="grid gap-14 lg:grid-cols-4 lg:gap-10">
          {items.map((item) => (
            <article key={item.n} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-black/5 lg:rounded-[0.6rem]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
              </div>

              <div className="mt-6 border-t border-[var(--line-soft)] pt-5 lg:mt-5 lg:border-0 lg:pt-0">
                <p className="text-[13px] text-[var(--tone-muted)] lg:text-xs">
                  {item.n}
                </p>

                <h3 className="mt-5 font-display text-[40px] leading-[0.98] text-[var(--tone-dark)] lg:mt-4 lg:text-2xl lg:leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[var(--tone-muted)] lg:mt-3 lg:text-sm">
                  {item.text}
                </p>

                <p className="mt-6 text-[17px] font-medium text-[var(--tone-dark)] lg:mt-5 lg:text-base">
                  {item.price}
                </p>

                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[var(--tone-muted)] lg:mt-5 lg:text-sm">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center lg:mt-8">
          <a
            href={`/services?lang=${locale}`}
            className="inline-block border-b border-[var(--tone-dark)] text-[15px] text-[var(--tone-dark)] transition hover:text-[var(--tone-muted)] lg:text-sm"
          >
            {isRu ? "Подробнее об услугах →" : "More about services →"}
          </a>
        </div>
      </div>
    </Section>
  );
}

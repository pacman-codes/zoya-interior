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
        ? "Продумываем сценарии жизни, эргономику и расстановку мебели."
        : "We define lifestyle scenarios, ergonomics and furniture layout.",
      price: isRu ? "от 2 500 ₽ / м²" : "from 2,500 ₽ / m²",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      points: isRu
        ? ["Обмерный план", "Зонирование", "Расстановка мебели", "2–3 варианта планировки"]
        : ["Measured plan", "Zoning", "Furniture layout", "2–3 layout options"],
    },
    {
      n: "02",
      title: isRu ? "Дизайн-проект" : "Interior design",
      text: isRu
        ? "Создаем визуальную концепцию интерьера: материалы, свет, мебель и настроение."
        : "We create the visual concept: materials, lighting, furniture and mood.",
      price: isRu ? "от 5 000 ₽ / м²" : "from 5,000 ₽ / m²",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
      points: isRu
        ? ["Концепция интерьера", "Коллажи и референсы", "Подбор материалов", "Свет и мебель"]
        : ["Interior concept", "Moodboards", "Material selection", "Lighting and furniture"],
    },
    {
      n: "03",
      title: isRu ? "Документация" : "Documentation",
      text: isRu
        ? "Готовим чертежи, ведомости и спецификации для реализации проекта."
        : "We prepare drawings, schedules and specifications for implementation.",
      price: isRu ? "от 3 500 ₽ / м²" : "from 3,500 ₽ / m²",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
      points: isRu
        ? ["Рабочие чертежи", "Развертки стен", "Ведомости отделки", "Спецификации"]
        : ["Working drawings", "Wall elevations", "Finishing schedules", "Specifications"],
    },
    {
      n: "04",
      title: isRu ? "Авторский надзор" : "Project supervision",
      text: isRu
        ? "Сопровождаем реализацию, согласуем решения и сохраняем идею проекта."
        : "We supervise implementation and preserve the original design intent.",
      price: isRu ? "от 20 000 ₽ / мес" : "from 20,000 ₽ / month",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      points: isRu
        ? ["Выезды на объект", "Комплектация", "Контроль решений", "Связь со строителями"]
        : ["Site visits", "Procurement", "Decision control", "Builder coordination"],
    },
  ];

  return (
    <Section id="services-process" className="!py-0">
      <div className="pb-0">
        <div className="mb-8 flex items-center gap-6">
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
          <p className="shrink-0 text-center text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
            {isRu ? "Услуги и процесс" : "Services and process"}
          </p>
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
        </div>
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.n}>
              <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-[0.6rem]">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              </div>

              <p className="text-xs text-[var(--tone-muted)]">{item.n}</p>

              <h3 className="mt-4 font-display text-2xl text-[var(--tone-dark)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--tone-muted)]">
                {item.text}
              </p>

              <p className="mt-5 text-base font-medium text-[var(--tone-dark)]">
                {item.price}
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--tone-muted)]">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`/services?lang=${locale}`}
            className="inline-block border-b border-[var(--tone-dark)] text-sm text-[var(--tone-dark)] transition hover:text-[var(--tone-muted)]"
          >
            {isRu ? "Подробнее об услугах →" : "More about services →"}
          </a>
        </div>
      </div>
    </Section>
  );
}

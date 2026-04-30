import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLocale } from "@/lib/i18n";

export default async function ServicesPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);
  const isRu = locale === "ru";

  const services = [
    {
      n: "01",
      title: isRu ? "Планировка" : "Planning",
      text: isRu
        ? "Продумываем сценарии жизни, эргономику, зонирование и расстановку мебели."
        : "We plan lifestyle scenarios, ergonomics, zoning and furniture layout.",
      price: isRu ? "от 2 500 ₽ / м²" : "from 2,500 ₽ / m²",
      img: "/images/projects/sochi-apartment/cover.jpg",
      items: isRu
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
      img: "/images/projects/family-house/cover.jpg",
      items: isRu
        ? ["Концепция интерьера", "Коллажи и референсы", "Подбор материалов", "Свет и мебель"]
        : ["Interior concept", "Moodboards and references", "Material selection", "Lighting and furniture"],
    },
    {
      n: "03",
      title: isRu ? "Документация" : "Documentation",
      text: isRu
        ? "Готовим чертежи, ведомости и спецификации для реализации проекта."
        : "We prepare drawings, schedules and specifications for implementation.",
      price: isRu ? "от 3 500 ₽ / м²" : "from 3,500 ₽ / m²",
      img: "/images/projects/restaurant/cover.jpg",
      items: isRu
        ? ["Рабочие чертежи", "Развертки стен", "Ведомости отделки", "Спецификации"]
        : ["Working drawings", "Wall elevations", "Finish schedules", "Specifications"],
    },
    {
      n: "04",
      title: isRu ? "Авторский надзор" : "Project supervision",
      text: isRu
        ? "Сопровождаем реализацию, согласуем решения и сохраняем идею проекта."
        : "We supervise implementation, coordinate decisions and preserve the design intent.",
      price: isRu ? "от 20 000 ₽ / мес" : "from 20,000 ₽ / month",
      img: "/images/projects/office/cover.jpg",
      items: isRu
        ? ["Выезды на объект", "Комплектация", "Контроль решений", "Связь со строителями"]
        : ["Site visits", "Procurement", "Decision control", "Builder coordination"],
    },
  ];

  return (
    <SiteShell locale={locale}>
      <main className="min-h-screen px-6 pb-20 pt-24 sm:px-10 lg:px-16">
        <section className="mx-auto max-w-[92rem]">
          <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.n} className="group grid gap-7 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="flex flex-col border-t border-[var(--line-soft)] pt-5">
                  <p className="text-xs text-[var(--tone-muted)]">{service.n}</p>

                  <h1 className="mt-7 font-display text-4xl leading-tight text-[var(--tone-dark)]">
                    {service.title}
                  </h1>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--tone-mid)]">
                    {service.text}
                  </p>

                  <p className="mt-6 text-base font-medium text-[var(--tone-dark)]">
                    {service.price}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm leading-relaxed text-[var(--tone-mid)]">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={`/?lang=${locale}&slide=contacts`}
              className="inline-flex justify-center rounded-full bg-[var(--tone-dark)] px-8 py-4 text-sm text-white transition hover:translate-y-[-2px] hover:opacity-90"
            >
              {isRu ? "Обсудить проект" : "Discuss project"}
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

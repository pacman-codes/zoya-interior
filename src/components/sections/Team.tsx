import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type TeamProps = {
  locale: Locale;
};

export function Team({ locale }: TeamProps) {
  const isRu = locale === "ru";

  const members = [
    {
      name: "Зоя Маскина",
      role: isRu ? "Основатель и ведущий дизайнер" : "Founder and lead designer",
      text: isRu
        ? "Формирует концепцию, ведет проект и отвечает за визуальную цельность интерьера."
        : "Creates the concept, leads the project and keeps the interior visually coherent.",
      img: "/images/zoya.jpg",
    },
    {
      name: isRu ? "Визуализация" : "Visualization",
      role: isRu ? "3D-сцены и визуальные решения" : "3D scenes and visual direction",
      text: isRu
        ? "Помогает заранее увидеть объем, свет, материалы и настроение будущего пространства."
        : "Helps preview volume, light, materials and the mood of the future space.",
      img: "/images/projects/restaurant/cover.jpg",
    },
    {
      name: isRu ? "Комплектация" : "Procurement",
      role: isRu ? "Материалы, мебель и детали" : "Materials, furniture and details",
      text: isRu
        ? "Собирает проект в реальность: подборы, поставщики, сроки и аккуратная координация."
        : "Turns the project into reality: selections, suppliers, timelines and coordination.",
      img: "/images/projects/family-house/cover.jpg",
    },
  ];

  return (
    <Section id="team" className="!py-0">
      <div className="mx-auto w-full max-w-[92rem]">
        <div className="mb-7 flex items-center gap-6">
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
          <p className="shrink-0 text-center text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
            {isRu ? "Команда" : "Team"}
          </p>
          <div className="h-px flex-1 bg-[var(--line-soft)]" />
        </div>

        <div className="grid gap-9 lg:grid-cols-3">
          {members.map((member) => (
            <article key={member.name} className="reveal-block">
              <div className="team-image aspect-[4/4.1] overflow-hidden rounded-[1rem]">
                <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
              </div>

              <h3 className="mt-5 font-display text-3xl leading-tight text-[var(--tone-dark)]">
                {member.name}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--tone-muted)]">
                {member.role}
              </p>

              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--tone-muted)]">
                {member.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

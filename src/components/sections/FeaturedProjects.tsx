import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { Section } from "@/components/ui/Section";

type Props = {
  locale: Locale;
};

export function FeaturedProjects({ locale }: Props) {
  const isRu = locale === "ru";

  const projects = [
    {
      title: isRu ? "Квартира в Сочи" : "Apartment in Sochi",
      meta: isRu ? "Сочи · 82 м²" : "Sochi · 82 m²",
      href: `/projects/sochi-apartment?lang=${locale}`,
      img: "/images/projects/sochi-apartment/cover.jpg",
    },
    {
      title: isRu ? "Семейный дом" : "Family house",
      meta: isRu ? "Краснодарский край · 180 м²" : "Krasnodar region · 180 m²",
      href: `/projects/family-house?lang=${locale}`,
      img: "/images/projects/family-house/cover.jpg",
    },
    {
      title: isRu ? "Ресторан" : "Restaurant",
      meta: isRu ? "Сочи · 120 м²" : "Sochi · 120 m²",
      href: `/projects/restaurant?lang=${locale}`,
      img: "/images/projects/restaurant/cover.jpg",
    },
    {
      title: isRu ? "Офисное пространство" : "Office space",
      meta: isRu ? "Удаленный проект · 95 м²" : "Remote project · 95 m²",
      href: `/projects/office-space?lang=${locale}`,
      img: "/images/projects/office-space/cover.jpg",
    },
  ];

  return (
    <Section id="projects" className="!py-0">
      <div className="mx-auto flex h-full w-full max-w-[92rem] flex-col">
        <div className="mb-5 flex items-center gap-6">
          <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-[var(--tone-muted)]">
            {isRu ? "Избранные проекты" : "Featured projects"}
          </p>

          <div className="h-px flex-1 bg-[var(--line-soft)]" />

          <Link
            href={`/projects?lang=${locale}`}
            className="shrink-0 text-sm text-[var(--tone-muted)] transition hover:text-[var(--tone-dark)]"
          >
            {isRu ? "Все проекты →" : "All projects →"}
          </Link>
        </div>

        <div className="grid flex-1 gap-7 lg:grid-cols-2 lg:grid-rows-2">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group grid min-h-0 grid-cols-[1.1fr_0.9fr] gap-5"
            >
              <div className="relative min-h-[230px] overflow-hidden rounded-[1rem]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
              </div>

              <div className="flex flex-col justify-between border-t border-[var(--line-soft)] pt-4">
                <span className="text-sm text-[var(--tone-muted)]">0{index + 1}</span>

                <div>
                  <h3 className="font-display text-3xl leading-tight text-[var(--tone-dark)]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--tone-muted)]">
                    {project.meta}
                  </p>

                  <p className="mt-5 inline-block border-b border-[var(--tone-dark)] text-sm text-[var(--tone-dark)]">
                    {isRu ? "Смотреть проект" : "View project"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link
            href={`/projects?lang=${locale}`}
            className="inline-block border-b border-[var(--tone-dark)] text-sm text-[var(--tone-dark)] transition hover:text-[var(--tone-muted)]"
          >
            {isRu ? "Смотреть все проекты →" : "View all projects →"}
          </Link>
        </div>
      </div>
    </Section>
  );
}

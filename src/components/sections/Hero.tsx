import Image from "next/image";
import type { Locale } from "@/i18n";

type Props = {
  locale: Locale;
};

export function Hero({ locale }: Props) {
  const isRu = locale === "ru";

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt={isRu ? "Интерьер студии" : "Studio interior"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl leading-none sm:text-7xl">
            {isRu
              ? "Пространства,\nв которых хочется жить"
              : "Spaces made\nfor living"}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {isRu
              ? "Дизайн жилых и коммерческих пространств. Работаем в Сочи и удаленно по всему миру."
              : "Residential and commercial interior design. Based in Sochi, working worldwide."}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`/projects?lang=${locale}`}
              className="rounded-full bg-[var(--tone-dark)] px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[var(--tone-dark)]"
            >
              {isRu ? "Смотреть проекты" : "View projects"}
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white/90 px-8 py-4 text-sm font-medium text-[var(--tone-dark)] transition hover:bg-[var(--tone-dark)] hover:text-white"
            >
              {isRu ? "Обсудить проект" : "Discuss project"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

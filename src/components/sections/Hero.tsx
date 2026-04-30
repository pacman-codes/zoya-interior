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
          <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl">
            {isRu ? (
              <>
                Пространства,<br />
                в которых хочется жить
              </>
            ) : (
              <>
                Spaces made<br />
                for living
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            {isRu
              ? "Жилые и коммерческие пространства в Сочи и по всему миру."
              : "Residential and commercial interior design. Based in Sochi, working worldwide."}
          </p>

          <div className="mt-9 flex justify-center gap-4">
            <a
              href={`/projects?lang=${locale}`}
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-white backdrop-blur-sm transition hover:bg-[#2d241d] hover:text-white"
            >
              {isRu ? "Смотреть проекты" : "View projects"}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {isRu ? "Обсудить проект" : "Discuss project"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Locale } from "@/i18n";

type Props = {
  locale: Locale;
};

export function Hero({ locale }: Props) {
  const isRu = locale === "ru";

  return (
    <section
      id="hero"
      className="relative h-[calc(100svh-44px)] min-h-[660px] w-full overflow-hidden md:h-screen md:min-h-0"
    >
      <Image
        src="/images/hero.jpg"
        alt={isRu ? "Интерьер студии" : "Studio interior"}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/38 to-black/58" />

      <div className="relative z-10 flex h-full items-center justify-center px-5 pt-8 text-center text-white md:px-6 md:pt-0">
        <div className="mx-auto w-full max-w-[460px] md:max-w-5xl">
          <h1 className="font-display text-[52px] leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:text-7xl">
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

          <p className="mx-auto mt-6 max-w-[340px] text-[16px] leading-[1.55] text-white/82 md:max-w-2xl md:text-base">
            {isRu
              ? "Жилые и коммерческие пространства в Сочи и по всему миру."
              : "Residential and commercial interior design. Based in Sochi, working worldwide."}
          </p>

          <div className="mx-auto mt-8 flex max-w-[360px] flex-col gap-3 md:mt-9 md:max-w-none md:flex-row md:justify-center md:gap-4">
            <a
              href={`/projects?lang=${locale}`}
              className="rounded-full border border-white/45 bg-[#2d241d]/38 px-7 py-4 text-[15px] text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:border-white/60 hover:bg-[#2d241d]/58 md:px-8 md:text-base"
            >
              {isRu ? "Смотреть проекты" : "View projects"}
            </a>

            <a
              href="#project-cta"
              className="rounded-full border border-white/35 bg-white/10 px-7 py-4 text-[15px] text-white backdrop-blur-md transition hover:border-white/55 hover:bg-white/18 md:px-8 md:text-base"
            >
              {isRu ? "Обсудить проект" : "Discuss project"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

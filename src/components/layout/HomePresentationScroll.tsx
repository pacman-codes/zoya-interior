"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  initialSlide?: number;
};

const slides = [
  "Главная",
  "Проекты",
  "О Зое",
  "Услуги",
  "Команда",
  "Контакты",
];

export function HomePresentationScroll({ children, initialSlide = 0 }: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(initialSlide);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    document.body.dataset.slideIndex = String(index);
  }, [index]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateHeight = () => setSlideHeight(viewport.clientHeight);

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let locked = false;

    const getMax = () =>
      Math.max(0, viewport.querySelectorAll("[data-slide='true']").length - 1);

    const go = (direction: 1 | -1) => {
      if (locked) return;
      locked = true;

      setIndex((current) => Math.max(0, Math.min(getMax(), current + direction)));

      window.setTimeout(() => {
        locked = false;
      }, 420);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (Math.abs(event.deltaY) < 8) return;
      go(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        go(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        go(-1);
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      viewport.removeEventListener("wheel", onWheel);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", updateHeight);
      delete document.body.dataset.slideIndex;
    };
  }, []);

  return (
    <>
      <div ref={viewportRef} className="presentation-viewport">
        <div
          className="presentation-track"
          style={{ transform: `translate3d(0, -${index * slideHeight}px, 0)` }}
        >
          {children}
        </div>
      </div>

      <nav className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {slides.map((label, itemIndex) => {
          const isActive = itemIndex === index;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className="group relative grid h-7 w-7 place-items-center"
              aria-label={label}
            >
              <span
                className={[
                  "block rounded-full border transition-all duration-300",
                  isActive
                    ? "h-3 w-3 border-[#a68f7a] bg-[#a68f7a] shadow-[0_0_0_9px_rgba(166,143,122,0.18)]"
                    : "h-2.5 w-2.5 border-[#a68f7a]/55 bg-[#efe7dc]/70 shadow-sm group-hover:bg-[#a68f7a]/65",
                ].join(" ")}
              />

              <span className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 rounded-full border border-[#ded2c4] bg-[#f4ede4]/90 px-3 py-1 text-[11px] tracking-[0.18em] whitespace-nowrap text-[#6d5d4f] uppercase opacity-0 shadow-sm backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

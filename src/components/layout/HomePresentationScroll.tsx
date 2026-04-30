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

      <nav className="fixed left-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
        {slides.map((label, itemIndex) => {
          const isActive = itemIndex === index;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className="group relative grid h-5 w-5 place-items-center"
              aria-label={label}
            >
              <span
                className={[
                  "block rounded-full border transition-all duration-300",
                  isActive
                    ? "h-2.5 w-2.5 border-[#f1d9bf]/90 bg-[#e8c9a8] shadow-[0_0_10px_4px_rgba(232,201,168,0.45),0_0_22px_8px_rgba(232,201,168,0.25)]"
                    : "h-2.5 w-2.5 border-[#2d241d]/80 bg-[#2d241d]/80 shadow-[0_3px_8px_rgba(0,0,0,0.25)] group-hover:bg-[#e8c9a8]/70",
                ].join(" ")}
              />

              <span className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 rounded-full border border-white/45 bg-[#2d241d]/42 px-6 py-2 text-[12px] tracking-[0.3em] whitespace-nowrap text-[#fff5ea] uppercase opacity-0 shadow-[0_0_20px_rgba(236,197,150,0.18),0_12px_34px_rgba(25,18,13,0.32),inset_0_1px_1px_rgba(255,255,255,0.34)] backdrop-blur-2xl transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const slides = [
  "Главная",
  "Проекты",
  "О Зое",
  "Услуги",
  "Команда",
  "Контакты",
];

function getInitialSlide(slide: string | null) {
  if (slide === "projects") return 1;
  if (slide === "about") return 2;
  if (slide === "services") return 3;
  if (slide === "team") return 4;
  if (slide === "contacts") return 5;
  return 0;
}

export function HomePresentationScroll({ children }: Props) {
  const searchParams = useSearchParams();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(() => getInitialSlide(searchParams.get("slide")));
  const [slideHeight, setSlideHeight] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const next = getInitialSlide(searchParams.get("slide"));
    setIndex(next);
  }, [searchParams]);

  useEffect(() => {
    document.body.dataset.slideIndex = String(index);
  }, [index]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateHeight = () => {
      setSlideHeight(viewport.clientHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let locked = false;
    let hideTimer: ReturnType<typeof window.setTimeout>;

    const showNavTemporarily = () => {
      setIsNavVisible(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        setIsNavVisible(false);
      }, 1600);
    };

    showNavTemporarily();

    const getMax = () => {
      return Math.max(0, viewport.querySelectorAll("[data-slide='true']").length - 1);
    };

    const go = (direction: 1 | -1) => {
      setIndex((current) => {
        if (locked) return current;

        locked = true;

        window.setTimeout(() => {
          locked = false;
        }, 380);

        return Math.max(0, Math.min(getMax(), current + direction));
      });
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (Math.abs(event.deltaY) < 6) return;

      showNavTemporarily();
      go(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        showNavTemporarily();
        go(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        showNavTemporarily();
        go(-1);
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.clearTimeout(hideTimer);
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
          style={{
            transform: `translate3d(0, -${index * slideHeight}px, 0)`,
          }}
        >
          {children}
        </div>
      </div>

      <nav
        className={`slide-nav ${isNavVisible ? "is-visible" : "is-idle"}`}
        aria-label="Навигация по главной"
        onMouseEnter={() => setIsNavVisible(true)}
      >
        {slides.map((label, itemIndex) => (
          <button
            key={label}
            type="button"
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => setIndex(itemIndex)}
            aria-label={label}
          >
            <span className="slide-nav-dot" />
            <span className="slide-nav-label">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

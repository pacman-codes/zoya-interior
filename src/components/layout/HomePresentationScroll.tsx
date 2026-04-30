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
  const [isNavVisible, setIsNavVisible] = useState(true);

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
    let hideTimer: number | undefined;

    const showNavTemporarily = () => {
      setIsNavVisible(true);

      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

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

      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

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

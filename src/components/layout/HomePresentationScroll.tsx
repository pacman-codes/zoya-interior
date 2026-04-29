"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function HomePresentationScroll({ children }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let locked = false;

    const go = (direction: 1 | -1) => {
      if (locked) return;

      const slides = document.querySelectorAll("[data-slide='true']");
      const max = slides.length - 1;

      locked = true;

      setIndex((current) => {
        return Math.max(0, Math.min(max, current + direction));
      });

      window.setTimeout(() => {
        locked = false;
      }, 520);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (Math.abs(event.deltaY) < 10) return;

      go(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        go(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="presentation-viewport">
      <div
        className="presentation-track"
        style={{ "--slide-index": index } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

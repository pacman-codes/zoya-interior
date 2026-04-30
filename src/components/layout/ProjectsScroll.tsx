"use client";

import { Children, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function ProjectsScroll({ children }: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => setHeight(el.clientHeight);
    update();
    window.addEventListener("resize", update);

    document.body.style.overflow = "hidden";

    let locked = false;

    const max = () =>
      Math.max(0, el.querySelectorAll("[data-project]").length - 1);

    const go = (dir: 1 | -1) => {
      if (locked) return;

      locked = true;
      setIndex((i) => Math.max(0, Math.min(max(), i + dir)));

      setTimeout(() => {
        locked = false;
      }, 420);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 6) return;
      go(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(1);
      }
      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div ref={viewportRef} className="h-[100svh] overflow-hidden">
        <div
          className="transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translate3d(0, -${index * height}px, 0)`,
          }}
        >
          {children}
        </div>
      </div>

      {/* navigation */}
      <div className="slide-nav">
        {Array.from({ length: Children.count(children) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={i === index ? "is-active" : ""}
          >
            <span className="slide-nav-dot" />
            <span className="slide-nav-label">{i + 1}</span>
          </button>
        ))}
      </div>
    </>
  );
}

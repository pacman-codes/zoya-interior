'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type ProjectsScrollProps = {
  count: number;
  labels: string[];
  children: (activeIndex: number, setActiveIndex: (index: number) => void) => ReactNode;
};

export function ProjectsScroll({ count, labels, children }: ProjectsScrollProps) {
  const [activeIndex, setActiveIndexState] = useState(0);
  const lockRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const setActiveIndex = (index: number) => {
    setActiveIndexState(Math.max(0, Math.min(count - 1, index)));
  };

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const unlock = () => {
      window.setTimeout(() => {
        lockRef.current = false;
      }, 650);
    };

    const move = (direction: 1 | -1) => {
      if (lockRef.current) return;
      lockRef.current = true;
      setActiveIndexState((current) => Math.max(0, Math.min(count - 1, current + direction)));
      unlock();
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 20) return;
      move(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        move(1);
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        move(-1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const endY = event.changedTouches[0]?.clientY ?? touchStartY.current;
      const diff = touchStartY.current - endY;

      touchStartY.current = null;

      if (Math.abs(diff) < 40) return;
      move(diff > 0 ? 1 : -1);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;

      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [count]);

  return (
    <div className="relative h-[100svh] overflow-hidden bg-[#efe7dc] text-[#2d241d]">
      {children(activeIndex, setActiveIndex)}

      <nav className="fixed left-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
        {labels.map((label, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative grid h-5 w-5 place-items-center"
              aria-label={label}
            >
              <span
                className={[
                  'block rounded-full border transition-all duration-300',
                  isActive
                    ? 'h-2.5 w-2.5 rounded-full border-[#f1d9bf]/90 bg-[#e8c9a8] shadow-[0_0_10px_4px_rgba(232,201,168,0.45),0_0_22px_8px_rgba(232,201,168,0.25)]'
                    : 'h-3 w-[2px] border-none bg-[#2d241d]/65 shadow-[0_2px_6px_rgba(0,0,0,0.2)] group-hover:bg-[#e8c9a8]/80',
                ].join(' ')}
              />

              <span className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 rounded-full border border-white/45 bg-[#2d241d]/42 px-6 py-2 text-[12px] tracking-[0.3em] whitespace-nowrap text-[#fff5ea] uppercase opacity-0 shadow-[0_0_20px_rgba(236,197,150,0.18),0_12px_34px_rgba(25,18,13,0.32),inset_0_1px_1px_rgba(255,255,255,0.34)] backdrop-blur-2xl transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

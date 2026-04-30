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

      <nav className="fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-7 lg:flex">
        {labels.map((label, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative grid h-7 w-7 place-items-center"
              aria-label={label}
            >
              <span
                className={[
                  'block rounded-full border transition-all duration-300',
                  isActive
                    ? 'h-4 w-4 border-white/80 bg-[#d8c6b4] shadow-[0_0_0_9px_rgba(216,198,180,0.24),0_0_22px_rgba(255,238,220,0.82),0_0_46px_rgba(216,198,180,0.36)]'
                    : 'h-3.5 w-3.5 border-white/55 bg-[#eee7dc]/78 shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),0_7px_16px_rgba(45,36,29,0.18)] group-hover:bg-[#d8c6b4]/85',
                ].join(' ')}
              />

              <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 rounded-full border border-[#f4e8dc]/65 bg-[#6d5b4d]/26 px-7 py-3 text-[15px] tracking-[0.28em] whitespace-nowrap text-white uppercase opacity-0 shadow-[0_18px_48px_rgba(25,18,13,0.34),inset_0_1px_1px_rgba(255,255,255,0.32)] backdrop-blur-2xl transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

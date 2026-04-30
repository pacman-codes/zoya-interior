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

      <nav className="fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {labels.map((label, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group flex items-center gap-3 text-left"
              aria-label={label}
            >
              <span
                className={[
                  'block h-2.5 w-2.5 rounded-full border transition-all duration-300',
                  isActive
                    ? 'scale-125 border-[#a68f7a] bg-[#a68f7a] shadow-[0_0_0_6px_rgba(166,143,122,0.16)]'
                    : 'border-[#a68f7a]/55 bg-[#2d241d]/18 opacity-80 group-hover:bg-[#a68f7a]/55',
                ].join(' ')}
              />
              <span
                className={[
                  'overflow-hidden whitespace-nowrap text-xs tracking-[0.18em] uppercase transition-all duration-300',
                  isActive
                    ? 'max-w-[220px] text-[#8d7764]'
                    : 'max-w-0 text-[#8d7764] group-hover:max-w-[220px]',
                ].join(' ')}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

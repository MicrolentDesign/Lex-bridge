import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * DESIGN-DIRECTION.md §5 — opacity 0→1 with translateY 16px→0, fires once,
 * ~15% threshold, 600ms on the single brand easing.
 *
 * Never wrap the Hero or ModelBand in this: those must paint immediately (the
 * three-second comprehension test depends on them). Below-the-fold only.
 *
 * Under prefers-reduced-motion the content starts visible and no observer is attached.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = useState(reduced);

  useEffect(() => {
    if (reduced || shown) return;
    const el = ref.current;
    if (!el) return;

    // Already on screen at mount: show immediately rather than waiting on the observer.
    // IntersectionObserver callbacks are suspended while the page is hidden (background
    // tab, collapsed preview pane), which would otherwise leave in-view content stuck at
    // opacity 0 until the page is focused.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, shown]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 600ms var(--ease-brand) ${delay}ms, transform 600ms var(--ease-brand) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

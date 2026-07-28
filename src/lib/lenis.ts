import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Single shared Lenis instance, exposed so overlays can suspend it.
 *
 * Why this exists: Lenis calls preventDefault() on wheel events and drives the window
 * scroller itself. Any nested scroll container (the mobile nav drawer) therefore never
 * receives the event and appears frozen — verified directly: dispatching a wheel event
 * inside the drawer returned defaultPrevented === true with scrollTop unchanged.
 *
 * Two independent guards, because either alone has a gap:
 *   1. suspend()/resume() — lenis.stop() releases wheel/touch entirely while an overlay
 *      is open. This is the primary fix and also prevents the page scrolling behind.
 *   2. `data-lenis-prevent` on the scroll container — Lenis skips events originating
 *      inside it. Needed for any inner scroller that must work while Lenis is running.
 *
 * lenis.css is imported here (not in index.css) so it travels with the instance; it
 * supplies the `overscroll-behavior: contain` and `.lenis-stopped { overflow: clip }`
 * rules that the attribute and stopped state rely on.
 */
let instance: Lenis | null = null;
let frame = 0;

export function startLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  if (instance) return instance;

  instance = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    syncTouch: false, // native momentum on touch beats emulated inertia
  });

  const raf = (time: number) => {
    instance?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return instance;
}

export function stopLenis() {
  cancelAnimationFrame(frame);
  instance?.destroy();
  instance = null;
}

/** Suspend smooth scrolling — call when a full-screen overlay opens. */
export function suspendLenis() {
  instance?.stop();
}

/** Resume smooth scrolling — call when the overlay closes. */
export function resumeLenis() {
  instance?.start();
}

export function isLenisActive() {
  return instance !== null;
}

import { useEffect } from 'react';
import { startLenis, stopLenis } from './lenis';

/**
 * Mounts the shared Lenis instance for the app lifetime.
 * Configuration and the suspend/resume controls live in `./lenis` — see the note there
 * on why overlays must suspend it rather than relying on nested overflow alone.
 */
export function useLenis() {
  useEffect(() => {
    startLenis();
    return stopLenis;
  }, []);
}

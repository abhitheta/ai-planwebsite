import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Global scroll-reveal observer.
 *
 * Watches every <section> on the current page and toggles a `data-revealed`
 * attribute as it enters / leaves the viewport at a 0.5% intersection
 * threshold. CSS in src/styles/globals.css picks this up and animates the
 * fade-in / fade-out.
 *
 * Re-runs on every route change so freshly-rendered sections get observed.
 * Skips work entirely when the user has prefers-reduced-motion enabled.
 */
export function SectionRevealer() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect OS-level reduced-motion preference.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      // Mark every section revealed so nothing stays hidden.
      document.querySelectorAll('section').forEach((s) =>
        s.setAttribute('data-revealed', '')
      );
      // Flip the global flag too so CSS skips the hidden state.
      document.documentElement.setAttribute('data-no-reveal', '');
      return;
    }

    // Defer one frame so React has finished mounting the route.
    const raf = window.requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-reveal-ready', '');

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-revealed', '');
            } else {
              entry.target.removeAttribute('data-revealed');
            }
          }
        },
        { threshold: 0.005 } // 0.5% of the section visible
      );

      const sections = document.querySelectorAll('section');
      sections.forEach((s) => observer.observe(s));

      // Stash the observer on the function instance for cleanup.
      (raf as unknown as { _obs?: IntersectionObserver })._obs = observer;
    });

    return () => {
      window.cancelAnimationFrame(raf);
      const obs = (raf as unknown as { _obs?: IntersectionObserver })._obs;
      obs?.disconnect();
    };
  }, [location.pathname]);

  return null;
}

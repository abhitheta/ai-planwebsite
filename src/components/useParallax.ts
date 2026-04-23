import { useEffect, useRef } from 'react';

/**
 * Subtle scroll-driven parallax.
 *
 * Attach the returned ref to any existing DOM element — no wrapper added.
 * The element receives a translateY transform that moves opposite to scroll
 * direction at `speed` × the scroll delta. Positive speed = slower drift up;
 * negative speed = counter-parallax. Keep values low (0.08–0.2) for a
 * premium, non-distracting feel.
 *
 * Automatically disables for prefers-reduced-motion and pauses when the
 * element is outside the viewport.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    el.setAttribute('data-parallax', '');

    let raf = 0;
    let inView = true;
    let baseTop = el.getBoundingClientRect().top + window.pageYOffset;

    const recalc = () => {
      baseTop = el.getBoundingClientRect().top + window.pageYOffset;
    };

    const update = () => {
      if (!inView) return;
      const delta = window.pageYOffset + window.innerHeight / 2 - baseTop;
      const translate = -(delta * speed);
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };

    const viewport = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
      },
      { rootMargin: '200px 0px' }
    );
    viewport.observe(el);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recalc);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalc);
      viewport.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInViewProps = {
  children: ReactNode;
  /** Delay in seconds before the element starts animating. */
  delay?: number;
  /** Vertical offset (px) the element rises from. */
  y?: number;
  /** If true, the animation replays every time the element re-enters the viewport. */
  replay?: boolean;
  className?: string;
  /** Optional semantic tag override. Defaults to <div>. */
  as?: 'div' | 'section' | 'article';
};

/**
 * Wraps children with a subtle scroll-triggered fade + rise animation.
 * Uses framer-motion's `whileInView` so it's fully CSS-compositor-driven
 * (no scroll listeners, no re-renders).
 *
 * Respects `prefers-reduced-motion` automatically — framer-motion disables
 * transforms when the OS setting is on.
 */
export function FadeInView({
  children,
  delay = 0,
  y = 24,
  replay = false,
  className,
  as = 'div',
}: FadeInViewProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 0.61, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag =
    as === 'section' ? motion.section : as === 'article' ? motion.article : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !replay, amount: 0.04, margin: '0px 0px 120px 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

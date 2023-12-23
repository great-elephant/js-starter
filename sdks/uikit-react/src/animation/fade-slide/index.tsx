import { AnimatePresence, m } from 'framer-motion';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type FadeSlideProps = PropsWithChildren<{
  show?: boolean;
  className?: string;
  duration?: number;

  /**
   * Default: 60 (px)
   */
  distance?: number;

  /**
   * Default: 'top'
   */
  dir?: 'top' | 'right';
}>;

export function FadeSlide({
  children,
  className,
  show,
  duration = .1,
  distance = 60,
  dir = 'top',
}: FadeSlideProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={clsx(className, 'ease-in-out')}
        transition={{ duration }}
        initial={{ opacity: 0, transform: dir === 'top' ? `translateY(-${distance}px)` : `translateX(${distance}px)` }}
        animate={{ opacity: 1, transform: dir === 'top' ? 'translateY(0)' : 'translateX(0)' }}
        exit={{ opacity: 0, transform: dir === 'top' ? `translateY(-${distance}px)` : `translateX(${distance}px)` }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

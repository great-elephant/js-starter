import { AnimatePresence, m } from 'framer-motion';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type SlideProps = PropsWithChildren<{
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
  dir?: 'top';
}>;

export function Slide({
  children,
  className,
  show,
  duration = .1,
  distance = 60,
  dir = 'top',
}: SlideProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={clsx(className, 'ease-in-out')}
        transition={{ duration }}
        initial={{ transform: dir === 'top' ? `translateY(-${distance}px)` : `translateX(-${distance}px)` }}
        animate={{ transform: dir === 'top' ? 'translateY(0)' : 'translateX(0)' }}
        exit={{ transform: dir === 'top' ? `translateY(-${distance}px)` : `translateX(-${distance}px)` }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

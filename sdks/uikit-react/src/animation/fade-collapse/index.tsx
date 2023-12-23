import { AnimatePresence, m } from 'framer-motion';
import { TransitionProps } from '../typing';

export function FadeCollapse({ children, className, show, duration = 0.1 }: TransitionProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={className}
        transition={{ duration }}
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

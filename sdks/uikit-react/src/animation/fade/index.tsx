import { AnimatePresence, m } from 'framer-motion';
import { TransitionProps } from '../typing';

export function Fade({ children, className, show, duration = 0.1 }: TransitionProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={className}
        transition={{ duration }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

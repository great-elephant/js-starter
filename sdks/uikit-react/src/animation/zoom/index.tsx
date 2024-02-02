import { AnimatePresence, m } from 'framer-motion';
import { TransitionProps } from '../typing';

export function Zoom({ children, className, show, duration = 0.1 }: TransitionProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={className}
        transition={{ duration }}
        exit={{ scale: .8, opacity: 0 }}
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

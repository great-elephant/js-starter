import { AnimatePresence, m } from 'framer-motion';
import { TransitionProps } from '../typing';

export function Collapse({ children, className, show, duration = 0.1 }: TransitionProps) {
  return (
    <AnimatePresence initial={false}>
      {show && <m.div
        className={className}
        initial='collapsed'
        animate='open'
        exit='collapsed'
        variants={{
          open: { height: 'auto', overflow: 'visible' },
          collapsed: { height: 0, overflow: 'hidden' },
        }}
        transition={{ duration }}
      >
        {children}
      </m.div>}
    </AnimatePresence>
  );
}

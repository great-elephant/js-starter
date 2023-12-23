import { m, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren } from 'react';

export function ParallaxSimple({ children, height }: PropsWithChildren<{ height: number }>) {
  const { scrollY } = useScroll({
    smooth: 20,
  });
  const y = useTransform(scrollY, [0, height], [0, -(height)]);

  return (
    <m.div style={{ y }}>
      {children}
    </m.div>
  );
}

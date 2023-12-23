'use client';
import '@/misc/global/global.client';
import { PropsWithChildren } from 'react';
import { ReactQueryContainer } from '@sdks/api-react-query';
import { Toaster, ThemeProvider } from '@sdks/uikit-react';
import { LazyMotion, domAnimation } from 'framer-motion';

export function ClienContainer({ children }: PropsWithChildren) {
  return (
    <ReactQueryContainer>
      <LazyMotion features={domAnimation}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster />
      </LazyMotion>
    </ReactQueryContainer>
  );
}
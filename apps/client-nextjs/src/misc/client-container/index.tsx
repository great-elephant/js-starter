'use client';
import '@/misc/global/global.client';
import { PropsWithChildren } from 'react';
import { ReactQueryContainer } from '@sdks/api-react-query';
import { Toaster, ThemeProvider, ModalContainer } from '@sdks/uikit-react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SessionProvider } from '@/misc/session/session-provider';

export function ClienContainer({ children }: PropsWithChildren) {
  return (
    <ReactQueryContainer>
      <LazyMotion features={domAnimation}>
        <ThemeProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
          <ModalContainer />
          <Toaster />
        </ThemeProvider>
      </LazyMotion>
    </ReactQueryContainer>
  );
}
'use client';
import { PropsWithChildren } from 'react';
import { ReactQueryContainer } from '@sdks/api-react-query';
import '@/helper/global/global.client';
import { ThemeProvider } from '@uikit-react/theme';

export function ClienContainer({ children }: PropsWithChildren) {
  return (
    <ReactQueryContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReactQueryContainer>
  );
}
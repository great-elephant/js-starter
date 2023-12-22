'use client';
import { PropsWithChildren } from 'react';
import { ReactQueryContainer } from '@sdks/api-react-query';
import '@/helper/global/global.client';

export function ClienContainer({ children }: PropsWithChildren) {
  return (
    <ReactQueryContainer>
      {children}
    </ReactQueryContainer>
  );
}
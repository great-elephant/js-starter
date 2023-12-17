'use client';
import { PropsWithChildren } from 'react';
import { ReactQueryContainer } from '@sdks/api-react-query';

export function ClienContainer({ children }: PropsWithChildren) {
  return (
    <ReactQueryContainer>
      {children}
    </ReactQueryContainer>
  );
}
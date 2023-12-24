import { PropsWithChildren } from 'react';
import { HeaderMain } from '../header-main';

export function LayoutMain({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <>
      <HeaderMain />

      <main className={className}>{children}</main>
    </>
  );
};

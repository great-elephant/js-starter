'use client';
import { PropsWithChildren } from 'react';;
import { cn } from '@uikit-react/index';

export function LayoutMain({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('container', className)}>
      {children}
    </div>
  );
};

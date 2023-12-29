import { PropsWithChildren } from 'react';
import { cn } from '..';

export function FieldDesc({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('text-xs text-muted-foreground', className)}>{children}</div>;
}
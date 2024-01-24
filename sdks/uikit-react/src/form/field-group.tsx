import { PropsWithChildren } from 'react';
import { cn } from '..';

export interface FieldGroupProps extends PropsWithChildren {
  className?: string;
}

export function FieldGroup({ children, className }: FieldGroupProps) {
  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>{children}</div>
  );
}

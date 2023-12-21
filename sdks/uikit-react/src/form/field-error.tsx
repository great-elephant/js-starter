import { PropsWithChildren } from 'react';
import { cn } from '@uikit-react/lib/utils';

export type FieldErrorProps = PropsWithChildren<{
  className?: string;
}>;

export const FieldError = ({ className, children }: FieldErrorProps) => {
  return (
    <div className={cn('text-red-500 text-xs min-h-[18px] flex gap-0.5 items-center', className)}>
      {children}
    </div>
  );
};

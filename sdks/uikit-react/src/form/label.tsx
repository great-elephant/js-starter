import { cn } from '@uikit-react/lib/utils';
import { LabelHTMLAttributes } from 'react';

export function Label({ children, className, ...rest }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...rest} className={(cn('font-semibold', className))}>{children}</label>;
}
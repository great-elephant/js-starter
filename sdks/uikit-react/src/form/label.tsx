import { cn } from '@uikit-react/lib/utils';
import { LabelHTMLAttributes, ReactNode } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label?: undefined;
  children: ReactNode;
} | LabelHTMLAttributes<HTMLLabelElement> & {
  children?: undefined;
  label: string;
}

export function Label({ className, ...rest }: LabelProps) {
  return <label
    {...rest}
    className={(cn(className))}
    children={rest.children || rest.label}
  />;
}
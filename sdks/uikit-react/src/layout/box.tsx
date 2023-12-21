import { Slot } from '@radix-ui/react-slot';
import { cn } from '@uikit-react/lib/utils';
import { HTMLAttributes } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function Box({ asChild, className, ...rest }: BoxProps) {
  const Comp = asChild ? Slot : 'div';
  
  return <Comp {...rest} className={cn(className)} />;
}
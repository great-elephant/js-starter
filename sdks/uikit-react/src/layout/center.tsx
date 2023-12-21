import { HTMLAttributes } from 'react';
import { cn } from '@uikit-react/lib/utils';
import { Box } from './box';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function Center({ asChild, className, ...rest }: CenterProps) {
  return <Box {...rest} className={cn('flex items-center justify-center', className)} />;
}

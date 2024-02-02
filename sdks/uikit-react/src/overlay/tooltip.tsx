'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@uikit-react/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: 'right' | 'top' | 'bottom' | 'left'
}

export function TooltipSimple({ content, side, children, className }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root defaultOpen delayDuration={0}>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={5}
            className={cn(
              'z-50 overflow-hidden rounded-md bg-black px-4 py-1.5 text-sm text-white max-w-[280px]',
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow width={14} height={5} className='fill-black' />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export function Tooltip({ children }: any) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root defaultOpen delayDuration={0}>
        {children}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ children, side, className }: any) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side={side}
        sideOffset={5}
        className={cn(
          'z-50 overflow-hidden rounded-md px-4 py-1.5 text-sm text-white',
          className,
        )}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
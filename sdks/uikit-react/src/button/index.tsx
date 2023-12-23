'use client';

import { useState, useEffect, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@uikit-react/lib/utils';
import { Spinner } from '@uikit-react/feedback';

const buttonVariants = cva(
  'select-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label?: string;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, loading, variant, size, children, label, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const [isLoading, setLoading] = useState(loading);

    useEffect(() => {
      if (loading) return setLoading(true);

      setTimeout(() => setLoading(loading), 100);
    }, [loading]);

    return (
      <Comp
        {...props}
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }), {
          'relative': isLoading,
        })}
      >
        {isLoading && <Spinner />}
        {!isLoading && (children || label)}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

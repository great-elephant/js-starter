import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@uikit-react/lib/utils';

/**
 * Type scale: https://tailwindcss.com/docs/font-size
 */
const textVariants = cva(
  'inline-block',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
);

export interface TextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export function Text({ asChild, size, className, ...rest }: TextProps) {
  const Comp = asChild ? Slot : 'div';

  return <Comp {...rest} className={cn(textVariants({ size }), className)} />;
}
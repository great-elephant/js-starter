import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@uikit-react/lib/utils';

/**
 * Type scale: https://tailwindcss.com/docs/font-size
 */
const textVariants = cva(
  null,
  {
    variants: {
      level: {
        1: 'text-2xl',
        2: 'text-xl',
        3: 'text-lg',
        4: 'text-base',
        5: 'text-sm',
        6: 'text-xs',
      },
    },
    defaultVariants: {
      level: 1,
    },
  }
);

export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export function Heading({ asChild, level = 1, className, ...rest }: TextProps) {
  const Comp = asChild ? Slot : `h${level}`;

  return <Comp {...rest} className={cn(textVariants({ level }), className)} />;
}
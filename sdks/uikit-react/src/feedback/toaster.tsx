'use client';

import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster as Sonner, toast as sonnerToast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>

type ToastData = {
  message?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}

const toast = {
  error({ message, ...rest }: ToastData) {
    sonnerToast.error(message, rest);
  },
  success({ message, ...rest }: ToastData) {
    sonnerToast.success(message, rest);
  },
  info({ message, ...rest }: ToastData) {
    sonnerToast.info(message, rest);
  },
  warn({ message, ...rest }: ToastData) {
    sonnerToast.warning(message, rest);
  },
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

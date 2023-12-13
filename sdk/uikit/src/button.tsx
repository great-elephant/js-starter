'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}
console.log('3333333');

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={'x' + className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

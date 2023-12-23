import { PropsWithChildren } from 'react';

export type TransitionProps = PropsWithChildren<{
  show?: boolean;
  className?: string;
  duration?: number;
}>
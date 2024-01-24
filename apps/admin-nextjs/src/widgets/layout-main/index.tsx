'use client';

import { PropsWithChildren } from 'react';;
import { cn } from '@uikit-react/index';
import { sideBarState } from '../sidebar-main/state';

export function LayoutMain({ children, className }: PropsWithChildren<{ className?: string }>) {
  const isSidebarOpened = sideBarState.effect();

  return (
    <div className={cn('transition-margin p-4', {
      'lg:ml-[var(--lyt-sidebar-opened-w)]': isSidebarOpened,
      'lg:ml-[var(--lyt-sidebar-w)]': !isSidebarOpened,
    }, className)}>
      {children}
    </div>
  );
};

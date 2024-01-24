'use client';

import Link from 'next/link';
import { MenuUser } from './menu-user';
import { ThemeSwitcher } from '@sdks/uikit-react';
import { sideBarState } from '@/widgets/sidebar-main/state';
import { Menu } from 'lucide-react';

// for fixed position: mr-[var(--removed-body-scroll-bar-size)]
export function HeaderMain() {
  return (
    <div className='py-2 border-b flex justify-between gap-4 items-center px-4 bg-background h-[var(--lyt-header-h)] sticky top-0 z-20'>
      <div className='w-full flex justify-between gap-4 items-center'>
        <div className='flex gap-4 items-center'>
          <button
            type='button'
            className='lg:hidden'
            onClick={() => sideBarState.next(!sideBarState.getValue())}
          >
            <Menu />
          </button>

          <Link href='/' className='hidden lg:block text-foreground text-2xl'>H</Link>
        </div>

        <div className='flex items-center gap-2'>
          <ThemeSwitcher />
          <MenuUser />
        </div>
      </div>
    </div>
  );
}

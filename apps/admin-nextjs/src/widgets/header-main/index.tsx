'use client';

import Link from 'next/link';
import { MenuUser } from './menu-user';

export function HeaderMain() {
  return (
    <div className='py-2 border-b flex justify-between gap-4 items-center px-4 bg-white -mr-[var(--removed-body-scroll-bar-size)]'>
      <div className='w-full flex justify-between gap-4 items-center mr-[var(--removed-body-scroll-bar-size)]'>
        <Link href='/' className='text-black text-2xl'>Logo</Link>

        <div className='flex items-center gap-4'>
          <MenuUser />
        </div>
      </div>
    </div>
  );
}

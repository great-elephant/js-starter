'use client';

import Link from 'next/link';
import { ActivitySquare, AlarmClock, DollarSign, HopOff, Package, Network, Users } from 'lucide-react';
import { Tooltip } from '@sdks/uikit-react';

export function SideBarMain() {
  return (
    <div className='w-[50px] bg-white border-r flex flex-col gap-6 items-center py-6'>
      <Tooltip content='Dashboard' side='right'>
        <Link href={'/'}>
          <ActivitySquare strokeWidth={1.5} />
        </Link>
      </Tooltip>
      <AlarmClock strokeWidth={1.5} />
      <DollarSign strokeWidth={1.5} />
      <HopOff strokeWidth={1.5} />
      <Package strokeWidth={1.5} />
      <Tooltip content='Admin management' side='right'>
        <Link href={'/admin'}>
          <Network strokeWidth={1.5} />
        </Link>
      </Tooltip>
      <Tooltip content='User management' side='right'>
        <Link href={'/user'}>
          <Users strokeWidth={1.5} />
        </Link>
      </Tooltip>
    </div>
  );
}
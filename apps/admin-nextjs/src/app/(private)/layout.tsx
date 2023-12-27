import { HeaderMain } from '@/widgets/header-main';
import { PropsWithChildren } from 'react';
import { SideBarMain } from '@/widgets/sidebar-main';

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <HeaderMain />

      <div className='flex'>
        <SideBarMain/>

        <div className='flex-1'>
          {children}
        </div>
      </div>
    </>
  );
}

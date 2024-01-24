'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronsRight } from 'lucide-react';
import { cn } from '@sdks/uikit-react';
import { usePathname } from 'next/navigation';
import { sidebars } from './cnf';
import { sideBarState } from './state';

export function SideBarMain() {
  const isSidebarOpened = sideBarState.effect();
  const pathName = usePathname();

  useEffect(() => {
    sideBarState.next(false);
  }, [pathName]);

  return (
    <>
      <div className={cn('transition-all fixed top-0 lg:top-[var(--lyt-header-h)] -left-[var(--lyt-sidebar-opened-w)] lg:left-0 bottom-0 z-40 border-r flex flex-col bg-background overflow-hidden', {
        'lg:w-[var(--lyt-sidebar-w)] ': !isSidebarOpened,
        'lg:w-[var(--lyt-sidebar-opened-w)] ': isSidebarOpened,
        'left-0 w-[var(--lyt-sidebar-opened-w)]': isSidebarOpened,
      })}>
        <Link href='/' className='lg:hidden py-2 border-b px-4 h-[var(--lyt-header-h)] text-2xl'>LOGO Full Size</Link>

        <nav className='px-1 class flex flex-col gap-2 grow overflow-x-hidden py-2'>
          {sidebars.map((item, idx) => (
            <MenuGroup key={idx} root={item} />
          ))}
        </nav>

        <button
          type='button'
          onClick={() => sideBarState.next(!isSidebarOpened)}
          className='flex border-t items-center justify-center min-h-[36px] hover:bg-accent focus:bg-accent/80'
        >
          <ChevronsRight width={22} height={22} strokeWidth={1} className={cn({
            'rotate-180': isSidebarOpened,
          })} />
        </button>
      </div>

      <div
        className={cn('lg:hidden opacity-60 duration-200 transition-all fixed top-0 right-0 bottom-0 left-0 bg-background z-30', {
          'opacity-0 pointer-events-none': !isSidebarOpened,
        })}
        onClick={() => sideBarState.next(false)}
      ></div>
    </>
  );
}

function MenuGroup({ root }: any) {
  const pathname = usePathname();
  const [isSubmenuOpen, toggleSubMenu] = useState(false);
  const isSidebarOpened = sideBarState.getValue();

  useEffect(() => {
    if (!isSidebarOpened) toggleSubMenu(false);
  }, [isSidebarOpened]);

  const Wrapper = root.base ? 'div' : Link;

  return (
    <Wrapper
      href={root.href || ''}
      className={cn(
        'px-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground cursor-pointer',
        'border border-transparent font-medium text-sm transition-colors',
        {
          'bg-secondary text-secondary-foreground': root.base && pathname.includes(root.base),
          'bg-primary/80 text-primary-foreground': !root.base && pathname === root.href,
        },
      )}
    >
      <div onClick={() => toggleSubMenu(v => !v)} className=' py-1.5 flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3'><root.icon width={22} height={22} strokeWidth={1.5} /> {root.label}</div>
        {root.items && <ChevronDown width={16} height={16} className={cn('transition-transform', {
          'rotate-180': isSubmenuOpen,
        })} />}
      </div>

      {isSidebarOpened && isSubmenuOpen && root.items && (
        <div className='rounded-lg pb-2 flex flex-col gap-1'>
          {root.items?.map((sub: any, idx: any) => (
            <Link
              key={idx}
              href={root.base + sub.href || ''}
              className={cn(
                'px-4 py-1.5 rounded-md hover:bg-gray-600 hover:text-gray-50',
                'font-medium text-sm transition-colors',
                {
                  'bg-gray-200': sub.href ? pathname.includes(root.base + sub.href) : pathname === root.base,
                  'bg-primary text-primary-foreground': pathname === root.base + sub.href,
                },
              )}
            >
              <div className='pl-5 flex items-center gap-4'>
                {sub.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
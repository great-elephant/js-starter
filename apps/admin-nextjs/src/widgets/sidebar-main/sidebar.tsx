'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronsRight } from 'lucide-react';
import { cn, Collapse, ScrollArea, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@sdks/uikit-react';
import { usePathname } from 'next/navigation';
import { SidebarGroup, sidebars } from './cnf';
import { sideBarState } from './state';

export function SideBarMain() {
  const isSidebarOpened = sideBarState.effect();

  return (
    <>
      <div className={cn('transition-all shadow-lg lg:shadow-none fixed top-0 lg:top-[var(--lyt-header-h)] -left-[var(--lyt-sidebar-opened-w)] lg:left-0 bottom-0 z-40 border-r flex flex-col bg-background', {
        'lg:w-[var(--lyt-sidebar-w)] ': !isSidebarOpened,
        'lg:w-[var(--lyt-sidebar-opened-w)] ': isSidebarOpened,
        'left-0 w-[var(--lyt-sidebar-opened-w)]': isSidebarOpened,
      })}>
        <Link href='/' className='lg:hidden p-4 border-b h-[var(--lyt-header-h)] text-2xl'>LOGO Full Size</Link>

        <ScrollArea className='grow'>
          <div className={cn('flex flex-col gap-2 transition-all', {
            'p-4': isSidebarOpened,
            'py-4 px-2': !isSidebarOpened,
          })}>
            {sidebars.map((group, idx) => (
              <MenuGroup key={idx} group={group} />
            ))}
          </div>
        </ScrollArea>

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

      {isSidebarOpened && <div
        className='lg:hidden fixed top-0 right-0 bottom-0 left-0 z-30'
        onClick={() => sideBarState.next(false)}
      />}
    </>
  );
}

function MenuGroup({ group }: { group: SidebarGroup }) {
  const isSidebarOpened = sideBarState.effect();

  return (
    <div className='flex flex-col gap-2'>
      {isSidebarOpened ? <MenuCollapse group={group} /> : <MenuDropdown group={group} />}
    </div>
  );
}

function MenuCollapse({ group }: { group: SidebarGroup }) {
  const pathname = usePathname();
  const [isSubmenuOpen, toggleSubMenu] = useState(false);
  const isSidebarOpened = sideBarState.effect();

  useEffect(() => {
    if (!isSidebarOpened) toggleSubMenu(false);
  }, [isSidebarOpened]);

  const Wrapper = group.base ? 'button' : Link;

  return (
    <>
      <Wrapper
        href={group.href || ''}
        title={group.label}
        className={cn(
          'flex rounded-lg focus:bg-primary/10 hover:bg-primary/10 hover:text-primary cursor-pointer  w-full  ',
          'font-medium text-sm transition-all select-none outline-none',
          {
            'bg-primary/10 text-primary': group.base && pathname.includes(group.base),
            'bg-primary/5 text-primary': !group.base && pathname === group.href,
            'px-3': isSidebarOpened,
            'px-2': !isSidebarOpened,
          },
        )}
        onClick={() => isSidebarOpened && toggleSubMenu(v => !v)}
      >
        <div className='py-2 flex items-center justify-between gap-4 w-full'>
          <div className='flex items-center gap-3'>
            <group.icon width={22} height={22} strokeWidth={1.5} />
            {isSidebarOpened && <div>{group.label}</div>}
          </div>

          {isSidebarOpened && group.items && <ChevronDown width={16} height={16} className={cn('transition-transform duration-200', {
            'rotate-180': isSubmenuOpen,
          })} />}
        </div>
      </Wrapper>

      {group.items && <Collapse show={isSidebarOpened && isSubmenuOpen}>
        <div className='rounded-lg flex flex-col gap-1'>
          {group.items.map((sub, idx) => (
            <Link
              key={idx}
              href={group.base + sub.href || ''}
              className={cn(
                'px-[20px] py-1.5 rounded-md',
                'font-medium text-sm transition-colors',
                {
                  'text-primary': sub.href ? pathname.includes(group.base + sub.href) : pathname === group.base,
                  'text-primary x': pathname === group.base + sub.href,
                },
              )}
            >
              <div className='pl-6 flex items-center gap-4 relative'>
                <div className='absolute left-0.5 bottom-2 border-dashed w-4 h-9 border-l border-b' />
                {sub.label}
              </div>
            </Link>
          ))}
        </div>
      </Collapse>}
    </>
  );
}

function MenuDropdown({ group }: { group: SidebarGroup }) {
  const pathname = usePathname();
  const isSidebarOpened = sideBarState.effect();

  const Wrapper = group.base ? 'button' : Link;

  if (!group.items) {
    return (
      <Wrapper
        href={group.href || ''}
        title={group.label}
        className={cn(
          'flex rounded-lg focus:bg-primary/10 hover:bg-primary/10 hover:text-primary cursor-pointer px-2 w-full',
          'font-medium text-sm transition-all select-none outline-none',
          {
            'bg-primary/10 text-primary': group.base && pathname.includes(group.base),
            'bg-primary/5 text-primary': !group.base && pathname === group.href,
          },
        )}
      >
        <div className='py-2 flex items-center justify-between gap-4 w-full'>
          <div className='flex items-center gap-3'>
            <group.icon width={22} height={22} strokeWidth={1.5} />
            {isSidebarOpened && <div>{group.label}</div>}
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Wrapper
          href={group.href || ''}
          title={group.label}
          className={cn(
            'flex rounded-lg focus:bg-primary/10 hover:bg-primary/10 hover:text-primary cursor-pointer w-full px-2',
            'font-medium text-sm transition-all select-none outline-none',
            {
              'bg-primary/10 text-primary': group.base && pathname.includes(group.base),
              'bg-primary/5 text-primary': !group.base && pathname === group.href,
            },
          )}
        >
          <div className='py-2 flex items-center justify-between gap-4 w-full'>
            <div className='flex items-center gap-3'>
              <group.icon width={22} height={22} strokeWidth={1.5} />
              {isSidebarOpened && <div>{group.label}</div>}
            </div>
          </div>
        </Wrapper>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={14} side='right'>
        {group.items?.map((sub, idx) => (
          <DropdownMenuItem key={idx} asChild>
            <Link
              key={idx}
              href={group.base + sub.href || ''}
              className={cn(
                'px-4 py-1.5 rounded-md whitespace-nowrap',
                'font-medium text-sm transition-colors',
                {
                  'text-primary': sub.href ? pathname.includes(group.base + sub.href) : pathname === group.base,
                  'text-primary x': pathname === group.base + sub.href,
                },
              )}
            >
              <div className='flex items-center gap-4'>
                {sub.label}
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
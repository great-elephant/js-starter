'use client';

import { useEffect, useState } from 'react';
import { SunMoon, Sun } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Button, useTheme, cn } from '../';

export function ThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn('outline-none', className)}>
        <Button size='icon' variant='ghost' className='rounded-full outline-none'>
          {theme === 'dark' ? <SunMoon width={22} height={22} /> : <Sun width={22} height={22} />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mr-4 w-[100px]'>
        <DropdownMenuItem className='cursor-pointer flex gap-4' onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer flex gap-4' onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer flex gap-4' onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
'use client';

import { Popover, PopoverContent, PopoverTrigger } from '../overlay';
import { Button } from '@uikit-react/button';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@uikit-react/lib/utils';
import { Calendar } from './calendar';
import { useState } from 'react';

export interface DatePickerProps {
  selected?: Date;
  onDaySelect?: (day?: Date) => void;
  placeholder?: string;
  format?: string;
}

export function DatePicker({ selected, format = 'PPP', placeholder, onDaySelect }: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={open => setOpen(open)}>
      <PopoverTrigger asChild onClick={() => { setOpen(true); }}>
        <Button
          variant={'outline'}
          className={cn(
            'pl-3 text-left font-normal',
            !selected && 'text-muted-foreground'
          )}
        >
          {selected ? selected.toDateString(): placeholder}
          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-white' align='start'>
        <Calendar
          initialFocus
          mode='single'
          className='p-3 min-w-[280px] bg-background rounded-sm'
          selected={selected}
          onSelect={(day) => {
            setOpen(false);
            onDaySelect?.(day);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
'use client';

import { useState } from 'react';
import { Calendar as CalendarPrimitive, CalendarProps as CalendarPropsPrimitive } from '../form';
import { useController } from 'react-hook-form';

type CalendarProps = CalendarPropsPrimitive & {
  name: string;
}

export function Calendar({ name, ...rest }: CalendarProps) {
  const controler = useController({ name });
  const field = controler.field;
  const [month, setMonth] = useState<Date | undefined>(field.value);

  return (
    <CalendarPrimitive
      {...rest}
      mode='single'
      selected={field.value}
      month={month}
      onMonthChange={month => setMonth(month)}
      onSelect={(day) => {
        setMonth(day);
        field.onChange(day);
      }}
    />
  );
}
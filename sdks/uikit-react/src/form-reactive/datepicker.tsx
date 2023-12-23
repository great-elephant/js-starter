import { DatePicker as DatePickerPrimitive, DatePickerProps as DatePickerPropsPrimitive } from '../form';
import { useController } from 'react-hook-form';

interface DatePickerProps extends DatePickerPropsPrimitive {
  name: string;
}

export function DatePicker({ name }: DatePickerProps) {
  const controler = useController({ name });
  const field = controler.field;

  return (
    <DatePickerPrimitive onDaySelect={field.onChange} selected={field.value} />
  );
}
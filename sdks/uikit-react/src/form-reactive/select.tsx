import { Select as SelectPrimitive, SelectProps as SelectPropsPrimitive } from '@uikit-react/form';
import { useController } from 'react-hook-form';

export interface SelectProps extends SelectPropsPrimitive {
  name: string;
  onValueChange?: never;
}

export function Select({
  name,
  value,
  ...rest
}: SelectProps) {
  const controler = useController({ name });
  const field = controler.field;
  const onChange = field.onChange;

  return (
    <SelectPrimitive
      {...rest}
      {...field}
      onValueChange={onChange}
    />
  );
}

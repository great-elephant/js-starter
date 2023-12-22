import { Radio as RadioPrimitive, RadioProps as RadioPropsPrimitive } from '@uikit-react/form';
import { useController } from 'react-hook-form';

export interface RadioProps extends RadioPropsPrimitive {
  name: string;
}

export function Radio({
  name,
  value,
  onChange,
  ...rest
}: RadioProps) {
  const controler = useController({ name });
  const field = controler.field;

  return (
    <RadioPrimitive
      {...rest}
      {...field}
      checked={field.value === value}
    />
  );
}

import clsx from 'clsx';
import { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Switch as PrimitiveSwitch, SwitchProps as PrimitiveSwitchProps } from '@uikit-react/form';

interface InputProps extends PrimitiveSwitchProps {
  name: string;
}

export const Switch = ({
  className,
  name,
  ...rest
}: InputProps) => {
  const controler = useController({ name });
  const field = controler.field;
  const fieldState = controler.fieldState;

  const handleChange = useCallback(
    (checked: boolean) => {
      console.log('checked', checked);
      field.onChange(checked);
    },
    [field],
  );

  const isInvalid = !!fieldState.error?.message;

  return (
    <PrimitiveSwitch
      {...field}
      {...rest}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      checked={field.value}
      onCheckedChange={handleChange}
    />
  );
};

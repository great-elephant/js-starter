import clsx from 'clsx';
import { ChangeEvent, useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Input as PrimitiveInput, InputProps as InputPropsPrimitive } from '@uikit-react/form';

interface InputProps extends Omit<InputPropsPrimitive, 'defaultValue'> {
  name: string;
}

export const Input = ({
  className,
  name,
  onChange,
  type = 'text',
  ...rest
}: InputProps) => {
  const controler = useController({ name });
  const field = controler.field;
  const fieldState = controler.fieldState;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e);
      onChange?.(e);
    },
    [field, onChange],
  );

  const isInvalid = !!fieldState.error?.message;

  return (
    <PrimitiveInput
      {...field}
      {...rest}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      value={field.value === null || field.value === undefined ? '' : field.value}
      type={type}
      onChange={handleChange}
    />
  );
};

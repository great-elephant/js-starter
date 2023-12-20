import clsx from 'clsx';
import { ChangeEvent, useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Input as PrimitiveInput, InputProps } from '../form';

export const Input = ({
  className,
  name,
  onChange,
  type = 'text',
  disabled,
  placeholder,
  readOnly,
  id,
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
      id={id}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      {...field}
      {...rest}
      value={field.value === null || field.value === undefined ? '' : field.value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
      readOnly={readOnly}
    />
  );
};

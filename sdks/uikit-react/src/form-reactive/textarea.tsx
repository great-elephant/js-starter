import clsx from 'clsx';
import { ChangeEvent, useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Textarea as PrimitiveTextarea, TextareaProps as PrimitiveTextareaProps } from '../form';

interface TextareaProps extends PrimitiveTextareaProps {
  name: string;
}

export const Textarea = ({
  className,
  name,
  ...rest
}: TextareaProps) => {
  const controler = useController({ name });
  const field = controler.field;
  const fieldState = controler.fieldState;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      field.onChange(e);
    },
    [field],
  );

  const isInvalid = !!fieldState.error?.message;

  return (
    <PrimitiveTextarea
      {...field}
      {...rest}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      value={field.value === null || field.value === undefined ? '' : field.value}
      onChange={handleChange}
    />
  );
};

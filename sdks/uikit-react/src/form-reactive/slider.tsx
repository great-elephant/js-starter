import clsx from 'clsx';
import { ChangeEvent, useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Slider as PrimitiveSlider, SliderProps as SliderPropsPrimitive } from '../form';

interface SliderProps extends SliderPropsPrimitive {
  name: string;
}

export const Slider = ({
  className,
  name,
  onChange,
  ...rest
}: SliderProps) => {
  const controler = useController({ name });
  const field = controler.field;
  const fieldState = controler.fieldState;

  const handleChange = useCallback(
    (value: number[]) => {
      field.onChange(value);
    },
    [field],
  );

  const isInvalid = !!fieldState.error?.message;

  return (
    <PrimitiveSlider
      {...field}
      {...rest}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      defaultValue={field.value}
      value={field.value}
      onValueChange={handleChange}
    />
  );
};

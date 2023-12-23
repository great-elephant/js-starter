import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { Checkbox as PrimitiveCheckbox, CheckboxProps as CheckboxPropsPrimitive } from '@uikit-react/form';

interface CheckboxProps extends CheckboxPropsPrimitive {
  name: string;
  value: string;
}

export const Checkbox = ({
  className,
  name,
  onChange,
  value,
  ...rest
}: CheckboxProps) => {
  const controler = useController({ name });
  const fieldState = controler.fieldState;
  const field = controler.field;
  const values = field.value || [];

  const handleCheckboxChange = (checked: boolean) => {
    const newValues = field.value || [];

    if (checked) {
      newValues.push(value);
      field.onChange(newValues);
      onChange?.(newValues);
      return;
    }

    field.onChange(newValues.filter((val: any) => value !== val));
    onChange?.(newValues);
  };

  const isInvalid = !!fieldState.error?.message;

  return (
    <PrimitiveCheckbox
      {...field}
      {...rest}
      className={clsx(
        {
          ['border-red-500']: isInvalid,
        },
        className,
      )}
      checked={values?.includes(value)}
      value={value}
      onCheckedChange={handleCheckboxChange}
    />
  );
};

import clsx from 'clsx';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';

export type InputType = 'text' | 'number' | 'password';

export type InputProps = InputHTMLAttributes<any> & {
  name: string;
  disabled?: boolean;
  type?: InputType;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  className?: string;
  id?: string;
  value?: string | number;
  readonly?: boolean;
};

export const Input = React.forwardRef<any, InputProps>(({
  className,
  name,
  onChange,
  type = 'text',
  disabled,
  placeholder,
  readOnly,
  id,
  value,
  ...rest
}, ref) => {
  return (
    <input
      className={clsx(
        'w-full rounded-md border-gray-200 focus:border-gray-400 bg-white text-sm text-gray-700 h-[36px] border outline-none px-4 duration-200',
        className,
      )}
      {...rest}
      ref={ref}
      value={value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
});

import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> { }

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type='radio'
    />
  );
});

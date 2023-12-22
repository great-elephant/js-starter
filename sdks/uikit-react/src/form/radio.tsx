export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> { }

export function Radio(props: RadioProps) {
  return (
    <input
      {...props}
      type='radio'
    />
  );
}

import { useController } from 'react-hook-form';
import { FieldError as FieldErrorPrimitive } from '@uikit-react/form';

type FieldErrorProps = {
  name: string;
  className?: string;
};

export const FieldError = ({ name, className }: FieldErrorProps) => {
  const controller = useController({ name });
  const fieldState = controller.fieldState;

  // TODO: use transition
  if (!fieldState.error?.message) return <></>;

  return (
    <FieldErrorPrimitive className={className}>
      {fieldState.error?.message}
    </FieldErrorPrimitive>
  );
};

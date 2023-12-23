import { useController } from 'react-hook-form';
import { FieldError as FieldErrorPrimitive } from '../form';
import { Collapse } from '@uikit-react/animation';

type FieldErrorProps = {
  name: string;
  className?: string;
};

export const FieldError = ({ name, className }: FieldErrorProps) => {
  const controller = useController({ name });
  const fieldState = controller.fieldState;

  return (
    <Collapse show={!!controller.fieldState.error}>
      <FieldErrorPrimitive className={className}>
        {fieldState.error?.message}
      </FieldErrorPrimitive>
    </Collapse>
  );
};

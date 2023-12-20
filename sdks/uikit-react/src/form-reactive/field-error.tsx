import { useController } from 'react-hook-form';
import clsx from 'clsx';

type FieldErrorProps = {
  name: string;
  className?: string;
};

export const FieldError = ({ name, className }: FieldErrorProps) => {
  const controller = useController({ name });
  const fieldState = controller.fieldState;

  return (
    <div className={clsx(className, 'text-red-500 text-xs min-h-[18px] flex gap-0.5 items-center')}>
      {fieldState.error?.message}
    </div>
  );
};

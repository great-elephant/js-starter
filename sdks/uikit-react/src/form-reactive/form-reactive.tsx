import { MutableRefObject, PropsWithChildren } from 'react';
import { useForm, FormProvider, DefaultValues, SubmitHandler, Mode, UseFormReturn, FieldValues } from 'react-hook-form';
import { ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormReactiveProps<Values extends FieldValues> = PropsWithChildren<{
  defaultValues?: DefaultValues<Values>;
  onSubmit: (values: Values) => void;
  schema?: ObjectSchema<any>;
  className?: string;
  innerRef?: MutableRefObject<UseFormReturn<Values> | undefined>;
  mode?: Mode;
}>;

export function FormReactive<V extends { [x: string]: unknown }>({
  onSubmit,
  defaultValues,
  children,
  schema,
  className,
  innerRef,
  mode = 'onSubmit',
}: FormReactiveProps<V>) {
  const useFormReturn = useForm({
    mode,
    defaultValues,
    resolver: schema && yupResolver(schema),
  });

  const { handleSubmit } = useFormReturn;

  innerRef && (innerRef.current = useFormReturn);

  return (
    <FormProvider {...useFormReturn}>
      <form className={className} onSubmit={handleSubmit(onSubmit as SubmitHandler<V>)}>
        {children}
      </form>
    </FormProvider>
  );
}

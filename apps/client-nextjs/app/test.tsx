'use client';
import { FormReactive, Input, Yup, FieldError } from '@sdks/uikit-react/form-reactive';
const schema = Yup.object({
  email: Yup.string().required(),
});

export function Test() {
  return (
    <FormReactive validationSchema={schema} onSubmit={(values: any) => {
      console.log('values', values);
    }}>
      <Input name='email' />
      <FieldError name='email' />
      <button type='submit'>Yo</button>
    </FormReactive>
  );
}
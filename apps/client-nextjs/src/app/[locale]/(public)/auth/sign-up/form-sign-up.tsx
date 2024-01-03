'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FormReactive, Input, FieldError, y, populateError, UseFormReturn } from '@sdks/uikit-react/form-reactive';
import { Button, FieldGroup, Label } from '@sdks/uikit-react';
import { useCommand } from '@sdks/api-react-query';

type FornSignUpValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema: y.ObjectSchema<FornSignUpValues> = y.object({
  firstName: y.string().required(),
  lastName: y.string().required(),
  email: y.string().required(),
  password: y.string().required(),
});

export function FormSignUp() {
  const router = useRouter();
  const formRef = useRef<UseFormReturn<FornSignUpValues>>();
  const registerCmd = useCommand(client.user.register);

  const handleSignUp = async (values: FornSignUpValues) => {
    const { error } = await registerCmd.invoke(values);
    if (error) {
      formRef.current && populateError(error, formRef.current);
      return;
    }

    router.push('/auth/activate');
  };

  return (
    <FormReactive<FornSignUpValues>
      schema={schema}
      innerRef={formRef}
      onSubmit={handleSignUp}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <FieldGroup>
            <Label htmlFor='firstName'>First name</Label>
            <Input id='firstName' name='firstName' />
            <FieldError name='firstName' />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor='lastName'>Last name</Label>
            <Input id='lastName' name='lastName' />
            <FieldError name='lastName' />
          </FieldGroup>
        </div>

        <FieldGroup>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' />
          <FieldError name='email' />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' name='password' type='password' />
          <FieldError name='password' />
        </FieldGroup>

        <Button type='submit' size='lg' loading={registerCmd.loading || registerCmd.isSuccess}>Sign Up</Button>
      </div>
    </FormReactive>
  );
}
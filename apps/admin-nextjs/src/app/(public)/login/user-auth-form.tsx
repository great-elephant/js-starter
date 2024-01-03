'use client';

import * as React from 'react';
import { Button, Label, FieldGroup, toast } from '@sdks/uikit-react';
import { y, Input, FieldError, FormReactive } from '@sdks/uikit-react/form-reactive';
import { useCommand } from '@sdks/api-react-query';
import { useSession } from '@/misc/session';
import { useRouter, useSearchParams } from 'next/navigation';

type UserFormValues = {
  email: string;
  password: string;
}

const schema: y.ObjectSchema<UserFormValues> = y.object({
  email: y.string().required(),
  password: y.string().required(),
});

export function UserAuthForm() {
  const router = useRouter();
  const params = useSearchParams();
  const login = useCommand(client.admin.login);
  const { saveCredential } = useSession();

  async function onSubmit(values: UserFormValues) {
    const { data, error } = await login.invoke(values);

    if (error) {
      return toast.error({
        message: 'Login failed',
        description: error.msg,
      });
    }

    saveCredential(data);
    router.push(params.get('prev') || '/');
  }

  return (
    <FormReactive<UserFormValues>
      className='flex flex-col gap-4'
      onSubmit={onSubmit}
      schema={schema}
    >
      <FieldGroup>
        <Label label='Email' htmlFor='email' className='sr-only' />
        <Input
          id='email'
          name='email'
          placeholder='Email'
          type='email'
          autoCapitalize='none'
          autoComplete='email'
          autoCorrect='off'
        />
        <FieldError name='email' />
      </FieldGroup>

      <FieldGroup>
        <Label label='Password' htmlFor='password' className='sr-only' />
        <Input
          id='password'
          name='password'
          placeholder='Password'
          type='password'
          autoCapitalize='none'
          autoComplete='password'
          autoCorrect='off'
        />
        <FieldError name='password' />
      </FieldGroup>

      <Button type='submit' loading={login.loading || login.isSuccess} label='Sign In' />
    </FormReactive>
  );
}
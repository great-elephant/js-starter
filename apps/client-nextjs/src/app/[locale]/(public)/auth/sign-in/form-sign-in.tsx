'use client';

import { Link } from '@sdks/nextjs';
import { FormReactive, Input, FieldError, y } from '@sdks/uikit-react/form-reactive';
import { Button, Label, toast } from '@sdks/uikit-react';
import { useCommand } from '@sdks/api-react-query';
import { useRouter } from '@sdks/nextjs';
import { useSession } from '@/misc/session';

type FornSignInValues = {
  email: string;
  password: string;
}

const schema: y.ObjectSchema<FornSignInValues> = y.object({
  email: y.string().required(),
  password: y.string().required(),
});

export function FormSignIn() {
  const router = useRouter();
  const { saveCredential } = useSession();
  const loginCmd = useCommand(client.user.login);

  const handleSignIn = async (values: FornSignInValues) => {
    const { data, error } = await loginCmd.invoke(values);

    if (error) {
      toast.error({ message: 'Failed to sign-in', description: error?.msg });
      return;
    }

    saveCredential(data);
    router.push('/');
  };

  return (
    <FormReactive<FornSignInValues>
      schema={schema}
      onSubmit={handleSignIn}
    >
      <div className='flex flex-col gap-4'>
        <div className='text-sm grid gap-1 md:grid md:grid-cols-12'>
          <Label htmlFor='email'>Email</Label>
          <div className='col-span-12'>
            <div className=''>
              <div className='relative'>
                <Input
                  id='email'
                  name='email'
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                />
                <FieldError name='email' />
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='text-sm grid gap-1 md:grid md:grid-cols-12'>
            <div className='flex flex-row space-x-2 justify-between col-span-12'>
              <Label htmlFor='password'>Password</Label>
            </div>
            <div className='col-span-12'>
              <div className=''>
                <div className='relative'>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    autoCapitalize='none'
                    autoComplete='password'
                    autoCorrect='off'
                  />
                  <FieldError name='password' />
                </div>
              </div>
            </div>
          </div>
          <Link
            className='absolute top-0 right-0 text-sm text-foreground-lighter'
            href='/auth/forgot-password'
          >
            Forgot Password?
          </Link>
        </div>

        <Button type='submit' size='lg' loading={loginCmd.loading || loginCmd.isSuccess}>Sign In</Button>
      </div>
    </FormReactive>
  );
}
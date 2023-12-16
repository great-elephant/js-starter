'use client';
import { Client } from '@sdks/api-client';
import { DefaultRunner } from '@sdks/api-client/src/client-runner';
import { useQuery } from '@sdks/api-hook';
import Link from 'next/link';

const clientRunner = new DefaultRunner({
  API_BASE_URL: 'http://localhost:3001/api',
  headers(headers) {
    const accessToken = 'X1X';
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return headers;
  },
});

const client = new Client({
  runner: clientRunner,
})

export function Test() {
  const register = useQuery(client.user.register)

  return (
    <div className='flex flex-col'>
      <button onClick={() => register.invoke({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })}>Button</button>

      <Link href={'/about'}>about</Link>
    </div>
  )
}
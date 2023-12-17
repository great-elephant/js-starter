'use client';
import { Client } from '@sdks/api-client';
import { DefaultRunner } from '@sdks/api-client/src/client-runner';
import { useCommand, useQuery } from '@sdks/api-react-query';
import Link from 'next/link';

const clientRunner = new DefaultRunner({
  API_BASE_URL: 'http://localhost:3002/api',
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
});

export function Test() {
  const register = useCommand(client.user.register);

  return (
    <div className='flex flex-col'>
      <button onClick={() => register.invoke({
        firstName: 'h1',
        lastName: 'test',
        email: `${new Date().getTime()}@gmail.com`,
        password: '32',
      })}>Button</button>

      <Link href={'/about'}>about</Link>
    </div>
  );
}
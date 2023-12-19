'use client';
import { AdminClient } from '@sdks/api-admin';
import { DefaultRunner } from '@sdks/api-admin';
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

const client = new AdminClient({
  runner: clientRunner,
});

export function Test() {
  const register = useQuery(client.user.lockAccount);

  return (
    <div className='flex flex-col'>
      <button onClick={() => register.invoke({
        usrPid: '',
      })}>Button</button>

      <Link href={'/about'}>about</Link>
    </div>
  );
}
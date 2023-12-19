'use client';
import { AdminClient } from '@sdks/api-admin';
import { DefaultRunner } from '@sdks/api-admin';
import { useCommand } from '@sdks/api-react-query';
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
  const register = useCommand(client.user.lockAccount);

  return (
    <div className='flex flex-col'>
      <button onClick={() => register.invoke({
        usrPid: '',
      })}>Button</button>

      <Link href={'/about'}>about</Link>
    </div>
  );
}
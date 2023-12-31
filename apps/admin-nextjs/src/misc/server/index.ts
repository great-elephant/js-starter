import { cache } from 'react';
import { cookies } from 'next/headers';
import { ADMIN_TKN } from '@sdks/types-admin';

function serverData() {
  return {} as {
    [ADMIN_TKN]?: string;
    [k: string]: any;
  };
}

export const getServerData = cache(serverData);

export function initServerData() {
  getServerData()[ADMIN_TKN] = cookies().get(ADMIN_TKN)?.value;
}
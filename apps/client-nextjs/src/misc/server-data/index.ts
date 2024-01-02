import { cache } from 'react';
import { cookies } from 'next/headers';
import { USER_TKN } from '@sdks/types-shared';

function serverData() {
  return {} as {
    [USER_TKN]?: string;
    [k: string]: any;
  };
}

export const getServerData = cache(serverData);

export function initServerData() {
  getServerData()[USER_TKN] = cookies().get(USER_TKN)?.value;
}
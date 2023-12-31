import { Client, DefaultRunner } from '@sdks/api-client';
import { API_BASE_URL } from '@/misc/constants';
import { USER_TKN } from '@sdks/types-shared';
import { getServerData } from '@/misc/server';

const runner = new DefaultRunner({
  API_BASE_URL,
  headers: (headers) => {
    const tkn = getServerData()[USER_TKN];
    if (tkn) {
      headers['authorization'] = `Bearer ${tkn}`;
    }

    return headers;
  },
});

const client = new Client({
  runner,
});

global.client = client;

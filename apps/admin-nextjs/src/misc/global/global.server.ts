import { AdminClient, DefaultRunner } from '@sdks/api-admin';
import { API_BASE_URL } from '@/misc/constants';
import { ADMIN_TKN } from '@sdks/types-admin';
import { getServerData } from '@/misc/server';

const runner = new DefaultRunner({
  API_BASE_URL,
  headers: (headers) => {
    const tkn = getServerData()[ADMIN_TKN];
    if (tkn) {
      headers['authorization'] = `Bearer ${tkn}`;
    }

    return headers;
  },
});

const client = new AdminClient({
  runner,
});

global.client = client;

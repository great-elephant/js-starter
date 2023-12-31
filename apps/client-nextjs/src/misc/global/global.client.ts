import { Client, DefaultRunner } from '@sdks/api-client';
import { API_BASE_URL } from '@/misc/constants';
import { getToken } from '@/misc/session/heper.client';

const runner = new DefaultRunner({
  API_BASE_URL,
  headers: (headers) => {
    const tkn = getToken();
    if (tkn) {
      headers['authorization'] = `Bearer ${tkn}`;
    }

    return headers;
  },
});

const client = new Client({
  runner,
});

if (typeof window !== 'undefined') {
  window.client = client;
}
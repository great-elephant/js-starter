import { AdminClient, DefaultRunner } from '@sdks/api-admin';
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

const client = new AdminClient({
  runner,
});

if (typeof window !== 'undefined') {
  window.client = client;
} else {
  global.client = client;
}

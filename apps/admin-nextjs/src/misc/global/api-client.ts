import { AdminClient, DefaultRunner } from '@sdks/api-admin';
import { API_BASE_URL } from '@/misc/constants';

const runner = new DefaultRunner({
  API_BASE_URL,
});

export const client = new AdminClient({
  runner,
});
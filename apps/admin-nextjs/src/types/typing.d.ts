import { AdminClient } from '@sdks/api-admin';
import { IsomorphicALS } from '@/misc/als/config';

declare global {
  var client: AdminClient;
}

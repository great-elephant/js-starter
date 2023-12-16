import { ClientRunner } from '@sdks/api-client';
import { APICaller } from '@sdks/api-runner';
import { UseRequestOptions } from './type';
import { useRequest } from './use-request';

export function useQuery<F extends APICaller<ClientRunner>>(caller: F, options?: UseRequestOptions<F>) {
  return useRequest(caller, options);
}

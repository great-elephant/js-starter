import { ClientRunner } from '@sdks/api-core';
import { APICaller } from '@sdks/api-core';
import { UseRequestOptions } from './type';
import { useRequest } from './use-request';

export function useQuery<F extends APICaller<ClientRunner>>(caller: F, options?: UseRequestOptions<F>) {
  return useRequest(caller, options);
}

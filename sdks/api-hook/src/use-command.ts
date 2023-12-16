import { ClientRunner } from '@sdks/api-client';
import { APICaller } from '@sdks/api-runner';
import { useRequest } from './use-request';
import { UseRequestOptions } from './type';

export function useCommand<F extends APICaller<ClientRunner>>(caller: F, options?: UseRequestOptions<F>) {
  return useRequest(caller, options);
}

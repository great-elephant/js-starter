import { useQueryClient, useQuery as useQueryTs } from '@tanstack/react-query';
import { ClientRunner, SendOptions, overrideCaller } from '@sdks/api-client';
import { APICaller } from '@sdks/api-runner';
import { ErrorResponse, SuccessResponse } from '@sdks/types-shared';
import { UseRequestOptions, UseRequestReturn } from './type';

type UseQueryReturn<C extends APICaller<ClientRunner>> = Omit<UseRequestReturn<C>, 'refresh' | 'invoke'>

export function useQuery<Caller extends APICaller<ClientRunner>>(
  caller: Caller,
  options?: UseRequestOptions<Caller>,
): UseQueryReturn<Caller> {
  const queryClient = useQueryClient();

  const { data: tsData, error, isSuccess, isPending } = useQueryTs<SuccessResponse<any>, ErrorResponse>({
    enabled: options?.enable,
    initialData: (options?.data || options?.meta) && {
      data: options?.data,
      meta: options?.meta,
    },
    retry: 1,
    queryKey: [caller.name, options?.params],
    queryFn: ({ signal }) => {
      const newCaller = overrideCaller(caller, runner => ({
        API_BASE_URL: runner.API_BASE_URL,
        send: async (input, options) => {
          const opts: SendOptions = {
            ...options,
            signal,
          };

          return runner.send(input, opts);
        },
      }));

      return newCaller(...(options?.params || []));
    },
  });

  return {
    data: tsData?.data,
    meta: tsData?.meta,
    error,
    isSuccess,
    loading: isPending,
    setData: (cb) => {
      const newData = typeof cb === 'function' ? (cb as any)(tsData?.data) : cb;
      queryClient.setQueryData([caller.name, options?.params], {
        ...tsData,
        data: newData,
      });
    },
    setMeta: (cb) => {
      const newMeta = typeof cb === 'function' ? cb(tsData?.data) : cb;
      queryClient.setQueryData([caller.name, options?.params], {
        ...tsData,
        meta: newMeta,
      });
    },
  };
}

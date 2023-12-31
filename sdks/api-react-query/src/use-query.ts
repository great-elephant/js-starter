import { useState } from 'react';
import { useQueryClient, useQuery as useQueryTs } from '@tanstack/react-query';
import { ClientRunner, SendOptions, overrideCaller } from '@sdks/api-client';
import { APICaller } from '@sdks/api-core';
import { ErrorResponse, SuccessResponse } from '@sdks/types-shared';
import { UseRequestOptions, UseRequestReturn } from './type';

interface UseQueryReturn<C extends APICaller<ClientRunner>> extends Omit<UseRequestReturn<C>, 'refresh' | 'invoke'> {
  setParams: React.Dispatch<React.SetStateAction<Parameters<C> | undefined>>
  params: Parameters<C> | undefined;
}

export function useQuery<Caller extends APICaller<ClientRunner>>(
  caller: Caller,
  options?: UseRequestOptions<Caller>,
): UseQueryReturn<Caller> {
  const queryClient = useQueryClient();
  const [searchParams, setParams] = useState<Parameters<Caller> | undefined>(options?.params);

  const { data: tsData, error, isSuccess, isPending } = useQueryTs<SuccessResponse<any>, ErrorResponse>({
    enabled: options?.enable,
    initialData: (options?.data || options?.meta) && {
      data: options?.data,
      meta: options?.meta,
    },
    retry: 1,
    queryKey: [caller.name, searchParams],
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

      return newCaller(...(searchParams || []));
    },
  });

  return {
    data: tsData?.data,
    meta: tsData?.meta,
    error,
    isSuccess,
    loading: isPending,
    setParams,
    params: searchParams,
    setData: (cb) => {
      const newData = typeof cb === 'function' ? (cb as any)(tsData?.data) : cb;
      queryClient.setQueryData([caller.name, searchParams], {
        ...tsData,
        data: newData,
      });
    },
    setMeta: (cb) => {
      const newMeta = typeof cb === 'function' ? cb(tsData?.data) : cb;
      queryClient.setQueryData([caller.name, searchParams], {
        ...tsData,
        meta: newMeta,
      });
    },
  };
}

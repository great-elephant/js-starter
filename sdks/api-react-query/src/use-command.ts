import { useMutation } from '@tanstack/react-query';
import { ErrorResponse, MetaData, SuccessResponse } from '@sdks/types-shared';
import { ClientRunner, SendOptions, overrideCaller } from '@sdks/api-client';
import { APICaller } from '@sdks/api-core';
import { APIReturnedData, ReturnedData, UseRequestReturn } from './type';
import { useAbort } from './use-abort';

type UseCommandReturn<C extends APICaller<ClientRunner>> = Omit<UseRequestReturn<C>, 'refresh' | 'setData' | 'setMeta'>

export function useCommand<Caller extends APICaller<ClientRunner>>(
  caller: Caller,
): UseCommandReturn<Caller> {
  const abortCtrlRef = useAbort();

  const {
    data: tsData,
    error,
    isSuccess,
    isPending,
    mutateAsync,
  } = useMutation<SuccessResponse<APIReturnedData<Caller>>, ErrorResponse>({
    mutationFn: overrideCaller(caller, runner => ({
      API_BASE_URL: runner.API_BASE_URL,
      send: async (input, options) => {
        const opts: SendOptions = {
          ...options,
          signal: abortCtrlRef.current?.signal,
        };

        return runner.send(input, opts);
      },
    })),
  });

  return {
    data: tsData?.data,
    meta: tsData?.meta,
    invoke: async (...args) => {
      try {
        return await mutateAsync(...args);
      } catch (error) {
        return { error: error as ErrorResponse };
      }
    },
    error,
    isSuccess,
    loading: isPending,
  };
}

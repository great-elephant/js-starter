import { useMutation } from '@tanstack/react-query';
import { ErrorResponse, SuccessResponse } from '@sdks/types-shared';
import { ClientRunner, SendOptions, overrideCaller } from '@sdks/api-client';
import { APICaller } from '@sdks/api-runner';
import { UseRequestReturn } from './type';
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
  } = useMutation<SuccessResponse<unknown>, ErrorResponse>({
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
    invoke: (...args) => mutateAsync(...args),
    error,
    isSuccess,
    loading: isPending,
  };
}

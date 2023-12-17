import { useCallback, useEffect, useRef, useState } from 'react';
import { ErrorResponse } from '@sdks/types-shared';
import {
  ReturnedData,
  UseRequestOptions,
  UseRequestReturn,
} from './type';
import { APICaller } from '@sdks/api-runner';
import { ClientRunner, overrideCaller } from '@sdks/api-client';
import { SendOptions } from '@sdks/api-client';

export function useRequest<Caller extends APICaller<ClientRunner>>(
  caller: Caller,
  options?: UseRequestOptions<Caller>,
): UseRequestReturn<Caller> {
  const [error, setError] = useState<ErrorResponse>();
  const [data, setData] = useState(options?.data);
  const [meta, setMeta] = useState(options?.meta);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const abortCtrlRef = useRef(new AbortController());
  const paramsRef = useRef<any>(options?.params || []);

  useEffect(() => {
    abortCtrlRef.current = new AbortController();

    return () => abortCtrlRef.current.abort();
  }, []);

  const invoke = useCallback(
    async (...params: Parameters<Caller>): Promise<ReturnedData<any, any>> => {
      paramsRef.current = params;
      setError(undefined);
      setSuccess(false);
      setLoading(true);

      try {
        const newCaller = overrideCaller(caller, originalRunner => ({
          API_BASE_URL: originalRunner.API_BASE_URL,

          send: async (input, options) => {
            const opts: SendOptions = {
              ...options,
              signal: abortCtrlRef.current.signal,
            };

            return originalRunner.send(input, opts);
          },
        }));

        const res = await newCaller(...params);

        setData(res.data);
        setMeta(res.meta);
        setError(undefined);
        setSuccess(true);
        setLoading(false);

        return { data: res.data, meta: res.meta };
      } catch (err) {
        const error: ErrorResponse = (err as any)?.err ? err as ErrorResponse : {
          err: 'UNEXPECTED',
          msg: 'Unexpected error has occurred',
        };

        setData(undefined);
        setMeta(undefined);
        setError(error);
        setSuccess(false);
        setLoading(false);

        return { error };
      }
    },
    [caller],
  );

  useEffect(() => {
    if (!options?.enable) return;

    invoke(...paramsRef.current);
  }, [invoke, options?.enable]);

  const refresh = useCallback(() => {
    invoke(...paramsRef.current);
  }, [invoke]);

  return {
    data,
    meta,
    isSuccess,
    loading,
    error,
    invoke,
    refresh,
    setData,
    setMeta,
  };
}

import { ErrorResponse, MetaData } from '@sdks/types-shared';
import { APICaller } from '@sdks/api-core';
import { ClientRunner } from '@sdks/api-client';

export type UseRequestOptions<Caller extends APICaller<ClientRunner>> = {
  /**
   * Initial data.
   */
  data?: unknown;

  /**
   * Initial meta.
   */
  meta?: MetaData;

  /**
   * Whether request MUST be invoked immediately.
   * 
   * Default: false.
   */
  enable?: boolean;

  /**
   * Initial params when invoking API Caller.
   */
  params?: Parameters<Caller>;
}

export type APIReturnedData<Caller extends APICaller<ClientRunner>> = Awaited<ReturnType<Caller>>['data'];

export type ReturnedData<D, M> =
  {
    error: ErrorResponse;
    data?: undefined;
    meta?: undefined;
  } |
  {
    error?: undefined;
    data: D;
    meta?: M;
  }

export interface UseRequestReturn<Caller extends APICaller<ClientRunner>> {
  isSuccess: boolean;
  loading: boolean;
  error: ErrorResponse | null;
  data?: APIReturnedData<Caller>;
  meta?: MetaData;
  setData: (data: APIReturnedData<Caller> | ((data?: APIReturnedData<Caller>) => APIReturnedData<Caller>)) => void;
  setMeta: (meta: MetaData | ((meta?: MetaData) => MetaData)) => void;
  refresh: () => void;
  invoke: (...args: Parameters<Caller>) => Promise<ReturnedData<
    APIReturnedData<Caller>,
    MetaData
  >>,
}

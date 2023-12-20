export type PagingData = {
  total: number;
}

export type MetaData = {
  paging?: PagingData;
}

export interface SuccessResponse<Data> {
  data: Data;
  meta?: MetaData;
}

export interface ErrorItem {
  src: string;

  /**
   * Error code.
   */
  err?: string;

  msg?: string;
}

export interface ErrorResponse {
  /**
   * Error code.
   */
  err: string;

  msg?: string;

  errors?: ErrorItem[];
}

import { ClientRunner } from '@sdks/api-core';

export interface LockAccountParams {
  usrPid: string;
}

export function lockAccount(this: ClientRunner, params: LockAccountParams) {
  return this.send<void>(`${this.API_BASE_URL}/user/${params.usrPid}/lock`, {
    method: 'post',
    body: params,
  });
}

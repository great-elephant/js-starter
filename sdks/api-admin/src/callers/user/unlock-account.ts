import { ClientRunner } from '@sdks/api-core';

export interface UnlockAccountParams {
  usrPid: string;
}

export function unlockAccount(this: ClientRunner, params: UnlockAccountParams) {
  return this.send<void>(`${this.API_BASE_URL}/user/${params.usrPid}/unlock`, {
    method: 'post',
    body: params,
  });
}

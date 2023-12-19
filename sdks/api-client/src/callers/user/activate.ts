import { ClientRunner } from '@sdks/api-core';

export interface ActivateParams {
  sid: string;
  activeKey: string;
}

export function activate(this: ClientRunner, params: ActivateParams) {
  return this.send<void>(`${this.API_BASE_URL}/user/activate`, {
    method: 'post',
    body: params,
  });
}

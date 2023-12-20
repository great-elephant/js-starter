import { UserAuthData } from '@sdks/types-shared';
import { ClientRunner } from '@sdks/api-core';

export interface LoginParams {
  email: string;
  password: string;
}

export function login(this: ClientRunner, params: LoginParams) {
  return this.send<UserAuthData>(`${this.API_BASE_URL}/user/login`, {
    method: 'post',
    body: params,
  });
}

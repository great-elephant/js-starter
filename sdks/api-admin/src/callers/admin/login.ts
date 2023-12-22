import { AdminAuthData } from '@sdks/types-admin';
import { ClientRunner } from '@sdks/api-core';

export interface LoginParams {
  email: string;
  password: string;
}

export function login(this: ClientRunner, params: LoginParams) {
  return this.send<AdminAuthData>(`${this.API_BASE_URL}/admin/login`, {
    method: 'post',
    body: params,
  });
}

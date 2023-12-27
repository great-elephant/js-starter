import { AdminAuthData } from '@sdks/types-admin';
import { ClientRunner } from '@sdks/api-core';

export interface CreateAccountParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function createAccount(this: ClientRunner, params: CreateAccountParams) {
  return this.send<AdminAuthData>(`${this.API_BASE_URL}/admin`, {
    method: 'post',
    body: params,
  });
}

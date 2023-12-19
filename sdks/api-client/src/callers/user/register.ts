import { UserRegisterData } from '@sdks/types-shared';
import { ClientRunner } from '@sdks/api-core';

export interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function register(this: ClientRunner, params: RegisterParams) {
  return this.send<UserRegisterData>(`${this.API_BASE_URL}/user`, {
    method: 'post',
    body: params,
  });
}

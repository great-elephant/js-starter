import { AuthData } from '@sdks/types-shared';
import { ClientRunner } from '../../client-runner';

export interface LoginParams {
  email: string;
  password: string;
}

export function login(this: ClientRunner, params: LoginParams) {
  return this.send<AuthData>(`${this.API_BASE_URL}/user/login`, {
    method: 'post',
    body: params,
  });
}

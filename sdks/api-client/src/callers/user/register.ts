import { ClientRunner } from '../../client-runner';

export interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function register(this: ClientRunner, params: RegisterParams) {
  return this.send<{ id: string }>(`${this.API_BASE_URL}/user/register`, {
    method: 'post',
    body: params,
  });
}

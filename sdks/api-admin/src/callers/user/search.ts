import { ClientRunner } from '@sdks/api-core';
import { Aql } from '@sdks/types-shared';

export interface UserSearchParams extends Aql { }

export function search(this: ClientRunner, params: UserSearchParams) {
  return this.send<{
    id: number, firstName?: string; lastName?: string; createdAt?: string;
  }[]>(`${this.API_BASE_URL}/user/search`, {
    method: 'post',
    body: params,
  });
}

import { ClientRunner } from '@sdks/api-core';
import { Aql } from '@sdks/types-shared';

export interface AdminSearchParams extends Aql { }

export function search(this: ClientRunner, params: AdminSearchParams) {
  return this.send<{
    id: number, firstName?: string; lastName?: string; createdAt?: string;
  }[]>(`${this.API_BASE_URL}/admin/search`, {
    method: 'post',
    body: params,
  });
}

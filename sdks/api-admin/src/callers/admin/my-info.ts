import { MyInfoData } from '@sdks/types-admin';
import { ClientRunner } from '@sdks/api-core';

export function myInfo(this: ClientRunner) {
  return this.send<MyInfoData>(`${this.API_BASE_URL}/admin/my-info`, {
    method: 'get',
  });
}

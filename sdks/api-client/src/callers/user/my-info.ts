import { MyInfoData } from '@sdks/types-shared';
import { ClientRunner } from '@sdks/api-core';

export function myInfo(this: ClientRunner) {
  return this.send<MyInfoData>(`${this.API_BASE_URL}/user/my-info`, {
    method: 'get',
  });
}

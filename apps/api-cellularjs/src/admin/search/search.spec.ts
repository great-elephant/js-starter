import { ServiceFactory } from '@cellularjs/net';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminSearchQry } from './search.qry';
import { AdminSearchReq } from './search.req';

describe('Admin:AdminSearchQry', () => {
  test('AdminSearchQry construction', async () => {
    const adminSearchQry = await ServiceFactory.resolve(AdminSearchQry, {
      providers: [
        { token: AdminSearchReq, useValue: null },
        { token: AdminProfileRepository, useValue: null },
      ],
    });

    expect(adminSearchQry).toBeInstanceOf(AdminSearchQry);
  });
});
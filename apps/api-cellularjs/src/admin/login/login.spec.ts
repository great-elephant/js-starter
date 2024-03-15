import { ServiceFactory } from '@cellularjs/net';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminLoginQry } from './login.qry';
import { AdminLoginReq } from './login.req';

describe('Admin:AdminLoginQry', () => {
  test('AdminLoginQry construction', async () => {
    const adminLoginQry = await ServiceFactory.resolve(AdminLoginQry, {
      providers: [
        { token: AdminLoginReq, useValue: null },
        { token: AdminProfileRepository, useValue: null },
      ],
    });

    expect(adminLoginQry).toBeInstanceOf(AdminLoginQry);
  });
});
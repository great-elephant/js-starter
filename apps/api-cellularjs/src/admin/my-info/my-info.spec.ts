import { ServiceFactory } from '@cellularjs/net';
import { AdminMyInfoQry } from './my-info.qry';
import { AdminData } from '$share/auth';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';

describe('Admin:AdminMyInfoQry', () => {
  test('AdminMyInfoQry construction', async () => {
    const adminMyInfoQry = await ServiceFactory.resolve(AdminMyInfoQry, {
      providers: [
        { token: AdminData, useValue: null },
        { token: AdminProfileRepository, useValue: null },
      ],
    });

    expect(adminMyInfoQry).toBeInstanceOf(AdminMyInfoQry);
  });
});
import { ServiceFactory } from '@cellularjs/net';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminCreateCmd } from './create.cmd';
import { AdminCreateReq } from './create.req';

describe('Admin:AdminCreateCmd', () => {
  test('AdminCreateCmd construction', async () => {
    const adminCreateCmd = await ServiceFactory.resolve(AdminCreateCmd, {
      providers: [
        { token: AdminCreateReq, useValue: null },
        { token: AdminProfileRepository, useValue: null },
      ],
    });

    expect(adminCreateCmd).toBeInstanceOf(AdminCreateCmd);
  });
});
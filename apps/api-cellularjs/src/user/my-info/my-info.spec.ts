import { ServiceFactory } from '@cellularjs/net';
import { UserMyInfoQry } from './my-info.qry';
import { UserData } from '$share/auth';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';

describe('User:UserMyInfoQry', () => {
  test('UserMyInfoQry construction', async () => {
    const userMyInfoQry = await ServiceFactory.resolve(UserMyInfoQry, {
      providers: [
        { token: UserData, useValue: null },
        { token: UserProfileRepository, useValue: null },
      ],
    });

    expect(userMyInfoQry).toBeInstanceOf(UserMyInfoQry);
  });
});
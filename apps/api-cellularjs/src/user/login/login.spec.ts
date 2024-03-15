import { ServiceFactory } from '@cellularjs/net';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserLoginQry } from './login.qry';
import { UserLoginReq } from './login.req';

describe('User:UserLoginQry', () => {
  test('UserLoginQry construction', async () => {
    const userLoginQry = await ServiceFactory.resolve(UserLoginQry, {
      providers: [
        { token: UserLoginReq, useValue: null },
        { token: UserProfileRepository, useValue: null },
      ],
    });

    expect(userLoginQry).toBeInstanceOf(UserLoginQry);
  });
});
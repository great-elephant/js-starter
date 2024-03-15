import { ServiceFactory } from '@cellularjs/net';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserRegistrationRepository } from 'user/$inner/dal/user-registration.dal';
import { UserRegisterCmd } from './register.cmd';
import { UserRegisterReq } from './register.req';

describe('User:UserRegisterCmd', () => {
  test('UserRegisterCmd construction', async () => {
    const userRegisterCmd = await ServiceFactory.resolve(UserRegisterCmd, {
      providers: [
        { token: UserRegisterReq, useValue: null },
        { token: UserProfileRepository, useValue: null },
        { token: UserRegistrationRepository, useValue: null },
      ],
    });

    expect(userRegisterCmd).toBeInstanceOf(UserRegisterCmd);
  });
});
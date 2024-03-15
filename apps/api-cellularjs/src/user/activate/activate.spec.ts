import { ServiceFactory } from '@cellularjs/net';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserRegistrationRepository } from 'user/$inner/dal/user-registration.dal';
import { UserActivateCmd } from './activate.cmd';
import { UserActivateReq } from './activate.req';

describe('User:UserActivateCmd', () => {
  test('UserActivateCmd construction', async () => {
    const userActivateCmd = await ServiceFactory.resolve(UserActivateCmd, {
      providers: [
        { token: UserActivateReq, useValue: null },
        { token: UserProfileRepository, useValue: null },
        { token: UserRegistrationRepository, useValue: null },
      ],
    });

    expect(userActivateCmd).toBeInstanceOf(UserActivateCmd);
  });
});
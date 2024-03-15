import { ServiceFactory } from '@cellularjs/net';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserSearchQry } from './search.qry';
import { UserSearchReq } from './search.req';

describe('User:UserSearchQry', () => {
  test('UserSearchQry construction', async () => {
    const userSearchQry = await ServiceFactory.resolve(UserSearchQry, {
      providers: [
        { token: UserSearchReq, useValue: null },
        { token: UserProfileRepository, useValue: null },
      ],
    });

    expect(userSearchQry).toBeInstanceOf(UserSearchQry);
  });
});
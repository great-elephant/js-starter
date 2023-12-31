import { Service, ServiceHandler } from '@cellularjs/net';
import { AdminOnly } from '$share/auth';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserSearchReq, publicFields, searchableFields } from './search.req';
import { paginate } from '$share/search';

@AdminOnly()
@Service({ scope: 'publish' })
export class UserSearchQry implements ServiceHandler {
  constructor(
    private adminProfileRepo: UserProfileRepository,
    private userSearchReq: UserSearchReq,
  ) { }

  async handle() {
    const { adminProfileRepo, userSearchReq } = this;
    
    return await paginate(adminProfileRepo, userSearchReq, {
      publicFields,
      searchableFields,
    });
  }
}

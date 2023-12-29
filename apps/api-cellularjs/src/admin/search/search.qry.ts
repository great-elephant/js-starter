import { Service, ServiceHandler } from '@cellularjs/net';
import { AdminOnly } from '$share/auth';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminSearchReq, publicFields, searchableFields } from './search.req';
import { paginate } from '$share/search';

@AdminOnly()
@Service({ scope: 'publish' })
export class AdminSearchQry implements ServiceHandler {
  constructor(
    private adminProfileRepo: AdminProfileRepository,
    private adminSearchReq: AdminSearchReq,
  ) { }

  async handle() {
    const { adminProfileRepo, adminSearchReq } = this;
    
    return await paginate(adminProfileRepo, adminSearchReq, {
      publicFields,
      searchableFields,
    });
  }
}

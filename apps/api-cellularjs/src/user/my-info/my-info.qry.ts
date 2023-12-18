import { Service, ServiceHandler } from '@cellularjs/net';
import { MyInfoData } from '@sdks/types-shared';
import { UserData, UserOnly } from '$share/auth';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { SuccessData } from '$share/msg';

@UserOnly()
@Service({ scope: 'publish' })
export class UserMyInfoQry implements ServiceHandler {
  constructor(
    private userData: UserData,
    private userProfileRepo: UserProfileRepository,
  ) { }

  async handle() {
    const { userProfileRepo, userData } = this;
    const {
      pid,
      firstName,
      lastName,
      email,
      avatar,
      createdAt,
    } = await userProfileRepo.findOneBy({ pid: userData.pid });

    return SuccessData<MyInfoData>({
      pid,
      firstName,
      lastName,
      email,
      avatar,
      createdAt,
    });
  }
}

import { Transactional } from '@cellularjs/typeorm';
import { Service, ServiceHandler } from '@cellularjs/net';
import { AuthData } from '@sdks/types-shared';
import { SuccessData, UnAuthorized } from '$share/msg';
import { genAuthData } from '$share/auth/jwt';
import { crypto } from 'user/$inner/password';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserLoginReq } from './login.req';

@Transactional()
@Service({ scope: 'publish' })
export class UserLoginQry implements ServiceHandler {
  constructor(
    private loginReq: UserLoginReq,
    private userProfileRepo: UserProfileRepository,
  ) { }

  async handle() {
    const { loginReq, userProfileRepo } = this;
    const user = await userProfileRepo.findOneBy({ email: loginReq.email });

    if (!user) {
      throw UnAuthorized({ msg: ('oidc.err.login_credential_incorrect') });
    }

    const isPwdMatched = await crypto.compare(loginReq.password, user.password);
    if (!isPwdMatched) {
      throw UnAuthorized({ msg: ('oidc.err.login_credential_incorrect') });
    }

    return SuccessData<AuthData>(genAuthData({ pid: user.pid }));
  }
}

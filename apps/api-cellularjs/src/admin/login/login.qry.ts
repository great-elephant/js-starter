import { Transactional } from '@cellularjs/typeorm';
import { Service, ServiceHandler } from '@cellularjs/net';
import { AdminAuthData } from '@sdks/types-admin';
import { SuccessData, UnAuthorized } from '$share/msg';
import { genAdminCredentials } from '$share/auth/jwt';
import { crypto } from '$share/password';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminLoginReq } from './login.req';

@Transactional()
@Service({ scope: 'publish' })
export class AdminLoginQry implements ServiceHandler {
  constructor(
    private loginReq: AdminLoginReq,
    private adminProfileRepo: AdminProfileRepository,
  ) { }

  async handle() {
    const { loginReq, adminProfileRepo } = this;
    const admin = await adminProfileRepo.findOneBy({ email: loginReq.email });

    if (!admin) {
      throw UnAuthorized({ msg: ('oidc.err.login_credential_incorrect') });
    }

    const isPwdMatched = await crypto.compare(loginReq.password, admin.password);
    if (!isPwdMatched) {
      throw UnAuthorized({ msg: ('oidc.err.login_credential_incorrect') });
    }

    return SuccessData<AdminAuthData>(genAdminCredentials({
      id: admin.id,
      role: admin.role,
    }));
  }
}

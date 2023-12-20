import { Transactional } from '@cellularjs/typeorm';
import { Service, ServiceHandler } from '@cellularjs/net';
import { AdminRole } from '@sdks/types-admin';
import { SuperAdminOnly } from '$share/auth';
import { SuccessData, UnprocessableError } from '$share/msg';
import { crypto } from '$share/password';
import { AdminProfileRepository } from 'admin/$inner/dal/admin-profile.dal';
import { AdminCreateReq } from './create.req';

@SuperAdminOnly()
@Transactional()
@Service({ scope: 'publish' })
export class AdminCreateCmd implements ServiceHandler {
  constructor(
    private registerReq: AdminCreateReq,
    private adminProfileRepo: AdminProfileRepository,
  ) { }

  async handle() {
    const { registerReq, adminProfileRepo } = this;

    const isEmailExist = await adminProfileRepo.exist({
      where: { email: registerReq.email },
    });

    if (isEmailExist) throw UnprocessableError({
      src: 'email',
      msg: ('oidc.err.email_in_use'),
    });

    const hashedPwd = await crypto.hash(registerReq.password);

    const { id } = await adminProfileRepo.save({
      email: registerReq.email,
      firstName: registerReq.firstName,
      lastName: registerReq.lastName,
      password: hashedPwd,
      role: AdminRole.ADMIN,
    });

    return SuccessData({ id });
  }
}

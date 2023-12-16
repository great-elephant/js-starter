import { SuccessData, UnprocessableError } from '$share/msg';
import { Transactional } from '@cellularjs/typeorm';
import { Service, ServiceHandler } from '@cellularjs/net';
import { UserRegisterData } from '@sdks/types-shared';
import { crypto } from 'user/$inner/password';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserRegistrationRepository } from 'user/$inner/dal/user-registration.dal';
import { UserRegisterReq } from './register.req';

@Transactional()
@Service({ scope: 'publish' })
export class UserRegisterCmd implements ServiceHandler {
  constructor(
    private registerReq: UserRegisterReq,
    private userProfileRepo: UserProfileRepository,
    private userRegistrationRepo: UserRegistrationRepository,
  ) { }

  async handle() {
    const { registerReq, userProfileRepo, userRegistrationRepo } = this;

    const isEmailExist = await userProfileRepo.exist({
      where: { email: registerReq.email },
    });

    if (isEmailExist) throw UnprocessableError({
      src: 'email',
      msg: ('oidc.err.email_in_use'),
    });

    const hashedPwd = await crypto.hash(registerReq.password);
    const activeKey = `${Math.floor(100000 + Math.random() * 899999)}`;

    const { id } = await userRegistrationRepo.save({
      email: registerReq.email,
      firstName: registerReq.firstName,
      lastName: registerReq.lastName,
      password: hashedPwd,
      activeKey,
    });

    return SuccessData<UserRegisterData>({ sid: id });
  }
}

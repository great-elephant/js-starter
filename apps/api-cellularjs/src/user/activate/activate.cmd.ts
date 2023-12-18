import { Transactional } from '@cellularjs/typeorm';
import { Service, ServiceHandler } from '@cellularjs/net';
import { NotFound, UnprocessableError } from '$share/msg';
import { genPid } from '$share/pid';
import { UserProfileRepository } from 'user/$inner/dal/user-profile.dal';
import { UserRegistrationRepository } from 'user/$inner/dal/user-registration.dal';
import { UserActivateReq } from './activate.req';

@Transactional()
@Service({ scope: 'publish' })
export class UserActivateCmd implements ServiceHandler {
  constructor(
    private userActivateReq: UserActivateReq,
    private userRepo: UserProfileRepository,
    private userRegistrationRepo: UserRegistrationRepository,
  ) { }

  async handle() {
    const { userActivateReq, userRepo, userRegistrationRepo } = this;

    const userRegistration = await userRegistrationRepo.findOneBy({
      id: userActivateReq.sid,
    });

    if (!userRegistration) {
      throw NotFound({ msg: 'Registration session not found' });
    }

    const isActiveKeyCorrect = userRegistration.activeKey === userActivateReq.activeKey;
    if (!isActiveKeyCorrect) throw UnprocessableError({
      src: 'activeKey',
      msg: 'Active key is incorrect',
    });

    const isEmailExist = await userRepo.exist({
      where: { email: userRegistration.email },
    });

    if (isEmailExist) throw UnprocessableError({
      src: 'email',
      msg: ('oidc.err.email_in_use'),
    });

    await userRegistrationRepo.delete({ email: userRegistration.email });

    await userRepo.save({
      pid: genPid(),
      email: userRegistration.email,
      firstName: userRegistration.firstName,
      lastName: userRegistration.lastName,
      password: userRegistration.password,
      createdAt: userRegistration.createdAt,
    });
  }
}

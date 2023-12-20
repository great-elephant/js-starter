import { UnAuthorized } from '$share/msg';
import { Injectable, addProxy, ProxyHandler } from '@cellularjs/di';
import { addServiceProxies, ServiceHandler, IRQ, NextHandler } from '@cellularjs/net';
import { parseUserToken } from './jwt';
import { TokenExpiredError } from 'jsonwebtoken';

export const UserOnly = () => aClass => {
  addServiceProxies(aClass, [UserOnlyProxy]);

  return aClass;
};

@Injectable()
export class UserOnlyProxy implements ServiceHandler {
  constructor(
    private irq: IRQ,
    private nextHandler: NextHandler,
  ) { }

  async handle() {
    const { irq, nextHandler } = this;

    let userData: UserData;

    try {
      userData = parseUserToken(irq);
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw UnAuthorized({ msg: 'Token is expired' });
      }

      throw UnAuthorized();
    }

    if (!userData.pid) throw UnAuthorized({ msg: 'Token is expired' });

    const extModule = nextHandler.getExtModule();
    await extModule.addProvider({ token: UserData, useValue: userData });

    return nextHandler.handle();
  }
}

const InjectSignInData = () => aClass => {
  addProxy(aClass, { proxy: SignInDataProxy });
  return aClass;
};

@Injectable()
class SignInDataProxy implements ProxyHandler {
  constructor(
    private irq: IRQ,
  ) { }

  async handle() {
    const { irq } = this;

    try { return parseUserToken(irq); }
    catch { }
  }
}

@InjectSignInData()
export class UserData {
  pid: string;
}

import { Forbidden, UnAuthorized } from '$share/msg';
import { Injectable, ProxyHandler, addProxy } from '@cellularjs/di';
import { addServiceProxies, ServiceHandler, IRQ, NextHandler } from '@cellularjs/net';
import { parseAdminToken } from './jwt';
import { TokenExpiredError } from 'jsonwebtoken';
import { AdminRole } from '@sdks/types-admin';

@Injectable()
class SignInDataProxy implements ProxyHandler {
  constructor(
    private irq: IRQ,
  ) { }

  async handle() {
    const { irq } = this;

    try { return parseAdminToken(irq); }
    catch { }
  }
}

const InjectSignInData = () => aClass => {
  addProxy(aClass, { proxy: SignInDataProxy });
  return aClass;
};

@Injectable()
export class AdminOnlyProxy implements ServiceHandler {
  constructor(
    private irq: IRQ,
    private nextHandler: NextHandler,
  ) { }

  async handle() {
    const { irq, nextHandler } = this;

    let adminData: AdminData;

    try {
      adminData = parseAdminToken(irq);
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw UnAuthorized({ msg: 'Token is expired' });
      }

      throw UnAuthorized();
    }

    if (!adminData.id) throw Forbidden({ msg: 'Admin only' });

    const extModule = nextHandler.getExtModule();
    await extModule.addProvider({ token: AdminData, useValue: adminData });

    return nextHandler.handle();
  }
}

@InjectSignInData()
export class AdminData {
  id: number;
  role: AdminRole;
}

@Injectable()
export class SuperdminOnlyProxy implements ServiceHandler {
  constructor(
    private adminData: AdminData,
    private nextHandler: NextHandler,
  ) { }

  async handle() {
    const { adminData, nextHandler } = this;

    if (adminData.role !== AdminRole.SUPER_ADMIN) {
      throw Forbidden({ msg: 'Super admin only'});
    }

    return nextHandler.handle();
  }
}

export const AdminOnly = () => aClass => {
  addServiceProxies(aClass, [AdminOnlyProxy]);

  return aClass;
};
export const SuperAdminOnly = () => aClass => {
  addServiceProxies(aClass, [SuperdminOnlyProxy, AdminOnlyProxy]);

  return aClass;
};
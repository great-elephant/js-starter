import { IRQ } from '@cellularjs/net';
import { AdminAuthData, AdminTokenClaims } from '@sdks/types-admin';
import { UserAuthData, UserTokenClaims, RefreshTokenClaims } from '@sdks/types-shared';
import { jwt } from '$share/jwt';
import { AdminData, UserData } from './';
import { env } from '$share/env';

export function parseUserToken(irq: IRQ): UserData {
  const token = irq.header.authorization?.split(' ')[1];
  const tokenClaims = jwt.verify<UserTokenClaims>(token, env().JWT_USER_SECRET);

  return { pid: tokenClaims.pid };
}

export function parseAdminToken(irq: IRQ): AdminData {
  const token = irq.header.authorization?.split(' ')[1];
  const tokenClaims = jwt.verify<AdminTokenClaims>(token, env().JWT_ADM_SECRET);

  return { id: tokenClaims.id, role: tokenClaims.role };
}

export function genUserAccessToken(claims: Omit<UserTokenClaims, 'exp'>) {
  const exp = (new Date().getTime() / 1000) + (60 * 60 * 24 * 30); // 30 days

  return jwt.sign<UserTokenClaims>({ ...claims, exp }, env().JWT_USER_SECRET);
}

export function genAdminAccessToken(claims: Omit<AdminTokenClaims, 'exp'>) {
  const exp = (new Date().getTime() / 1000) + (60 * 60 * 24 * 30); // 30 days

  return jwt.sign<AdminTokenClaims>({ ...claims, exp }, env().JWT_ADM_SECRET);
}

export function genUserCredentials(claims: Omit<UserTokenClaims, 'exp'>): UserAuthData {
  return {
    pid: claims.pid,
    accessToken: genUserAccessToken(claims),
    refreshToken: jwt.sign<RefreshTokenClaims>({
      pid: claims.pid,
    }, env().JWT_USER_SECRET),
  };
}

export function genAdminCredentials(claims: Omit<AdminTokenClaims, 'exp'>): AdminAuthData {
  return {
    id: claims.id,
    role: claims.role,
    accessToken: genAdminAccessToken(claims),
  };
}

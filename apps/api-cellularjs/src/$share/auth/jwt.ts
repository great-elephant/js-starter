import { IRQ } from '@cellularjs/net';
import { UserData } from './sign-in.data';
import { jwt } from '$share/jwt';
import { AuthData, AccessTokenClaims, RefreshTokenClaims } from '@sdks/types-shared';

export function parseToken(irq: IRQ): UserData {
  const token = irq.header.authorization?.split(' ')[1];
  const tokenClaims = jwt.verify<AccessTokenClaims>(token);

  return { pid: tokenClaims.pid };
}

export function genAccessToken(claims: Omit<AccessTokenClaims, 'exp'>) {
  const exp = (new Date().getTime() / 1000) + (60 * 60 * 24 * 30); // 30 days

  return jwt.sign<AccessTokenClaims>({ ...claims, exp });
}

export function genAuthData(claims: Omit<AccessTokenClaims, 'exp'>): AuthData {
  return {
    pid: claims.pid,
    accessToken: genAccessToken(claims),
    refreshToken: jwt.sign<RefreshTokenClaims>({
      pid: claims.pid,
      scope: claims.scope,
    }),
  };
}

import { env } from '$share/env';
import { SignOptions, sign, verify } from 'jsonwebtoken';

export const jwt = {
  sign<T extends object>(payload: T, options?: SignOptions) {
    return sign(payload, env().JWT_SECRET, options);
  },

  verify<T>(token: string) {
    return verify(token, env().JWT_SECRET) as T;
  },
};

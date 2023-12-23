import { SignOptions, sign, verify } from 'jsonwebtoken';

export const jwt = {
  sign<T extends object>(payload: T, secret: string, options?: SignOptions) {
    return sign(payload, secret, options);
  },

  verify<T>(token: string, secret: string) {
    return verify(token, secret) as T;
  },
};

export type UserRegisterData = {
  /**
   * Registration session id.
   */
  sid: string;
}

export type MyInfoData = {
  pid: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: null | string;
  createdAt: string;
}

export type UserAuthData = {
  pid: string;
  accessToken: string;
  refreshToken?: string;
}

export type UserTokenClaims = {
  pid: string;
  exp: number;
}

export type RefreshTokenClaims = Omit<UserTokenClaims, 'exp'>;

export const USER_TKN = 'u_tkn';

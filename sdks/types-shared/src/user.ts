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

export type AuthData = {
  pid: string;
  accessToken: string;
  refreshToken?: string;
}

export type AccessTokenClaims = {
  pid: string;
  exp: number;
  scope?: string;
}

export type RefreshTokenClaims = Omit<AccessTokenClaims, 'exp'>;

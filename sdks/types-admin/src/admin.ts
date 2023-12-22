export enum AdminRole {
  SUPER_ADMIN = 1,
  ADMIN = 2,
}

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

export type AdminAuthData = {
  id: number;
  role: AdminRole;
  accessToken: string;
}

export type AdminTokenClaims = {
  id: number;
  role: AdminRole;
  exp: number;
}

export const ADMIN_TKN = 'adm_tkn';

import Cookies from 'js-cookie';
import { USER_TKN, UserAuthData } from '@sdks/types-shared';

export function saveAuthSession(data: UserAuthData) {
  Cookies.set(USER_TKN, data.accessToken);
}

export function clearAuthSession() {
  Cookies.remove(USER_TKN);
}

export function isLoggedIn() {
  return !!Cookies.get(USER_TKN);
}

export function getToken() {
  return Cookies.get(USER_TKN);
}
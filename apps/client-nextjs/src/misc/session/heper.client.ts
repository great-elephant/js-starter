import Cookies from 'js-cookie';
import { USER_TKN, UserAuthData } from '@sdks/types-shared';

export function saveAuthSession(data: UserAuthData) {
  localStorage.setItem(USER_TKN, data.accessToken);
  Cookies.set(USER_TKN, data.accessToken);
}

export function clearAuthSession() {
  localStorage.removeItem(USER_TKN);
  Cookies.remove(USER_TKN);
}

export function isLoggedIn() {
  return !!localStorage.getItem(USER_TKN);
}

export function getToken() {
  return localStorage.getItem(USER_TKN);
}
import Cookies from 'js-cookie';
import { ADMIN_TKN, AdminAuthData } from '@sdks/types-admin';

export function saveAuthSession(data: AdminAuthData) {
  Cookies.set(ADMIN_TKN, data.accessToken);
}

export function clearAuthSession() {
  Cookies.remove(ADMIN_TKN);
}

export function isLoggedIn() {
  return !!Cookies.get(ADMIN_TKN);
}

export function getToken() {
  return Cookies.get(ADMIN_TKN);
}
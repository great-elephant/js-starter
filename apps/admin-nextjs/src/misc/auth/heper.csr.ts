import Cookies from 'js-cookie';
import { ADMIN_TKN, AdminAuthData } from '@sdks/types-admin';

export function saveAuthSession(data: AdminAuthData) {
  localStorage.setItem(ADMIN_TKN, data.accessToken);
  Cookies.set(ADMIN_TKN, data.accessToken);
}

export function clearAuthSession() {
  localStorage.removeItem(ADMIN_TKN);
  Cookies.remove(ADMIN_TKN);
}

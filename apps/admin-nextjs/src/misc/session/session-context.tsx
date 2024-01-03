import { createContext, useContext } from 'react';
import { AdminAuthData, MyInfoData } from '@sdks/types-admin';

export type SessionContextValues = {
  user?: MyInfoData;
  loading: boolean;
  setUser: (user: MyInfoData) => void;
  saveCredential: (data: AdminAuthData) => void;
  logout: () => void;
}

export const useSession = (): SessionContextValues => {
  return useContext(SessionContext);
};

export const SessionContext = createContext<SessionContextValues>(null as any);
import { createContext, useContext } from 'react';
import { MyInfoData } from '@sdks/types-admin';

export type SessionContextValues = {
  user?: MyInfoData;
  loading: boolean;
  setUser: (user: MyInfoData) => void;
  fetchUser: () => void;
  logout: () => void;
}

export const useSession = (): SessionContextValues => {
  return useContext(SessionContext);
};

export const SessionContext = createContext<SessionContextValues>(null as any);
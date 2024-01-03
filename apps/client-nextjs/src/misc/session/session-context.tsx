import { createContext, useContext } from 'react';
import { MyInfoData, UserAuthData } from '@sdks/types-shared';

export type SessionContextValues = {
  user?: MyInfoData;
  loading: boolean;
  setUser: (user: MyInfoData) => void;
  saveCredential: (data: UserAuthData) => void;
  logout: () => void;
}

export const useSession = (): SessionContextValues => {
  return useContext(SessionContext);
};

export const SessionContext = createContext<SessionContextValues>(null as any);
'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useQuery } from '@sdks/api-react-query';
import { AdminAuthData } from '@sdks/types-admin';
import { SessionContext } from './session-context';
import { isLoggedIn, clearAuthSession, saveAuthSession } from './heper.client';

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const myInfo = useQuery(client.admin.myInfo, {
    enable: loggedIn,
  });

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  function logout() {
    clearAuthSession();
    myInfo.setData(undefined);
    setLoggedIn(false);
  }

  function saveCredential(data: AdminAuthData) {
    saveAuthSession(data);
    setLoggedIn(true);
  }

  return (
    <SessionContext.Provider value={{
      user: myInfo.data,
      loading: myInfo.loading,
      logout,
      saveCredential,
      setUser: myInfo.setData,
    }} >
      {children}
    </SessionContext.Provider>
  );
};
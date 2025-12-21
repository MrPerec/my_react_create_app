import React, { createContext } from 'react';
import { IUserData, useUserData } from '../hooks/useUserData';

export const userContext = createContext<IUserData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = useUserData();

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

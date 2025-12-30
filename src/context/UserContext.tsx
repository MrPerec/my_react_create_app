import React, { createContext } from 'react';
import { useUserData } from '../hooks/useUserData';
import { IUserData } from '../actions/meActions';

export const userContext = createContext<IUserData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  // const [data] = useUserData();
  const { userData } = useUserData();

  // return <userContext.Provider value={data}>{children}</userContext.Provider>;
  return <userContext.Provider value={userData}>{children}</userContext.Provider>;
}

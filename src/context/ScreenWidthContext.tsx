import React, { createContext } from 'react';
import { useScreenWidth } from '../hooks/useScreenWidth';

export const screenWidthContext = createContext(320);

export function ScreenWidthContextProvider({ children }: { children: React.ReactNode }) {
  const [screenWidth] = useScreenWidth();

  return <screenWidthContext.Provider value={screenWidth}>{children}</screenWidthContext.Provider>;
}

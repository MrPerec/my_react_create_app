import React, { createContext } from 'react';
import { IPostData, usePostsData } from '../hooks/usePostsData';

export const postsContext = createContext<IPostData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [postsData] = usePostsData();

  return <postsContext.Provider value={postsData}>{children}</postsContext.Provider>;
}

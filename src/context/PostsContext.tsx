import React, { createContext } from 'react';
import { /* IPostData, */ IUsePostsData, usePostsData } from '../hooks/usePostsData';

// export const postsContext = createContext<IPostData[]>([]);
export const postsContext = createContext<IUsePostsData>({
  postsData: [],
  loading: false,
  errorLoading: '',
});

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [postsData] = usePostsData();

  // return <postsContext.Provider value={postsData}>{children}</postsContext.Provider>;
  return <postsContext.Provider value={postsData}>{children}</postsContext.Provider>;
}

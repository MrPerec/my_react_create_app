import React, { createContext } from 'react';
import { IUsePostsData, usePostsData } from '../hooks/usePostsData';

export const postsContext = createContext<IUsePostsData>({
  postsData: [],
  loading: false,
  errorLoading: '',
  loadPosts: () => {},
});

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [postsData] = usePostsData();

  return <postsContext.Provider value={postsData}>{children}</postsContext.Provider>;
}

import { createContext } from 'react';

type CommentContextType = {
  value: string;
  onChange: (value: string) => void;
};

/** создали контекст для комментариев */
export const commentContext = createContext<CommentContextType>({
  value: '',
  onChange: () => {},
});

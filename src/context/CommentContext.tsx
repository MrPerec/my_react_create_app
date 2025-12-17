import React, { Dispatch, SetStateAction, useState } from 'react';

interface ICommentItem {
  name: string;
  value: string;
}

type CommentContextType = {
  comment: ICommentItem[];
  setComment: Dispatch<SetStateAction<ICommentItem[]>>;
};

export const commentContext = React.createContext<CommentContextType>({
  comment: [{ name: '', value: '' }],
  setComment: () => {},
});

export const CommentContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [comment, setComment] = useState<ICommentItem[]>([{ name: '', value: '' }]);

  return (
    <commentContext.Provider value={{ comment, setComment }}>{children}</commentContext.Provider>
  );
};

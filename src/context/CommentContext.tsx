import React, { ActionDispatch, Dispatch, SetStateAction, useReducer, useState } from 'react';

export interface ICommentItem {
  id: number;
  value: string;
}

type CommentContextType = {
  comment: ICommentItem[];
  dispatch: ActionDispatch<[action: TAction]>;
};

export const commentContext = React.createContext<CommentContextType>({
  comment: [],
  dispatch: () => {},
});

const initialComments = [{ id: 0, value: '' }];

export const CommentContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [comment, dispatch] = useReducer(commentsReducer, initialComments);

  return (
    <commentContext.Provider value={{ comment, dispatch }}>{children}</commentContext.Provider>
  );
};

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

type TAction = { type: string; id: number; value: string };

/**
 * Функция редьюсер
 * @param state текущее состояние
 * @param action действие
 * @returns новое состояние
 */
function commentsReducer(comments: ICommentItem[], action: TAction) {
  switch (action.type) {
    case ADD_COMMENT:
      const findedCommentId = comments.find(({ id }) => id === action.id);

      if (!findedCommentId) {
        return [...comments, { id: action.id, value: action.value }];
      }
      return comments;

    case EDIT_COMMENT:
      return comments.map((comment) =>
        comment.id === action.id ? { ...comment, value: action.value } : comment,
      );

    default:
      return comments;
    // return Error(`Unknown action: ${action.type}`);
  }
}

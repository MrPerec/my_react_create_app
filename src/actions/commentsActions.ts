import { ActionCreator, AnyAction } from 'redux';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const ADD_REPLY = 'ADD_REPLY';

export type TUpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  payload: { index: number; value: string };
};

export type TAddReplyAction = {
  type: typeof ADD_REPLY;
  payload: { id: number; value: string };
};

export const updateComment: ActionCreator<TUpdateCommentAction> = (
  index: number,
  value: string,
) => ({
  type: UPDATE_COMMENT,
  payload: { index, value },
});

export const addReply: ActionCreator<TAddReplyAction> = (id: number, value: string) => ({
  type: ADD_REPLY,
  payload: { id, value },
});

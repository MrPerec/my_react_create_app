import { ActionCreator, AnyAction } from 'redux';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const ADD_REPLY = 'ADD_REPLY';

export const updateComment: ActionCreator<AnyAction> = (index: number, value: string) => ({
  type: UPDATE_COMMENT,
  payload: { index, value },
});

export const addReply: ActionCreator<AnyAction> = (id: number, value: string) => ({
  type: ADD_REPLY,
  payload: { id, value },
});

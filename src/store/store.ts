import { ActionCreator, AnyAction, Reducer } from 'redux';
import { ADD_REPLY, UPDATE_COMMENT } from './constants';

export interface IComment {
  id: number;
  value: string;
}
export type RootState = {
  comment: IComment[];
};

const initialState: RootState = {
  comment: [{ id: 0, value: '' }],
};

interface IUpdateCommentActionn {
  type: typeof UPDATE_COMMENT;
  payload: IComment;
}

export const updateComment: ActionCreator<AnyAction> = (index: number, value: string) => ({
  type: UPDATE_COMMENT,
  payload: { index, value },
});

export const addReply: ActionCreator<AnyAction> = (id: number, value: string) => ({
  type: ADD_REPLY,
  payload: { id, value },
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_COMMENT:
      const updatedComments = state.comment.map((elem, index) => {
        if (index === action.payload.index) return { ...elem, value: action.payload.value };
        return { ...elem };
      });

      return { comment: updatedComments };

    case ADD_REPLY:
      const { id, value } = action.payload;
      const findedElem = state.comment.find((elem) => elem.id === id);

      if (!findedElem) return { comment: [...state.comment, { id, value }] };
      return state;

    default:
      return state;
  }
};

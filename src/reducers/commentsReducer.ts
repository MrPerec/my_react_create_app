import { Reducer } from 'redux';
import { ADD_REPLY, UPDATE_COMMENT } from '../actions/commentsActions';

export type CommentsState = {
  id: number;
  value: string;
}[];

const initialState: CommentsState = [{ id: 0, value: '' }];

export const commentsReducer: Reducer<CommentsState> = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_COMMENT:
      const updatedComments = state.map((elem, index) => {
        if (index === action.payload.index) return { ...elem, value: action.payload.value };
        return elem;
      });

      return updatedComments;

    case ADD_REPLY:
      const { id, value } = action.payload;
      const findedElem = state.find((elem) => elem.id === id);

      if (!findedElem) return [...state, { id, value }];
      return state;

    default:
      return state;
  }
};

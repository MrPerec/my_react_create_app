import { Reducer } from 'redux';
import { SET_TOKEN } from '../actions/tokenActions';

export type tokenState = string;

const initialState: tokenState = '';

export const tokenReducer: Reducer<tokenState> = (state = initialState, action) => {
  switch (action?.type) {
    case SET_TOKEN:
      if (action.payload?.token) return action.payload.token;
      return state;

    default:
      return state;
  }
};

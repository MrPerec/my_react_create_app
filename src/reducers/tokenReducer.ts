import { Reducer } from 'redux';
import { SET_TOKEN, TSetTokenAction } from '../actions/tokenActions';

export type TTokenState = string;

const initialTokenState: TTokenState = '';

export const tokenReducer: Reducer<TTokenState, TSetTokenAction> = (
  state = initialTokenState,
  action,
) => {
  switch (action?.type) {
    case SET_TOKEN:
      if (action.payload?.token) return action.payload.token;
      return state;

    default:
      return state;
  }
};

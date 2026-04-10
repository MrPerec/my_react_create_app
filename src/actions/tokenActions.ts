import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TRootState } from '../reducers/rootReducer';
import { TTokenState } from '../reducers/tokenReducer';

export const SET_TOKEN = 'SET_TOKEN';

export type TSetTokenAction = {
  type: typeof SET_TOKEN;
  payload: { token: TTokenState };
};

export const setToken: ActionCreator<TSetTokenAction> = (token: TTokenState) => ({
  type: SET_TOKEN,
  payload: { token },
});

// синхронный thunk
export const saveToken =
  (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch, getState) => {
    if (typeof window !== 'undefined') {
      const token = window.__token__ || localStorage.getItem('token');

      if (token) {
        dispatch(setToken(token));
        localStorage.setItem('token', token);
      }
    }
  };

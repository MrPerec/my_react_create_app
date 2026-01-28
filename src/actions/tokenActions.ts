import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

export const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  payload: { token },
});

// синхронный thunk
export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const token = window.__token__ || localStorage.getItem('token');

    dispatch(setToken(token));
    if (token) localStorage.setItem('token', token);
  };

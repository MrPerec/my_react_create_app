import { ActionCreator, AnyAction } from 'redux';

export const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  payload: { token },
});

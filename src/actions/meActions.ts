import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import axios from 'axios';

export const ME_REQUEST = 'ME_REQUEST';
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeRquestAction = {
  type: typeof ME_REQUEST;
};
export type MeRquestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  payload: { data: IUserData };
};
export type MeRquestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  payload: { error: string };
};

export const meRequest: ActionCreator<MeRquestAction> = () => ({
  type: ME_REQUEST,
});

export const meRequestSuccess: ActionCreator<MeRquestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  payload: { data },
});

export const meRequestError: ActionCreator<MeRquestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  payload: { error },
});

// напишем асинхронный action
export const meRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    // вызываем dispatch с action для запроса данных
    dispatch(meRequest());

    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        // для проверки на ошибку
        // .get('https://oauth.reddit.com/api/v1/123', {
        headers: { Authorization: `bearer ${getState().token}` },
      })
      .then(({ data }) => {
        const myUserData = { name: data?.name, iconImg: data?.icon_img };
        // когда данные получены вызываем action об успешном получении данных
        dispatch(meRequestSuccess(myUserData));
      })
      .catch((error) => {
        console.log(error);
        // если данные НЕ получены вызываем action об ошибке
        dispatch(meRequestError(String(error)));
      });
  };

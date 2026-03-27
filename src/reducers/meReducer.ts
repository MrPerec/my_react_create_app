import { Reducer } from 'redux';
import {
  IUserData,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  TMeRquestAction,
  TMeRquestErrorAction,
  TMeRquestSuccessAction,
} from '../actions/meActions';

type TMeActions = TMeRquestAction | TMeRquestSuccessAction | TMeRquestErrorAction;

export type TMeState = {
  loading: boolean;
  error: string;
  data: IUserData;
};

export const ANONYMOUS = 'Аноним';

const initialMeState: TMeState = {
  loading: false,
  error: '',
  data: { name: ANONYMOUS, iconImg: '' },
};

export const meReducer: Reducer<TMeState, TMeActions> = (state = initialMeState, action) => {
  switch (action?.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload?.data,
      };

    case ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    default:
      return state;
  }
};

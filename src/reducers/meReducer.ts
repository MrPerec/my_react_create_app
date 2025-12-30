import { Reducer } from 'redux';
import {
  IUserData,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRquestAction,
  MeRquestErrorAction,
  MeRquestSuccessAction,
} from '../actions/meActions';
import { ANONYMOUS } from '../hooks/useUserData';

type MeActions = MeRquestAction | MeRquestSuccessAction | MeRquestErrorAction;

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
};

const initialState: MeState = { loading: false, error: '', data: { name: ANONYMOUS, iconImg: '' } };

export const meReducer: Reducer<MeState, MeActions> = (state = initialState, action) => {
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { tokenState } from '../reducers/tokenReducer';
import { IUserData, meRequestAsync } from '../actions/meActions';
import { MeState } from '../reducers/meReducer';

interface IUseUserData {
  data: IUserData;
  loading: boolean;
}

export function useUserData(): IUseUserData {
  const { data, loading } = useSelector<RootState, MeState>((state) => state.me);
  const token = useSelector<RootState, tokenState>((state) => state.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(meRequestAsync());
  }, [token]);

  return { data, loading };
}

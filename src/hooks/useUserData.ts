import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../reducers/rootReducer';
import { TTokenState } from '../reducers/tokenReducer';
import { IUserData, meRequestAsync } from '../actions/meActions';
import { TMeState } from '../reducers/meReducer';

interface IUseUserData {
  data: IUserData;
  loading: boolean;
}

export function useUserData(): IUseUserData {
  const dispatch = useDispatch();
  const token = useSelector<TRootState, TTokenState>((state) => state.token);
  const { data, loading } = useSelector<TRootState, TMeState>((state) => state.me);

  useEffect(() => {
    if (token) dispatch(meRequestAsync());
  }, [token]);

  return { data, loading };
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { meRequestAsync } from '../actions/meActions';

import { TRootState } from '../reducers/rootReducer';
import { TTokenState } from '../reducers/tokenReducer';
import { TMeState } from '../reducers/meReducer';

export function useUserData(): TMeState {
  const dispatch = useDispatch();
  const token = useSelector<TRootState, TTokenState>((state) => state.token);

  useEffect(() => {
    if (token) dispatch(meRequestAsync());
  }, [token]);

  const { data, loading, error } = useSelector<TRootState, TMeState>((state) => state.me);

  return { data, loading, error };
}

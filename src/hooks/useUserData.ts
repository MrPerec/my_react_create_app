import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { tokenState } from '../reducers/tokenReducer';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ANONYMOUS = 'Аноним';

export function useUserData(): [IUserData] {
  const [userData, setUserData] = useState<IUserData>({ name: ANONYMOUS, iconImg: '' });
  const token = useSelector<RootState, tokenState>((state) => state.token);

  useEffect(() => {
    if (token) {
      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then(({ data }) => {
          setUserData({ name: data?.name, iconImg: data?.icon_img });
        })
        .catch(console.log);
    }
  }, [token]);

  return [userData];
}

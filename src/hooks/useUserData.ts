import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ANONYMUS = 'Аноним';

export function useUserData(): [IUserData] {
  const [userData, setUserData] = useState<IUserData>({ name: ANONYMUS, iconImg: '' });
  const token = useContext(tokenContext);

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

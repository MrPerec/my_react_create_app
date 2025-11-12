import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}
// удалим token из пропов
export function useUserData(): [IUserData] {
  const [data, setData] = useState<IUserData>({});
  // получаем token из context и сразу подставляем его в запрос к endpoint
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(({ data }) => {
        setData({ name: data?.name, iconImg: data?.icon_img });
      })
      .catch(console.log);
  }, [token]);

  return [data];
}

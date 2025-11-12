import { useEffect, useState } from 'react';
import axios from 'axios';

interface IUserData {
  name?: string;
  iconImg?: string;
}

// название хука начинается с use, такая договоренность в комьюнити React
export function useUserData(token: string): [IUserData] {
  // сохраняем полученные данные после обращения к endpoint
  const [data, setData] = useState<IUserData>({});

  // выполняем запрос авторизации к endpoint из браузера
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` },
      })
      // посмотреть структуру ответа api можно по адресу https://www.reddit.com/dev/api/ (но кокретно для /api/v1/me нет описания в этом случае просто делаем console.log)
      .then(({ data }) => {
        setData({ name: data?.name, iconImg: data?.icon_img });
      })
      .catch(console.log);
    // указываем token в качестве зависимости
  }, [token]);

  // возвращает массив, такая договоренность т.к. хуки возвращают массив
  return [data];
}

import { useEffect /* , useState */ } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { tokenState } from '../reducers/tokenReducer';
import {
  IUserData,
  meRequestAsync,
  // meRequest,
  // meRequestError,
  // meRequestSuccess,
} from '../actions/meActions';
import { MeState } from '../reducers/meReducer';

export const ANONYMOUS = 'Аноним';

interface IUseUserData {
  data: IUserData;
  loading: boolean;
}

export function useUserData(): IUseUserData {
  // const [userData, setUserData] = useState<IUserData>({ name: ANONYMOUS, iconImg: '' });

  // убрали получение из context и теперь получает данные из store Redux
  const { data, loading } = useSelector<RootState, MeState>((state) => state.me);

  const token = useSelector<RootState, tokenState>((state) => state.token);

  // получаем dispatch для передачи в него action
  const dispatch = useDispatch();

  useEffect(() => {
    // старый код, до создания action's и reduser's, данные берутся из context
    /* if (token) {
      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then(({ data }) => {
          setUserData({ name: data?.name, iconImg: data?.icon_img });
        })
        .catch(console.log);
    } */

    // новый код с action's и reduser's
    /* if (token) {
      // вызываем dispatch с action для запроса данных
      dispatch(meRequest());

      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          // для проверки на ошибку
          // .get('https://oauth.reddit.com/api/v1/123', {
          headers: { Authorization: `bearer ${token}` },
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
    } */

    // новый код но уже все асинхронные операции что выполняются выше, вынесли в action для meActions.ts
    if (token) dispatch(meRequestAsync());
  }, [token]);

  // return [ userData ];
  return { data, loading };
}

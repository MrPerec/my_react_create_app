import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/UserContext';
import { PostsContextProvider } from './context/PostsContext';
import { ScreenWidthContextProvider } from './context/ScreenWidthContext';
// import { CommentContextProvider } from './context/CommentContext';
// импортируем createStore из redux и тип для корневого Reducer
import { ActionCreator, AnyAction, createStore, Reducer } from 'redux';
// для работы с расширением в браузере ReduxDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// импортируем Provider который нужен для передачи store внутрь приложения
import { Provider } from 'react-redux';
import { rootReducer } from './store/store';

/* создаем глобальное хранилище
1й аргумент это корневой редюсер
2й аргумент для работы с ReduxDevTools */
const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  // оборачиваем приложение в provider redux и передаём ему store а <CommentContextProvider> </CommentContextProvider> можно удалить
  return (
    <Provider store={store}>
      <tokenContext.Provider value={token}>
        <ScreenWidthContextProvider>
          <UserContextProvider>
            <PostsContextProvider>
              {/* <CommentContextProvider> */}
              <Layout>
                <Header />
                <Content>
                  <CardsList />
                </Content>
              </Layout>
              {/* </CommentContextProvider> */}
            </PostsContextProvider>
          </UserContextProvider>
        </ScreenWidthContextProvider>
      </tokenContext.Provider>
    </Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

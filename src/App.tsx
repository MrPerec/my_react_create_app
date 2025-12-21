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
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from './store/store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
      <tokenContext.Provider value={token}>
        <ScreenWidthContextProvider>
          <UserContextProvider>
            <PostsContextProvider>
              <Layout>
                <Header />
                <Content>
                  <CardsList />
                </Content>
              </Layout>
            </PostsContextProvider>
          </UserContextProvider>
        </ScreenWidthContextProvider>
      </tokenContext.Provider>
    </Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

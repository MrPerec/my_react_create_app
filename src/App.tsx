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

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <ScreenWidthContextProvider>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </Layout>
        </ScreenWidthContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

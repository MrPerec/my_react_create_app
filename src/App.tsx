import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/UserContext';
import { PostsContextProvider } from './shared/context/PostsContext';
import { commentContext } from './shared/context/commentContext';
import { useScreenWidth } from './hooks/useScreenWidth';
import { screenWidthContext } from './shared/context/screenWidthContext';

function AppComponent() {
  const [token] = useToken();
  const [screenWidth] = useScreenWidth();
  const [commentValue, setCommentValue] = useState('');

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <screenWidthContext.Provider value={screenWidth}>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <commentContext.Provider value={{ value: commentValue, onChange: setCommentValue }}>
                  <CardsList />
                </commentContext.Provider>
              </PostsContextProvider>
            </Content>
          </Layout>
        </screenWidthContext.Provider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

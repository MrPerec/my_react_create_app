import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { Initial } from './Initial/Initial';
import { PostsContextProvider } from './context/PostsContext';
import { Route } from 'react-router-dom';
import { Post } from './shared/Post';

function AppComponent() {
  return (
    <Initial>
      <Layout>
        <Header />
        <Content>
          <PostsContextProvider>
            <CardsList />
            <Route path={'/posts/:id'}>
              <Post />
            </Route>
          </PostsContextProvider>
        </Content>
      </Layout>
    </Initial>
  );
}

export const App = hot(module)(() => <AppComponent />);

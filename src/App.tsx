import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { Initial } from './Initial/Initial';
import { PostsContextProvider } from './context/PostsContext';
import { BrowserRouter, Link, Router } from 'react-router-dom';

function AppComponent() {
  return (
    <Initial>
      <BrowserRouter>
        <Layout>
          <Header />
          <Content>
            <PostsContextProvider>
              <CardsList />
            </PostsContextProvider>
          </Content>
        </Layout>
      </BrowserRouter>
    </Initial>
  );
}

export const App = hot(module)(() => <AppComponent />);

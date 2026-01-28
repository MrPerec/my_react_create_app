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
import { BrowserRouter, Route } from 'react-router-dom';
import { Post } from './shared/Post';

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // вызывается 1 раз

  return (
    <Initial>
      {/* что бы не возникало ошибки сделалил условие при оборачивании приложения в роутер 
      p.s. возник баг с дублированием key у карточек постов */}
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
                {/* теперь модальное окно <Post /> будем монтировать здесь при помощи <Route> */}
                <Route path={'/posts/:id'}>
                  <Post />
                </Route>
              </PostsContextProvider>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </Initial>
  );
}

export const App = hot(module)(() => <AppComponent />);

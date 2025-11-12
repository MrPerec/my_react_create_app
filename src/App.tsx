import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';

function AppComponent() {
  const [token] = useToken();
  const { Provider } = tokenContext;

  return (
    /** обернули в Provider и предали token теперь он доступен из контекста
     * а из пропоа Header убрали*/
    <Provider value={token}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

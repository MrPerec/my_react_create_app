import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { InitialState } from './InitialState/InitialState';

function AppComponent() {
  return (
    <InitialState>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </InitialState>
  );
}

export const App = hot(module)(() => <AppComponent />);

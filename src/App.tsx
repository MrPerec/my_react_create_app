import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';

import { MyHooks } from './HooksExample/HooksExample';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <MyHooks />
      </Content>
    </Layout>
  );
}

export const App = hot(module)(AppComponent);

import React from 'react';
import { hot } from 'react-hot-loader';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>content</Content>
    </Layout>
  );
}

export const App = hot(module)(AppComponent);

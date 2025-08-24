import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { EColor, Text } from './shared/Text';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br />
        <Text size={20} mobileSize={28} color={EColor.green} bold>
          Label1
        </Text>
        <Text size={20} As={'h1'}>
          Label2
        </Text>
        <Text size={20} mobileSize={16}>
          Label3
        </Text>
      </Content>
    </Layout>
  );
}

export const App = hot(module)(() => <AppComponent />);

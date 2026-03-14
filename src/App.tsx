import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { Initial } from './shared/Initial/Initial';
import { PostsContextProvider } from './context/PostsContext';
import { Route /* , Switch  */ } from 'react-router-dom';
import { PostContainer } from './shared/PostContainer';
// import { PageNotFound } from './shared/PageNotFound';

function AppComponent() {
  return (
    <Initial>
      <Layout>
        <Header />
        {/* <Switch> */}
        {/* <Route exact path='/'> */}
        <Content>
          <PostsContextProvider>
            <CardsList />
          </PostsContextProvider>
          <Route path={'/posts/:id'}>
            <PostContainer />
          </Route>
        </Content>
        {/* </Route> */}
        {/* <Route path='*'>
          <PageNotFound />
        </Route> */}
        {/* </Switch> */}
      </Layout>
    </Initial>
  );
}

export const App = hot(module)(() => <AppComponent />);

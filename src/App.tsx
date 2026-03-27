import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PostsContextProvider } from './context/PostsContext';

import { CardsList } from './pages/CardsList/CardsList';
import { PageNotFound } from './pages/PageNotFound';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Initial } from './shared/Initial/Initial';
import { PostContainer } from './pages/PostContainer';

import './normalize.css';
import './main.global.css';

function AppComponent() {
  return (
    <Initial>
      <Layout>
        <Header />
        <Content>
          <Switch>
            {/* дублируется */}
            {/* <Redirect exact from="/" to="/posts" /> */}
            {/* <Redirect exact from="/auth" to="/posts" /> */}
            <Route path={'/posts/:id'} component={PostContainer} />
            <Route path="/posts">
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Content>
      </Layout>
    </Initial>
  );
}

export const App = hot(module)(() => <AppComponent />);

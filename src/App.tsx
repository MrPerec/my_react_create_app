import React from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { UserContextProvider } from './context/UserContext';
import { PostsContextProvider } from './context/PostsContext';
import { ScreenWidthContextProvider } from './context/ScreenWidthContext';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  return (
    <Provider store={store}>
      <ScreenWidthContextProvider>
        <UserContextProvider>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </UserContextProvider>
      </ScreenWidthContextProvider>
    </Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

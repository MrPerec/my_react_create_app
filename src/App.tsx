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
// import { userContext } from './shared/context/userContext';
import { UserContextProvider } from './shared/context/userContext';

function AppComponent() {
  const [token] = useToken();
  // Шаг 1.
  // уберём диструктуризацию т.к. все контексты возвращают Provider
  // const { Provider } = tokenContext;
  // и будем брать Provider как метод нужного нам контекста

  // Шаг 2.
  /** после того как написали userContextProvider в userContext.tsx можно избавить от <userContext.Provider value={{}}>
   * и сразу использовать userContextProvider обернув в него весь App
   */
  return (
    <tokenContext.Provider value={token}>
      {/* <userContext.Provider value={{}}> */}
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </UserContextProvider>
      {/* </userContext.Provider> */}
    </tokenContext.Provider>
  );
}

export const App = hot(module)(() => <AppComponent />);

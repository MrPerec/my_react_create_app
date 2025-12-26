import React, { useEffect } from 'react';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/rootReducer';
import { ScreenWidthContextProvider } from '../context/ScreenWidthContext';
import { UserContextProvider } from '../context/UserContext';
import { PostsContextProvider } from '../context/PostsContext';
import { setToken } from '../actions/tokenActions';

interface IInitialWrapperProps {
  children?: React.ReactNode;
}

const store = createStore(rootReducer, composeWithDevTools());

export function InitialState({ children }: IInitialWrapperProps) {
  useEffect(() => {
    // Диспатч напрямую через store вместо "import { useToken } from '../hooks/useToken';"
    if (window?.__token__) store.dispatch(setToken(window.__token__));
  }, []);

  return (
    <Provider store={store}>
      <ScreenWidthContextProvider>
        <UserContextProvider>
          <PostsContextProvider>{children}</PostsContextProvider>
        </UserContextProvider>
      </ScreenWidthContextProvider>
    </Provider>
  );
}

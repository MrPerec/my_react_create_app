import React, { useEffect } from 'react';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/rootReducer';
import { ScreenWidthContextProvider } from '../context/ScreenWidthContext';
import { saveToken } from '../actions/tokenActions';
import { thunk } from 'redux-thunk';

interface IInitialWrapperProps {
  children?: React.ReactNode;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export function Initial({ children }: IInitialWrapperProps) {
  useEffect(() => {
    store.dispatch(saveToken());
  }, []);

  return (
    <Provider store={store}>
      <ScreenWidthContextProvider>{children}</ScreenWidthContextProvider>
    </Provider>
  );
}

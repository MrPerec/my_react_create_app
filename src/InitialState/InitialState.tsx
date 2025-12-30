import React, { useEffect } from 'react';

import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/rootReducer';
import { ScreenWidthContextProvider } from '../context/ScreenWidthContext';
import { UserContextProvider } from '../context/UserContext';
import { PostsContextProvider } from '../context/PostsContext';
import { setToken } from '../actions/tokenActions';
import { thunk } from 'redux-thunk';

interface IInitialWrapperProps {
  children?: React.ReactNode;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export function InitialState({ children }: IInitialWrapperProps) {
  useEffect(() => {
    const token = window.__token__;
    if (token) store.dispatch(setToken(token));
  }, []);

  // реализация сохранения token в store по ДЗ 10.5 как в лекции (у меня не работает, видимо нужно где-то что-то дописать)
  /* useEffect(() => {
    const token = localStorage.getItem('token') || window.__token__;
    store.dispatch(timeout());
    store.dispatch(setToken(token));
    if (token) localStorage.setItem('token', token);
  }, []); */

  return (
    <Provider store={store}>
      <ScreenWidthContextProvider>
        {/* <UserContextProvider> */}
        <PostsContextProvider>{children}</PostsContextProvider>
        {/* </UserContextProvider> */}
      </ScreenWidthContextProvider>
    </Provider>
  );
}

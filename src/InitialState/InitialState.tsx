import React, { useEffect } from 'react';

import { applyMiddleware, createStore, Middleware } from 'redux';
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

// const store = createStore(rootReducer, composeWithDevTools());

/** создадим middleware */
const logger: Middleware = (store) => (next) => (action) => {
  // просмотр вызова action
  console.log('dispatching: ', action);
  // вызываем next и перадём в него action что бы action дошёл до reducer
  let returnValue = next(action);
  // просмотреть результат выполнения работы следующего middleware
  console.log('action after next 1: ', returnValue);

  // в middleware можно изменять результат выполнения action, добавиться поле name
  returnValue = next({ ...action, name: 'Hello middleware!' });
  console.log('action after next 2: ', returnValue);
};

/** добавим цепочку middleware */
const ping: Middleware = (store) => (next) => (action) => {
  console.log('ping');
  next(action);
};
const pong: Middleware = (store) => (next) => (action) => {
  console.log('pong');
  next(action);
};

/** вписали applyMiddleware() */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ping, pong)));

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

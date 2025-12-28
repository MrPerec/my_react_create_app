import React, { useEffect } from 'react';

import { Action, applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { rootReducer, RootState } from '../reducers/rootReducer';
import { ScreenWidthContextProvider } from '../context/ScreenWidthContext';
import { UserContextProvider } from '../context/UserContext';
import { PostsContextProvider } from '../context/PostsContext';
import { setToken } from '../actions/tokenActions';
/** импортируем thunk и тип */
import { thunk, ThunkAction } from 'redux-thunk';

interface IInitialWrapperProps {
  children?: React.ReactNode;
}

/** вписали applyMiddleware(thunk)
 * таким образом redux готов рабоать с асинхронными action */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

/** напишем асинхронный action который делает какое-то отложенное время
 * через какой-то промежуток времени
 */
const timeout =
  // ThunkAction это тип который предоставляет redux-thunk и generic для него
  // этот тип описывает ф-ю "преобразователь"


    (ms = 1500): ThunkAction<void, RootState, unknown, Action<string>> =>
    // ф-я преобразователь это ф-я которая имеет аргументы  dispatch, getState
    // и уже в этой ф-ии можно вызывать какие-то асинхронные action,
    // в данном случае диспатчим action с типом START
    // и через указанное время action с типом FINISH
    // Если открыть devtools на вкладке redux то можно увидеть эти action с разницей во времени вызова
    (dispatch, getState) => {
      dispatch({ type: 'START' });
      setTimeout(() => {
        dispatch({ type: 'FINISH' });
      }, ms);
    };

export function InitialState({ children }: IInitialWrapperProps) {
  useEffect(() => {
    const token = window.__token__;
    // вызываем асинхронную ф-ю
    store.dispatch(timeout(3000));
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
        <UserContextProvider>
          <PostsContextProvider>{children}</PostsContextProvider>
        </UserContextProvider>
      </ScreenWidthContextProvider>
    </Provider>
  );
}

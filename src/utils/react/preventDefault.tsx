import React from 'react';

/**
 * Каррированная ф-я которая выполняет "preventDefault" для ссылки
 * @param fn
 * @returns
 */
export function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}

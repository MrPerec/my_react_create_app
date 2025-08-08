import React from 'react';

/**
 * Каррированная ф-я которая выполняет "stopPropagation" для ссылки
 * @param fn
 * @returns
 */
export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

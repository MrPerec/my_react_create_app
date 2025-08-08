import React, { SyntheticEvent } from 'react';

/**
 * Каррированная ф-я которая получает значение элементов формы с onChange
 * @returns вложенную функцию
 */
function pickFromSyntheticEvent<T extends HTMLElement>() {
  return function <K extends keyof T>(key: K) {
    return function <E extends (value: T[K]) => void>(fn: E) {
      return function (e: SyntheticEvent<T>) {
        fn(e.currentTarget[key]);
      };
    };
  };
}

const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

export { getValue, getChecked };

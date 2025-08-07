/** Пример 1.
 * Как можно использовать карированные ф-ии?
 * Например напишем компонент Feed которые возвращает некоторый jsx
 */
import { React } from 'react';

/** и точно такая же ф-я только для e.stopPropagation(); */
export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

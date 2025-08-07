/** Пример 1.
 * Как можно использовать карированные ф-ии?
 * Например напишем компонент Feed которые возвращает некоторый jsx
 */
import { React } from 'react';

/** что бы не писать каждый раз обработчик с e.preventDefault()
можно один раз написать ф-ю которая будет это делать сама */
export function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}

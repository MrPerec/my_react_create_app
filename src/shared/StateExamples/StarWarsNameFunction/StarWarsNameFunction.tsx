import React, { useState } from 'react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import * as styles from './starWarsNameFunction.css';

/** интерфейс описывает типы состояния компонента
 * на данный момент содержит 2 поля,
 */
interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {
  // фнукция генерации случайного мени их SW
  const randomName = () => uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  /** в ф-х компонентах можно вызывать хуки, в классах это не работает
   * Для работы с компонентами у которых есть более одного состояния можно 2мя способоми
   * 1й - Атамарный. Создаем одно состояние через один useState
   */
  // const [name, setName] = useState(randomName);
  // const [count, setCount] = useState(0);
  /** ф-я обработчика нажатия на кнопку */
  // const handleClick = () => {
  //   setName(randomName); // устанавливаем рандомное имя
  //   setCount((prevCount) => prevCount + 1); // увеличиваем счетчик основываясь на предыдущем состоянии
  // };
  // console.log('name: ', name);
  // console.log('count: ', count);

  /** 2й способ работы с состоянием если его больше одно это Комплекстный подход */
  const [allState, setAllState] = useState<IStarWarsNameFunctionState>({ name: randomName(), count: 0 });
  const handleClick = () => {
    setAllState((prevState) => ({ name: randomName(), count: prevState.count + 1 }));
    /** при обновлении стэйста комплексным подъожом важно обновлять полность, как и описано в интерфейсе
     * иначе TS будет ругаться что чего-то не хватает.
     * Если нужно обновить какое-то одно поле то нужно использовать spread синтаксис
     * setAllState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
     * Батчинг работает точно так же как и в классовых компонентах.
     */
  };
  console.log('allState: ', allState);

  return (
    <section className={styles.container}>
      <h2>Module 4.3 Functional component</h2>
      {/* <span className={styles.name}>{name}</span> */}
      <span className={styles.name}>{allState.name}</span>
      <div className={styles.gap} />
      <button className={styles.button} onClick={handleClick}>
        Мне нужно имя!
      </button>
    </section>
  );
}

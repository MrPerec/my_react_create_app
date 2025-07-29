import React from 'React';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import * as styles from './starWarsNameClass.css';

/** интерфейс описывает типы состояния компонента
 * на данный момент содержит 2 поля,
 */
interface IStarWarsNameClassState {
  name: string;
  count: number;
}

/** 1й аргумент это пустой объект т.к. нет props,
 * 2й аргумент это интерфейс который описывает типы полей */
export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
  /**  Есть 2 способа объявления состояния
   1й - стантартная инициализация сосстояния */
  /* constructor(props: {}) {
    super(props);

    this.state = { name: '123' };
    } */

  /** 2й - инициализация сосстояния через "перегрузку" * */
  state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0 }; // при объявлении состояния обязательно использовать Readonly

  /** приватный метод который генерирует случайное имя
   * используем uniqueNamesGenerator для генерации случайного имени и настройки, словарь starWars кол-во возвращаемых слов в length 1
   */
  private randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }

  /** напишем метод для смены имене по нажатию на кнопку
   * Метод ОБЯЗАТЕЛЬНО должен быть стрелочным т.к. внутри мы обращаемся к контексту this.
   */
  private handleClick = () => {
    this.setState({ name: this.randomName() }); // меняем имя

    this.setState(
      (prevState, props) => ({ count: prevState.count + 1 }) /** добавим счётчик кликов count, при этом менять счетчик будем основываясь на предыдущем состоянии счётчика */,
      () => console.log(`handleClick - 1: `, this.state), // добавил 2й аргумент callback ф-ю для просмотра изменившегося состояния
    );
    /** добавим ещё один setState и увеличим count и увидем в коносли что count уже увеличился не на 1 а сразу на 2
     * что, такое поведение в React называется "батчинг" когда React объеденяет в одну группу все setState и выполняет их за один раз
     * что бы не делать несколько раз ререндеринг.
     */
    this.setState(
      (prevState, props) => ({ count: prevState.count + 1 }),
      () => console.log(`handleClick - 2: `, this.state),
    );
  };

  public render() {
    console.log(`render: `, this.state);

    return (
      <section className={styles.container}>
        <h2>Module 4.2</h2>
        <span className={styles.name}>{this.state.name}</span>
        <div className={styles.gap} />
        <button className={styles.button} onClick={this.handleClick}>
          Мне нужно имя!
        </button>
      </section>
    );
  }
}

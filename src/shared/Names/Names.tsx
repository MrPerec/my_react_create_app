import React from 'react';
import { uniqueNamesGenerator, starWars, adjectives, Config } from 'unique-names-generator';
import * as styles from './names.css';

/** интерфейс описывает типы состояния компонента
 * на данный момент содержит 2 поля,
 * adjective - Строковое поле, прилагательное.
 * starWarsWord - Строковое поле, рандомное слово из вселенной StarWars
 */
interface INamesState {
  adjective: string;
  starWarsWord: string;
}

/** реакт-компонент принимает "{}, INamesState"
 * - "{}" говорт о том что компонент не принимает никаких пропов
 * - "INamesState" говорит что использует Generic, получает интерфейс INamesState*/
export class Names extends React.Component<{}, INamesState> {
  constructor(props: {}) {
    super(props);

    /** state компонента */
    this.state = {
      adjective: this.generateWord(adjectives),
      starWarsWord: this.generateWord(starWars),
    };
  }

  /** метод жизненного цикла компонента
   * код который описан в этом методе выполняется когда данный компонебнт встраивается в DOM дерево
   * т.е. когда проиходит рендеринг компонента этот код выполняется в первую очередь.
   *
   * Данный код меняет прилагательное на любое другое каждые 2 секунды.
   * По истичению 6 секуд замена прекращает выполняться.
   */
  public componentDidMount(): void {
    const interval = setInterval(() => {
      this.setState({ adjective: this.generateWord(adjectives) });
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
    }, 6000);
  }

  /** приватная функция "generateWord" котоаря выполняет функцию "uniqueNamesGenerator" из библиотеки "unique-names-generator"
   * с некоторыми настройками, что бы получить случайное прилагательное либо слово из вселенной StarWars
   */
  private generateWord(dictionary: string[]): string {
    const defaultGeneratorConfig: Config = {
      length: 1,
      dictionaries: [],
    };

    return uniqueNamesGenerator(Object.assign({}, defaultGeneratorConfig, { dictionaries: [dictionary] }));
  }

  /** метод рендеринга. Выводит наш jsx в html теги на странице */
  public render() {
    return (
      <h1 className={styles.word}>
        <Adjective adjective={this.state.adjective} />
        {'\u00A0'}
        <StarWarsWord starWarsWord={this.state.starWarsWord} />
      </h1>
    );
  }
}

/** Интерфейс для компонента Adjective */
interface IFirstNameProps {
  adjective: string;
}

/** 1. компонент который выводит прилагательное и выводит логи о том что прилагательное было встроенов в DOM */
/* class Adjective extends React.Component<IFirstNameProps> {
  render() {
    console.log('======================');
    console.log('>> Adjective is printing');
    return <span>{this.props.adjective}</span>;
  }
} */

/** 3. перепишем классовый компоненты на ф-ый */
function Adjective(props: IFirstNameProps) {
  console.log('======================');
  console.log('>> Adjective is printing');
  return <span>{props.adjective}</span>;
}

/** Интерфейс для компонента StarWarsWord*/
interface ILastNameProps {
  starWarsWord: string;
}

/** компонент выводит имя из вселенной SW и логирует это событие в консоли */
/** 1. При рендеренге componentDidMount в консоли можно увидеть что этот компоонент выводит надпись ">> SW word is printing"
 * каждые 2 секунды хотя по сути имя не изменяется, оно одинаковое на протяжении 6 секунд.
 * Что бы этого не происходило заменим  "Component" на "PureComponent"
 */
/* class StarWarsWord extends React.Component<ILastNameProps> {
  render() {
    console.log('>> SW word is printing');
    return <span>{this.props.starWarsWord}</span>;
  }
} */

/** 2. после замены на "PureComponent" перерендеринг этого компонента прекратился
 * PureComponent в componentDidMount работает иначе, он сравнивает предыдущее значение компонента и текущее
 * и если значение не изменилось то и перерендеринга не происходит
 */
/* class StarWarsWord extends React.PureComponent<ILastNameProps> {
  render() {
    console.log('>> SW word is printing');
    return <span>{this.props.starWarsWord}</span>;
  }
} */

/** 3. перепишем классовый компоненты на ф-ый */
/** снова происходит перерендеринг не зависимо от того изменилось значение prop или нет
 * что бы это исправить перепишем ф-ю
 */
/* function StarWarsWord(props: ILastNameProps) {
  console.log('>> SW word is printing');
  return <span>{props.starWarsWord}</span>;
} */

/** 4. перепишем ф-ю и обернем её в memo.
 * memo выполняет меморизацию компонента что бы если значение не изменяется то и компоонент не перерисовывается.
 * memo нужно использовать с умом, иногда оно может создать много проблем
 */
const StarWarsWord = React.memo((props: ILastNameProps) => {
  console.log('>> SW word is printing');
  return <span>{props.starWarsWord}</span>;
});

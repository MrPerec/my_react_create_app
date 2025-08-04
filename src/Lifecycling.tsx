import React from 'react';

/** описываем типы пропов для комп-та Lifecycling */
interface ILifecyclingProps {
  someProp: number;
}

/** интерфейс для состояния */
interface ILifecyclingState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycling extends React.Component<ILifecyclingProps, ILifecyclingState> {
  /** передаем пропы в конструктов */
  constructor(props: ILifecyclingProps) {
    /** получаем пропы */
    super(props);

    /** инициализация состояния, присваиваем значения */
    this.state = {
      stateField: 0,
      /** так делать не стоит, это "проихводное сост-е", не передавай пропы в состояние нужно избегать таких ситуаций */
      // stateField: props.someProp
      isMounted: false,
      hasError: false,
    };

    /** бинтим контекст к методам класса
     * Однако, можно не выполнять биндинг функции если использоавть стрелочные ф-ии
     */
    // this.handleClick = this.handleClick.bind(this);
  }

  /** статичный метод "getDerivedStateFromProps", вызывается непосредственно при вызове render,
   * как при монтировани компонента так и при его обновлении, так же этот метод вызывается каждый раз когда происходит ререндер
   * а не только при изминении props */
  /** Этот метод был специально сделан для тех редких случаев когда мы принимаем "производное состояние" и таким образом
   * изменям наш stateField и назначаем на него значение из props.
   * Почему редкие случаи? Перед тем как использовать "производное состояние" в этом методе нужно проверить себя:
   *  1) если нужно применить side effect и есть желание применить этот метод то не нужно так делать а лучше воспользоваться
   * методом "componentDidMount"
   *  2) если нужно заново пересчитать какие-то данные при изминении props то не нужно пользоваться этим методом
   * а лучше воспользоваться ф-ей memoize
   *  3) если нужно сбросить сост-е то лучше воспользоваться controlled и unControlled компоненты. Это когда компонент получает какие-то prop
   * из состояния родительского комопонента, таким образом props которые получит дочерний компонент
   * котроллируется родительским компонентом - это и есть controlled компонент. unControlled компонент это компонент который имеет своё состояние
   * и он изминяет интерфейс только исходя из своего state - это и есть не котролируемый компонент, он "живёт" сам по себе.
   *
   * getDerivedStateFromProps с "произвольным состоянием" можно воспользоваиться например когда нужно перенести scroll в чате в самый низ,
   * на самое последнее сообщение.
   *
   * Т.к. метод статичный то мы не можем воспользоваться контекстом, пропы и состояние получаем только из параметров
   */
  static getDerivedStateFromProps(props: Readonly<ILifecyclingProps>, state: Readonly<ILifecyclingState>) {
    /** Метод возвращает обхект в котором находится состояне котрое необходимо обновить перед рендером приложения */
    // return {}

    return { stateField: props.someProp };

    // если не хотим ничего менять то возвращаем Null
    // return null;
  }

  /** метод вызывается сразу после того как компонент монтируется в DOM дерево.
   * Этот метод пердназначен для подписок, счётчиков, side эффектов, таймеров и пр.
   *
   */
  public componentDidMount(): void {
    document.addEventListener('resize', () => {}); // операции связанные с DOM, отслеживание изминения размера окна, подписка на событие
    setTimeout(() => {}, 0); // таймер
    this.setState({ isMounted: true }); //отслеживаем когда компонент смонтировался в DOM
  }

  /** компонент вызывается перед тем как компонент удалится из DOM и этот компонент хорошо подходит для отписки от подписок
   * т.к. они созраняются в памяти а память нужно очищать */
  public componentWillUnmount(): void {
    document.removeEventListener('resize', () => {}); // отмена подписки
    setTimeout(() => {}, 0); // сброс счётчика таймера
    this.setState({ isMounted: true }); // можно изменить состояние но в этом нет смысла т.к. состояние удаляется когда компонент размонтировывается из DOM
  }

  /** По умолчанию "React.PureComponent" использует этот метод и вот как он работает:
   * компонент сравнивает текущее состояние и пропы и следующие состояние и пропы и если что-то из этого
   * не равно то shouldComponentUpdate вернёт true иначе вернёт false.
   * Так что если используем "React.PureComponent" то мользоваться "shouldComponentUpdate" нет смысла,
   * иначе можно пользоваться "React.Component" в shouldComponentUpdate для улучшения произ-ти.
   * Если метод будет всегда возвращать false то компонент никогда не будет обновляться, так же не стоит
   * использовать "глубокое" сравнение и JSON.stringify(), например так:
   *  return JSON.stringify(this.state) !== JSON.stringify(nextState) || JSON.stringify(this.props) !== JSON.stringify(nextProps)
   * т.к. это "тяжелая" операция и спользовать её "дорого"
   */
  public shouldComponentUpdate(nextProps: Readonly<ILifecyclingProps>, nextState: Readonly<ILifecyclingState>, nextContent: any): boolean {
    return this.state !== nextState || this.props !== nextProps;
  }

  /** метод вызывается непосредственно перед тем как компонент обновится
   * Внутри метода можно сохранить snapshot (высота скрола, ширина окна и ещё и пр.).
   * После чего эти значения передадутся в метод который вызывается сразу же после "getSnapshotBeforeUpdate"
   * в качестве входных параметров "componentDidUpdate"
   */
  public getSnapshotBeforeUpdate(prevPops: Readonly<ILifecyclingProps>, prevState: Readonly<ILifecyclingState>): any | null {
    return 12345;
    // return null // если не хотим ничего возвращать
  }

  /** получает входные параметры из результата выполнения метода "getSnapshotBeforeUpdate"
   * Так же если метод "shouldComponentUpdate" вернул false то этот  метод не будет выполнятся.
   * В этом компоненте мы можем работать с DOM и с состоянием
   * но только в том случае если обернуть их в какоме-то условие.
   * Если не оборачивать в условие то есть риск попасть в бесконечный цикл.
   */
  public componentDidUpdate(prevProps: Readonly<ILifecyclingProps>, prevState: Readonly<ILifecyclingState>, snapshot?: any) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  /** метод принимает ошибку и возвращает объект который описывает сосстояние которое неоходимо изменить
   * Для чего это нужно? В специальном состоянии this.state.hasError будем отслеживать наличия ошибок.
   * Если в приложении возникает ошибка то в этом методе можно изменить состояние hasError
   * и в render уже воспользоваться этим.
   * Так же этот метод вызывается во время render и в нем нет подписок, счётчиков, сайдэффектов и из-за
   * того что он статичный в нем невозможно использоать поля и методы экземпляров класса.
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  /** Метод необходим что бы запускать какие-то side эффекты при получении ошибки.
   * Например можно запустить какой-то сервис логирования, передать ему ошибку и уже внутри него выполнять side-эффекты.
   * Никаких setState внутри этого метода лучше не делать.
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //logError(errorInfo.componentStack)
  }

  /** повеси обработчик клика на div что в render */
  // private handleClick() {
  //   this.setState({ stateField: 1 });
  // }
  /** можно не выполнять биндинг функции если использоавть стрелочные ф-ии */
  private handleClick = () => {
    this.setState({ stateField: 1 });
  };

  /** что бы обработчик сработал нужно забинтить (привязать) контекст к методам класса.
   * Обязательный метод. Может возвращать jsx, массивы, числа, строки, Null, булевы значения и "порталы" ( ReactDOM.createPortal() ).
   * render это "чистый" метод т.е. в нём не должно происходить каких-либо side эффектов и всегда должен возвращаться один и тот же результат
   * при одних и тех же вводных.
   */
  public render() {
    // условие в качестве примера
    if (this.state.hasError) return <div>Error</div>;
    return <div onClick={this.handleClick}>Hello World!</div>;
  }
}

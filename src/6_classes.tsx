/** Classes
 * Классы это синтаксический сахар для ф-ий конструкторов введенный в ES6.
 * Под капотом ключевое слово class является таким конструктором:
 */
// old constructor в старом JS example
/*
function OldCounstructor(fieldValue) {
  this.field = fieldValue || 123;
}

OldCounstructor.prototype.method = function () {
  return this.field;
};

const instance = new OldConstructor();
instance.method(); // -> 123
*/

// современный вид в ES6
class Constructor {
  field: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  method() {
    return this.field;
  }
}

/* 
  TS в классах добавляет модификаторы доступов: Public, Private, Protected.
*/
class ConstructorModif {
  public field: number = 123;
  private fieldPrivate: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  /** если не указывать "public" то по умолчанию метод будет публичным */
  public publicMethod() {
    this.protectedMethod(); // внутри метода класса, доступ есть
    this.privateMethod(); // внутри метода класса, доступ есть
    return this.field;
  }

  protected protectedMethod() {
    this.privateMethod(); // внутри метода класса, доступ есть
    return this.field++;
  }

  private privateMethod() {
    this.protectedMethod(); // внутри метода класса, доступ есть
    return this.field--;
  }
}

/**
 * Для чего они нужны? Для того что бы управлять областями видимостями нашего класса.
  В обычном JS классе приватности не было и "снаружи" мы могли иметь к нему доступ.
 */
const instance = new Constructor(123);
instance.field; // есть доступ к свойству field
instance.method; // есть доступ к методу method  (а вдруг мы не хотели что бы к нему был доступ)

/** а вот у ConstructorModif нет доступа к "privateField", "protectedMethod", "privateMethod"
 * Если мы захотим получить доступ к private или protected
 * внутри самого метода класса то у нас это получится (см. выше)
 */
const instanceModif = new ConstructorModif(123);
instance.field; // есть доступ к свойству field
instance.privateField; // нет доступа
instanceModif.publicMethod; // есть доступ к методу publicMethod
instanceModif.protectedMethod; // нет доступа
instanceModif.privateMethod; // нет доступа

/** наследование классов от других классов.
 * У дочернего класса не будет доступа к "private" методам родителя */
class ChildConstructorModif extends ConstructorModif {
  public childMethod() {
    this.field; // есть доступ
    this.publicMethod; // есть доступ

    /** protected работает как и private но доступны для дочерних классов */
    this.protectedMethod; // есть доступ

    /* нет доступа, потому что он приватен для каждого класса
    и не доступен для переопределения у наследников*/
    this.privateMethod; // нет доступа
  }

  /** а вот понижать метод родительского класса нельзя, будет ошибка TS:
   * Класс "ChildConstructorModif" неправильно расширяет базовый класс "ConstructorModif".
      Свойство "protectedMethod" является закрытым в типе "ChildConstructorModif" и не является таковым в типе "ConstructorModif".ts(2415)
   */
  private protectedMethod(): number {
    return super.protectedMethod();
  }

  /** а вот повысить модификатор для родительского метода можно:
   */
  public protectedMethod(): number {
    return super.protectedMethod();
  }

  /** так же мы не можем "public" метод родителя переопределить в "protected" или в "private":
   * Класс "ChildConstructorModif" неправильно расширяет базовый класс "ConstructorModif".
  Свойство "publicMethod" является защищенным в типе "ChildConstructorModif" и общим в типе "ConstructorModif".ts(2415)
  */
  protected publicMethod(): number {
    return super.publicMethod();
  }
}

/** Абстрактные классы. Это классы от которых можно только уноследоваться, от них нельзя сделать instance.
 * В абстрактных классах можно декларировать абстрактные поля
 * которые необходимы для имплементации.
 */
abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

/** Будет ошибка при инстансировании:
 * Невозможно создать экземпляр абстрактного класса.ts(2511)
 */
const instanceAbstractClass = new AbstractClass(123);

/** только уноследование и в дочернем классе бы ОБЯЗАНЫ имплеменировать (реализовать/использовать/выполнить)
 * все абстрактные поля родительского класса, если мы этого не делаем будет ошибка:
 * В неабстрактном классе "ChildAbstractClass" отсутствуют реализации следующих элементов "AbstractClass": 'abstractField', 'abstractMethod'.ts(2654)
 *
 * Другими словами, абстрактные классы это как полуфабрикаты которые бы должны доделать в дочерних классах,
 * допилить напильником так сказать.
 */
class ChildAbstractClass extends AbstractClass {
  public abstractField: number = 123; // имплементировали свойство

  public abstractMethod(): number {
    return 0; // имплементировали метод
  }

  /* внутри имплементации можно вернуть уже какие-то "protected" или "public" методы родителя */
  public abstractMethod1(): number {
    return this.protectedMethod();
  }
}

/** Интерфейсы. Работает так же как и с абстрактными классами, мы должны имплементировать все поля
 */
interface MyInterface {
  field: string;
  method(): string;
}

/** если не выполнить имплементацию то будет ошибка подобно абстрактным классам
 * Класс "NewClass" неправильно реализует интерфейс "MyInterface".
  В типе "NewClass" отсутствуют следующие свойства из типа "MyInterface": field, methodts(2420)
 */
class NewClass implements MyInterface {
  public field: string = '123';

  public method(): string {
    return '';
  }
}

/** так же классы могуи быть Generic (как интерфейсы)
 * Так же можно передовать аргумент в интерфейс NewClassGeneric если интерфейс MyInterface является Generic
 */
class NewClassGeneric<T> implements MyInterface {
  public field: string = '123';
  public conf?: T;

  public method(): string {
    return '';
  }
}

/**
 * Так же можно передовать аргумент в интерфейс NewClassGeneric1
 * если интерфейс MyInterface1 является Generic
 */
interface MyInterface1<T> {
  field: string;
  method(): string;
}

class NewClassGeneric1<T> implements MyInterface1<T> {
  public field: string = '123';
  public conf?: T;

  public method(): string {
    return '';
  }
}

/** сделаем класс компонент
 * Он требует 2 аргумента
 */
class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
  /** можем обявить state компонента и он будет содержать свойства которые мы описали в generic */
  constructor(props: { prop1: number }) {
    super(props);
    this.state = {
      state1: '123',
    };
  }

  /** можем обратится к this.props и он будет содержать свойства которые мы описали в generic */
  public render() {
    return <div>{this.props.prop1}</div>;
  }
}

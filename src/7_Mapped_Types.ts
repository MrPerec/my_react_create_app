/**
 * 3.7 Mapped Types (система типов) 
	Это типы которые проводят операции над другими типами.
*/

/** ключевое слово AS
 * Сейчас объявим массив и не укажем тип для него, по умолчанию
 * TS определяет его как any и позволяет записывать в него как число так и строку и пр.
 */
const mistake = [];
mistake.push(1); // позволяет добавить
mistake.push('1'); // возволяет добавить

/** что бы это исправить можно воспользоваться "as"
 * такая запись называется Type Casting или "приведение к типу"
 */
const mistakeAs = [] as Array<number>; // Теперь этот массив может содержать только цифры
mistakeAs.push(1); // позволяет добавить
mistakeAs.push('1'); // ошибка

/** есть какой-то большой объект */
const bigObject = {
  rc: 0,
  rcTrue: true,
  rcN: null,
  senderRecipientList: [
    { value: '081A1', text: '081A1' },
    { value: '58497', text: '58497' },
  ],
};

/** по умолчанию TS автоматом определяет его тип и если попытаться положить в него значение другого типа то будет ошибка */
bigObject.rcTrue = 'false'; //ошибка

/** что если нужен тип этого объекта и мы не хотим писать интерфейс для этого большого объекта, 
 * для этого есть "typeof" .
 * Эта запись присвоит переменной TMyBigObject тип объекта bigObject и его содержимого:
 * 
 * type TMyBigObject = {
    rc: number;
    rcTrue: boolean;
    rcN: null;
    senderRecipientList: {
        value: string;
        text: string;
    }[];
}
 * */
type TMyBigObject = typeof bigObject;

/** если мы хотим сохранить такую структуру типа bigObject
 * что бы она оставалось константой и была иммутабильной
 * то нужно использовать вспомогательный тип "Readonly"
 */
const typedBigObject: Readonly<TMyBigObject> = bigObject;

/** пробуем что-то изменить и получаем ошибку
 * "Не удается задать значение для "rcTrue", так как это свойство, доступное только для чтения.ts(2540)"
 */
typedBigObject.rcTrue = true; // ошибка
/* Но это работает только "поверхностно", при попытке изменить "глубокие" свойства, ошибки не возникнет
 */
typedBigObject.senderRecipientList[0].value = '1'; // нет ошибки

/** что бы сделать "глубокое" Readonly нужно разобраться как он работает.
 * Разберём Readonly из TS и напишем его самостоятельно
 */
type MyReadonly = {
  /* эта сигнатура не подходит потому что тут мы говорим что любой ключ может быть чем угодно */
  // readonly [N: any]: any

  /* эта сигнатура не подходит потому что тут мы говорим что любой строковый ключ может быть чем угодно */
  // readonly [N: string]: any

  /** нам нужен не любой а именно типизация ключей из нашего (например) объекта typedBigObject.
   * Можно сузить кол-во ключей которые задикларированы в индекс сигнатере */
  readonly [N in 'asd' | `qwe`]: N;
};
/** создадим константу и присвоим ей тип MyReadonly
 * мы увидим что у этой константы могут быть ключи только те которые мы описали в типе
 * и они могут быть только самим себе иначе будет ошибка.
 */
const foo: MyReadonly = {
  asd: `asd`,
  qwe: `qwe`,
};

/*
 * Это не то что нам нужно, мы хотим что бы TS сам брал "глубокие" ключи из объекта typedBigObject
 * определял их тип только для readonly.
 * Для этого можно восползоваться "keyof" и передать тип TMyBigObject в котором хранится структура типов
 */

type MyReadonly1 = {
  readonly [N in keyof TMyBigObject]: N;
};
/** таким образом получим структуру объекта, но есть проблема, значения
 * структуры ключей может быть только таким же как название ключа
 */
// подчеркивает что бы мы указали все поля
const foo1: MyReadonly1 = {
  rc: `rc`, // но значения ключей будут равны самим себе
};

/** что бы исправить предыдущую проблема, получим список ключей таким образом */
type TObjKeys = keyof TMyBigObject;
/** далее получаем тип конкретного ключа */
type TrcType = TMyBigObject['rc']; // number
type TrcTrueType = TMyBigObject['rcTrue']; // boolean
type TrcNType = TMyBigObject['rcN']; // null и т.д. ...

/** теперь мы можем переписать прерыдущий пример и получить структуру
 * типов желаемого обекта и получить тип каждого ключа через строковое представление
 * например TMyBigObject[N]
 */
type MyReadonly2 = {
  readonly [N in keyof TMyBigObject]: TMyBigObject[N];
};
// подчеркивает что бы мы указали все поля
const foo2: MyReadonly2 = {
  rc: 1,
};

/** так же можно сделать то же самое передав структуру через Generic
 * Теперь мы имеем полную структуру объекта с типами и только для чтения Readonly
 */
type MyReadonly3<T> = {
  readonly [N in keyof T]: T[N];
};
// подчеркивает что бы мы указали все поля
const foo3: MyReadonly3<TMyBigObject> = {
  rc: 1,
};

/** Напишем свой собственный тип Partial который делает все клучи в объекте
 * не обязательными
 */
type MyPartial<T> = {
  [N in keyof T]?: T[N];
};

/** Разберём как работает Pick, он забирает из интерфейса строковые ключи которые мы указали 
 * Таким образом в picked хранится только содержимое ключа senderRecipientList
 * 
 senderRecipientList: {
			value: string;
			text: string;
	}[];
*/
type picked = Pick<TMyBigObject, 'senderRecipientList'>;

/** Разберём как работает тип Pick на собственной реализации этого типа */
type MyPick<T, K> = {
  [N in K]: T[N];
};
type myPicked = MyPick<TMyBigObject, 'senderRecipientList'>; // работает
type myPicked1 = MyPick<TMyBigObject, 'senderRecipientList' | `qwerty`>; // но есть проблема, мы можем передовать не существущие ключи

/** что бы нельзя было передовать несуществующих ключей добавим ограничение
 * теперь мы передаём все типы ключей T и названия ключей которые хотим "вытащить" K
 * и дописываем "extends keyof T" что значит что названия типов K должны соответвовать только
 * типам ключей которые есть в T
 */
type MyPick2<T, K extends keyof T> = {
  [N in K]: T[N];
};
type myPicked2 = MyPick2<TMyBigObject, 'senderRecipientList' | `qwerty`>; // ошибка
type myPicked3 = MyPick2<TMyBigObject, 'senderRecipientList' | `rcN`>; // теперь только существующие ключи

/** Реализуем собственный "глубокий" тип "Readonly"  */
type MyReadonlyDeep<T> = {
  /** тут мы проходим по каждому ключу от типа T и спрашиваем
   * значение из типа T (T[N]) расширяет объект ? , если да то
   * снова вызываем MyReadonlyDeep<T[N]> иначе просто возвращаем значение T[N]
   * Получается рекурсия для вложенных обхектов типов.
   */
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};
/** проверям */
const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;
/** Работает, значения полей не изменить т.к. они только для чтения */
typedBigObjectDeep.rc = 1; // ошибка - Не удается задать значение для "rc", так как это свойство, доступное только для чтения.
typedBigObjectDeep.senderRecipientList[0].value = `qwerty`; // ошибка - Не удается задать значение для "value", так как это свойство, доступное только для чтения.

/** Сделаем тип который уберёт "Readonly" */
type TSomeType = MyReadonlyDeep<TMyBigObject>; // при наведении все ключи Readonly
/** type inference
 * вычисляет аргумент Generic. Если тип T это MyReadonlyDeep тогда
 * пускай он вернёт нам E иначе тип T (как и задумывалось изначально).
 */
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;
// Проверям
type TTest = RemoveReadonly<TSomeType>; // ключи больше не Readonly

/** Зачем это нужно, сначало добавлять а потом удалять Readonly
 * Посмотрим на примере
 */
function greaterThenZero(a: number) {
  return a > 0;
}
function greaterThenZeroArgs(a: number, b: string) {
  return a > 0;
}

/** напишем тип который выводит тип возвращаемого значения функции greaterThenZero */
type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
/** ф-я возвращает аргументы */
type FnParameters<T> = T extends (...args: infer R) => any ? R : never;

// проверяем
type TReturnType = FnReturnType<typeof greaterThenZero>; // при наведении boolean
// проверка с параметрами
type TArgsType = FnParameters<typeof greaterThenZeroArgs>; // при наведении - type TArgsType = [a: number, b: string]

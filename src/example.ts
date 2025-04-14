/* =============================================== */
/* ================= 3.1 Типы, синтаксис, примеры ================= */
/* =============================================== */
// JS Types // typeof

const str = 'string'; // typeof   str   ->  'string'
/** number */
const num = 2; // typeof   num   ->  'number'
const nan = NaN; // typeof   nan   ->  'number'
/** object */
const obj = {}; // typeof   obj   ->  'object'
const arr = []; // typeof   arr   ->  'object'
const nul = null; // typeof   nul   ->  'object'

const sym = Symbol(); // typeof   sym   ->  'symbol'
/** undefined */
const und = undefined; // typeof   und   ->  'undefined'
const _void = void 0; // typeof   _void   ->  'undefined'

const bool = true; // typeof   bool   ->  'boolean'
const fn = () => {}; // typeof   fn   ->  'function'

/**TS позваляет создать переменную и объявить её тип
 * и задать ей какое-то згачение, значение должно соответвовать типу переменной
 */
// let tsStr: string = 'abc'
/**можно писать и не указывая тип, TS поймет это и выдаст ошибку
 * если вдруг присвоим значение друго типа  */
let tsStr = 'abc';
tsStr = 1; // подчеркивает

/**пример типизации JavaScript, это слишком громоздко и так не пишут*/
function sumJS(arr) {
  if (arr instanceof Array) {
    return arr.reduce((a, v) => a + v);
  }
  throw new Error('type mismatch');
}
/** обычно пишут так , для метода reduce это еще нормально т.к.
 * он есть только у массива*/
function sumJS(arr) {
  return arr.reduce((a, v) => a + v);
}
/** но например concat уже есть и у массива и у строки */
function sumJS(arr) {
  return arr.concat([1]);
}

/** типизация на TS */
function sumTS(arr:number[]) {
  return arr.reduce((a: number, v: number) => a + v);
}
/** и если передадим в ф-ю не правильный тип то TS это обощначит (подчеркивание) */
sumTS(arr: '123');
sumTS(arr: ['123']);

/** нативное поведение в JS
 * 'some' + 2 // -> 'some' //сработает конкатинация
 * 'some' - 2 // -> NaN // NaN
 * '2' + 2 -> '22' //сработает конкатинация
 * '2' - 2 -> NaN // NaN
 * */

const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber; // тут TS понимает что нужно сделать конкатенаци
const reultTwo = tsString - tsNumber;// тут TS сообщит об ошибке
const reultThree = parseInt(tsString) - tsNumber; // тут TS уже не выдаст ошибку

/** так же TS понимает когда мы хотим выполнить какую-то проверку
 * на переменно на тип для которого изначально он не был предназначен
 */
if (typeof tsString==='number') { // так же тут будет сообщение что это условие не выполнится т.к. tsString не может быть числом
  const reultFour = tsString - tsNumber;// тут TS выдаст ошибку
}




/* =============================================== */
/* ================= 3.2 Объединение и пересечение типов ================= */
/* =============================================== */
// Union type - объединение типов. Может хранить в себе и строку и число
const strOrNumber: string | number = '2';

// что если нам нудно создать несколько таких переменных
// получается дублирование кода
const strOrNumber1: string | number = '2';
const strOrNumber2: string | number = '2';
const strOrNumber3: string | number = '2';
const strOrNumber4: string | number = '2';
// что бы этого избежать TS позваляет создать type alias - это как переменная для типов
type StrOrNumber = string | number
const strOrNumber5: StrOrNumber = '2';

/* создадим такой type alias который содержит в себе основные типы */
type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

/* строку и число мы объявляли ранее, объявим массив */
const tsArray: number[] = [1, 2, 3];
// можно попробовать бобратиться к какоуц-то конкреному элементу массива
// например которого не существует и TS не будет ругаться, ему всё равно
const val = tsArray[100];
// а вот если в массив чисел попробовать записать строку то он ругнется
const tsArray1: number[] = [1, 2, 3, "str"];
// так же можно использовать форму объявления массива при помощи Generic
const tsArrayGeneric: Array<number> = [1, 2, 3];
// так же можно использовать Union типы
const unionArray:(string|number)[] = [1, 2, 3, 'str'];
// либо использовать generic
const unionArray2: Array<string|number> = [1, 2, 3, 'str'];

/* так же можно использовать Tuple - массив фиксированной велечины
 этот массив говорит что в нем может быть всего 2 элемента и 1й это число а 2й строка */
const myTuple: [number, string] = [1, '2'] 
//если попробовать добавить еще элемент в массив он ругнется
const myTuple2: [number, string] = [1, '2',3] 
/* если, как в предыдущем примере c массивом, 
попробовать обратиться к несуществующему элементу массива Tuple то получим ошибку 
т.к. массив фиксированной длины */
const val1 = myTuple[100];

/* так же есть и менее часто встречающиеся типы */
type StrangeTsTypes = any | unknown | never;




/* =============================================== */
/* ================= 3.3 Объекты ================= */
/* =============================================== */
// объект может включать в себя разное множесто ключей с разными типами
const myObj: { a: number, b: string } = { a: 1, b: '2' }; 
const myObj0 = { a: 1, b: '2' }; // можно не указывть тип и тогда TS сам их определит
// это может работать как и type alias
type myObjType={ a: number, b: string }
const myObj1: myObjType = { a: 1, b: '2' }; 

// помимо описания через alias объекты лписывают еще и через interface
interface MyFirstInterface{
  a: number;
  b: string;
  c: number[];
  readonly d: string; // только чтение, так достигается иммутабильность
  f?: number; // optional type. Помечаем "?" как поле которого может и НЕ быть
  f2: number|undefined // эта запись и предыдущая не эквиваленты, хотя TS и там и там возвращает одинаковый резултат
}
// если создадим объект с присвоенным еу опредениеим типо interface и больше ничего не напишем
// он будет ругаться что нет объявленных полей как в описанном выше интерфейсе
const myObj2: MyFirstInterface = {
  a: 2,
  b: '123',
  c: [1],
  d: 'string',
  f2:undefined // обязательно нужно декларировать при создании обхекта, в отличии от f. Это бывает нужно когда используем Object.keys(myObj2)
}
const valueA=myObj2.a
const valueB=myObj2.b
const valueC=myObj2.c
const valueD = myObj2.e // будет ошибка т.к. свойство "d" не было описано в интерфейсе

//если попытатся присвоить значение для поля которое было описано как только для чтения то будет ошибка
myObj2.d = 'string2';

// если обращаемся к полю которого может и НЕ быть
let valueF
if (myObj2.f) {
  valueF=myObj2.f // будет либо указанный нами тип либо undefined (number|undefined)
}

/* работа со сложными данными, например от API пришел какой-то сложный объект у которо очено много ключей
и я не хочу описывать все эти ключа. Для такой ситуации есть indes signature */
const ApiAnswer = { key: 'asd', key1: 'asd' }
// index signature. Мы как бы сказали
// что нам всё равно к какому ключу обращаемся там есть строка и мы её хотим получить
interface IndexInterface{
  [n: string]
}
// присвоим интерфей объекту
const ApiAnswer2: IndexInterface = { key: 'asd', key1: 'asd' };
// теперь всё равно к какому ключу мы обращаемся, ошибки не будет
const value1=ApiAnswer2.randomkey




/* =============================================== */
/* ================= 3.4 Функции ================= */
/* =============================================== */
/**
 * Ф-я будет получать метод, операнды левый и правый и будет возвращать результат сумму.
 * Когда пишем ф-ии на TTS сначало указываем типы а потом реализацию, так проще.
 * @param method 
 * @param left 
 * @param right 
 */
function calculate(method:string, left:number, right:number):number {
  switch (method) {
    case 'add': return left + right;
  }
}
/* если оставить ф-ю calculate такой как она сейчас то в ней есть ошибка 
в качестве метода она может принимать любую строку и если такой метод мы не описали то она будет
возвращать undefined но она его не вернёт т.к. мы указали возвращаемый тип number и TS
будет ругаться, можно убрать возвращаемый тип number и тогда undefined будет возвращаться 
но это не то что нам нужно
*/
const sum = calculate('qwerty', 2, 2)

/** что бы ф-я отрабатывала так как мы задумали перепишем её так что бы она не могла принимать
 * какие-то иные методы кроме тех что мы задумали
*/
function calculate1(method:'add' | 'sub', left:number, right:number):number {
  switch (method) {
    case 'add': return left + right;
    case 'sub': return left - right;
    }
}

/* если укажем метод которого мы не ожидали то TS будет ругаться на него */
const sum1 = calculate1('qwerty', 2, 2);
// а так правильно
const sum2 = calculate1('add', 2, 2);
// И так правильно
const minus = calculate1('sub', 2, 2);

/** что бы было удобно перечислять допустимые методы в ф-ии есть тим enum */
enum Methods{
  add = 0,
  sub = 1,
}
/** теперь когда перечислили методы в enum, можно переписать ф-ю calculate */
function calculate2(method:Methods, left:number, right:number):number {
  switch (method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
    }
}
/** при вызове ф-ии так же можно воспользоваться enum */
console.log(Methods.add); // 0
console.log(Methods.sub); // 1
const minus2 = calculate2(Methods.sub, 2, 2);

/** можно задать тип ф-ии. Что бы описать тип нужно задать alias 
 * Иногда, когда мы работаем со стрелочными ф-ми, присваиваим их,
 * передаем их как аргумент или типизируем как колбэки то type alias очень удобен
*/
type TypeFn = () => number; // говорим что стрелочная ф-я возвращает Number
const ArrowFn:TypeFn = () => 2; // стрелочная ф-я возвращает Number
const ArrowFn1: TypeFn = () => 'qwerty'; // стрелочная ф-я возвращает string, TS скажет об ошибке

/** так же можно описывать типы и через interface 
 * interface предпачтительней использовать с объектами
 * а alias с предпочтительней ф-ии
*/
interface FnInterface{
  (a: number): void;
}
// присваиваем тип из interface
const numberForArrowFn2 = 1;
const ArrowFn2:FnInterface = (numberForArrowFn2) => 2; // стрелочная ф-я возвращает Number
const ArrowFn3: FnInterface = (numberForArrowFn2: number) => 2; // так уже можно не писать


/** размеремся со странными типа которые вводит TS */
type StrangeTsTypes = any | unknown | never;

/* тип any нет в JS и когда мы используем его в для указания типа мы как бы отключаем типизаци
  использовать any лучше не использовать за исключением редких случаев, например когда есть
  какая-то ф-я которая возвращает не понятный резултат и следовательно тип
*/
const some: any = '';
some.an...  // автокомлит не срабатывает
some.reduce() // позволяет выполнить и не ругается

/** тип unknown, похож на any НО насамом деле это противоположность any. 
 * unknown не подходит не под какой тип 
 * unknown используется что бы маркировать переменные тип которых мы узнаем в дальнейшем,
 * мы как бы говорим что определим тип переменной потом
 * */
const un: unknown = '1';
const result1 = un + 2;// не позволяет выполнить, РУГАЕТСЯ
un.reduce() // не позволяет выполнить, РУГАЕТСЯ

if (typeof un === 'string') {
  un.concat(); // мы узнали тип переменной un и произвели необзодимые действия, TS НЕ РУГАЕТСЯ
}

/** тип never это тип возвращаемого значения ф-ии такой же как и void (которая ничего не возвращает) */
function neverFn():void {
}
const someVal = neverFn() // void

// если сосздадим с never то отличие от void в том что ф-я не может быть завершенной, 
// он не сработает до конца в отличии от void
// очень мало случаев когда нам необходим тип never, по сути его можно не указывать и 
// TS сам может определить её тип
function neverFn1():never {
  throw new Error("my exception");  
}
const someVal1 = neverFn1() // never

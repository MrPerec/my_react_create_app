/* 3.1 Типы, синтаксис, примеры. */
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

/* 3.2 Объединение и пересечение типов */
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

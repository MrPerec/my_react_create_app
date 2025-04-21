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
type StrangeTsTypes1 = any | unknown | never;

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

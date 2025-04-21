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
type StrOrNumber = string | number;

/* создадим такой type alias который содержит в себе основные типы */
type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

/* строку и число мы объявляли ранее, объявим массив */
const tsArray: number[] = [1, 2, 3];
// можно попробовать бобратиться к какоуц-то конкреному элементу массива
// например которого не существует и TS не будет ругаться, ему всё равно
const val = tsArray[100];
// а вот если в массив чисел попробовать записать строку то он ругнется
const tsArray1: number[] = [1, 2, 3, 'str'];
// так же можно использовать форму объявления массива при помощи Generic
const tsArrayGeneric: Array<number> = [1, 2, 3];
// так же можно использовать Union типы
const unionArray: (string | number)[] = [1, 2, 3, 'str'];
// либо использовать generic
const unionArray2: Array<string | number> = [1, 2, 3, 'str'];

/* так же можно использовать Tuple - массив фиксированной велечины
 этот массив говорит что в нем может быть всего 2 элемента и 1й это число а 2й строка */
const myTuple: [number, string] = [1, '2'];
//если попробовать добавить еще элемент в массив он ругнется
const myTuple2: [number, string] = [1, '2', 3];
/* если, как в предыдущем примере c массивом, 
попробовать обратиться к несуществующему элементу массива Tuple то получим ошибку 
т.к. массив фиксированной длины */
const val1 = myTuple[100];

/* так же есть и менее часто встречающиеся типы */
type StrangeTsTypes = any | unknown | never;

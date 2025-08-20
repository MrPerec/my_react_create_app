import React from 'react';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { preventDefault } from '../utils/react/preventDefault';
import { stopPropagation } from '../utils/react/stopPropagation';

function InputExample({ value, onChange }: any) {
  return (
    <input
      value={value}
      // v1
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}

      // v2 перепишем с помощью ф-ии compose. Ф-я comlose выполняет переданные ей ф-ии в том же порядке в котором и передали их
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}

      // v3 так же можно использовать ф-ю pipe. Читает ф-ии справа на лево
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  );
}

// v2
function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U => fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

// v3 читает ф-ии справа на лево
function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

// v4 вспомогательные ф-ии
/**
 * забирает из объекта свойства
 */
function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}
const some = pick('value')({ value: 1 });
/**
 * просто проверяет на равенство
 */
function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

/** Например ситуация удаления item из массива по id, например удаление комментария,
 * создадим для этого константу и отфильтруем комментарий */
const comments = [
  { id: 22, text: 'text One' },
  { id: 44, text: 'text Two' },
];

// const filtred = comments.filter(({ id }) => id === 22);
/** запись выше можно заменить на нашу композицию  */
// const filtred = comments.filter(pipe(pick('id'), isEqual(22)));
/** композицию очень удобно расширять, например когда требуется добавить новый функционал в функцию то вместо
 * того что бы редактировать исходную ф-ю и можно просто её дописать.
 * Есть распространенная ф-я cond, она принимает булевое значение и инвертирует его
 */

function cond(b: boolean) {
  return !b;
}

//v1
// теперь можно дописать ф-ю comments
const filtred = comments.filter(pipe(pick('id'), isEqual(22), cond));
// теперь можно выбрать эту композицию и параметризировать её
// const filtredWithId = (id: number) => comments.filter(pipe(pick('id'), isEqual(id), cond));
// и теперь можно просто вызывать дополненную ф-ю
// const filtredComments = comments.filter(filtredWithId(22));

//v2
const createFilterBy = (props: string) => (id: number) => pipe(pick(props), isEqual(id), cond);
const filtredWithId = createFilterBy('id');
const filtredCommentsById = comments.filter(filtredWithId(22));
// если вдруг нужно фильтровать по другому значению
const filterByValue = createFilterBy('value');
const filtredCommentsByValue = comments.filter(filterByValue(22));

// по этому принципу можно создавать новые фабрики в которых мы можем отфильтровываться по любому значению
const filtredWithId22 = createFilterBy('id')(22);

/** в одном из прошлых утроков мы писали ф-ю "\src\utils\react\pickFromSyntheticEvent.tsx"
 * которой мы получали "getValue" и "getChecked", можно сейчас оптимизировать под композицию и получать
 * то значение которое захотим
 */
const getValueNumber = pipe<number>(pick('currentTarget'), pick('value'), parseInt); /** - проблемы композиций что они плохо типизируются, 
в старом коде "\src\utils\react\pickFromSyntheticEvent.tsx" хорошая типизация*/

/** если мы хотим использовать типизироанные ф-ии pipe или compose
 * то лучше использовать для этого специальные библиотеки типа DefinitelyTyped
 * или Ramdajs */

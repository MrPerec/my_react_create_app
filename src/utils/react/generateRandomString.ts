import { assoc } from '../js/assoc';

// так же есть спец.библиотека генерации nanoid
/** v1 */
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

/** v2 дополним ф-ю */
export const assignId = assoc('id', generateRandomString());

/** v3 в предыдущей версси ф-я генерации вызывается один раз и генерирует id 1 раз и соответвенно присваивает всем items один и тот же id
 * исправим это
 */
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);

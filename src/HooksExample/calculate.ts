/**
 * Ф-я создает массив из кол-ва элементов кторое получает в кач-ве 1го аргумента, заполняет пропусками
 * еденице, после чего каждый эл-т массива умножается на число полученное в кач-е 2го аргумента и возвращается сумма всеъ эл-в.
 * @param item кол-во эл-в в массиве
 * @param multiplier число на которое будет умножено каждое число в массиве
 * @returns number
 */
export function calculate(item: number, multiplier: number) {
  const filledArr = new Array(item).fill(1);
  const result = filledArr.reduce((currentSum, currentNumber) => currentSum * multiplier);

  return result;
}

/**
 * 1. Работа с простыми типами
Напишите тип функции, конкатенирующей две строки

concat('Hello ', 'World') // -> Hello World;
 */

function strConcat(str1: string, str2: string): string {
  return str1.concat(' ', str2);
}

const helloVar: string = `Hello`;
const worldVar: string = `World`;

const concatedString = strConcat(helloVar, worldVar);
console.log(concatedString);

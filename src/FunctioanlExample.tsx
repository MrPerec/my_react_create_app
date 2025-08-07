/**
 *  1. КАРРИРОВАНИЕ
 * */

/* function add(leftSide: number) {
  return (rightSide: number) => leftSide + rightSide;
} */

/** или та же ф-я но в стрелочной ф-ии */
const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(1); // -> 2

/** Карирование позволяет создавать свои ф-ии на основе карированных ф-ий */
const addOne = add(1); // как бы сделали константу для leftSide аргумента
addOne(5); // -> 6

const addSix = add(6);
addSix(5); // -> 11

/** Так же карированные ф-ии это ф-ии высшего порядка
 * пример ф-ии высшего порядка
 */
window.addEventListener('resize', () => console.log('hello')); // принимает коллбэк

/** Пример 1.
 * Как можно использовать карированные ф-ии?
 * Например напишем компонент Feed которые возвращает некоторый jsx
 */
import { React } from 'react';

interface IBlockProps {
  title: string;
  id: string;
}

/**  Компонент Feed отрисовывает список и для каждого элемента назначает некий key.
 * В этом случае можно воспользоваться карированной ф-ей
 */
function Feed(props: { blocks: IBlockProps[] }) {
  // return (
  //   <div>
  //     {props.blocks.map((block: IBlockProps) => (
  //       <Block key={block.id} {...block} />
  //     ))}
  //   </div>
  // );

  /** используем карированную ф-ю для присваивания key
   * withKey помогает разгрузить код, он выглядит компактно, не нужно писать большую JSX партянку,
   * так же это позволяет варьировать ключ
   */
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}

function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

/** Карированная ф-я для присваения Id в key генерируемого компонента.
 * @param {string} key - принимает опциональный ключ (его может и не быть)
 * @return {functoin} возвращает другую ф-ю которая возвращает компонент, при этом предварительно типизируем
 */
function withKey(key?: string) {
  /** типизируем что на вход должен приходить компонент "<E, T extends React.ComponentType<E>>",
   * т.к. это generic то указываем что T - тип это компонент который приходит, а E это props'ы компонента T.
   */
  return <E, T extends React.ComponentType<E>>(component: T) => {
    /** ф-я должна возвращать map с props E и index  */
    (props: E, index: number) => {
      /** тут происходит рендер компонента который описываем React.createElement (это нативный способ создания компонента который получается и JSX)*/
      React.createElement(
        component,
        /** тут делаем проверку, если key передан то берём из prop key (props[key as keyof E] - тут говорим что key это состовляющая из E иначе TS ругается) иначе берём index */
        { ...props, key: key ? props[key as keyof E] : index },
        [],
      );
    };
  };
}

const withIdKey = withKey('id');
/** варьировать ключ, ничего не передаём т.е. по умолчанию будет браться Index элемента в качестве ключа (это плохо так делать не надо) */
const withIndexKey = withKey();

/** Пример 2. Есть 2 ф-ии "Input" и "Checkbox" которые принимаю значения элементов формы
 * есть безымянная ф-ия которая назначена на onChange где нужно работать с e.currentTarget, это можно оптимизировать
 */
/* function Input(props:{onChange:(value:string)=>void, value:string}) {
  return (
    <input value={props.value} onChange={(e)=>props.onChange(e.currentTarget.value)}
  )
} */
function Input({ onChange, value }: { onChange: (value: string) => void; value: string }) {
  return <input value={props.value} onChange={getValue(onChange)} />;
}

/* function Checkbox(props:{onChange:(value:boolean)=>void,value:boolean}) {
  return (
    <input type='checkbox' checked={props.value} onChange={(e)=>props.onChange(e.currentTarget.checked)}
  )
} */
function Checkbox(props: { onChange: (value: boolean) => void; value: boolean }) {
  return <input type='checkbox' checked={props.value} onChange={getChecked(props.onChange)} />;
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => {
    <E extends (t: T[K]) => void>(fn: E) => {
      (e: React.SyntheticEvent<T>) => {
        fn(e.currentTarget[key]);
      };
    };
  };
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

/** Пример 3. */

/** компонент который должен рендерить ссылку. 
Проблема в том что при нажатии на ссылку мы не должны переходить на другую страницу. 
*/
function NotStandardLink(props: any) {
  /** что бы это реализовать обычно пишем такой обработчик клика на ссылку */
  /* const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick();
  } 
    
  return (
    <a onClick={handleClick}>Hello world!</a>
  )
   */

  /** теперь сделаем композицию из preventDefault и stopPropagation */
  return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello world!</a>;
}

/** что бы не писать каждый раз обработчик с e.preventDefault()
можно один раз написать ф-ю которая будет это делать сама */
function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}

/** и точно такая же ф-я только для e.stopPropagation(); */
function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}

/* напишем простой компонент который будет комбинировать все ф-ии которые написали 
  и внутри в onChange теперь ф-я сама делает preventDefault и stopPropagation, возьмёт value 
  и вызовет onChange и передаст в неё.
  Такое комбинирование называется "Композиция"
*/
interface IInputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input({ value, onChange }: IInputProps) {
  return <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />;
}

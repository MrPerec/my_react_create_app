import React from 'react';

interface IItem {
  text: string;
  id: string;
  /** укажем onClick в item v2 */
  // onClick: () => void;

  /** теперь реализуем механизм добавления и удаления item из списка v4 */
  onClick: (id: string) => void;
}

interface IMyListProps {
  list: IItem[];

  /* добавим уникальные handlerCkick для каждого эл-та в списке глобально v1 */
  // onClick: (id: string) => void;
}

/* добавим уникальные handlerCkick для каждого эл-та в списке глобально v1 */
// export function MyList({ list, onClick }: IMyListProps) {
export function MyList({ list }: IMyListProps) {
  const items = list.map((item, index) => {
    /* добавим уникальные handlerCkick для каждого эл-та в списке глобально v1 */
    /* const onClickHandler = () => onClick(item.id);
    return (
      <li key={item.id} onClick={onClickHandler}>
        {item.text}
      </li>
    ); */

    /** укажем onClick в item v2 */
    /* return (
      <li key={item.id} onClick={item.onClick}>
        {item.text}
      </li>
    ); */

    /** теперь реализуем механизм добавления и удаления item из списка v4 */
    const onClickHandler = () => item.onClick(item.id);
    return (
      <li key={item.id} onClick={onClickHandler}>
        {item.text}
      </li>
    );
  });

  return (
    <>
      <h3>Список:</h3>
      <ul>{items}</ul>
    </>
  );
}

/** бонус v5 */
interface IGenericListProps {
  list: {
    text: string;
    id: string;
    onClick: (id: string) => void;
    className?: string;
    /* можем указывать элементы и называть их с заглавной буквы и тогда это будет компонент 
    и для нативных теков можно указывать строковые значения это как если бы мы писали jsx тег <li>some item</li> */
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
  }[];
}

const noop = () => {}; // что бы не делать проверки на существование ф-ии (как бы заглушка)

export function GenericList({ list }: IGenericListProps) {
  const resultList = list.map(({ As = 'div', text, onClick = noop, className, id, href }) => {
    return (
      <As className={className} onClick={() => onClick(id)} key={id} href={href}>
        {text}
      </As>
    );
  });

  return <>{resultList}</>;
}

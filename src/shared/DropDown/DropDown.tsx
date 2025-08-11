import React, { useState, useEffect } from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';

// 1 и 2 и 3 и 4
/* interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function DropDown({ button, children }: IDropdownProps) {
  // сост. отвечает за то открыт список или открыт. Изначально закрыт
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // если состо-е isDropDownOpen true то показываем список
  // кнопка onClick={() => setIsDropDownOpen(false)} что бы при нажатии на элемент списка и сисок закрывался
  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropDownOpen(!isDropDownOpen)}>{button}</div>
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );

  // p.s. большое кол-во div-ов как тут мешает верстки и они убриются и используются useRef, "порталы" но это будет рассматриваться
  // в будущих модулях так что пока тут используем div-ы и стили
} */

// 5
interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean; // что бы компонент был управляемым
  onOpen?: () => void; // callback для управления компонентом
  onClose?: () => void; // callback для управления компонентом
}

export function DropDown({ button, children, isOpen, onOpen = noop, onClose = noop }: IDropdownProps) {
  // теперь начальное значение приходит из родителя
  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);

  // добавили useEffect что бы в DevTools во вкладке Components можно было
  // менять false на true и сост-е компонента могло изменяться на лету
  // таким образом меняем не только начальное состояние но и текущее
  useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);

  // активируем callback
  useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [isDropDownOpen]);

  // что бы можно было управлять компонентом заведём собственный handler, он будет хэндлить открытие списка
  const handleOpen = () => {
    if (isOpen === undefined) setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

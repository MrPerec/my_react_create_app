import React, { useState, useEffect } from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean; // для управления компонентом
  onOpen?: () => void; // callback для управления компонентом
  onClose?: () => void; // callback для управления компонентом
}

export function DropDown({ button, children, isOpen, onOpen = noop, onClose = noop }: IDropdownProps) {
  // v1
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // v2
  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);
  /* добавили useEffect что бы в DevTools во вкладке Components можно было менять false на true
    и сост-е компонента могло изменяться на лету */
  useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  // активируем callback
  useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [isDropDownOpen]);
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  // v1
  // const dropDownBtn = <div onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>{button}</div>;
  // v2
  const dropDownBtn = <div onClick={handleOpen}>{button}</div>;

  let dropDownElem;

  if (isDropDownOpen) {
    dropDownElem = (
      <div className={styles.listContainer}>
        <div
          className={styles.list}
          onClick={() => {
            setIsDropDownOpen(false);
          }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {dropDownBtn}
      {dropDownElem}
    </div>
  );
}

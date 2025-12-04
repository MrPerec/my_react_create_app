import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function DropDown(props: IDropdownProps) {
  const { button, children, isOpen, onOpen = noop, onClose = noop } = props;
  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpen);

  useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [isDropDownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropDownOpen(!isDropDownOpen);
    } else {
      if (isDropDownOpen) onClose();
      if (!isDropDownOpen) onOpen();
    }
  };

  return (
    <>
      <div onClick={handleOpen}>{button}</div>
      {isDropDownOpen && (
        <div className={styles.dropdownContainer} onClick={() => setIsDropDownOpen(false)}>
          {children}
        </div>
      )}
    </>
  );

  /* const modalNode = document.querySelector('#modal_root');
  if (!modalNode) return null;

  let dropdownListElem;
  if (isDropDownOpen) {
    dropdownListElem = createPortal(
      <div className={styles.listContainer}>
        <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
          {children}
        </div>
      </div>,
      modalNode,
    );
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {dropdownListElem}
    </div>
  ); */
}

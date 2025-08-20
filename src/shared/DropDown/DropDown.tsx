import React, { useState, useEffect } from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function DropDown({ button, children, isOpen, onOpen = noop, onClose = noop }: IDropdownProps) {
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

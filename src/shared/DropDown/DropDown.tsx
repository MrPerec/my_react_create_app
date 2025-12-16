import React, { useState, useEffect, useRef } from 'react';
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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropDownOpen ? onOpen() : onClose()), [isDropDownOpen]);

  const handleOpen = () => {
    if (buttonRef?.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }

    if (isOpen === undefined) {
      setIsDropDownOpen(!isDropDownOpen);
    } else {
      if (isDropDownOpen) onClose();
      if (!isDropDownOpen) onOpen();
    }
  };

  /** без portal предпочтительней */
  /* return (
    <>
      <div onClick={handleOpen}>{button}</div>
      {isDropDownOpen && (
        <div className={styles.dropdownContainer} onClick={() => setIsDropDownOpen(false)}>
          {children}
        </div>
      )}
    </>
  ); */

  /* with portal */
  const modalNode = document.querySelector('#modal_root');
  if (!modalNode) return null;

  return (
    <>
      <div ref={buttonRef} onClick={handleOpen}>
        {button}
      </div>
      {isDropDownOpen &&
        createPortal(
          <div
            className={styles.dropdownContainer}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            onClick={() => setIsDropDownOpen(false)}>
            {children}
          </div>,
          modalNode,
        )}
    </>
  );
}

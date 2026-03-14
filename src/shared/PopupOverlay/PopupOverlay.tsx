import React from 'react';
import styles from './popupoverlay.css';

type IPopupOverlayProps = {
  children?: React.ReactNode;
};

export function PopupOverlay({ children }: IPopupOverlayProps) {
  return (
    <>
      <div className={styles.popupOverlay}></div>
      {children}
    </>
  );
}

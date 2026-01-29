import React from 'react';
import styles from './button.css';

type TButton = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClickCallback?: () => void;
};

export function Button({ text, type = 'button', onClickCallback }: TButton) {
  return (
    <button className={styles.button} type={type} onClick={onClickCallback}>
      {text}
    </button>
  );
}

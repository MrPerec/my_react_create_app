import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export interface ITitleProps {
  link: string;
  title: string;
}

export function Title({ link, title }: ITitleProps) {
  /** создадим state для модяльного окна */
  const [isModelOpen, setIsModelOpen] = useState(false);
  // в Post передаем ф-ю закрытия модального окна onClose
  let modalElem = isModelOpen && <Post onClose={() => setIsModelOpen(false)} />;

  return (
    <h2 className={styles.title}>
      <a
        className={styles.postLink}
        href={link}
        target='_blank'
        onClick={() => {
          /** при нажатии на title будем менять state */
          setIsModelOpen(true);
        }}>
        {title}
      </a>
      {modalElem}
    </h2>
  );
}

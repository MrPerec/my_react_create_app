import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export interface ITitleProps {
  link: string;
  title: string;
}

export function Title({ link, title }: ITitleProps) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  let modalElem = isModelOpen && <Post onClose={() => setIsModelOpen(false)} />;

  return (
    <h2 className={styles.title}>
      <a
        className={styles.postLink}
        href={link}
        target='_blank'
        onClick={() => setIsModelOpen(true)}>
        {title}
      </a>
      {modalElem}
    </h2>
  );
}

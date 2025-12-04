import React, { useRef, useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export interface ITitleProps {
  link: string;
  title: string;
}

export function Title({ link, title }: ITitleProps) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <h2 className={styles.title} ref={titleRef} onClick={() => setIsModelOpen(true)}>
        {/* <a
          className={styles.postLink}
          href={link}
          target='_blank'
          onClick={() => setIsModelOpen(true)}>
          {title}
        </a> */}
        {title}
      </h2>
      {isModelOpen && <Post titleRef={titleRef} onClose={() => setIsModelOpen(false)} />}
    </>
  );
}

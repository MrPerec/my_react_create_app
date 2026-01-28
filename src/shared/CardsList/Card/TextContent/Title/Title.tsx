import React, { useEffect, useRef, useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';
import { Link } from 'react-router-dom';

export interface ITitleProps {
  link: string;
  title: string;
}

/* export function Title({ link, title }: ITitleProps) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <h2 className={styles.title} ref={titleRef} onClick={() => setIsModelOpen(true)}>
        {title}
      </h2>
      {isModelOpen && <Post titleRef={titleRef} onClose={() => setIsModelOpen(false)} />}
    </>
  );
} */

export function Title({ link, title }: ITitleProps) {
  // убираем состояние, заменим его роутом
  // const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      {/* вместо <a></a> и {title} будем использовать "Link". Вместо "href" используем "to" с уканаимем URI, onClick убрали т.к. Link из роута сам сделат переключение */}
      <Link to={`/posts/1`}>{title}</Link>
    </h2>
    //   <Post /> перенесём в <App />
    //   {isModelOpen && <Post titleRef={titleRef} onClose={() => setIsModelOpen(false)} />}
  );
}

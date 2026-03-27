import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { postRequestAsync } from '../../../../../actions/postAction';
import styles from './title.css';

export interface ITitleProps {
  title: string;
  link: string;
  postId: string;
}

export function Title({ title, link, postId }: ITitleProps) {
  const dispatch = useDispatch();

  const titleClassSyles = link ? styles.titleLong : styles.titleShort;

  let titleElem = (
    <Link
      to={`/posts/${postId}}`}
      onClick={() => dispatch(postRequestAsync(postId))}
    >
      {title}
    </Link>
  );

  if (link) {
    titleElem = (
      <a className={styles.postLink} href={link} target="_blank">
        {title}
      </a>
    );
  }

  return <h2 className={titleClassSyles}>{titleElem}</h2>;
}

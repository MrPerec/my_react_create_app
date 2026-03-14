import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';
import { postRequestAsync } from '../../../../../actions/postAction';
import { useDispatch } from 'react-redux';

export interface ITitleProps {
  title: string;
  link: string;
  postId: string;
}

export function Title({ title, link, postId }: ITitleProps) {
  const dispatch = useDispatch();

  let titleElem = (
    <Link to={`/posts/${postId}}`} onClick={() => dispatch(postRequestAsync(postId))}>
      {title}
    </Link>
  );

  if (link) {
    titleElem = (
      <a className={styles.postLink} href={link} target='_blank'>
        {title}
      </a>
    );
  }

  return <h2 className={styles.title}>{titleElem}</h2>;
}
